#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const lecturesDir = path.join(rootDir, 'lectures')
const docsDir = path.join(rootDir, 'docs')

// CLI argument parsing
const args = process.argv.slice(2)
const getArg = (flag) => {
  const idx = args.indexOf(flag)
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : null
}
const hasFlag = (flag) => args.includes(flag)

const customBase = getArg('--base') || process.env.BASE_URL || '/Open-Science-Course-lectures/'
// Ensure leading and trailing slash for base
const normalizedBase = '/' + customBase.replace(/^\/|\/$/g, '') + '/'
const skipPdf = hasFlag('--skip-pdf')
const pdfOnly = hasFlag('--pdf-only')
const targetLecture = getArg('--lecture')

console.log(`\n📚 Open Science Course — Multi-Lecture Builder`)
console.log(`Base URL: ${normalizedBase}`)
console.log(`Output:   ${docsDir}`)
if (skipPdf) console.log(`PDFs:     Skipped (--skip-pdf)`)
if (pdfOnly) console.log(`Mode:     PDF-only export (--pdf-only)`)

// Discover lectures
if (!fs.existsSync(lecturesDir)) {
  console.error(`Lectures directory not found at: ${lecturesDir}`)
  process.exit(1)
}

const entries = fs.readdirSync(lecturesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .sort()

const lectures = []

for (const dirName of entries) {
  if (targetLecture && dirName !== targetLecture) continue

  const slidesPath = path.join(lecturesDir, dirName, 'slides.md')
  if (!fs.existsSync(slidesPath)) continue

  const fileContent = fs.readFileSync(slidesPath, 'utf-8')
  const { data: frontmatter } = matter(fileContent)

  // Extract a readable lecture title and description
  const title = frontmatter.title || dirName.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  const description = frontmatter.info ? frontmatter.info.replace(/^##\s+.*\n/, '').trim() : ''
  const theme = frontmatter.theme || 'default'

  lectures.push({
    slug: dirName,
    dirPath: path.join(lecturesDir, dirName),
    slidesPath,
    title,
    description,
    theme,
    date: frontmatter.date || '',
    author: frontmatter.author || 'Michal Torma',
  })
}

console.log(`\nFound ${lectures.length} lecture(s) to process:\n${lectures.map(l => `  • [${l.slug}] ${l.title}`).join('\n')}\n`)

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true })
}

// GitHub Pages needs .nojekyll so asset folders are served properly
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '')

for (const lecture of lectures) {
  const lectureOutDir = path.join(docsDir, lecture.slug)
  const lectureBase = `${normalizedBase}${lecture.slug}/`

  console.log(`\n────────────────────────────────────────────────────────`)
  console.log(`🚀 Processing Lecture: ${lecture.slug}`)
  console.log(`   Base: ${lectureBase}`)
  console.log(`   Out:  ${lectureOutDir}`)

  if (!pdfOnly) {
    console.log(`\n🔨 Building SPA presentation...`)
    const buildCmd = `npx slidev build "${lecture.slidesPath}" --out "${lectureOutDir}" --base "${lectureBase}" --router-mode hash --download`
    execSync(buildCmd, { stdio: 'inherit', cwd: rootDir })
  }

  if (!skipPdf) {
    console.log(`\n📄 Exporting vector PDF...`)
    const pdfPath = path.join(lectureOutDir, 'slides.pdf')
    if (!fs.existsSync(lectureOutDir)) {
      fs.mkdirSync(lectureOutDir, { recursive: true })
    }
    const exportCmd = `npx slidev export "${lecture.slidesPath}" --output "${pdfPath}"`
    execSync(exportCmd, { stdio: 'inherit', cwd: rootDir })
  }
}

// Generate the Course Landing Page in docs/index.html
console.log(`\n✨ Generating Course Portal landing page in ${path.join(docsDir, 'index.html')}...`)

const landingHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Open Science Course — Lectures & Materials</title>
  <meta name="description" content="Interactive lecture slides, materials, and resources for the Open Science Course.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #090d16;
      --card-bg: rgba(18, 24, 38, 0.7);
      --card-border: rgba(56, 189, 248, 0.15);
      --card-hover-border: rgba(56, 189, 248, 0.4);
      --text-main: #f1f5f9;
      --text-muted: #94a3b8;
      --accent: #38bdf8;
      --accent-glow: rgba(56, 189, 248, 0.25);
      --sky: #38bdf8;
      --amber: #fbbf24;
      --purple: #c084fc;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: var(--bg);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow-x: hidden;
      line-height: 1.6;
    }

    /* Ambient background gradient glow */
    body::before {
      content: '';
      position: fixed;
      top: -20%;
      left: 20%;
      width: 60vw;
      height: 60vw;
      background: radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.04) 40%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    header {
      position: relative;
      z-index: 1;
      padding: 4rem 1.5rem 3rem;
      text-align: center;
      max-width: 900px;
      margin: 0 auto;
    }

    .badge-bar {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 0.9rem;
      background: rgba(56, 189, 248, 0.08);
      border: 1px solid rgba(56, 189, 248, 0.2);
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--accent);
      margin-bottom: 1.5rem;
      letter-spacing: 0.02em;
    }

    .badge-pulse {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 8px var(--accent);
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.4rem, 5vw, 3.8rem);
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: 1.25rem;
      background: linear-gradient(135deg, #ffffff 30%, #cbd5e1 70%, var(--accent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      font-size: 1.15rem;
      color: var(--text-muted);
      max-width: 650px;
      margin: 0 auto 2rem;
      font-weight: 400;
    }

    .header-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .meta-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.85rem;
      color: var(--text-muted);
      text-decoration: none;
      padding: 0.4rem 0.9rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      transition: all 0.2s ease;
    }

    .meta-link:hover {
      color: var(--text-main);
      background: rgba(255, 255, 255, 0.07);
      border-color: rgba(255, 255, 255, 0.2);
    }

    main {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      width: 100%;
      margin: 0 auto;
      padding: 1rem 1.5rem 5rem;
      flex: 1;
    }

    .section-title {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .section-title::after {
      content: '';
      flex: 1;
      height: 1px;
      background: rgba(255, 255, 255, 0.08);
    }

    .lecture-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 1.75rem;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }

    .card:hover {
      transform: translateY(-4px);
      border-color: var(--card-hover-border);
      box-shadow: 0 16px 36px -12px var(--accent-glow);
    }

    .card-top {
      margin-bottom: 1.5rem;
    }

    .card-lecture-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
      display: inline-block;
    }

    .card-title {
      font-size: 1.35rem;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 0.75rem;
      color: #fff;
    }

    .card-desc {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .card-actions {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin-top: 1rem;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      font-weight: 600;
      padding: 0.65rem 1rem;
      border-radius: 10px;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .btn-primary {
      background: linear-gradient(135deg, #0284c7, #0369a1);
      color: white;
      box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
      border: 1px solid rgba(56, 189, 248, 0.4);
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, #0369a1, #075985);
      box-shadow: 0 6px 18px rgba(2, 132, 199, 0.45);
      transform: scale(1.01);
    }

    .btn-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.6rem;
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.04);
      color: var(--text-main);
      border: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 0.78rem;
      padding: 0.5rem 0.6rem;
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.09);
      border-color: rgba(255, 255, 255, 0.2);
    }

    footer {
      position: relative;
      z-index: 1;
      text-align: center;
      padding: 3rem 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    footer a {
      color: var(--accent);
      text-decoration: none;
    }

    footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <header>
    <div class="badge-bar">
      <span class="badge-pulse"></span>
      Interactive Open Science Course
    </div>
    <h1>Open Science Course</h1>
    <p class="subtitle">
      Lecture slides as code, interactive widgets, reproducibility demonstrations, and downloadable handouts.
    </p>

    <div class="header-links">
      <a href="https://github.com/MichalTorma/Open-Science-Course-lectures" class="meta-link" target="_blank" rel="noopener">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        GitHub Repository
      </a>
      <span class="meta-link">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path><path d="M9.17 9.17a4 4 0 1 1 0 5.66"></path></svg>
        CC-BY 4.0 Open License
      </span>
      <span class="meta-link">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
        Slidev + Playwright
      </span>
    </div>
  </header>

  <main>
    <div class="section-title">Course Lectures</div>

    <div class="lecture-grid">
${lectures.map((l, idx) => {
  const lectureNum = String(idx + 1).padStart(2, '0')
  return `      <article class="card">
        <div class="card-top">
          <span class="card-lecture-num">Lecture ${lectureNum}</span>
          <h2 class="card-title">${l.title}</h2>
          <p class="card-desc">${l.description || 'Interactive slides and materials for this lecture.'}</p>
        </div>

        <div class="card-actions">
          <a href="./${l.slug}/" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Interactive Presentation
          </a>
          <div class="btn-row">
            <a href="./${l.slug}/presenter/" class="btn btn-secondary" title="Presenter View with notes and timer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              Presenter
            </a>
            <a href="./${l.slug}/slides.pdf" class="btn btn-secondary" download="${l.slug}-slides.pdf" title="Download Printable PDF">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              PDF Export
            </a>
          </div>
        </div>
      </article>`
}).join('\n')}
    </div>
  </main>

  <footer>
    <p>Open Science Course Lectures · Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">Creative Commons Attribution 4.0 International (CC-BY 4.0)</a></p>
  </footer>

</body>
</html>
`

fs.writeFileSync(path.join(docsDir, 'index.html'), landingHtml, 'utf-8')
console.log(`\n🎉 All done! Course materials built successfully to docs/\n`)

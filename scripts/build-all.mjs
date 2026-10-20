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

const lectureTagsMap = {
  '01-darwin-core-publishing-ipt': [
    'Darwin Core Standard',
    'Star Schema & Extensions',
    'EMoF Multi-Taxa',
    'GBIF IPT Workflow',
    'Data Citation & DOIs'
  ],
  '02-using-ai-in-data-publishing': [
    'Silicon to Scientific Code',
    'Semantic Distance Graph',
    'The Trust Onion',
    'Next-Token Prediction',
    'Tool Grounding & AI Exercise'
  ]
}

const lectureThemesMap = {
  '01-darwin-core-publishing-ipt': {
    category: 'Biodiversity Standards & Publishing',
    gradient: 'from-emerald-400 via-teal-400 to-sky-400',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    btnGradient: 'linear-gradient(135deg, #059669, #0d9488)',
    btnHoverGradient: 'linear-gradient(135deg, #047857, #0f766e)'
  },
  '02-using-ai-in-data-publishing': {
    category: 'Computational Science & Practical AI',
    gradient: 'from-indigo-400 via-purple-400 to-cyan-400',
    badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
    glowColor: 'rgba(139, 92, 246, 0.25)',
    btnGradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    btnHoverGradient: 'linear-gradient(135deg, #4338ca, #6d28d9)'
  }
}

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

  // Estimate slide count from markdown slide separators
  const slideCount = fileContent.split(/\n---\s*\n/).length

  const tags = frontmatter.tags || lectureTagsMap[dirName] || ['Open Science', 'Interactive Slides']
  const styling = lectureThemesMap[dirName] || {
    category: 'Course Lecture',
    badgeColor: 'border-sky-500/30 bg-sky-500/10 text-sky-300',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    btnGradient: 'linear-gradient(135deg, #0284c7, #0369a1)',
    btnHoverGradient: 'linear-gradient(135deg, #0369a1, #075985)'
  }

  lectures.push({
    slug: dirName,
    dirPath: path.join(lecturesDir, dirName),
    slidesPath,
    title,
    description,
    theme,
    slideCount,
    tags,
    styling,
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

  // Ensure slides.pdf exists (fallback to slidev-exported.pdf generated by --download)
  const pdfPath = path.join(lectureOutDir, 'slides.pdf')
  const defaultPdfPath = path.join(lectureOutDir, 'slidev-exported.pdf')
  if (!fs.existsSync(pdfPath) && fs.existsSync(defaultPdfPath)) {
    fs.copyFileSync(defaultPdfPath, pdfPath)
  }
}

// Generate the Course Landing Page in docs/index.html
console.log(`\n✨ Generating Course Portal landing page in ${path.join(docsDir, 'index.html')}...`)

const landingHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Open Science Course — Interactive Presentations & Materials</title>
  <meta name="description" content="Interactive lecture slides, tools, and reproducible demonstrations for the Open Science Course: Darwin Core & IPT Publishing, plus Practical AI in Data Publishing.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #070a13;
      --card-bg: rgba(15, 23, 42, 0.72);
      --card-border: rgba(148, 163, 184, 0.12);
      --card-hover-border: rgba(56, 189, 248, 0.45);
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      --accent: #38bdf8;
      --accent-glow: rgba(56, 189, 248, 0.22);
      --emerald-glow: rgba(16, 185, 129, 0.22);
      --purple-glow: rgba(139, 92, 246, 0.22);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: var(--bg);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow-x: hidden;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* Ambient atmospheric glow */
    .ambient-glow-1 {
      position: fixed;
      top: -15%;
      left: 10%;
      width: 55vw;
      height: 55vw;
      background: radial-gradient(circle, rgba(14, 165, 233, 0.09) 0%, rgba(99, 102, 241, 0.04) 45%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .ambient-glow-2 {
      position: fixed;
      bottom: -10%;
      right: 5%;
      width: 45vw;
      height: 45vw;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.07) 0%, rgba(16, 185, 129, 0.03) 50%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    header {
      position: relative;
      z-index: 1;
      padding: 4.5rem 1.5rem 2.5rem;
      text-align: center;
      max-width: 960px;
      margin: 0 auto;
    }

    .badge-bar {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.4rem 1.1rem;
      background: rgba(56, 189, 248, 0.07);
      border: 1px solid rgba(56, 189, 248, 0.22);
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--accent);
      margin-bottom: 1.75rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    .badge-pulse {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #38bdf8;
      box-shadow: 0 0 10px #38bdf8;
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.85); }
    }

    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: clamp(2.4rem, 5.5vw, 4rem);
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: 1.25rem;
      letter-spacing: -0.01em;
      background: linear-gradient(135deg, #ffffff 25%, #cbd5e1 65%, #38bdf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      font-size: 1.15rem;
      color: var(--text-muted);
      max-width: 720px;
      margin: 0 auto 2.2rem;
      font-weight: 400;
      line-height: 1.65;
    }

    .header-links {
      display: flex;
      justify-content: center;
      gap: 0.85rem;
      flex-wrap: wrap;
    }

    .meta-link {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.82rem;
      font-weight: 500;
      color: var(--text-muted);
      text-decoration: none;
      padding: 0.45rem 1rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.09);
      border-radius: 9999px;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .meta-link:hover {
      color: var(--text-main);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.22);
      transform: translateY(-1px);
    }

    main {
      position: relative;
      z-index: 1;
      max-width: 1160px;
      width: 100%;
      margin: 0 auto;
      padding: 1.5rem 1.5rem 4rem;
      flex: 1;
    }

    .section-title {
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--text-dim);
      margin-bottom: 2rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.85rem;
    }

    .section-title::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.12), transparent);
    }

    .lecture-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      gap: 2rem;
      margin-bottom: 3.5rem;
    }

    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 2.25rem 2rem 1.75rem;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }

    .card-1::before {
      background: linear-gradient(90deg, #10b981, #06b6d4, #38bdf8);
    }

    .card-2::before {
      background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
    }

    .card:hover {
      transform: translateY(-5px);
      border-color: rgba(148, 163, 184, 0.3);
    }

    .card-1:hover {
      box-shadow: 0 20px 40px -15px var(--emerald-glow), 0 0 20px -5px rgba(6, 182, 212, 0.15);
    }

    .card-2:hover {
      box-shadow: 0 20px 40px -15px var(--purple-glow), 0 0 20px -5px rgba(99, 102, 241, 0.15);
    }

    .card-header-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .card-lecture-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.76rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 0.28rem 0.75rem;
      border-radius: 6px;
      border: 1px solid;
    }

    .card-slide-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.74rem;
      color: var(--text-dim);
      background: rgba(255, 255, 255, 0.04);
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    .card-category {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-dim);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 0.5rem;
    }

    .card-title {
      font-size: 1.45rem;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 0.9rem;
      color: #fff;
      letter-spacing: -0.01em;
    }

    .card-desc {
      font-size: 0.92rem;
      color: var(--text-muted);
      line-height: 1.55;
      margin-bottom: 1.5rem;
    }

    .card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-bottom: 1.75rem;
    }

    .tag-pill {
      font-size: 0.74rem;
      font-weight: 500;
      color: #cbd5e1;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 0.25rem 0.65rem;
      border-radius: 9999px;
      transition: border-color 0.2s ease;
    }

    .card:hover .tag-pill {
      border-color: rgba(255, 255, 255, 0.15);
    }

    .card-actions {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.55rem;
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0.75rem 1.25rem;
      border-radius: 12px;
      text-decoration: none;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
    }

    .btn-primary {
      color: white;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
      position: relative;
      overflow: hidden;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);
    }

    .btn-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.65rem;
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.04);
      color: var(--text-muted);
      border: 1px solid rgba(255, 255, 255, 0.09);
      font-size: 0.8rem;
      font-weight: 500;
      padding: 0.55rem 0.8rem;
      border-radius: 10px;
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.09);
      border-color: rgba(255, 255, 255, 0.22);
      color: var(--text-main);
      transform: translateY(-1px);
    }

    /* Shortcuts panel */
    .shortcuts-panel {
      background: rgba(15, 23, 42, 0.45);
      border: 1px solid rgba(148, 163, 184, 0.1);
      border-radius: 16px;
      padding: 1.5rem 1.75rem;
      margin-top: 1rem;
    }

    .shortcuts-title {
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .shortcuts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0.85rem;
    }

    .shortcut-item {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      font-size: 0.82rem;
      color: var(--text-muted);
    }

    .kbd {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      font-weight: 600;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.08);
      border: 1px solid rgba(56, 189, 248, 0.25);
      padding: 0.18rem 0.45rem;
      border-radius: 5px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    footer {
      position: relative;
      z-index: 1;
      text-align: center;
      padding: 3rem 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      color: var(--text-dim);
      font-size: 0.85rem;
    }

    footer a {
      color: var(--accent);
      text-decoration: none;
      transition: color 0.15s ease;
    }

    footer a:hover {
      color: #7dd3fc;
      text-decoration: underline;
    }

    @media (max-width: 640px) {
      .lecture-grid {
        grid-template-columns: 1fr;
      }
      .card {
        padding: 1.75rem 1.25rem 1.25rem;
      }
      .btn-row {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <div class="ambient-glow-1"></div>
  <div class="ambient-glow-2"></div>

  <header>
    <div class="badge-bar">
      <span class="badge-pulse"></span>
      Interactive Open Science Course
    </div>
    <h1>Open Science Course</h1>
    <p class="subtitle">
      Slide decks as code, interactive widgets, reproducibility demonstrations, and downloadable handouts.
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
        Slidev + Vue 3
      </span>
    </div>
  </header>

  <main>
    <div class="section-title">Course Lectures</div>

    <div class="lecture-grid">
${lectures.map((l, idx) => {
  const lectureNum = String(idx + 1).padStart(2, '0')
  const cardClass = `card card-${idx + 1}`
  const styling = l.styling || {}
  const btnStyle = styling.btnGradient ? `style="background: ${styling.btnGradient};"` : ''

  return `      <article class="${cardClass}">
        <div>
          <div class="card-header-meta">
            <span class="card-lecture-num ${styling.badgeColor || ''}">Lecture ${lectureNum}</span>
            <span class="card-slide-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              ${l.slideCount} Slides
            </span>
          </div>

          <div class="card-category">${styling.category || 'Open Science'}</div>
          <h2 class="card-title">${l.title}</h2>
          <p class="card-desc">${l.description || 'Interactive slides and materials for this lecture.'}</p>

          <div class="card-tags">
            ${l.tags.map(t => `<span class="tag-pill">${t}</span>`).join('\n            ')}
          </div>
        </div>

        <div class="card-actions">
          <a href="./${l.slug}/" class="btn btn-primary" ${btnStyle}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Launch Interactive Presentation
          </a>
          <div class="btn-row">
            <a href="./${l.slug}/presenter/" class="btn btn-secondary" title="Presenter View with speaker notes, timer, and next slide preview">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              Presenter View
            </a>
            <a href="./${l.slug}/slides.pdf" class="btn btn-secondary" download="${l.slug}-slides.pdf" title="Download Printable PDF Handout">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              PDF Export
            </a>
          </div>
        </div>
      </article>`
}).join('\n')}
    </div>

    <!-- Quick Presentation Navigation Cheatsheet -->
    <div class="shortcuts-panel">
      <div class="shortcuts-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        Presentation Keyboard Controls & Features
      </div>
      <div class="shortcuts-grid">
        <div class="shortcut-item">
          <span class="kbd">Space</span> / <span class="kbd">→</span>
          <span>Next step / slide</span>
        </div>
        <div class="shortcut-item">
          <span class="kbd">←</span>
          <span>Previous slide</span>
        </div>
        <div class="shortcut-item">
          <span class="kbd">P</span>
          <span>Presenter Mode</span>
        </div>
        <div class="shortcut-item">
          <span class="kbd">O</span>
          <span>Slide Grid Overview</span>
        </div>
        <div class="shortcut-item">
          <span class="kbd">D</span>
          <span>Drawing / Pen Tool</span>
        </div>
        <div class="shortcut-item">
          <span class="kbd">F</span>
          <span>Toggle Fullscreen</span>
        </div>
      </div>
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

#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const lecturesDir = path.join(rootDir, 'lectures')

const rawName = process.argv[2]
if (!rawName) {
  console.log(`Usage: npm run new-lecture <name>`)
  console.log(`Example: npm run new-lecture 03-open-peer-review`)
  process.exit(1)
}

const slug = rawName.toLowerCase().replace(/[^a-z0-9_-]/g, '-')
const targetDir = path.join(lecturesDir, slug)

if (fs.existsSync(targetDir)) {
  console.error(`Error: Lecture directory "${slug}" already exists!`)
  process.exit(1)
}

fs.mkdirSync(path.join(targetDir, 'components'), { recursive: true })

const readableTitle = slug
  .replace(/^\d+-/, '')
  .replace(/-/g, ' ')
  .replace(/\b\w/g, c => c.toUpperCase())

const template = `---
theme: seriph
background: https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
title: "${readableTitle}"
info: |
  ## Open Science Course: ${readableTitle}
  Lecture slides and materials.
fonts:
  sans: 'Inter'
  serif: 'Playfair Display'
  mono: 'Fira Code'
---

# ${readableTitle}

Subtitle or focus for this lecture

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-6 py-3 rounded-full cursor-pointer bg-sky-600 hover:bg-sky-500 text-white font-medium shadow-lg transition duration-200 ease-in-out">
    Start Presentation <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-bottom-margin mb-8 text-sm opacity-60">
  Michal Torma · Open Science Course · 2026
</div>

---
layout: default
---

# Introduction to ${readableTitle}

Add your slide content here:

<v-clicks>

- Key concept 1
- Key concept 2
- Real-world case study or practical exercise

</v-clicks>

---
layout: center
class: text-center
---

# Summary & Discussion

Lecture materials licensed under CC-BY 4.0.
`

fs.writeFileSync(path.join(targetDir, 'slides.md'), template, 'utf-8')

const globalBottomSrc = path.join(rootDir, 'global-bottom.vue')
if (fs.existsSync(globalBottomSrc)) {
  fs.copyFileSync(globalBottomSrc, path.join(targetDir, 'global-bottom.vue'))
}

console.log(`✅ Created new lecture at: lectures/${slug}/slides.md`)
console.log(`To start developing this lecture:`)
console.log(`  npx slidev lectures/${slug}/slides.md --open`)

# Open Science Course — Interactive Lectures

Modern, interactive, presentation-as-code slides for the **Open Science Course**, powered by [Slidev](https://sli.dev/) and Playwright.

Each lecture is authored in Markdown with full support for interactive Vue components, KaTeX mathematical formulas, Shiki syntax highlighting, presenter mode, and automated PDF exports.

The repository compiles all lectures into the [`docs/`](file:///Users/amarok/src/Open-Science-Course-lectures/docs) folder for direct deployment on **GitHub Pages**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Live Interactive Preview (Dev Mode)
To launch the hot-reloading presentation server for a lecture:
```bash
# Preview Lecture 01
npm run dev:01

# Preview Lecture 02
npm run dev:02

# Or any specific slides.md
npx slidev lectures/01-open-science-intro/slides.md --open
```

* **Next Slide:** Space / Right Arrow
* **Presenter View:** Press `P` or navigate to `http://localhost:3030/presenter/`
* **Drawing / Chalkboard:** Press `D` to annotate on slides live during class
* **Overview:** Press `O` to see slide grid

---

## 📦 Building for GitHub Pages

To build all lectures and generate vector PDFs into [`docs/`](file:///Users/amarok/src/Open-Science-Course-lectures/docs):

```bash
# Full build: compiles SPA presentations, exports PDFs, and generates the Course Portal landing page
npm run build

# Quick build (skips PDF generation for fast previews)
npm run build:quick

# PDF export only
npm run export:pdf
```

### GitHub Pages Setup
1. Go to your repository on GitHub: **Settings** → **Pages**.
2. Under **Build and deployment**:
   * **Source**: `Deploy from a branch`
   * **Branch**: `main`
   * **Folder**: `/docs`
3. Save. Your lectures and landing page will be live at:
   `https://<username>.github.io/Open-Science-Course-lectures/`

---

## ➕ Creating a New Lecture

Use the scaffolding script to create a new lecture in seconds:

```bash
npm run new-lecture 03-open-peer-review
```

This creates:
* `lectures/03-open-peer-review/slides.md` (pre-configured with theme, font pairings, and layout)
* `lectures/03-open-peer-review/components/` (for lecture-specific interactive Vue widgets)

---

## 📂 Repository Structure

```
.
├── docs/                             # GitHub Pages publish directory
│   ├── index.html                    # Visual course portal landing page
│   ├── .nojekyll                     # Ensures assets are served by GitHub Pages
│   ├── 01-darwin-core-publishing-ipt/# Built SPA & vector PDF for Lecture 01
│   │   ├── index.html
│   │   └── slides.pdf
│   └── 02-using-ai-in-data-publishing/# Built SPA & vector PDF for Lecture 02
│       ├── index.html
│       └── slides.pdf
│
├── lectures/                         # Source presentations
│   ├── 01-darwin-core-publishing-ipt/
│   │   ├── slides.md                 # Slidev Markdown content
│   │   └── components/               # Custom interactive Vue components
│   └── 02-using-ai-in-data-publishing/
│       ├── slides.md
│       └── components/
│
├── components/                       # Shared Vue components across all lectures
├── scripts/
│   ├── build-all.mjs                 # Orchestration script (builds all decks + PDFs + portal)
│   └── new-lecture.mjs               # Scaffolder for new lectures
└── package.json
```

---

## 🎨 Interactive Slidev Features Available

* **Custom Components**: Drop any `.vue` file into [`components/`](file:///Users/amarok/src/Open-Science-Course-lectures/components) or `lectures/<id>/components/` and use it directly inside `slides.md` (like `<FairExplorer />`).
* **Math Formulas**: LaTeX equations using `$E = mc^2$` or `$$...$$` with KaTeX.
* **Diagrams**: Native Mermaid diagrams:
  ````markdown
  ```mermaid
  graph LR
    Data --> Code --> Paper --> Zenodo
  ```
  ````
* **Code Highlighting & Monocle**: Shiki syntax highlighting with line-number animations and twoslash type inspection.
* **Click Animations**: Use `<v-click>` or `<v-clicks>` to step through bullet points or diagram stages.

---

## 📄 License

All presentation materials and course content are licensed under the **[Creative Commons Attribution 4.0 International (CC-BY 4.0)](https://creativecommons.org/licenses/by/4.0/)** license.

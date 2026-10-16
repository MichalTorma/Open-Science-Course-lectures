---
theme: seriph
background: https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1920&auto=format&fit=crop
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
title: Open Data & Computational Reproducibility
info: |
  ## Open Science Course: Lecture 02
  Open Data repositories, licensing, containerization, and reproducible workflows.
fonts:
  sans: 'Inter'
  serif: 'Playfair Display'
  mono: 'Fira Code'
---

# Open Data & Computational Reproducibility

From "Available Upon Request" to Executable Science

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-6 py-3 rounded-full cursor-pointer bg-sky-600 hover:bg-sky-500 text-white font-medium shadow-lg transition duration-200 ease-in-out">
    Explore Lecture <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-bottom-margin mb-8 text-sm opacity-60">
  Michal Torma · Open Science Course · 2026
</div>

---
layout: default
---

# The Computational Reproducibility Stack

How do we ensure computational results run 10 years from now?

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
  <div class="text-2xl mb-2">📁</div>
  <h3 class="text-sky-400 font-semibold mb-2">1. Data & Metadata</h3>
  <ul class="text-xs text-slate-300 space-y-1">
    <li>• Raw untransformed data</li>
    <li>• Tidy tabular formats (CSV, Parquet)</li>
    <li>• Data dictionary & schema</li>
    <li>• Zenodo / Dryad persistent DOIs</li>
  </ul>
</div>

<div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
  <div class="text-2xl mb-2">📜</div>
  <h3 class="text-sky-400 font-semibold mb-2">2. Code & Automation</h3>
  <ul class="text-xs text-slate-300 space-y-1">
    <li>• Git version control</li>
    <li>• Modular analysis scripts</li>
    <li>• Literate notebooks (Jupyter/Quarto)</li>
    <li>• Pipeline engines (Nextflow, Snakemake)</li>
  </ul>
</div>

<div class="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
  <div class="text-2xl mb-2">📦</div>
  <h3 class="text-amber-400 font-semibold mb-2">3. Environment</h3>
  <ul class="text-xs text-slate-300 space-y-1">
    <li>• Lockfiles (pip freeze, conda-lock)</li>
    <li>• OCI / Docker containers</li>
    <li>• Binderhub / Singularity execution</li>
    <li>• Hardware & OS documentation</li>
  </ul>
</div>

</div>

---
layout: default
---

# Licensing: Don't Leave It Unspecified

Without an explicit license, standard copyright laws apply ("all rights reserved"), preventing reuse.

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-xl bg-slate-900 border border-slate-700">
  <h3 class="text-lg font-bold text-sky-400 mb-2">For Datasets & Content</h3>
  <ul class="text-sm space-y-3 text-slate-300">
    <li><strong class="text-white">CC0 (Public Domain):</strong> Maximum reusability; relinquishes all copyright claim.</li>
    <li><strong class="text-white">CC-BY 4.0:</strong> Free sharing and adaptation, provided original attribution is given.</li>
    <li><strong class="text-amber-400">Avoid CC-BY-NC:</strong> Non-Commercial clauses often inadvertently prevent legitimate academic and cross-institutional reuse.</li>
  </ul>
</div>

<div class="p-5 rounded-xl bg-slate-900 border border-slate-700">
  <h3 class="text-lg font-bold text-sky-400 mb-2">For Research Software</h3>
  <ul class="text-sm space-y-3 text-slate-300">
    <li><strong class="text-white">MIT / BSD:</strong> Highly permissive; encourages broad community adoption.</li>
    <li><strong class="text-white">Apache 2.0:</strong> Permissive with explicit patent protection grants.</li>
    <li><strong class="text-purple-400">GPL v3:</strong> Strong copyleft; forces derivative software to remain open source.</li>
  </ul>
</div>

</div>

---
layout: center
class: text-center
---

# Reproducibility Checklist

<div class="max-w-md mx-auto text-left p-6 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-xl">
  <div class="text-sm space-y-2 text-slate-300">
    <div>✅ Code in public git repository with tag matching paper</div>
    <div>✅ Data archived with immutable DOI on Zenodo</div>
    <div>✅ Explicit open licenses for both code and data</div>
    <div>✅ Environment specification (Dockerfile / conda-lock)</div>
    <div>✅ One-click reproducibility script (e.g. <code>make run</code>)</div>
  </div>
</div>

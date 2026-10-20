---
theme: seriph
background: https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
title: "Using AI in Data Publishing + AI Exercise"
info: |
  ## Open Science Course: Lecture 02
  Using AI in Data Publishing + AI Exercise: computational science foundations, the abstraction ladder, and hands-on dataset standardization.
fonts:
  sans: 'Inter'
  serif: 'Playfair Display'
  mono: 'Fira Code'
---

# Using AI in Data Publishing

<p class="text-xl text-sky-400 font-semibold mt-2">
  From Unstructured Spreadsheets to Standardized GBIF Datasets + Hands-On AI Exercise
</p>

<div class="pt-8">
  <span @click="$slidev.nav.next" class="px-6 py-3 rounded-full cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg transition duration-200 ease-in-out">
    Start Presentation <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-bottom-margin mb-8 text-sm opacity-60">
  Michal Torma · Open Science Course · 2026
</div>

---
layout: default
---

# Computational Science in a Nutshell

Modern science is fundamentally computational. Translating empirical observations into digital evidence requires navigating **layers of computational abstraction**:

<div class="grid grid-cols-2 gap-4 mt-3">

  <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 shadow-md flex flex-col justify-between">
    <div>
      <div class="text-sm font-bold text-sky-400 flex items-center gap-2 mb-1.5">
        <span>⚡</span> The Physical Reality (Silicon)
      </div>
      <p class="text-xs text-slate-300 leading-relaxed">
        Computers do not understand species, coordinates, or biodiversity. At the physical layer, CPUs execute <strong>binary voltage states</strong> (<code class="text-rose-300 font-mono">0</code> and <code class="text-emerald-300 font-mono">1</code>) switching billions of microscopic transistors every second.
      </p>
    </div>
    <div class="mt-2.5 pt-2 border-t border-slate-800 text-[10.5px] font-mono text-slate-400">
      Machine Code · Hardware Opcodes · Registers
    </div>
  </div>

  <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 shadow-md flex flex-col justify-between">
    <div>
      <div class="text-sm font-bold text-emerald-400 flex items-center gap-2 mb-1.5">
        <span>🧠</span> The Scientific Reality (Mind)
      </div>
      <p class="text-xs text-slate-300 leading-relaxed">
        Scientists think in <strong>domain semantics</strong>: <em>"A specimen of Betula pubescens was collected at 60.1°N with 95% sequencing confidence."</em> Expressing this requires translating natural concepts into symbols.
      </p>
    </div>
    <div class="mt-2.5 pt-2 border-t border-slate-800 text-[10.5px] font-mono text-slate-400">
      Hypotheses · Taxa · Geospatial Polygons · Provenance
    </div>
  </div>

</div>

<div class="mt-3.5 p-3 rounded-xl bg-slate-900/90 border border-purple-500/40 shadow-sm flex items-center justify-between">
  <div class="flex items-center gap-3">
    <span class="text-2xl">🪜</span>
    <div>
      <div class="text-xs font-bold text-purple-300">The Hierarchy of Languages: A Stepping Stone of Abstractions</div>
      <div class="text-[11px] text-slate-300 mt-0.5">
        To bridge silicon and science, computer scientists built progressive tiers of languages — from <strong>Bytecode</strong> to <strong>Assembly</strong>, <strong>C/Rust</strong>, and <strong>Python/R</strong>.
      </div>
    </div>
  </div>
</div>

---
layout: default
---

# Level 0 · Machine Code & Bytecode

<span class="text-xs text-slate-300 block -mt-2 mb-3">
  The only language physical hardware actually executes: raw binary opcodes and electrical voltage states.
</span>

<Level0Bytecode />

---
layout: default
---

# Level 1 · Assembly Language (ASM)

<span class="text-xs text-slate-300 block -mt-2 mb-3">
  The first step up: replacing raw binary bytes with human-readable symbolic mnemonics.
</span>

<Level1Assembly />

---
layout: default
---

# Level 2 · Systems Programming (C & Rust)

<span class="text-xs text-slate-300 block -mt-2 mb-3">
  Structured programming, manual memory layouts, and compiling down to native binaries.
</span>

<Level2Systems />

---
layout: default
---

# Level 3 · Scientific Computing in R

<span class="text-xs text-slate-300 block -mt-2 mb-3">
  Automated memory, domain objects (DataFrames/tibbles), and expressiveness tailored to data analysis.
</span>

<Level3Scientific />

---
layout: full
background: '#020617'
class: p-4 h-full w-full bg-slate-950 text-white overflow-hidden flex flex-col justify-between
---

<SemanticDistanceGraph />

---
layout: full
background: '#020617'
class: p-4 h-full w-full bg-slate-950 text-white overflow-hidden flex flex-col justify-between
---

<TrustOnion />

---
layout: full
background: '#020617'
class: p-4 h-full w-full bg-slate-950 text-white overflow-hidden flex flex-col justify-between
---

<LlmBasicsNextToken />

---
layout: full
background: '#020617'
class: p-4 h-full w-full bg-slate-950 text-white overflow-hidden flex flex-col justify-between
---

<TamingTheBeastGrounding />

---
layout: full
background: '#020617'
class: p-4 h-full w-full bg-slate-950 text-white overflow-hidden flex flex-col justify-between
---

<ToolsToolsTools />



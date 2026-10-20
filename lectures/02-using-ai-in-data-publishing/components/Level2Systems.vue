<template>
  <LanguageLevelSlide
    icon="🦀"
    titleColorClass="text-sky-400"
    borderClass="border-sky-500/30"
    codeBorderClass="border-sky-500/40"
    pillClass="bg-sky-950/40 border-sky-600/40 text-sky-200"
    conceptTitle="Structured Hardware Control"
    conceptDescription="Systems languages introduce <strong>functions, structured types (<code class='text-sky-300 font-mono'>struct</code>), and loops</strong>. They provide deterministic control over memory allocation and CPU cache alignment while compiling directly to native machine code."
    :bulletPoints="bulletPoints"
    codeHeaderLeft="RUST / C STRUCT"
    codeHeaderRight="Memory Layout"
    :codeHtml="codeHtml"
    semanticDistance="Medium (Structured, but hardware-bound)"
  />
</template>

<script setup>
const bulletPoints = [
  {
    icon: '📍',
    title: 'Explicit Pointers & Memory',
    text: 'Scientists must manually manage heap memory allocations (malloc/free in C, strict borrow lifetimes in Rust).'
  },
  {
    icon: '🚀',
    title: 'Maximum Computational Speed',
    text: 'Powers the high-performance engines under our scientific tools (BLAST aligners, GIS engines, matrix backends).'
  }
]

const codeHtml = `
<div class="text-sky-400"><span class="text-purple-400">struct</span> Occurrence {</div>
<div class="pl-3 text-slate-200">id: <span class="text-sky-300">u64</span>,</div>
<div class="pl-3 text-slate-200">lat: <span class="text-sky-300">f64</span>,</div>
<div class="pl-3 text-slate-200">lon: <span class="text-sky-300">f64</span>,</div>
<div class="pl-3 text-slate-200">taxon_id: <span class="text-sky-300">u32</span>,</div>
<div>}</div>
<div class="mt-2 text-slate-500 text-[10px]">// Exactly 24 bytes in memory</div>
`
</script>

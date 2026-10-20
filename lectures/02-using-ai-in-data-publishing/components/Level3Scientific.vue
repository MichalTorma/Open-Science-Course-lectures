<template>
  <LanguageLevelSlide
    icon="📊"
    titleColorClass="text-emerald-400"
    borderClass="border-emerald-500/30"
    codeBorderClass="border-emerald-500/40"
    conceptTitle="Expressing Scientific Logic in R"
    conceptDescription="High-level languages like <strong>R</strong> manage memory automatically via garbage collection. Instead of writing byte pointers and managing registers, scientists manipulate <strong>DataFrames, tibbles, vectors, and domain models</strong>."
    :bulletPoints="bulletPoints"
    codeHeaderLeft="R / TIDYVERSE"
    codeHeaderRight="DataFrames & Pipes"
    :codeHtml="codeHtml"
    semanticDistance="Low (Speaks in tabular domain objects)"
  />
</template>

<script setup>
const bulletPoints = [
  {
    icon: '📋',
    title: 'Domain-First Data Structures',
    text: 'DataFrames and tibbles directly mirror how biodiversity researchers organize field observations and experimental spreadsheets.'
  },
  {
    icon: '📦',
    title: 'Rich Open Science Ecosystem',
    text: 'Deep ecosystem of specialized R packages (tidyverse, rgbif, sf, vegan) for geospatial mapping, Darwin Core validation, and modeling.'
  }
]

const codeHtml = `
<div class="text-slate-500"># Clean & summarize occurrences</div>
<div>clean_occ <span class="text-emerald-400">&lt;-</span> occurrences <span class="text-sky-300">%&gt;%</span></div>
<div class="pl-3"><span class="text-sky-300">filter</span>(!<span class="text-yellow-300">is.na</span>(decimalLatitude)) <span class="text-sky-300">%&gt;%</span></div>
<div class="pl-3"><span class="text-sky-300">filter</span>(year <span class="text-emerald-400">&gt;=</span> <span class="text-purple-300">2000</span>) <span class="text-sky-300">%&gt;%</span></div>
<div class="pl-3"><span class="text-sky-300">group_by</span>(scientificName) <span class="text-sky-300">%&gt;%</span></div>
<div class="pl-3"><span class="text-sky-300">summarise</span>(</div>
<div class="pl-6">n_obs <span class="text-emerald-400">=</span> <span class="text-yellow-300">n</span>(),</div>
<div class="pl-6">min_lat <span class="text-emerald-400">=</span> <span class="text-yellow-300">min</span>(decimalLatitude)</div>
<div class="pl-3">)</div>
`
</script>

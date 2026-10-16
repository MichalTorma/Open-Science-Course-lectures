<template>
  <LanguageLevelSlide
    icon="🐍"
    titleColorClass="text-emerald-400"
    borderClass="border-emerald-500/30"
    codeBorderClass="border-emerald-500/40"
    pillClass="bg-emerald-950/40 border-emerald-600/40 text-emerald-200"
    conceptTitle="Expressing Scientific Logic"
    conceptDescription="High-level scientific languages manage memory automatically via garbage collection. Instead of writing byte pointers, scientists manipulate <strong>DataFrames, vectors, and rich domain objects</strong>."
    :bulletPoints="bulletPoints"
    codeHeaderLeft="PYTHON / PANDAS"
    codeHeaderRight="Scientific Objects"
    :codeHtml="codeHtml"
    semanticDistance="Low (Speaks in tabular scientific objects)"
  />
</template>

<script setup>
const bulletPoints = [
  {
    icon: '📊',
    title: 'Domain-First Data Structures',
    text: 'DataFrames (pandas, tidyverse, polars) mirror how researchers naturally organize experimental spreadsheets.'
  },
  {
    icon: '📦',
    title: 'Rich Open Science Ecosystem',
    text: 'Thousands of specialized libraries for geospatial analysis (sf), biodiversity querying (rgbif), and statistical modeling.'
  }
]

const codeHtml = `
<div class="text-emerald-400 font-bold"># Clean & filter occurrences</div>
<div>clean_df = (</div>
<div class="pl-3">df.dropna(subset=[<span class="text-amber-300">'decimalLatitude'</span>])</div>
<div class="pl-5">.query(<span class="text-amber-300">'year >= 2000'</span>)</div>
<div class="pl-5">.groupby(<span class="text-amber-300">'scientificName'</span>)</div>
<div class="pl-5">.count()</div>
<div>)</div>
`
</script>

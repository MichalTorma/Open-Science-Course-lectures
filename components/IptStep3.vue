<template>
  <IptStepSlide
    imageSrc="/images/ipt-step3-metadata.png"
    caption="IPT Metadata Status: Validated EML document ready for publication"
    title="IPT Resource Metadata"
    :cards="cards"
  />
</template>

<script setup>
const cards = [
  {
    icon: '📋',
    title: 'Comprehensive EML Profile',
    borderClass: 'border-purple-500/40',
    titleClass: 'text-purple-400',
    text: 'Fills out dataset title, abstract, creators, contacts, geographic bounding boxes, taxonomic scope, and temporal ranges.'
  },
  {
    icon: '✅',
    title: 'Real-Time Validation Pill',
    borderClass: 'border-emerald-500/40',
    titleClass: 'text-emerald-400',
    text: 'The green <span class="px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-600/50 font-semibold font-mono text-[10px]">Valid</span> badge confirms all mandatory GBIF and DataCite citation fields are complete.'
  },
  {
    icon: '⚖️',
    title: 'Machine-Readable Licensing',
    borderClass: 'border-sky-500/40',
    titleClass: 'text-sky-400',
    text: 'Select standard open licenses (<strong>CC0 1.0, CC-BY 4.0, or CC-BY-NC 4.0</strong>) to legally govern reuse and citation credit.'
  }
]
</script>

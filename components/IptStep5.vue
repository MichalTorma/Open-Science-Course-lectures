<template>
  <IptStepSlide
    imageSrc="/images/ipt-step5-publication.png"
    caption="Version Control: Live version 1.457 vs. scheduled daily publication 1.458"
    title="IPT Publication & Versioning"
    :cards="cards"
  />
</template>

<script setup>
const cards = [
  {
    icon: '⏱️',
    title: 'Automated Re-publishing',
    borderClass: 'border-emerald-500/40',
    titleClass: 'text-emerald-400',
    text: 'As shown here (<span class="text-emerald-300 font-mono text-[10px]">Enabled: Daily</span>), databases update records automatically every day without human intervention!'
  },
  {
    icon: '🏷️',
    title: 'Semantic Versioning & DOIs',
    borderClass: 'border-purple-500/40',
    titleClass: 'text-purple-400',
    text: 'Each major release receives an immutable version tag (<code class="text-purple-300 font-mono">1.457 ➔ 1.458</code>) and DOI tracking, keeping scientific citations fully reproducible.'
  },
  {
    icon: '📦',
    title: 'Instant Package Generation',
    borderClass: 'border-sky-500/40',
    titleClass: 'text-sky-400',
    text: 'Compiles the ZIP archive containing <code class="text-sky-300 font-mono">meta.xml</code>, <code class="text-sky-300 font-mono">eml.xml</code>, and standardized DwC tables for GBIF harvester crawling.'
  }
]
</script>

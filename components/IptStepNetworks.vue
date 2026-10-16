<template>
  <IptStepSlide
    imageSrc="/images/ipt-step-networks.png"
    caption="GBIF Networks: Grouping datasets into collaborative thematic umbrellas"
    title="IPT Thematic Networks"
    :cards="cards"
  />
</template>

<script setup>
const cards = [
  {
    icon: '🌐',
    title: 'Thematic Aggregation',
    borderClass: 'border-cyan-500/40',
    titleClass: 'text-cyan-400',
    text: 'Allows associating the resource with specialized networks like <strong>OBIS</strong> (marine), <strong>VertNet</strong> (vertebrates), or national monitoring programs.'
  },
  {
    icon: '📊',
    title: 'Cross-Dataset Portals',
    borderClass: 'border-sky-500/40',
    titleClass: 'text-sky-400',
    text: 'Enables custom filtering and unified analytics across multi-institutional consortia publishing through different IPTs.'
  },
  {
    icon: '💡',
    title: 'Optional Participation',
    borderClass: 'border-slate-700',
    titleClass: 'text-slate-200',
    text: 'Resources remain fully published and indexed in GBIF even if no specific secondary network is assigned.'
  }
]
</script>

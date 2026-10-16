<template>
  <IptStepSlide
    imageSrc="/images/ipt-step-registration.png"
    caption="GBIF Registration: Linked UUID key under Norwegian Environment Agency"
    title="IPT GBIF Registration"
    :cards="cards"
  />
</template>

<script setup>
const cards = [
  {
    icon: '🏛️',
    title: 'Publishing Organization',
    borderClass: 'border-emerald-500/40',
    titleClass: 'text-emerald-400',
    text: 'Links the dataset to an endorsed publisher (e.g. <em>Norwegian Environment Agency</em>) approved by a GBIF Participant Node.'
  },
  {
    icon: '🔑',
    title: 'GBIF Dataset UUID',
    borderClass: 'border-sky-500/40',
    titleClass: 'text-sky-400',
    text: 'Assigns an immutable global UUID (<code class="text-sky-300 font-mono text-[9px]">56fb17ca-adb2...</code>) in the global GBIF Registry.'
  },
  {
    icon: '🤖',
    title: 'Automated Harvester Hook',
    borderClass: 'border-purple-500/40',
    titleClass: 'text-purple-400',
    text: 'Tells the central GBIF crawler where to retrieve updates whenever a new version is published in this IPT.'
  }
]
</script>

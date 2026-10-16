<template>
  <IptStepSlide
    imageSrc="/images/ipt-step2-dwc-mappings.png"
    caption="Core & Extension Mappings: Mapping 38 Darwin Core terms"
    title="IPT Darwin Core Mappings"
    :cards="cards"
  />
</template>

<script setup>
const cards = [
  {
    icon: '🎯',
    title: 'Core vs. Extension Selection',
    borderClass: 'border-sky-500/40',
    titleClass: 'text-sky-400',
    text: 'Designate your main table (e.g. <strong>Darwin Core Occurrence</strong> or <strong>Event</strong>), and attach any number of registered extensions.'
  },
  {
    icon: '🪄',
    title: 'Smart Auto-Mapping',
    borderClass: 'border-emerald-500/40',
    titleClass: 'text-emerald-400',
    text: 'The IPT inspects column names and automatically matches standard terms (e.g. <code class="text-emerald-300 font-mono">lat</code> ➔ <code class="text-emerald-300 font-mono">decimalLatitude</code>).'
  },
  {
    icon: '🔍',
    title: 'Value Translation & Vocabularies',
    borderClass: 'border-amber-500/40',
    titleClass: 'text-amber-400',
    text: 'Map internal codes (e.g., <code class="text-amber-300 font-mono">OBS</code>) to controlled TDWG vocabularies (<code class="text-amber-300 font-mono">HumanObservation</code>) directly in the UI.'
  }
]
</script>

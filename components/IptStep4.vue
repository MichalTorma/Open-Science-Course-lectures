<template>
  <IptStepSlide
    imageSrc="/images/ipt-step4-visibility.png"
    caption="Public Resource: Registered with GBIF and discoverable worldwide"
    title="IPT Visibility & Registration"
    :cards="cards"
  />
</template>

<script setup>
const cards = [
  {
    icon: '🔒',
    title: 'Private (Draft Mode)',
    borderClass: 'border-slate-700',
    titleClass: 'text-slate-200',
    text: 'Accessible only to authenticated resource managers. Ideal for internal verification, data cleaning, and co-author review.'
  },
  {
    icon: '🔓',
    title: 'Public (Direct Link)',
    borderClass: 'border-sky-500/40',
    titleClass: 'text-sky-400',
    text: 'Anyone with the IPT resource URL can download the generated DwC-A archive and read metadata, but not yet indexed on GBIF.org.'
  },
  {
    icon: '🌐',
    title: 'Registered (GBIF Network)',
    borderClass: 'border-emerald-500/40',
    titleClass: 'text-emerald-400',
    text: 'Endorsed by a <strong>Participant Node</strong> and registered in the GBIF Registry. Automatically indexed and citable worldwide.'
  }
]
</script>

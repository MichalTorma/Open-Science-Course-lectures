<template>
  <IptStepSlide
    imageSrc="/images/ipt-step1-source-data.png"
    caption="IPT Source Data Interface: File or SQL database table connection"
    title="IPT Source Data"
    :cards="cards"
  />
</template>

<script setup>
const cards = [
  {
    icon: '📁',
    title: 'Supported Formats',
    borderClass: 'border-emerald-500/40',
    titleClass: 'text-emerald-400',
    text: 'Delimited text files (<strong>CSV, TSV</strong>), Microsoft Excel spreadsheets, or direct live <strong>SQL database connections</strong> (PostgreSQL, MySQL, Oracle).'
  },
  {
    icon: '⚡',
    title: 'Scalability',
    borderClass: 'border-sky-500/40',
    titleClass: 'text-sky-400',
    text: 'Handles small field survey lists up to millions of rows (as seen here with <strong>337 MB / 76,882 rows</strong> in an occurrence source).'
  },
  {
    icon: '🔒',
    title: 'Preserves Original Data',
    borderClass: 'border-slate-700',
    titleClass: 'text-slate-200',
    text: 'Your original column headers and internal IDs remain untouched — mapping to Darwin Core happens in the next step.'
  }
]
</script>

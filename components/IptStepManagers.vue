<template>
  <IptStepSlide
    imageSrc="/images/ipt-step-managers.png"
    caption="Resource Managers: Role-based access control and collaborative curation"
    title="IPT Resource Managers"
    :cards="cards"
  />
</template>

<script setup>
const cards = [
  {
    icon: '👥',
    title: 'Collaborative Governance',
    borderClass: 'border-amber-500/40',
    titleClass: 'text-amber-400',
    text: 'Allows primary authors and data curators (e.g. <em>Endre Grüner Ofstad</em> and <em>Kjetil Pettersson</em>) to co-manage the dataset.'
  },
  {
    icon: '🔐',
    title: 'Role-Based Access Control',
    borderClass: 'border-sky-500/40',
    titleClass: 'text-sky-400',
    text: 'Differentiates between <strong>Resource Creator</strong>, <strong>Manager</strong> (editing mappings/metadata), and institutional <strong>Admins</strong>.'
  },
  {
    icon: '🏢',
    title: 'Institutional Continuity',
    borderClass: 'border-emerald-500/40',
    titleClass: 'text-emerald-400',
    text: 'Prevents orphaned datasets when individual researchers move institutions — multiple curators ensure long-term maintenance.'
  }
]
</script>

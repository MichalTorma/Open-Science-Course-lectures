<script setup lang="ts">
import { ref } from 'vue'

interface Principle {
  letter: string
  name: string
  color: string
  borderColor: string
  bgActive: string
  summary: string
  criteria: string[]
}

const principles: Principle[] = [
  {
    letter: 'F',
    name: 'Findable',
    color: 'text-blue-400',
    borderColor: 'border-blue-500',
    bgActive: 'bg-blue-950/60',
    summary: 'Metadata and data should be easy to find for both humans and computers.',
    criteria: [
      '(Meta)data are assigned a globally unique and persistent identifier (e.g. DOI).',
      'Data are described with rich, machine-readable metadata.',
      'Metadata clearly and explicitly include the identifier of the data they describe.',
      '(Meta)data are indexed or searchable in a public repository (e.g. Zenodo, Dryad).'
    ]
  },
  {
    letter: 'A',
    name: 'Accessible',
    color: 'text-sky-400',
    borderColor: 'border-sky-500',
    bgActive: 'bg-slate-900',
    summary: 'Once found, users must know how data can be accessed, including authentication/authorization.',
    criteria: [
      '(Meta)data are retrievable by their identifier using a standardized communications protocol (e.g. HTTPS).',
      'The protocol is open, free, and universally implementable.',
      'Metadata remain accessible even when the primary data is no longer directly available.'
    ]
  },
  {
    letter: 'I',
    name: 'Interoperable',
    color: 'text-amber-400',
    borderColor: 'border-amber-500',
    bgActive: 'bg-amber-950/60',
    summary: 'Data needs to integrate seamlessly with other data, applications, and workflows.',
    criteria: [
      '(Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.',
      '(Meta)data use vocabularies and ontologies that follow FAIR principles.',
      '(Meta)data include qualified references to other related (meta)data.'
    ]
  },
  {
    letter: 'R',
    name: 'Reusable',
    color: 'text-purple-400',
    borderColor: 'border-purple-500',
    bgActive: 'bg-purple-950/60',
    summary: 'The ultimate goal of FAIR: optimize data reuse by providing rich provenance and clear licensing.',
    criteria: [
      '(Meta)data are richly described with a plurality of accurate and relevant attributes.',
      '(Meta)data are released with a clear and accessible data usage license (e.g. CC0, CC-BY).',
      '(Meta)data are associated with detailed provenance (how it was collected and processed).',
      '(Meta)data meet domain-relevant community standards.'
    ]
  }
]

const activeIndex = ref(0)
</script>

<template>
  <div class="fair-card my-2 p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 shadow-2xl backdrop-blur-md">
    <!-- Pillar Buttons -->
    <div class="grid grid-cols-4 gap-3 mb-4">
      <button
        v-for="(p, idx) in principles"
        :key="p.letter"
        @click="activeIndex = idx"
        class="flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-sm font-semibold transition-all duration-200 cursor-pointer text-left border"
        :class="[
          activeIndex === idx
            ? `${p.bgActive} ${p.borderColor} text-white shadow-md scale-102`
            : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
        ]"
      >
        <span class="text-xl font-black" :class="p.color">{{ p.letter }}</span>
        <span>{{ p.name }}</span>
      </button>
    </div>

    <!-- Active Details Panel -->
    <div
      v-if="principles[activeIndex]"
      class="p-4 rounded-lg border bg-slate-950/50 transition-all duration-300"
      :class="principles[activeIndex].borderColor"
    >
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-lg font-bold flex items-center gap-2">
          <span :class="principles[activeIndex].color">
            {{ principles[activeIndex].letter }} — {{ principles[activeIndex].name }}
          </span>
        </h4>
        <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
          FAIR Principle #{{ activeIndex + 1 }}
        </span>
      </div>

      <p class="text-xs text-slate-300 italic mb-3">
        "{{ principles[activeIndex].summary }}"
      </p>

      <ul class="space-y-1.5 text-xs text-slate-200">
        <li
          v-for="(item, cIdx) in principles[activeIndex].criteria"
          :key="cIdx"
          class="flex items-start gap-2"
        >
          <span :class="principles[activeIndex].color" class="font-bold">✓</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.fair-card {
  font-family: inherit;
}
</style>

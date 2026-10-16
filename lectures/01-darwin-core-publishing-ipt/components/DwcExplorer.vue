<script setup lang="ts">
import { ref, computed } from 'vue'

type StatusType = 'mandatory' | 'strongly-recommended' | 'recommended'

interface Term {
  term: string
  dwcClass: string
  status: StatusType
  statusLabel: string
  definition: string
  example: string
  gbifRole: string
}

interface DatasetClassView {
  id: string
  title: string
  subtitle: string
  coreType: string
  badgeColor: string
  bgColor: string
  borderColor: string
  textColor: string
  description: string
  terms: Term[]
}

const datasetClasses: DatasetClassView[] = [
  {
    id: 'occurrence',
    title: 'Occurrence Datasets',
    subtitle: 'Core: dwc:Occurrence',
    coreType: 'Occurrence Core',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    bgColor: 'bg-slate-900',
    borderColor: 'border-sky-500/50',
    textColor: 'text-sky-400',
    description: 'Evidence of the presence, abundance, or absence of a biological organism at a specific location and date.',
    terms: [
      {
        term: 'occurrenceID',
        dwcClass: 'Occurrence',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'Globally unique, persistent identifier for the occurrence record.',
        example: 'urn:uuid:8b3e8e2b-2e92-498c-851c-a1288c8eb25a',
        gbifRole: 'Primary key; GBIF indexing fails without it'
      },
      {
        term: 'basisOfRecord',
        dwcClass: 'Occurrence',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'Controlled vocabulary denoting the specific nature of the record.',
        example: 'HumanObservation, PreservedSpecimen, MaterialSample',
        gbifRole: 'Required controlled vocabulary for filtering'
      },
      {
        term: 'scientificName',
        dwcClass: 'Taxon',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'Full scientific name (genus, species, authority if known).',
        example: 'Bombus terrestris (Linnaeus, 1758)',
        gbifRole: 'Parsed and matched against GBIF Taxonomic Backbone'
      },
      {
        term: 'eventDate',
        dwcClass: 'Event',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'The date, time, or interval when observation occurred (ISO 8601).',
        example: '2024-06-12T10:15:00Z (or YYYY-MM-DD)',
        gbifRole: 'Powers temporal distribution filters and phenology'
      },
      {
        term: 'decimalLatitude',
        dwcClass: 'Location',
        status: 'strongly-recommended',
        statusLabel: 'Strongly Recommended',
        definition: 'Geographic latitude in decimal degrees.',
        example: '50.0755',
        gbifRole: 'Enables spatial map rendering on GBIF'
      },
      {
        term: 'decimalLongitude',
        dwcClass: 'Location',
        status: 'strongly-recommended',
        statusLabel: 'Strongly Recommended',
        definition: 'Geographic longitude in decimal degrees.',
        example: '14.4378',
        gbifRole: 'Enables spatial map rendering on GBIF'
      },
      {
        term: 'geodeticDatum',
        dwcClass: 'Location',
        status: 'strongly-recommended',
        statusLabel: 'Strongly Recommended',
        definition: 'Coordinate reference ellipsoid/datum (e.g. WGS84).',
        example: 'WGS84, EPSG:4326',
        gbifRole: 'Ensures spatial accuracy and datum transformation'
      },
      {
        term: 'coordinateUncertaintyInMeters',
        dwcClass: 'Location',
        status: 'strongly-recommended',
        statusLabel: 'Strongly Recommended',
        definition: 'Horizontal distance in meters describing spatial accuracy.',
        example: '25',
        gbifRole: 'Critical for climate modeling & spatial filtering'
      },
      {
        term: 'countryCode',
        dwcClass: 'Location',
        status: 'strongly-recommended',
        statusLabel: 'Strongly Recommended',
        definition: 'Two-letter country code (ISO 3166-1 alpha-2).',
        example: 'CZ, NO, DE, US',
        gbifRole: 'National portal filtering and country attribution'
      },
      {
        term: 'individualCount',
        dwcClass: 'Occurrence',
        status: 'recommended',
        statusLabel: 'Recommended',
        definition: 'Number of observed or collected individuals.',
        example: '3',
        gbifRole: 'Quantitative population metrics'
      },
      {
        term: 'license',
        dwcClass: 'Record-level',
        status: 'mandatory',
        statusLabel: 'Mandatory (Dataset level)',
        definition: 'Machine-readable open copyright license (CC0, CC-BY, CC-BY-NC).',
        example: 'http://creativecommons.org/licenses/by/4.0/',
        gbifRole: 'Legal prerequisite for publication on GBIF'
      }
    ]
  },
  {
    id: 'sampling-event',
    title: 'Sampling-Event Datasets',
    subtitle: 'Core: dwc:Event + Extension: dwc:Occurrence',
    coreType: 'Event Core + Occurrence Extension',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    bgColor: 'bg-sky-950/40',
    borderColor: 'border-sky-500/50',
    textColor: 'text-sky-400',
    description: 'Structured monitoring, ecological transects, or surveys documenting standardized sampling protocols and true absences.',
    terms: [
      {
        term: 'eventID',
        dwcClass: 'Event (Core)',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'Unique identifier for the sampling survey / session.',
        example: 'TRANSECT_B_2024_05_12',
        gbifRole: 'Foreign key joining Event core to Occurrence extension'
      },
      {
        term: 'eventDate',
        dwcClass: 'Event (Core)',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'The date-time interval during which sampling occurred.',
        example: '2024-05-12T08:00:00Z/2024-05-12T12:00:00Z',
        gbifRole: 'Defines the sampling effort time window'
      },
      {
        term: 'samplingProtocol',
        dwcClass: 'Event (Core)',
        status: 'strongly-recommended',
        statusLabel: 'Strongly Recommended',
        definition: 'Detailed standard protocol or equipment methodology used.',
        example: 'Malaise trap 48hr, 100m Pollard transect',
        gbifRole: 'Enables comparative ecological time-series analysis'
      },
      {
        term: 'sampleSizeValue',
        dwcClass: 'Event (Core)',
        status: 'strongly-recommended',
        statusLabel: 'Strongly Recommended',
        definition: 'Numeric value for the measurement of sampling effort.',
        example: '100',
        gbifRole: 'Effort standardization'
      },
      {
        term: 'sampleSizeUnit',
        dwcClass: 'Event (Core)',
        status: 'strongly-recommended',
        statusLabel: 'Strongly Recommended',
        definition: 'Unit of measurement of the sample size.',
        example: 'metre, trap-night, hour',
        gbifRole: 'Effort standardization'
      },
      {
        term: 'occurrenceID',
        dwcClass: 'Occurrence (Ext)',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'Unique identifier for each record in the extension table.',
        example: 'urn:uuid:c342f1a0-9774-4b53-b097-01e4a3b839df',
        gbifRole: 'Extension table record identifier'
      },
      {
        term: 'occurrenceStatus',
        dwcClass: 'Occurrence (Ext)',
        status: 'strongly-recommended',
        statusLabel: 'Strongly Recommended',
        definition: 'Flag denoting presence or absence ("present" vs "absent").',
        example: 'present, absent',
        gbifRole: 'Crucial: allows publishing non-detection (absence) data!'
      }
    ]
  },
  {
    id: 'checklist',
    title: 'Checklist Datasets',
    subtitle: 'Core: dwc:Taxon',
    coreType: 'Taxon Core',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    bgColor: 'bg-purple-950/40',
    borderColor: 'border-purple-500/50',
    textColor: 'text-purple-400',
    description: 'Catalogues, species inventories, regional floras/faunas, red lists, or taxonomic classifications.',
    terms: [
      {
        term: 'taxonID',
        dwcClass: 'Taxon (Core)',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'Unique identifier for the taxon entry within the checklist.',
        example: 'urn:lsid:catalogueoflife.org:taxon:399f2',
        gbifRole: 'Checklist core primary key'
      },
      {
        term: 'scientificName',
        dwcClass: 'Taxon (Core)',
        status: 'mandatory',
        statusLabel: 'Mandatory (GBIF Programmes)',
        definition: 'Full scientific name, including genus and specific epithet.',
        example: 'Picea abies (L.) H.Karst.',
        gbifRole: 'Matched into the GBIF Checklist Backbone'
      },
      {
        term: 'taxonRank',
        dwcClass: 'Taxon (Core)',
        status: 'strongly-recommended',
        statusLabel: 'Strongly Recommended',
        definition: 'Taxonomic rank of the name provided (controlled vocabulary).',
        example: 'species, genus, family, subspecies',
        gbifRole: 'GBIF requirement for funded programmes'
      },
      {
        term: 'kingdom',
        dwcClass: 'Taxon (Core)',
        status: 'strongly-recommended',
        statusLabel: 'Strongly Recommended',
        definition: 'Full scientific name of kingdom.',
        example: 'Plantae, Fungi, Animalia',
        gbifRole: 'Resolves homonyms across major biological kingdoms'
      },
      {
        term: 'parentNameUsageID',
        dwcClass: 'Taxon (Core)',
        status: 'recommended',
        statusLabel: 'Recommended',
        definition: 'Identifier for the immediate higher taxon in the hierarchy.',
        example: 'urn:lsid:catalogueoflife.org:taxon:genus-picea',
        gbifRole: 'Builds the taxonomic classification tree'
      },
      {
        term: 'acceptedNameUsageID',
        dwcClass: 'Taxon (Core)',
        status: 'recommended',
        statusLabel: 'Recommended',
        definition: 'Pointer to the accepted taxon if this entry is a synonym.',
        example: 'urn:lsid:catalogueoflife.org:taxon:accepted-123',
        gbifRole: 'Manages synonymy mapping'
      }
    ]
  },
  {
    id: 'metadata-only',
    title: 'Metadata-Only Datasets',
    subtitle: 'Core: None (EML Document)',
    coreType: 'Ecological Metadata Language (EML)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    bgColor: 'bg-amber-950/40',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    description: 'Describes non-digitized collections, historical archives, or resources not yet online so they can be discovered and cited.',
    terms: [
      {
        term: 'title',
        dwcClass: 'EML Dataset',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'Clear, descriptive title of the dataset resource.',
        example: 'Herbarium Collection of the National Museum Prague (PR)',
        gbifRole: 'Primary display name across all GBIF search indexes'
      },
      {
        term: 'description / abstract',
        dwcClass: 'EML Dataset',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'Informative narrative describing scope, taxonomy, and methodology.',
        example: 'Collection comprises ~2.5 million preserved vascular plants...',
        gbifRole: 'Indexed for full-text semantic discovery'
      },
      {
        term: 'publishingOrganizationKey',
        dwcClass: 'EML Dataset',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'GBIF-endorsed publishing institution identifier.',
        example: 'e.g. Endorsed Node / Institution UUID',
        gbifRole: 'Ensures institutional attribution and data governance'
      },
      {
        term: 'license',
        dwcClass: 'EML Dataset',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'Machine-readable open license (CC0 1.0, CC-BY 4.0, CC-BY-NC 4.0).',
        example: 'https://creativecommons.org/licenses/by/4.0/',
        gbifRole: 'Legal prerequisite for publication'
      },
      {
        term: 'creator & contact',
        dwcClass: 'EML Agents',
        status: 'mandatory',
        statusLabel: 'Mandatory',
        definition: 'Contact persons and creators with ORCIDs and email.',
        example: 'ORCID: 0000-0002-1825-0097',
        gbifRole: 'Enables proper author citation and DOI attribution'
      }
    ]
  }
]

const activeTab = ref(0)
const statusFilter = ref<'all' | 'mandatory' | 'strongly-recommended'>('all')

const currentClass = computed(() => datasetClasses[activeTab.value])

const filteredTerms = computed(() => {
  if (statusFilter.value === 'all') return currentClass.value.terms
  return currentClass.value.terms.filter(t => t.status === statusFilter.value)
})
</script>

<template>
  <div class="my-2 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-2xl p-3 text-left">
    <!-- Top Bar: Dataset Class Tabs + Filter -->
    <div class="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-800 flex-wrap">
      <div class="flex items-center gap-1.5 overflow-x-auto">
        <button
          v-for="(item, idx) in datasetClasses"
          :key="item.id"
          @click="activeTab = idx"
          class="px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer border"
          :class="[
            activeTab === idx
              ? `${item.bgColor} ${item.borderColor} ${item.textColor} shadow-md`
              : 'bg-slate-800/40 border-slate-700/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          ]"
        >
          {{ item.title.replace(' Datasets', '') }}
        </button>
      </div>

      <!-- Mandatory Filter Buttons -->
      <div class="flex items-center gap-1 text-[11px]">
        <button
          @click="statusFilter = 'all'"
          class="px-2 py-0.5 rounded cursor-pointer border transition-colors"
          :class="statusFilter === 'all' ? 'bg-slate-700 border-slate-500 text-white font-semibold' : 'bg-slate-800/40 border-slate-700 text-slate-400'"
        >
          All
        </button>
        <button
          @click="statusFilter = 'mandatory'"
          class="px-2 py-0.5 rounded cursor-pointer border transition-colors flex items-center gap-1"
          :class="statusFilter === 'mandatory' ? 'bg-red-950/80 border-red-500 text-red-200 font-semibold' : 'bg-slate-800/40 border-slate-700 text-red-400'"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
          Mandatory Only
        </button>
      </div>
    </div>

    <!-- Active Class Overview Header -->
    <div class="mb-2 flex items-baseline justify-between">
      <div>
        <h4 class="text-xs font-bold inline-block mr-2" :class="currentClass.textColor">
          {{ currentClass.title }}
        </h4>
        <span class="text-[11px] text-slate-400 font-mono">({{ currentClass.subtitle }})</span>
      </div>
      <a
        href="https://www.gbif.org/dataset-classes"
        target="_blank"
        rel="noopener"
        class="text-[10px] text-sky-400 hover:underline flex items-center gap-1"
      >
        <span>GBIF Class Docs</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    </div>

    <p class="text-[11px] text-slate-300 italic bg-slate-950/60 px-2.5 py-1.5 rounded border border-slate-800/80 mb-2">
      {{ currentClass.description }}
    </p>

    <!-- Terms Table with Badges -->
    <div class="overflow-x-auto rounded border border-slate-800 bg-slate-950/40 max-h-[220px] overflow-y-auto">
      <table class="w-full text-[11px]">
        <thead class="sticky top-0 bg-slate-800/90 backdrop-blur z-10 text-slate-300">
          <tr class="text-left border-b border-slate-700">
            <th class="py-1 px-2.5 font-mono font-medium">Darwin Core Term</th>
            <th class="py-1 px-2 font-medium">GBIF Status</th>
            <th class="py-1 px-2 font-medium">Definition & Purpose</th>
            <th class="py-1 px-2 font-mono font-medium">Example Value</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/60">
          <tr
            v-for="t in filteredTerms"
            :key="t.term"
            class="hover:bg-slate-800/30 transition-colors"
          >
            <td class="py-1 px-2.5 font-mono font-semibold whitespace-nowrap">
              <span :class="currentClass.textColor">dwc:{{ t.term }}</span>
              <div class="text-[9px] text-slate-500 font-sans">{{ t.dwcClass }}</div>
            </td>

            <td class="py-1 px-2 whitespace-nowrap">
              <span
                v-if="t.status === 'mandatory'"
                class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-950/80 text-red-300 border border-red-500/40"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                Mandatory
              </span>
              <span
                v-else-if="t.status === 'strongly-recommended'"
                class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-500/40"
              >
                ★ Strongly Rec.
              </span>
              <span
                v-else
                class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700"
              >
                Recommended
              </span>
            </td>

            <td class="py-1 px-2 text-slate-300">
              <div class="leading-tight">{{ t.definition }}</div>
              <div class="text-[10px] text-sky-400/90 mt-0.5 font-medium">↳ {{ t.gbifRole }}</div>
            </td>

            <td class="py-1 px-2 font-mono text-slate-400 text-[10px]">
              <code>{{ t.example }}</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Official Guidance Footer Links -->
    <div class="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
      <span>Official Standards:</span>
      <div class="flex items-center gap-3">
        <a href="https://www.tdwg.org/" target="_blank" rel="noopener" class="text-sky-400 hover:underline">TDWG.org</a>
        <span>·</span>
        <a href="https://dwc.tdwg.org/list/" target="_blank" rel="noopener" class="text-sky-400 hover:underline">Darwin Core Quick Reference Guide (dwc.tdwg.org)</a>
        <span>·</span>
        <a href="https://www.gbif.org/dataset-classes" target="_blank" rel="noopener" class="text-purple-400 hover:underline">GBIF Dataset Classes Guide</a>
      </div>
    </div>
  </div>
</template>

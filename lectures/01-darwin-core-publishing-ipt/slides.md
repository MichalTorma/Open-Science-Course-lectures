---
theme: seriph
background: https://images.unsplash.com/photo-1511497584788-87676104235f?q=80&w=1920&auto=format&fit=crop
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
title: "Darwin Core (DwC), Data Publishing, Citation and IPT"
info: |
  ## Open Science Course: Lecture 01
  Darwin Core (DwC), biodiversity data publishing, citation models, and the Integrated Publishing Toolkit (IPT).
fonts:
  sans: 'Inter'
  serif: 'Playfair Display'
  mono: 'JetBrains Mono'
---

<div class="my-auto">
  <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-mono tracking-wide">
    <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
    TDWG Standard · GBIF & OBIS · Open Biodiversity Data
  </div>

  <h1 class="text-4xl font-extrabold tracking-tight text-white mb-3">
    Darwin Core (DwC), Data Publishing, Citation and IPT
  </h1>

  <p class="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
    Mobilizing, standardizing, and crediting global biodiversity records across the Open Science research lifecycle.
  </p>

  <div class="pt-8">
    <span @click="$slidev.nav.next" class="px-6 py-2.5 rounded-full cursor-pointer bg-sky-600 hover:bg-sky-500 text-white font-medium shadow-lg transition duration-200 ease-in-out inline-flex items-center gap-2">
      Begin Lecture <carbon:arrow-right class="inline"/>
    </span>
  </div>
</div>

<div class="abs-bottom-margin mb-6 text-xs text-slate-400 flex justify-between px-10 w-full">
  <span>Open Science Course</span>
  <span>CC-BY 4.0 International</span>
</div>

---
transition: fade-out
layout: intro
---

# The Problem: The Biodiversity Tower of Babel

Before standardization, natural history collections and field scientists recorded data in disparate silos:

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded-xl bg-slate-900/80 border border-red-500/30">
  <div class="text-xl mb-1 text-red-400">🏷️ Taxonomy Chaos</div>
  <p class="text-xs text-slate-300">
    Synonyms, typos, regional vernacular names, and conflicting authorities without persistent identifiers.
  </p>
</div>

<div class="p-4 rounded-xl bg-slate-900/80 border border-amber-500/30">
  <div class="text-xl mb-1 text-amber-400">🗺️ Spatial Ambiguity</div>
  <p class="text-xs text-slate-300">
    "Behind the old mill" vs degrees/minutes/seconds vs local UTM grids; lack of coordinate uncertainty metrics.
  </p>
</div>

<div class="p-4 rounded-xl bg-slate-900/80 border border-purple-500/30">
  <div class="text-xl mb-1 text-purple-400">📅 Temporal Inconsistency</div>
  <p class="text-xs text-slate-300">
    <code>04/05/06</code> (May 4th or April 5th?), arbitrary date intervals, time zones missing.
  </p>
</div>

</div>

<br>

<div v-click class="p-3.5 rounded-xl bg-slate-900 border border-sky-500/40 text-sky-200 text-sm">
  🎯 <strong>The Consequence:</strong> Global synthesis (climate change range shifts, extinction tracking, invasive species modeling) was virtually impossible without manual data wrangling.
</div>

---
layout: default
---

# What is Darwin Core (DwC)?

<div class="grid grid-cols-2 gap-6 mt-3">

<div>
  <p class="text-sm text-slate-300 leading-relaxed mb-3">
    <strong>Darwin Core (DwC)</strong> is the international standard maintained by <a href="https://www.tdwg.org/" target="_blank" rel="noopener" class="text-sky-400 underline font-semibold">TDWG (Biodiversity Information Standards)</a>.
  </p>

  <v-clicks>

  - **A Glossary of Terms:** A stable vocabulary with precise URI definitions (e.g. <code>dwc:occurrenceID</code>, <code>dwc:scientificName</code>).
  - **Pragmatic & Flexible:** Storage-independent (flat CSV, relational SQL, JSON-LD, RDF XML).
  - **The Lingua Franca of Global Portals:** The foundational exchange format for **GBIF**, **OBIS**, and national biodiversity nodes.

  </v-clicks>

  <div class="mt-4 p-3 rounded-lg bg-sky-950/40 border border-sky-500/30 text-xs">
    🔗 <strong>Essential Reference Guide:</strong><br>
    Consult the official <a href="https://dwc.tdwg.org/" target="_blank" rel="noopener" class="text-sky-300 underline font-semibold">Darwin Core Quick Reference Guide (dwc.tdwg.org)</a> for every term definition, namespace, and normative examples.
  </div>
</div>

<div class="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs">
  <div class="font-mono text-sky-400 font-semibold mb-2 flex items-center justify-between">
    <span>📜 Official TDWG Identity</span>
    <a href="https://www.tdwg.org/" target="_blank" rel="noopener" class="text-slate-400 hover:text-white">tdwg.org ↗</a>
  </div>
  <table class="w-full text-slate-300 space-y-1">
    <tbody>
      <tr class="border-b border-slate-800"><td class="py-1 text-slate-400 font-mono">Standard:</td><td class="py-1 font-semibold">Biodiversity Information Standards (TDWG)</td></tr>
      <tr class="border-b border-slate-800"><td class="py-1 text-slate-400 font-mono">Ratified:</td><td class="py-1">October 2009 (Living standard)</td></tr>
      <tr class="border-b border-slate-800"><td class="py-1 text-slate-400 font-mono">Guide URL:</td><td class="py-1 font-mono text-sky-400"><a href="https://dwc.tdwg.org/" target="_blank" class="hover:underline">dwc.tdwg.org</a></td></tr>
      <tr class="border-b border-slate-800"><td class="py-1 text-slate-400 font-mono">Namespace:</td><td class="py-1 font-mono text-sky-400">http://rs.tdwg.org/dwc/terms/</td></tr>
      <tr><td class="py-1 text-slate-400 font-mono">Quick List:</td><td class="py-1 font-mono text-purple-400"><a href="https://dwc.tdwg.org/list/" target="_blank" class="hover:underline">dwc.tdwg.org/list/</a></td></tr>
    </tbody>
  </table>

  <div class="mt-3 p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-400 italic">
    "Darwin Core is primarily based on taxa, their occurrence in nature as documented by observations, specimens, samples, and related information."
  </div>
</div>

</div>

---
layout: default
---

# What is GBIF?

The **Global Biodiversity Information Facility** (<a href="https://www.gbif.org" target="_blank" rel="noopener" class="text-sky-400 underline font-semibold">GBIF.org</a>) is an international network and research infrastructure funded by governments worldwide.

<div class="grid grid-cols-12 gap-5 mt-4">

<div class="col-span-7 flex flex-col justify-between gap-3">
  <div class="p-3.5 rounded-xl bg-slate-900 border border-sky-500/40 shadow-md">
    <div class="text-sky-400 font-bold text-sm mb-1.5 flex items-center gap-2">
      <span>🌐</span> The World's Largest Biodiversity Aggregator
    </div>
    <p class="text-xs text-slate-200 leading-relaxed">
      GBIF provides free and open access to biodiversity data globally, mobilizing evidence from museum specimens, ecological surveys, eDNA, and citizen science (e.g. iNaturalist, eBird).
    </p>
  </div>

  <div class="space-y-2 text-xs">
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-700/80 flex items-start gap-2.5">
      <span class="text-sky-400 text-sm">📜</span>
      <div>
        <strong class="text-white">Global Open Mandate:</strong>
        <span class="text-slate-300"> Standardized open licenses (CC0, CC-BY, CC-BY-NC) and citable DOIs for all datasets and search queries.</span>
      </div>
    </div>
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-700/80 flex items-start gap-2.5">
      <span class="text-blue-400 text-sm">🧬</span>
      <div>
        <strong class="text-white">Powered by Darwin Core:</strong>
        <span class="text-slate-300"> Universal lingua franca harmonizing disparate records into a single queryable global index.</span>
      </div>
    </div>
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-700/80 flex items-start gap-2.5">
      <span class="text-purple-400 text-sm">🌍</span>
      <div>
        <strong class="text-white">Conservation & Policy:</strong>
        <span class="text-slate-300"> Essential evidence for IUCN Red List assessments, IPBES reports, and biodiversity targets.</span>
      </div>
    </div>
  </div>
</div>

<div class="col-span-5 flex flex-col justify-between gap-2.5">
  <div class="p-3.5 rounded-xl bg-slate-900 border border-sky-500/40 shadow-md">
    <div class="text-2xl font-black text-sky-400 tracking-tight font-mono">2.9+ Billion</div>
    <div class="text-xs font-semibold text-slate-100">Species Occurrence Records</div>
    <div class="text-[10px] text-slate-400 mt-0.5">Museum specimens, citizen science, eDNA, sensors</div>
  </div>

  <div class="p-3.5 rounded-xl bg-slate-900 border border-blue-500/40 shadow-md">
    <div class="text-2xl font-black text-blue-400 tracking-tight font-mono">2,500+</div>
    <div class="text-xs font-semibold text-slate-100">Publishing Institutions</div>
    <div class="text-[10px] text-slate-400 mt-0.5">Universities, museums, government agencies, NGOs</div>
  </div>

  <div class="p-3.5 rounded-xl bg-slate-900 border border-purple-500/40 shadow-md">
    <div class="text-2xl font-black text-purple-400 tracking-tight font-mono">100+</div>
    <div class="text-xs font-semibold text-slate-100">Voting Participants & Nodes</div>
    <div class="text-[10px] text-slate-400 mt-0.5">Country delegations and international organizations</div>
  </div>
</div>

</div>

---
layout: default
---

# How GBIF Operates: Nodes & Governance

GBIF is **not an uncurated upload bucket** — it is a **federated, endorsed network**:

<div class="flex items-stretch justify-between gap-1.5 my-4">
  <!-- Step 1 -->
  <div class="flex-1 p-2.5 rounded-xl bg-slate-900 border border-slate-700 shadow-md text-center flex flex-col justify-between">
    <div>
      <div class="text-lg mb-1">🏛️</div>
      <div class="font-bold text-white text-xs leading-tight">Data Publisher</div>
    </div>
    <div class="text-[10px] text-slate-400 mt-1">Museum, Uni, NGO</div>
  </div>

  <div class="text-slate-400 font-bold text-xs flex flex-col items-center justify-center px-0.5">
    <span class="text-[9px] text-slate-400 font-mono mb-0.5">1. Endorse</span>
    <span class="text-sky-400">➔</span>
  </div>

  <!-- Step 2 -->
  <div class="flex-1 p-2.5 rounded-xl bg-slate-900 border-2 border-sky-400 shadow-lg text-center flex flex-col justify-between">
    <div>
      <div class="text-lg mb-1">🌐</div>
      <div class="font-bold text-sky-400 text-xs leading-tight">Participant Node</div>
      <div class="text-[10px] text-sky-200 mt-0.5 font-medium">e.g. GBIF Norway</div>
    </div>
    <div class="text-[9px] text-slate-200 mt-1.5 bg-sky-950 py-0.5 px-1 rounded border border-sky-800/80 font-medium">Vets & approves</div>
  </div>

  <div class="text-slate-400 font-bold text-xs flex flex-col items-center justify-center px-0.5">
    <span class="text-[9px] text-slate-400 font-mono mb-0.5">2. Approved</span>
    <span class="text-sky-400">➔</span>
  </div>

  <!-- Step 3 -->
  <div class="flex-1 p-2.5 rounded-xl bg-slate-900 border border-cyan-500/60 shadow-md text-center flex flex-col justify-between">
    <div>
      <div class="text-lg mb-1">⚙️</div>
      <div class="font-bold text-cyan-400 text-xs leading-tight">Publishing Tool</div>
      <div class="text-[10px] text-cyan-200 mt-0.5 font-medium">IPT / DwC-A</div>
    </div>
    <div class="text-[9px] text-slate-300 mt-1.5 font-mono">DwC Format</div>
  </div>

  <div class="text-slate-400 font-bold text-xs flex flex-col items-center justify-center px-0.5">
    <span class="text-[9px] text-slate-400 font-mono mb-0.5">3. Harvest</span>
    <span class="text-sky-400">➔</span>
  </div>

  <!-- Step 4 -->
  <div class="flex-1 p-2.5 rounded-xl bg-slate-900 border border-purple-500/60 shadow-md text-center flex flex-col justify-between">
    <div>
      <div class="text-lg mb-1">🏢</div>
      <div class="font-bold text-purple-400 text-xs leading-tight">GBIF Secretariat</div>
      <div class="text-[10px] text-purple-200 mt-0.5 font-medium">Copenhagen Hub</div>
    </div>
    <div class="text-[9px] text-slate-300 mt-1.5 font-mono">DOI & Index</div>
  </div>

  <div class="text-slate-400 font-bold text-xs flex flex-col items-center justify-center px-0.5">
    <span class="text-[9px] text-slate-400 font-mono mb-0.5">4. FAIR API</span>
    <span class="text-sky-400">➔</span>
  </div>

  <!-- Step 5 -->
  <div class="flex-1 p-2.5 rounded-xl bg-slate-900 border border-amber-500/60 shadow-md text-center flex flex-col justify-between">
    <div>
      <div class="text-lg mb-1">🔬</div>
      <div class="font-bold text-amber-400 text-xs leading-tight">Global Science</div>
      <div class="text-[10px] text-amber-200 mt-0.5 font-medium">Research & Policy</div>
    </div>
    <div class="text-[9px] text-slate-300 mt-1.5">Open Synthesis</div>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-xs">

<div class="p-2.5 rounded-xl bg-slate-900/80 border border-sky-500/40">
  <div class="font-bold text-sky-400 mb-1 flex items-center gap-1.5">
    <span>🌐</span> Country / Participant Nodes
  </div>
  <p class="text-[11px] text-slate-300 leading-snug">
    Designated national teams (e.g. GBIF Norway, GBIF Spain) serving as the official bridge between local institutions and the global infrastructure.
  </p>
</div>

<div class="p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/40">
  <div class="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
    <span>🛡️</span> Institutional Endorsement
  </div>
  <p class="text-[11px] text-slate-300 leading-snug">
    <strong>Strict vetting:</strong> Node managers must review and approve every publishing organization before its datasets can be registered on GBIF.
  </p>
</div>

<div class="p-2.5 rounded-xl bg-slate-900/80 border border-sky-500/40">
  <div class="font-bold text-sky-400 mb-1 flex items-center gap-1.5">
    <span>📦</span> Federated Publishing (IPT)
  </div>
  <p class="text-[11px] text-slate-300 leading-snug">
    Organizations keep ownership of their data. The node hosts or assists with the <strong>IPT</strong>, which exports Darwin Core Archives for GBIF to harvest.
  </p>
</div>

</div>

---
layout: default
---

# GBIF Dataset Classes Overview

GBIF standardizes biodiversity publishing into **4 distinct dataset classes** (<a href="https://www.gbif.org/dataset-classes" target="_blank" rel="noopener" class="text-sky-400 underline">gbif.org/dataset-classes</a>):

<div class="grid grid-cols-4 gap-3 mt-5">

<div class="p-3.5 rounded-xl bg-slate-900/80 border border-sky-500/40 flex flex-col justify-between">
  <div>
    <div class="text-sky-400 font-bold text-sm mb-1">1. Occurrence</div>
    <div class="text-[10px] font-mono text-sky-300/80 mb-2">Core: dwc:Occurrence</div>
    <p class="text-xs text-slate-300 leading-snug">
      Evidence of a species at a given time and place (museum specimens, citizen science observations, camera traps).
    </p>
  </div>
  <div class="mt-3 text-[10px] text-sky-400/90 font-mono font-semibold">Most common on GBIF</div>
</div>

<div class="p-3.5 rounded-xl bg-slate-900/80 border border-sky-500/40 flex flex-col justify-between">
  <div>
    <div class="text-sky-400 font-bold text-sm mb-1">2. Sampling-Event</div>
    <div class="text-[10px] font-mono text-sky-300/80 mb-2">Core: dwc:Event + Occ Ext</div>
    <p class="text-xs text-slate-300 leading-snug">
      Standardized environmental monitoring, surveys, transects with quantifiable effort and non-detection (absence) data.
    </p>
  </div>
  <div class="mt-3 text-[10px] text-sky-400/90 font-mono font-semibold">Ecological time-series</div>
</div>

<div class="p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/40 flex flex-col justify-between">
  <div>
    <div class="text-purple-400 font-bold text-sm mb-1">3. Checklist</div>
    <div class="text-[10px] font-mono text-purple-300/80 mb-2">Core: dwc:Taxon</div>
    <p class="text-xs text-slate-300 leading-snug">
      Catalogues of taxa, national inventories, red lists, and taxonomic classifications without specific coordinate events.
    </p>
  </div>
  <div class="mt-3 text-[10px] text-purple-400/90 font-mono font-semibold">Taxonomic backbone</div>
</div>

<div class="p-3.5 rounded-xl bg-slate-900/80 border border-amber-500/40 flex flex-col justify-between">
  <div>
    <div class="text-amber-400 font-bold text-sm mb-1">4. Metadata-only</div>
    <div class="text-[10px] font-mono text-amber-300/80 mb-2">Core: None (EML XML)</div>
    <p class="text-xs text-slate-300 leading-snug">
      Describing undigitized physical collections, historical literature, or projects awaiting electronic mobilization.
    </p>
  </div>
  <div class="mt-3 text-[10px] text-amber-400/90 font-mono font-semibold">Collection discovery</div>
</div>

</div>

---
layout: default
---

# GBIF Recommendations: Mandatory vs. Recommended Terms

Explore terms per dataset class based on <a href="https://www.gbif.org/dataset-classes" target="_blank" rel="noopener" class="text-sky-400 underline font-mono text-xs">gbif.org/dataset-classes</a> and <a href="https://dwc.tdwg.org/" target="_blank" rel="noopener" class="text-sky-400 underline font-mono text-xs">dwc.tdwg.org</a>:

<DwcExplorer />

---
layout: default
---

# The Anatomy of a Darwin Core Record

A practical example of how a biological observation maps directly to standardized DwC terms:

```json
{
  "dwc:occurrenceID": "urn:uuid:8b3e8e2b-2e92-498c-851c-a1288c8eb25a",
  "dwc:basisOfRecord": "HumanObservation",
  "dwc:scientificName": "Bombus terrestris (Linnaeus, 1758)",
  "dwc:kingdom": "Animalia",
  "dwc:taxonRank": "species",
  "dwc:decimalLatitude": 50.0755,
  "dwc:decimalLongitude": 14.4378,
  "dwc:geodeticDatum": "WGS84",
  "dwc:coordinateUncertaintyInMeters": 15,
  "dwc:eventDate": "2024-06-12T10:15:00Z",
  "dwc:recordedBy": "Michal Torma",
  "dcterms:license": "http://creativecommons.org/publicdomain/zero/1.0/"
}
```

<div class="grid grid-cols-3 gap-3 mt-3 text-xs">
  <div class="p-3 rounded-xl bg-slate-900 border border-rose-500/50 shadow-md">
    <div class="font-bold text-rose-400 mb-1.5 flex items-center gap-1.5">
      <span>🚨</span> Mandatory Core Terms
    </div>
    <div class="flex flex-wrap gap-1 text-[11px] font-mono">
      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-rose-300 border border-slate-700">occurrenceID</span>
      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-rose-300 border border-slate-700">basisOfRecord</span>
      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-rose-300 border border-slate-700">scientificName</span>
      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-rose-300 border border-slate-700">eventDate</span>
    </div>
  </div>

  <div class="p-3 rounded-xl bg-slate-900 border border-amber-500/50 shadow-md">
    <div class="font-bold text-amber-400 mb-1.5 flex items-center gap-1.5">
      <span>📍</span> Strongly Recommended
    </div>
    <div class="flex flex-wrap gap-1 text-[11px] font-mono">
      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">decimalLatitude</span>
      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">decimalLongitude</span>
      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">geodeticDatum</span>
      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">coordinateUncertaintyInMeters</span>
    </div>
  </div>

  <div class="p-3 rounded-xl bg-slate-900 border border-sky-500/50 shadow-md">
    <div class="font-bold text-sky-400 mb-1.5 flex items-center gap-1.5">
      <span>⚖️</span> Mandatory Open License
    </div>
    <p class="text-[11px] text-slate-300 leading-snug mb-1.5">
      Machine-readable license URL is required for GBIF publication:
    </p>
    <div class="flex flex-wrap gap-1 text-[11px] font-mono">
      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">CC0 1.0</span>
      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">CC-BY 4.0</span>
      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">CC-BY-NC 4.0</span>
    </div>
  </div>
</div>


---
layout: default
---

# The Darwin Core Star Schema (DwC-A)

A single flat table cannot cleanly model **one-to-many (1:N)** biological relationships. A **Darwin Core Archive (DwC-A)** solves this using a **Star Schema**:

<div class="mt-4">
  <StarSchemaDiagram />
</div>

---
layout: default
---

# GBIF Extensions in Practice

GBIF maintains a community-curated <a href="https://rs.gbif.org/extensions.html" target="_blank" rel="noopener" class="text-sky-400 underline font-semibold">Extension Registry</a> to extend Core records with specialized data types:

<div class="grid grid-cols-2 gap-3.5 mt-3">

<div class="p-3 rounded-xl bg-slate-900/90 border border-sky-500/40 shadow-sm flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-1.5">
<div class="font-bold text-sky-300 text-xs flex items-center gap-1.5">
<span>📸</span> Simple Multimedia (Audubon Core)
</div>
<span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-800/60">Media</span>
</div>
<p class="text-[11px] text-slate-300 leading-snug">
Attaches photos, field audio recordings, or 3D specimen scans to an occurrence record.
</p>
</div>
<div class="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
<span class="font-mono text-slate-400">Terms: <code class="text-sky-300">identifier</code>, <code class="text-sky-300">format</code>, <code class="text-sky-300">license</code></span>
<span class="text-slate-400 font-mono text-[9.5px]">iNaturalist · Herbarium scans</span>
</div>
</div>

<div class="p-3 rounded-xl bg-slate-900/90 border border-amber-500/40 shadow-sm flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-1.5">
<div class="font-bold text-amber-300 text-xs flex items-center gap-1.5">
<span>📏</span> Extended MeasurementOrFact (eMoF)
</div>
<span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60">Traits & Sensors</span>
</div>
<p class="text-[11px] text-slate-300 leading-snug">
Records quantitative traits (body length, mass) and environmental metrics (water temp, depth).
</p>
</div>
<div class="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
<span class="font-mono text-slate-400">Terms: <code class="text-amber-300">measurementType</code>, <code class="text-amber-300">Value</code>, <code class="text-amber-300">Unit</code></span>
<span class="text-slate-400 font-mono text-[9.5px]">OBIS · Trait databases</span>
</div>
</div>

<div class="p-3 rounded-xl bg-slate-900/90 border border-purple-500/40 shadow-sm flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-1.5">
<div class="font-bold text-purple-300 text-xs flex items-center gap-1.5">
<span>🧬</span> DNA Derived Data (GGBN / MIxS)
</div>
<span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/60">eDNA & Sequences</span>
</div>
<p class="text-[11px] text-slate-300 leading-snug">
Links DNA barcoding, metabarcoding, and environmental DNA (eDNA) detections to vouchers.
</p>
</div>
<div class="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
<span class="font-mono text-slate-400">Terms: <code class="text-purple-300">target_gene</code>, <code class="text-purple-300">pcr_primer</code>, <code class="text-purple-300">accession</code></span>
<span class="text-slate-400 font-mono text-[9.5px]">NCBI · BOLD · ENA</span>
</div>
</div>

<div class="p-3 rounded-xl bg-slate-900/90 border border-rose-500/40 shadow-sm flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-1.5">
<div class="font-bold text-rose-300 text-xs flex items-center gap-1.5">
<span>🔗</span> Resource Relationship
</div>
<span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-800/60">Interactions</span>
</div>
<p class="text-[11px] text-slate-300 leading-snug">
Documents ecological interactions between occurrences (host-parasite, pollinator, prey).
</p>
</div>
<div class="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
<span class="font-mono text-slate-400">Terms: <code class="text-rose-300">relationshipOfResource</code>, <code class="text-rose-300">relatedResourceID</code></span>
<span class="text-slate-400 font-mono text-[9.5px]">GloBI · Food webs</span>
</div>
</div>

</div>

<div class="mt-3 p-2 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
<span class="text-[11px]">💡 Each extension file links back to <code class="text-sky-300 font-mono bg-slate-800 px-1 py-0.5 rounded">coreId</code> in <code class="text-slate-200 font-mono">occurrence.txt</code> via schema defined in <code class="text-amber-300 font-mono bg-slate-800 px-1 py-0.5 rounded">meta.xml</code></span>
<a href="https://rs.gbif.org/extensions.html" target="_blank" rel="noopener" class="text-sky-400 hover:text-sky-300 font-mono text-[10px] whitespace-nowrap">Explore Registry ↗</a>
</div>

---
layout: default
---

# Special Case: ExtendedMeasurementOrFact (eMoF)

<span class="text-xs text-slate-300 block -mt-2 mb-1.5">
  In Sampling-Event datasets, measurements target <strong>both</strong> the Event (abiotic) and Occurrence (biometric traits), breaking the pure Star Schema:
</span>

<EmofStarSchemaBreak />

---
layout: default
---

# The Solution: Darwin Core Data Package (DwC-DP)

<span class="text-xs text-slate-300 block -mt-2 mb-1.5">
  Officially ratified by <strong>TDWG on May 26, 2026</strong>: Replacing the rigid Star Schema with Frictionless Data Packages and multi-table relational graphs.
</span>

<DwcDpSolution />

---
layout: default
---

<HopeThereAreTools />

---
layout: default
---

# Meet the Integrated Publishing Toolkit (IPT)

<span class="text-xs text-slate-300 block -mt-2 mb-2">
  GBIF's open-source web application designed to manage, document, and publish biodiversity datasets without writing raw XML or JSON.
</span>

<IptIntro />
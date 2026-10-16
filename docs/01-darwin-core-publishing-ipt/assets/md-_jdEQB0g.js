import{$ as e,B as t,D as n,S as r,_ as i,bt as a,v as o,vt as s,y as c}from"./modules/shiki-8xXR1m5z.js";import{it as l,rt as u}from"./index-CgSoMR5v.js";import{t as d}from"./slidev/default-s4iqDahn.js";var f={__name:`slides.md__slidev_9`,setup(f){let{$slidev:p,$nav:m,$clicksContext:h,$clicks:g,$page:_,$renderContext:v,$frontmatter:y}=l();return h.setup(),(l,f)=>(t(),o(d,a(n(s(u)(s(y),8))),{default:e(()=>[...f[0]||=[i(`h1`,null,`The Darwin Core Star Schema (DwC-A)`,-1),i(`p`,null,[r(`A single flat table cannot cleanly model `),i(`strong`,null,`one-to-many (1:N)`),r(` biological relationships. A `),i(`strong`,null,`Darwin Core Archive (DwC-A)`),r(` solves this using a `),i(`strong`,null,`Star Schema`),r(`:`)],-1),i(`div`,{class:`grid grid-cols-12 gap-5 mt-4`},[c(` Left: Visual Star Schema Diagram `),i(`div`,{class:`col-span-7 p-3.5 rounded-xl bg-slate-900 border border-sky-500/40 shadow-lg flex flex-col justify-between`},[i(`div`,null,[i(`div`,{class:`flex items-center justify-between mb-3 pb-2 border-b border-slate-800`},[i(`div`,{class:`font-bold text-sky-400 text-xs flex items-center gap-1.5`},[i(`span`,null,`⭐`),r(` Star Schema: One Core ➔ Many Extensions `)]),i(`span`,{class:`text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30`},`DwC-A Standard`)]),i(`pre`,null,[i(`code`,null,`<!-- Center Core & Satellite Extensions -->
<div class="space-y-2.5">
  <!-- Core Record -->
  <div class="p-2.5 rounded-lg bg-sky-950/70 border-2 border-sky-400 text-center shadow-md">
    <div class="text-[10px] font-mono text-sky-300 font-bold uppercase tracking-wider">Central Core Data File (e.g. occurrence.txt)</div>
    <div class="text-xs font-bold text-white mt-0.5">Core Primary Key: <span class="font-mono text-sky-300">dwc:occurrenceID</span></div>
    <div class="text-[10px] text-slate-300">Contains the baseline taxon, location, date, and basis of record</div>
  </div>

  <!-- Radiating Connector label -->
  <div class="text-center text-[10px] font-mono text-slate-400 flex items-center justify-center gap-2">
    <span class="h-px w-12 bg-slate-700"></span>
    <span>1 : N Foreign Key Links via <span class="text-sky-300">coreId</span></span>
    <span class="h-px w-12 bg-slate-700"></span>
  </div>

  <!-- Extensions Grid -->
  <div class="grid grid-cols-3 gap-2 text-center text-xs">
    <div class="p-2 rounded-lg bg-slate-800 border border-cyan-500/40">
      <div class="text-sm mb-0.5">📸</div>
      <div class="font-bold text-cyan-300 text-[11px]">Multimedia</div>
      <div class="text-[9px] text-slate-400 mt-0.5 leading-tight">Voucher photos, audio, videos, licenses</div>
    </div>

    <div class="p-2 rounded-lg bg-slate-800 border border-amber-500/40">
      <div class="text-sm mb-0.5">📏</div>
      <div class="font-bold text-amber-300 text-[11px]">Measurement/Fact</div>
      <div class="text-[9px] text-slate-400 mt-0.5 leading-tight">Traits, salinity, temperature, biomass</div>
    </div>

    <div class="p-2 rounded-lg bg-slate-800 border border-purple-500/40">
      <div class="text-sm mb-0.5">🧬</div>
      <div class="font-bold text-purple-300 text-[11px]">DNA Derived Data</div>
      <div class="text-[9px] text-slate-400 mt-0.5 leading-tight">Genetic markers, primers, GenBank IDs</div>
    </div>
  </div>
</div>
`)])]),i(`div`,{class:`mt-2 text-[10px] text-slate-400 italic text-center`},` "Extensions allow specialized domains (genomics, trait ecology, bioacoustics) to enrich data without breaking core interoperability." `)]),c(` Right: The Archive Anatomy `),i(`div`,{class:`col-span-5 flex flex-col justify-between gap-2.5`},[i(`div`,{class:`p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 shadow-md`},[i(`div`,{class:`font-bold text-white text-xs mb-1.5 flex items-center gap-1.5`},[i(`span`,null,`📦`),r(` Inside a Darwin Core Archive (.zip) `)]),i(`ul`,{class:`text-[11px] text-slate-300 space-y-1.5`},[i(`li`,{class:`flex items-start gap-1.5`},[i(`span`,{class:`text-sky-400 font-mono font-bold`},`1.`),i(`div`,null,[i(`strong`,{class:`text-sky-300 font-mono`},`core.txt:`),r(` The primary entity data table (Occurrence, Event, or Taxon) in CSV/TSV format.`)])]),i(`li`,{class:`flex items-start gap-1.5`},[i(`span`,{class:`text-cyan-400 font-mono font-bold`},`2.`),i(`div`,null,[i(`strong`,{class:`text-cyan-300 font-mono`},`extension_*.txt:`),r(` 0, 1, or more satellite tables with `),i(`span`,{class:`font-mono text-slate-400`},`coreId`),r(` foreign keys.`)])]),i(`li`,{class:`flex items-start gap-1.5`},[i(`span`,{class:`text-amber-400 font-mono font-bold`},`3.`),i(`div`,null,[i(`strong`,{class:`text-amber-300 font-mono`},`meta.xml:`),r(` Machine descriptor mapping columns, delimiters, encoding, and core/extension foreign keys.`)])]),i(`li`,{class:`flex items-start gap-1.5`},[i(`span`,{class:`text-purple-400 font-mono font-bold`},`4.`),i(`div`,null,[i(`strong`,{class:`text-purple-300 font-mono`},`eml.xml:`),r(` Ecological Metadata Language defining title, abstract, creator, citation, and license.`)])])])]),i(`div`,{class:`p-3 rounded-xl bg-slate-900 border border-sky-500/40 text-[11px]`},[i(`div`,{class:`font-bold text-sky-400 mb-1 flex items-center gap-1.5`},[i(`span`,null,`💡`),r(` Key Architectural Advantage `)]),i(`p`,{class:`text-slate-300 leading-snug`},[r(` Tools that only understand occurrences read `),i(`span`,{class:`font-mono text-sky-300`},`core.txt`),r(`. Advanced pipelines (e.g. OBIS, BLAST pipelines) parse the linked extensions automatically. `)])])])],-1)]]),_:1},16))}};export{f as default};
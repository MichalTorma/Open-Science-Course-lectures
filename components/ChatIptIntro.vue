<template>
  <div class="w-full flex flex-col select-none mt-1">
    
    <div class="grid grid-cols-12 gap-4 items-center">

      <!-- Left: Live Screenshot Container -->
      <div class="col-span-8 flex flex-col items-center">
        <div class="w-full rounded-2xl overflow-hidden border border-emerald-600/50 shadow-2xl bg-slate-950 relative group">
          <a href="https://chatipt.svc.gbif.no/" target="_blank" rel="noopener" class="block w-full">
            <img 
              src="/images/chatipt-welcome.png" 
              alt="ChatIPT Interface" 
              class="w-full max-h-[255px] object-cover object-center rounded-xl transition-transform duration-300 group-hover:scale-[1.01]" 
            />
          </a>
          <a 
            href="https://chatipt.svc.gbif.no/" 
            target="_blank" 
            rel="noopener"
            class="absolute bottom-2.5 right-2.5 bg-slate-950/90 hover:bg-emerald-950/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] font-mono text-emerald-300 border border-emerald-500/50 hover:border-emerald-400 shadow-lg flex items-center gap-1.5 transition-colors"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>chatipt.svc.gbif.no ↗</span>
          </a>
        </div>
      </div>

      <!-- Right: Key Concept Badges + Direct Link -->
      <div class="col-span-4 flex flex-col gap-1.5">
        
        <div class="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-emerald-500/40 shadow-sm">
          <div class="font-bold text-emerald-400 text-[10.5px] flex items-center gap-1 mb-0.5">
            <span>🌱</span> Good Data, Greater Discoveries
          </div>
          <p class="text-[8.5px] text-slate-300 leading-tight">
            Guided workspace turning raw spreadsheets into standard, connected biodiversity data.
          </p>
        </div>

        <div class="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-sky-500/40 shadow-sm">
          <div class="font-bold text-sky-400 text-[10.5px] flex items-center gap-1 mb-0.5">
            <span>🤖</span> AI-Assisted Cleaning & Mapping
          </div>
          <p class="text-[8.5px] text-slate-300 leading-tight">
            Auto-detects column types, recommends Darwin Core terms, and flags spatial errors.
          </p>
        </div>

        <div class="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-purple-500/40 shadow-sm">
          <div class="font-bold text-purple-400 text-[10.5px] flex items-center gap-1 mb-0.5">
            <span>🪪</span> ORCID-First Authentication
          </div>
          <p class="text-[8.5px] text-slate-300 leading-tight">
            Instant ORCID sign-in tying researcher identity, provenance, and citations directly to datasets.
          </p>
        </div>

        <!-- Launch ChatIPT Button -->
        <a 
          href="https://chatipt.svc.gbif.no/" 
          target="_blank" 
          rel="noopener"
          class="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-500/60 hover:border-emerald-400 text-emerald-200 shadow-md hover:shadow-emerald-500/20 transition-all group"
        >
          <span class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="font-mono font-bold text-[9.5px] text-emerald-300">Launch ChatIPT</span>
          </span>
          <span class="text-[9px] text-emerald-400 font-mono group-hover:translate-x-0.5 transition-transform">chatipt.svc.gbif.no ↗</span>
        </a>

      </div>

    </div>

  </div>
</template>

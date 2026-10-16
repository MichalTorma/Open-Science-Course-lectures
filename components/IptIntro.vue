<template>
  <div class="w-full flex flex-col select-none py-0.5">
    
    <div class="grid grid-cols-12 gap-4 items-center">

      <!-- Left: Live Screenshot Container -->
      <div class="col-span-8 flex flex-col items-center">
        <div class="w-full rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 relative">
          <img 
            src="/images/ipt-homepage.png" 
            alt="GBIF IPT Interface" 
            class="w-full max-h-[290px] object-cover object-top rounded-lg" 
          />
          <div class="absolute bottom-2 right-2 bg-slate-950/90 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-mono text-slate-300 border border-slate-700 shadow-md">
            GBIF Norway Node · IPT Instance (412 Hosted Resources)
          </div>
        </div>
      </div>

      <!-- Right: Key Concept Badges -->
      <div class="col-span-4 flex flex-col gap-2">
        
        <div class="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 shadow-sm">
          <div class="font-bold text-emerald-400 text-xs flex items-center gap-1.5 mb-1">
            <span class="text-xs">🌱</span> What is the IPT?
          </div>
          <p class="text-[10.5px] text-slate-300 leading-snug">
            GBIF's free open-source publishing tool (Java web app), typically hosted by <strong>national participant nodes</strong> or institutions.
          </p>
        </div>

        <div class="p-2.5 rounded-xl bg-slate-900/90 border border-sky-500/40 shadow-sm">
          <div class="font-bold text-sky-400 text-xs flex items-center gap-1.5 mb-1">
            <span class="text-xs">🔄</span> Automated Packaging
          </div>
          <p class="text-[10.5px] text-slate-300 leading-snug">
            Upload CSV/Excel tables or connect databases. IPT maps your fields to <strong>DwC terms</strong> and packages valid archives automatically.
          </p>
        </div>

        <div class="p-2.5 rounded-xl bg-slate-900/90 border border-purple-500/40 shadow-sm">
          <div class="font-bold text-purple-400 text-xs flex items-center gap-1.5 mb-1">
            <span class="text-xs">🌐</span> Direct Node Registration
          </div>
          <p class="text-[10.5px] text-slate-300 leading-snug">
            Registers datasets directly into the <strong>GBIF Registry</strong> with persistent DOIs and scheduled crawler sync.
          </p>
        </div>

      </div>

    </div>

  </div>
</template>


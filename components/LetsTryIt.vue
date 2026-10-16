<template>
  <div class="w-full flex flex-col select-none py-1">
    
    <div class="grid grid-cols-2 gap-5 mt-1">

      <!-- Track A: Classic IPT -->
      <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/60 border border-sky-500/50 shadow-xl flex flex-col justify-between hover:border-sky-400 transition-all group">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold text-sky-300 bg-sky-950 border border-sky-500/50">
              CLASSIC WORKFLOW
            </span>
            <span class="text-xl">⚙️</span>
          </div>

          <h3 class="text-base font-black text-white group-hover:text-sky-300 transition-colors">
            GBIF IPT (Sandbox)
          </h3>
          <p class="text-[10px] text-slate-300 mt-1 leading-snug">
            The institutional workhorse hosted by national participant nodes for comprehensive dataset administration.
          </p>

          <div class="mt-3 space-y-1.5 text-[9.5px]">
            <div class="flex items-center gap-2 text-slate-300">
              <span class="text-sky-400">✓</span>
              <span>Connect raw CSV, TSV, or live SQL databases</span>
            </div>
            <div class="flex items-center gap-2 text-slate-300">
              <span class="text-sky-400">✓</span>
              <span>Map columns directly to Darwin Core Core & Extensions</span>
            </div>
            <div class="flex items-center gap-2 text-slate-300">
              <span class="text-sky-400">✓</span>
              <span>Fill rich EML metadata & manage institutional roles</span>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <span class="text-[9px] font-mono text-slate-400">Recommended for data managers</span>
          <a 
            href="https://ipt.gbif.no/" 
            target="_blank" 
            rel="noopener"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400 text-sky-200 text-xs font-semibold shadow-md transition-all group-hover:shadow-sky-500/20"
          >
            <span>Open IPT</span>
            <span class="text-[10px]">↗</span>
          </a>
        </div>
      </div>

      <!-- Track B: ChatIPT -->
      <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/60 border border-emerald-500/60 shadow-xl flex flex-col justify-between hover:border-emerald-400 transition-all group">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold text-emerald-300 bg-emerald-950 border border-emerald-500/50 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              AI-GUIDED WORKFLOW
            </span>
            <span class="text-xl">🌱</span>
          </div>

          <h3 class="text-base font-black text-white group-hover:text-emerald-300 transition-colors">
            ChatIPT Workspace
          </h3>
          <p class="text-[10px] text-slate-300 mt-1 leading-snug">
            Intelligent assistant turning raw researcher spreadsheets into validated, connected GBIF datasets.
          </p>

          <div class="mt-3 space-y-1.5 text-[9.5px]">
            <div class="flex items-center gap-2 text-slate-300">
              <span class="text-emerald-400">✓</span>
              <span>1-click ORCID authentication (no passwords)</span>
            </div>
            <div class="flex items-center gap-2 text-slate-300">
              <span class="text-emerald-400">✓</span>
              <span>AI automated column detection & DwC term suggestions</span>
            </div>
            <div class="flex items-center gap-2 text-slate-300">
              <span class="text-emerald-400">✓</span>
              <span>Interactive coordinate cleaning & instant package generation</span>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <span class="text-[9px] font-mono text-slate-400">Recommended for students & researchers</span>
          <a 
            href="https://chatipt.svc.gbif.no/" 
            target="_blank" 
            rel="noopener"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400 text-emerald-200 text-xs font-semibold shadow-md transition-all group-hover:shadow-emerald-500/20"
          >
            <span>Launch ChatIPT</span>
            <span class="text-[10px]">↗</span>
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom Workshop Challenge Banner -->
    <div class="w-full mt-3.5 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs shadow-md">
      <div class="flex items-center gap-2.5">
        <span class="text-base">🎯</span>
        <div>
          <span class="font-bold text-white">Hands-on Goal: </span>
          <span class="text-slate-300 text-[11px]">Take your own sample spreadsheet (or our provided demo CSV), standardize it, and create your first valid Darwin Core dataset!</span>
        </div>
      </div>
      <div class="hidden md:flex items-center gap-2 font-mono text-[10px] text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
        <span>Hands-on Lab · Lecture 01</span>
      </div>
    </div>

  </div>
</template>

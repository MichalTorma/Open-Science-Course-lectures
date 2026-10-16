<template>
  <div class="w-full flex flex-col items-center select-none py-1">
    
    <div class="relative w-full max-w-[840px] bg-slate-950/80 border border-slate-800 rounded-2xl p-3 shadow-2xl backdrop-blur-md flex flex-col items-center">
      
      <!-- Top Legend -->
      <div class="w-full flex items-center justify-between pb-1.5 mb-1 border-b border-slate-800/80 text-xs font-mono">
        <span class="text-slate-300 font-semibold text-[11px] flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-amber-400"></span>
          DwC-A Topology: Sampling-Event + eMoF
        </span>
        <div class="flex items-center gap-4 text-[10.5px]">
          <span class="flex items-center gap-1.5 text-sky-400">
            <span class="w-3.5 h-0.5 bg-sky-400 inline-block"></span>
            Valid Star Spoke (➔ Core)
          </span>
          <span class="flex items-center gap-1.5 text-rose-400 font-bold">
            <span class="w-3.5 h-0.5 border-t-2 border-dashed border-rose-400 inline-block"></span>
            Illegal Cross-Link (Ext ➔ Ext)
          </span>
        </div>
      </div>

      <!-- Diagram Canvas -->
      <div class="relative w-full h-[250px]">
        
        <!-- SVG Connecting Arrows (Layer 0) -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 250">
          <defs>
            <marker id="arrow-sky" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
            </marker>
            <marker id="arrow-rose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f43f5e" />
            </marker>
          </defs>

          <!-- 1. Horizontal Spoke: Occurrence -> Event Core -->
          <line x1="530" y1="65" x2="270" y2="65" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow-sky)" />

          <!-- 2. Curved Spoke: eMoF -> Event Core -->
          <path d="M 355 175 Q 260 145 235 120" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow-sky)" fill="none" />

          <!-- 3. Curved Spoke: eMoF -> Occurrence (Cross-Link) -->
          <path d="M 445 175 Q 540 145 565 120" stroke="#f43f5e" stroke-width="3" stroke-dasharray="6 3" marker-end="url(#arrow-rose)" fill="none" />
        </svg>

        <!-- HTML Floating Pills for Arrows (Layer 10) -->
        <!-- Horizontal Spoke Label -->
        <div class="absolute left-1/2 -translate-x-1/2 top-[48px] z-10">
          <span class="px-2 py-0.5 rounded text-[10px] font-mono text-sky-300 bg-slate-900 border border-sky-800/80 shadow">
            coreId: eventID (1:N)
          </span>
        </div>

        <!-- Center Alert: Breaks Star Schema -->
        <div class="absolute left-1/2 -translate-x-1/2 top-[92px] z-10">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold text-rose-300 bg-rose-950/90 border border-rose-500 shadow-md">
            ⚠️ Breaks Star Schema!
          </span>
        </div>

        <!-- Left Spoke Label (Abiotic) -->
        <div class="absolute left-[175px] top-[140px] z-10">
          <span class="px-2 py-0.5 rounded text-[9.5px] font-sans font-medium text-sky-200 bg-sky-950/90 border border-sky-500/50 shadow">
            Abiotic (Temp, Salinity)
          </span>
        </div>

        <!-- Right Spoke Label (Biometric) -->
        <div class="absolute right-[170px] top-[140px] z-10">
          <span class="px-2 py-0.5 rounded text-[9.5px] font-sans font-bold text-rose-200 bg-rose-950/90 border border-rose-500 shadow animate-pulse">
            ⚡ Biometric (Length, Weight)
          </span>
        </div>

        <!-- CIRCLE 1: EVENT CORE (Top-Left) -->
        <div class="absolute left-[135px] top-[12px] z-10 flex flex-col items-center">
          <div class="w-26 h-26 rounded-full bg-gradient-to-br from-sky-950 via-slate-900 to-sky-900 border-2 border-sky-400 shadow-xl shadow-sky-500/20 flex flex-col items-center justify-center p-2 text-center">
            <span class="text-xs">⭐</span>
            <div class="text-xs font-black text-white leading-tight">Event</div>
            <div class="text-[8.5px] font-mono text-sky-300 font-bold uppercase tracking-wider">CORE HUB</div>
            <div class="text-[8px] font-mono text-slate-400">eventID: E01</div>
          </div>
          <span class="text-[9px] font-mono text-slate-400 mt-1">Sampling Station</span>
        </div>

        <!-- CIRCLE 2: OCCURRENCE EXTENSION (Top-Right) -->
        <div class="absolute right-[135px] top-[12px] z-10 flex flex-col items-center">
          <div class="w-26 h-26 rounded-full bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 border-2 border-emerald-400 shadow-xl shadow-emerald-500/20 flex flex-col items-center justify-center p-2 text-center">
            <span class="text-xs">🐟</span>
            <div class="text-xs font-black text-white leading-tight">Occurrence</div>
            <div class="text-[8.5px] font-mono text-emerald-300 font-bold uppercase tracking-wider">EXTENSION</div>
            <div class="text-[8px] font-mono text-slate-400">occurrenceID: O42</div>
          </div>
          <span class="text-[9px] font-mono text-slate-400 mt-1">Specimen / Organism</span>
        </div>

        <!-- CIRCLE 3: eMoF EXTENSION (Bottom-Center) -->
        <div class="absolute left-1/2 -translate-x-1/2 bottom-[10px] z-10 flex flex-col items-center">
          <div class="w-26 h-26 rounded-full bg-gradient-to-br from-amber-950 via-slate-900 to-amber-900 border-2 border-amber-400 shadow-xl shadow-amber-500/25 flex flex-col items-center justify-center p-2 text-center">
            <span class="text-xs">📏</span>
            <div class="text-xs font-black text-white leading-tight">eMoF</div>
            <div class="text-[8.5px] font-mono text-amber-300 font-bold uppercase tracking-wider">EXTENSION</div>
            <div class="text-[8px] font-mono text-slate-400">Dual FKs</div>
          </div>
          <span class="text-[9px] font-mono text-slate-400 mt-1">Measurements & Facts</span>
        </div>

      </div>

      <!-- Bottom Explanatory Banner -->
      <div class="w-full bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 flex items-center justify-between text-[11px] text-slate-300">
        <div class="flex items-center gap-1.5">
          <span class="text-amber-400 font-bold">Why it breaks the star:</span>
          <span>A pure Star Schema allows links <em>only</em> toward the central Core (<code class="text-sky-300 font-mono">Event</code>). Connecting to <code class="text-emerald-300 font-mono">Occurrence</code> creates a multi-table graph that <code class="text-purple-300 font-mono">meta.xml</code> cannot formally declare.</span>
        </div>
      </div>

    </div>

  </div>
</template>

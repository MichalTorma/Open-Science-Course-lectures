<template>
  <div class="w-full flex flex-col items-center select-none py-0.5">
    
    <div class="relative w-full max-w-[880px] bg-slate-950/85 border border-slate-800 rounded-2xl p-2.5 shadow-2xl backdrop-blur-md flex flex-col items-center">
      
      <!-- Top Legend -->
      <div class="w-full flex items-center justify-between pb-1.5 mb-1 border-b border-slate-800/80 text-xs font-mono">
        <span class="text-slate-300 font-semibold text-[11px] flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          DwC-DP: Frictionless Multi-Table Relational Graph
        </span>
        <div class="flex items-center gap-3 text-[10.5px]">
          <span class="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span class="w-3.5 h-0.5 bg-emerald-400 inline-block"></span>
            datapackage.json Foreign Keys
          </span>
          <span class="px-2 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-600/50 text-[10px]">
            Ratified May 2026
          </span>
        </div>
      </div>

      <!-- Diagram Canvas -->
      <div class="relative w-full h-[270px]">
        
        <!-- SVG Connecting Arrows (Layer 0) -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 860 270">
          <defs>
            <marker id="arrow-sky" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
            </marker>
            <marker id="arrow-emerald" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#34d399" />
            </marker>
            <marker id="arrow-teal" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2dd4bf" />
            </marker>
            <marker id="arrow-purple" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#c084fc" />
            </marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24" />
            </marker>
            <marker id="arrow-rose" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f43f5e" />
            </marker>
            <marker id="arrow-indigo" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#818cf8" />
            </marker>
            <marker id="arrow-orange" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fb923c" />
            </marker>
          </defs>

          <!-- 1. occurrences -> events (Horizontal Top-Center) -->
          <line x1="390" y1="52" x2="265" y2="52" stroke="#38bdf8" stroke-width="1.8" marker-end="url(#arrow-sky)" />

          <!-- 2. materials -> occurrences (Horizontal Top-Right) -->
          <line x1="615" y1="52" x2="495" y2="52" stroke="#34d399" stroke-width="1.8" marker-end="url(#arrow-emerald)" />

          <!-- 3. taxa -> occurrences (Top-Right Angle to Occurrences) -->
          <line x1="770" y1="80" x2="495" y2="55" stroke="#818cf8" stroke-width="1.6" stroke-dasharray="3 2" marker-end="url(#arrow-indigo)" />

          <!-- 4. sequences -> materials (Vertical / Angle Right) -->
          <line x1="660" y1="185" x2="660" y2="92" stroke="#c084fc" stroke-width="1.8" marker-end="url(#arrow-purple)" />

          <!-- 5. measurements -> occurrences (Vertical Center) -->
          <line x1="440" y1="185" x2="440" y2="92" stroke="#fbbf24" stroke-width="1.8" marker-end="url(#arrow-amber)" />

          <!-- 6. measurements -> events (Diagonal to Events) -->
          <path d="M 400 200 Q 300 180 230 85" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="4 2" marker-end="url(#arrow-sky)" fill="none" />

          <!-- 7. multimedia -> occurrences (Diagonal to Occurrences) -->
          <path d="M 245 200 Q 340 160 410 88" stroke="#f43f5e" stroke-width="1.6" marker-end="url(#arrow-rose)" fill="none" />

          <!-- 8. multimedia -> materials (Diagonal to Materials) -->
          <path d="M 260 215 Q 460 250 630 88" stroke="#f43f5e" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#arrow-rose)" fill="none" />

          <!-- 9. citations / literature -> occurrences & events (Left to Event) -->
          <line x1="105" y1="80" x2="185" y2="55" stroke="#fb923c" stroke-width="1.6" marker-end="url(#arrow-orange)" />

          <!-- 10. interactions -> occurrences (Bottom Right-Center) -->
          <path d="M 770 205 Q 630 180 485 85" stroke="#2dd4bf" stroke-width="1.5" stroke-dasharray="4 2" marker-end="url(#arrow-teal)" fill="none" />
        </svg>

        <!-- Central High-Level Badge -->
        <div class="absolute left-1/2 -translate-x-1/2 top-[128px] z-10 pointer-events-none">
          <span class="px-2.5 py-0.5 rounded-full text-[9px] font-sans font-bold text-emerald-200 bg-emerald-950/90 border border-emerald-500/80 shadow-lg flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Any-to-Any Foreign Key Graph
          </span>
        </div>

        <!-- ================= CIRCLES / DATA NODES ================= -->

        <!-- 1. CITATIONS / LITERATURE (Far Top-Left) -->
        <div class="absolute left-[30px] top-[40px] z-10 flex flex-col items-center">
          <div class="w-20 h-20 rounded-full bg-gradient-to-br from-orange-950 via-slate-900 to-orange-900 border-2 border-orange-400 shadow-md shadow-orange-500/20 flex flex-col items-center justify-center p-1 text-center hover:scale-105 transition-transform cursor-pointer">
            <span class="text-[11px]">📚</span>
            <div class="text-[9.5px] font-black text-white leading-tight">literature</div>
            <div class="text-[6.5px] font-mono text-orange-300 font-bold uppercase">Papers & DOIs</div>
            <div class="text-[6.5px] font-mono text-slate-400">FK: event/occID</div>
          </div>
          <span class="text-[7.5px] font-mono text-slate-400 mt-0.5">Studies & Grants</span>
        </div>

        <!-- 2. EVENTS (Top Left-Center) -->
        <div class="absolute left-[180px] top-[10px] z-10 flex flex-col items-center">
          <div class="w-22 h-22 rounded-full bg-gradient-to-br from-sky-950 via-slate-900 to-sky-900 border-2 border-sky-400 shadow-lg shadow-sky-500/20 flex flex-col items-center justify-center p-1 text-center hover:scale-105 transition-transform cursor-pointer">
            <span class="text-[12px]">📅</span>
            <div class="text-[10.5px] font-black text-white leading-tight">events</div>
            <div class="text-[7px] font-mono text-sky-300 font-bold uppercase">Surveys / Cruises</div>
            <div class="text-[7px] font-mono text-slate-400">PK: eventID</div>
          </div>
          <span class="text-[8px] font-mono text-slate-400 mt-0.5">Sampling Protocol</span>
        </div>

        <!-- 3. OCCURRENCES (Top Center) -->
        <div class="absolute left-1/2 -translate-x-1/2 top-[10px] z-10 flex flex-col items-center">
          <div class="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 border-2 border-emerald-400 shadow-xl shadow-emerald-500/20 flex flex-col items-center justify-center p-1 text-center hover:scale-105 transition-transform cursor-pointer">
            <span class="text-[13px]">🐟</span>
            <div class="text-[11.5px] font-black text-white leading-tight">occurrences</div>
            <div class="text-[7.5px] font-mono text-emerald-300 font-bold uppercase">Organisms / Sightings</div>
            <div class="text-[7.5px] font-mono text-slate-400">PK: occurrenceID</div>
          </div>
          <span class="text-[8px] font-mono text-emerald-300/80 mt-0.5">Organism Evidence</span>
        </div>

        <!-- 4. MATERIAL ENTITIES (Top Right-Center) -->
        <div class="absolute right-[180px] top-[10px] z-10 flex flex-col items-center">
          <div class="w-22 h-22 rounded-full bg-gradient-to-br from-teal-950 via-slate-900 to-teal-900 border-2 border-teal-400 shadow-lg shadow-teal-500/20 flex flex-col items-center justify-center p-1 text-center hover:scale-105 transition-transform cursor-pointer">
            <span class="text-[12px]">🧪</span>
            <div class="text-[10.5px] font-black text-white leading-tight">materials</div>
            <div class="text-[7px] font-mono text-teal-300 font-bold uppercase">Vouchers / Tissues</div>
            <div class="text-[7px] font-mono text-slate-400">PK: materialID</div>
          </div>
          <span class="text-[8px] font-mono text-slate-400 mt-0.5">Physical Specimens</span>
        </div>

        <!-- 5. TAXON / IDENTIFICATIONS (Far Top-Right) -->
        <div class="absolute right-[30px] top-[40px] z-10 flex flex-col items-center">
          <div class="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 border-2 border-indigo-400 shadow-md shadow-indigo-500/20 flex flex-col items-center justify-center p-1 text-center hover:scale-105 transition-transform cursor-pointer">
            <span class="text-[11px]">🏷️</span>
            <div class="text-[9.5px] font-black text-white leading-tight">taxa</div>
            <div class="text-[6.5px] font-mono text-indigo-300 font-bold uppercase">Concepts & IDs</div>
            <div class="text-[6.5px] font-mono text-slate-400">FK: taxonID</div>
          </div>
          <span class="text-[7.5px] font-mono text-slate-400 mt-0.5">Checklists / Trees</span>
        </div>

        <!-- BOTTOM ROW -->

        <!-- 6. MULTIMEDIA (Bottom Left) -->
        <div class="absolute left-[180px] bottom-[6px] z-10 flex flex-col items-center">
          <div class="w-21 h-21 rounded-full bg-gradient-to-br from-rose-950 via-slate-900 to-rose-900 border-2 border-rose-400 shadow-lg shadow-rose-500/20 flex flex-col items-center justify-center p-1 text-center hover:scale-105 transition-transform cursor-pointer">
            <span class="text-[11px]">📸</span>
            <div class="text-[10px] font-black text-white leading-tight">multimedia</div>
            <div class="text-[7px] font-mono text-rose-300 font-bold uppercase">Photos / 3D / Audio</div>
            <div class="text-[6.5px] font-mono text-slate-400">Audubon Core</div>
          </div>
          <span class="text-[7.5px] font-mono text-slate-400 mt-0.5">Soundscapes & Scans</span>
        </div>

        <!-- 7. MEASUREMENTS & SENSORS (Bottom Center) -->
        <div class="absolute left-1/2 -translate-x-1/2 bottom-[6px] z-10 flex flex-col items-center">
          <div class="w-22 h-22 rounded-full bg-gradient-to-br from-amber-950 via-slate-900 to-amber-900 border-2 border-amber-400 shadow-lg shadow-amber-500/20 flex flex-col items-center justify-center p-1 text-center hover:scale-105 transition-transform cursor-pointer">
            <span class="text-[12px]">📏</span>
            <div class="text-[10px] font-black text-white leading-tight">measurements</div>
            <div class="text-[7px] font-mono text-amber-300 font-bold uppercase">Abiotic & Traits</div>
            <div class="text-[6.5px] font-mono text-emerald-300 font-bold">Dual Keys (occ + ev)</div>
          </div>
          <span class="text-[7.5px] font-mono text-slate-400 mt-0.5">eMoF Sensors & Traits</span>
        </div>

        <!-- 8. DNA SEQUENCES (Bottom Right) -->
        <div class="absolute right-[180px] bottom-[6px] z-10 flex flex-col items-center">
          <div class="w-21 h-21 rounded-full bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900 border-2 border-purple-400 shadow-lg shadow-purple-500/20 flex flex-col items-center justify-center p-1 text-center hover:scale-105 transition-transform cursor-pointer">
            <span class="text-[11px]">🧬</span>
            <div class="text-[10px] font-black text-white leading-tight">sequences</div>
            <div class="text-[7px] font-mono text-purple-300 font-bold uppercase">Barcodes / eDNA</div>
            <div class="text-[6.5px] font-mono text-slate-400">FK: materialID</div>
          </div>
          <span class="text-[7.5px] font-mono text-slate-400 mt-0.5">Genomics & Assays</span>
        </div>

        <!-- 9. INTERACTIONS (Bottom Far-Right) -->
        <div class="absolute right-[30px] bottom-[25px] z-10 flex flex-col items-center">
          <div class="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-950 via-slate-900 to-cyan-900 border-2 border-cyan-400 shadow-md shadow-cyan-500/20 flex flex-col items-center justify-center p-1 text-center hover:scale-105 transition-transform cursor-pointer">
            <span class="text-[11px]">🕸️</span>
            <div class="text-[9.5px] font-black text-white leading-tight">interactions</div>
            <div class="text-[6.5px] font-mono text-cyan-300 font-bold uppercase">Predator / Host</div>
            <div class="text-[6.5px] font-mono text-slate-400">FK: relatedOccID</div>
          </div>
          <span class="text-[7.5px] font-mono text-slate-400 mt-0.5">Food Webs & GloBI</span>
        </div>

      </div>

      <!-- Bottom Explanatory Banner -->
      <div class="w-full bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 flex items-center justify-between text-[10.5px] text-slate-300">
        <div class="flex items-center gap-1.5">
          <span class="text-emerald-400 font-bold">Limitless Extensibility:</span>
          <span>Any table (sensor telemetry, vouchers, barcodes, ecological networks, publications) can join to any other via declarative <code class="text-emerald-300 font-mono">foreignKeys</code> in <code class="text-emerald-300 font-mono">datapackage.json</code>.</span>
        </div>
      </div>

    </div>

  </div>
</template>


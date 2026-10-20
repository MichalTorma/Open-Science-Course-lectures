<template>
  <div class="select-none flex flex-col justify-between h-full w-full">
    
    <!-- 2D Coordinate Graph Container (Full Screen) -->
    <div class="relative w-full h-[450px] rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl p-4 overflow-hidden">
      
      <!-- Subtle Corner Badge -->
      <div class="absolute right-4 top-3 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-400 z-10">
        2D Coordinate Map · Semantic Distance vs. Difficulty
      </div>

      <!-- Background SVG: Grid Lines, Axes, Arrows, and Progression Arc -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-axis-y" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,6 L3,0 L6,6" fill="#94a3b8" />
          </marker>
          <marker id="arrow-axis-x" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="#94a3b8" />
          </marker>
        </defs>

        <!-- Horizontal Guide Gridlines -->
        <line x1="75" y1="55" x2="96%" y2="55" stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8" opacity="0.35" />
        <line x1="75" y1="125" x2="96%" y2="125" stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8" opacity="0.35" />
        <line x1="75" y1="195" x2="96%" y2="195" stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8" opacity="0.35" />
        <line x1="75" y1="265" x2="96%" y2="265" stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8" opacity="0.35" />
        <line x1="75" y1="335" x2="96%" y2="335" stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8" opacity="0.35" />

        <!-- Vertical Guide Gridlines -->
        <line x1="25%" y1="20" x2="25%" y2="395" stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8" opacity="0.25" />
        <line x1="48%" y1="20" x2="48%" y2="395" stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8" opacity="0.25" />
        <line x1="72%" y1="20" x2="72%" y2="395" stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8" opacity="0.25" />

        <!-- Y Axis Line -->
        <line x1="75" y1="395" x2="75" y2="18" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrow-axis-y)" />
        
        <!-- X Axis Line -->
        <line x1="75" y1="395" x2="97%" y2="395" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrow-axis-x)" />

        <!-- Traditional Progression Arc (Bytecode -> ASM -> C -> R -> GUI) -->
        <path 
          d="M 835 48 Q 695 105, 540 170 T 375 240 Q 240 275, 185 305" 
          fill="none" 
          stroke="#475569" 
          stroke-width="1.5" 
          stroke-dasharray="4,4" 
          opacity="0.45"
        />

        <!-- Leap to AI Arc (Revealed on click 1) -->
        <path 
          v-click="1"
          d="M 185 305 Q 135 325, 95 360" 
          fill="none" 
          stroke="#ec4899" 
          stroke-width="1.8" 
          stroke-dasharray="3,3" 
          opacity="0.85"
        />
      </svg>

      <!-- Y Axis Top Label -->
      <div class="absolute left-[85px] top-2 text-[10px] font-mono text-rose-400 font-bold tracking-tight">
        ↑ HIGH SEMANTIC DISTANCE
        <span class="text-[8.5px] text-slate-500 font-normal ml-1.5">(Silicon Hardware & Voltage States)</span>
      </div>

      <!-- Bottom Labels (Cleanly positioned below X-axis) -->
      <div class="absolute left-[85px] bottom-6 text-[9.5px] font-mono text-emerald-400 font-bold tracking-tight">
        ↓ LOW SEMANTIC DISTANCE
        <span class="text-[8.5px] text-slate-500 font-normal ml-1.5">(Human Domain Thought: Taxa, Occurrences, Maps)</span>
      </div>
      <div class="absolute left-[85px] bottom-1 text-[9.5px] font-mono text-emerald-400 font-bold tracking-tight">
        ← LOW DIFFICULTY
        <span class="text-[8.5px] text-slate-500 font-normal ml-1.5">(Intuitive / Direct Domain Interaction)</span>
      </div>

      <div class="absolute right-4 bottom-2 text-[10px] font-mono text-rose-400 font-bold tracking-tight">
        HIGH DIFFICULTY →
        <span class="text-[8.5px] text-slate-500 font-normal ml-1.5">(Cryptic / Manual Memory & Hardware)</span>
      </div>

      <!-- Plotted Points -->

      <!-- Point 1: Machine Code & Bytecode (Top-Right) -->
      <div class="absolute right-8 top-[28px] flex items-center gap-2.5">
        <div class="p-2 px-2.5 rounded-lg bg-slate-900/95 border border-rose-500/50 shadow-lg text-left backdrop-blur-sm">
          <div class="text-[11px] font-bold text-rose-300 flex items-center gap-1.5">
            <span>⚡</span> Bytecode & Machine Code
          </div>
          <div class="text-[9px] text-slate-400 font-mono">
            Raw binary (0101), CPU opcodes, transistor voltages
          </div>
        </div>
        <div class="w-4 h-4 rounded-full bg-rose-500 border-2 border-white shadow-[0_0_14px_rgba(244,63,94,0.95)] shrink-0"></div>
      </div>

      <!-- Point 2: Assembly (ASM) (Upper-Right) -->
      <div class="absolute right-[210px] top-[92px] flex items-center gap-2.5">
        <div class="p-2 px-2.5 rounded-lg bg-slate-900/95 border border-orange-500/50 shadow-lg text-left backdrop-blur-sm">
          <div class="text-[11px] font-bold text-orange-300 flex items-center gap-1.5">
            <span>⚙️</span> Assembly (ASM)
          </div>
          <div class="text-[9px] text-slate-400 font-mono">
            Registers (RAX, RSP), stack offsets, hardware mnemonics
          </div>
        </div>
        <div class="w-4 h-4 rounded-full bg-orange-500 border-2 border-white shadow-[0_0_14px_rgba(249,115,22,0.95)] shrink-0"></div>
      </div>

      <!-- Point 3: Systems (C & Rust) (Center) -->
      <div class="absolute left-[54%] top-[162px] flex items-center gap-2.5">
        <div class="w-4 h-4 rounded-full bg-sky-500 border-2 border-white shadow-[0_0_14px_rgba(56,189,248,0.95)] shrink-0"></div>
        <div class="p-2 px-2.5 rounded-lg bg-slate-900/95 border border-sky-500/50 shadow-lg text-left backdrop-blur-sm">
          <div class="text-[11px] font-bold text-sky-300 flex items-center gap-1.5">
            <span>🦀</span> C / Rust (Systems)
          </div>
          <div class="text-[9px] text-slate-400 font-mono">
            Structs, pointers, native compilation & manual memory
          </div>
        </div>
      </div>

      <!-- Point 4: Scientific R & tidyverse (Lower-Center, Code Syntax) -->
      <div class="absolute left-[37%] top-[228px] flex items-center gap-2.5">
        <div class="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-[0_0_14px_rgba(16,185,129,0.95)] shrink-0"></div>
        <div class="p-2 px-2.5 rounded-lg bg-slate-900/95 border border-emerald-500/50 shadow-lg text-left backdrop-blur-sm">
          <div class="text-[11px] font-bold text-emerald-300 flex items-center gap-1.5">
            <span>📊</span> Scientific R (tidyverse)
          </div>
          <div class="text-[9px] text-slate-400 font-mono">
            DataFrames, pipes, domain models (rgbif, sf)
          </div>
        </div>
      </div>

      <!-- Point 5: GUI (Spreadsheets & Web Forms - LOWER semantic distance than R!) -->
      <div class="absolute left-[18%] top-[292px] flex items-center gap-2.5">
        <div class="w-4 h-4 rounded-full bg-purple-500 border-2 border-white shadow-[0_0_14px_rgba(168,85,247,0.95)] shrink-0"></div>
        <div class="p-2 px-2.5 rounded-lg bg-slate-900/95 border border-purple-500/50 shadow-lg text-left backdrop-blur-sm">
          <div class="text-[11px] font-bold text-purple-300 flex items-center gap-1.5">
            <span>🖥️</span> GUI (IPT, Excel, QGIS)
          </div>
          <div class="text-[9px] text-slate-400 font-mono">
            Direct visual manipulation of domain fields; zero code syntax
          </div>
        </div>
      </div>

      <!-- Point 6: AI & Natural Language (REVEALED ON CLICK 1 - LOWEST SEMANTIC DISTANCE) -->
      <div 
        v-click="1"
        class="absolute left-[82px] top-[348px] z-20 flex items-center gap-3"
      >
        <!-- Pulsing Aura Beacon -->
        <div class="relative flex items-center justify-center shrink-0">
          <div class="absolute w-6 h-6 rounded-full bg-fuchsia-400/50 animate-ping"></div>
          <div class="w-4 h-4 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 border-2 border-white shadow-[0_0_22px_rgba(236,72,153,1)]"></div>
        </div>
        
        <!-- Premium AI Card -->
        <div class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-fuchsia-950/95 via-purple-950/95 to-slate-900 border-2 border-fuchsia-400 shadow-[0_0_25px_rgba(236,72,153,0.45)] text-left backdrop-blur-md">
          <div class="flex items-center gap-2">
            <span class="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-pink-200 to-amber-200 flex items-center gap-1.5">
              <span>✨</span> AI & Natural Language
            </span>
            <span class="text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.2 rounded bg-fuchsia-500/30 text-fuchsia-200 border border-fuchsia-400/60 font-bold">
              NEW PARADIGM
            </span>
          </div>
          <div class="text-[9px] text-fuchsia-100 font-sans mt-0.5">
            Zero semantic distance: Domain intent expressed directly in natural human language
          </div>
        </div>
      </div>

    </div>

    <!-- Takeaway Callout (REVEALED ON CLICK 1) -->
    <div 
      v-click="1"
      class="mt-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-fuchsia-950/90 via-purple-950/80 to-slate-900 border border-fuchsia-500/50 flex items-center justify-between text-xs shadow-lg"
    >
      <div class="flex items-center gap-2.5">
        <span class="text-lg">✨</span>
        <div class="text-[11px] leading-snug">
          <strong class="text-fuchsia-300 font-semibold">The AI Paradigm Shift:</strong>
          <span class="text-slate-200 ml-1">For 70 years, scientists had to learn programming syntax or rely on rigid GUIs. Generative AI collapses semantic distance — the computer now understands <strong>direct human domain intent</strong>.</span>
        </div>
      </div>
      <span class="shrink-0 ml-3 text-[9px] font-mono px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40 font-semibold">
        NEXT: AI IN DATA PUBLISHING →
      </span>
    </div>

  </div>
</template>

<script setup>
</script>

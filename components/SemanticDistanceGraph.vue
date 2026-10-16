<template>
  <div class="w-full flex flex-col items-center select-none py-1">
    
    <div class="relative w-full max-w-[900px] bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md flex flex-col items-center">
      
      <!-- Top Legend & Axis Indicator -->
      <div class="w-full flex items-center justify-between pb-2 mb-2.5 border-b border-slate-800 text-xs font-mono">
        <span class="text-slate-300 font-semibold text-[11px] flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400"></span>
          The Hierarchy of Programming Languages: A Spectrum of Semantic Distance
        </span>
        <div class="flex items-center gap-3 text-[10px]">
          <span class="text-rose-400 font-bold flex items-center gap-1">
            <span>⬅</span> Silicon Proximity (Machine)
          </span>
          <span class="text-emerald-400 font-bold flex items-center gap-1">
            Domain Proximity (Human) <span>➔</span>
          </span>
        </div>
      </div>

      <!-- 4-Tier Horizontal Progression Cards -->
      <div class="grid grid-cols-4 gap-3 w-full">

        <!-- Tier 1: Bytecode & Machine Code -->
        <div class="p-3 rounded-xl bg-slate-900/90 border border-rose-500/40 shadow-md flex flex-col justify-between text-center relative group hover:border-rose-400 transition-all">
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[8.5px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800/60 font-bold">LEVEL 0</span>
              <span class="text-sm">⚡</span>
            </div>
            <div class="text-xs font-black text-white leading-tight">Bytecode / Binary</div>
            <div class="text-[8px] font-mono text-rose-400 font-bold mt-0.5 uppercase">Machine Code</div>
            
            <div class="mt-2.5 p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[8px] text-rose-300/90 text-left leading-relaxed">
              01001000 10001001<br/>
              11000011 00000000<br/>
              01100110 00101110
            </div>
          </div>
          <div class="mt-2.5 pt-1.5 border-t border-slate-800/80 text-[8px] text-slate-400">
            Direct CPU silicon execution & voltage gate states
          </div>
        </div>

        <!-- Tier 2: Assembly -->
        <div class="p-3 rounded-xl bg-slate-900/90 border border-orange-500/40 shadow-md flex flex-col justify-between text-center relative group hover:border-orange-400 transition-all">
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[8.5px] font-mono px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-800/60 font-bold">LEVEL 1</span>
              <span class="text-sm">⚙️</span>
            </div>
            <div class="text-xs font-black text-white leading-tight">Assembly (ASM)</div>
            <div class="text-[8px] font-mono text-orange-400 font-bold mt-0.5 uppercase">Hardware Mnemonics</div>
            
            <div class="mt-2.5 p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[8px] text-orange-300/90 text-left leading-relaxed">
              MOV EAX, [EBX+4]<br/>
              ADD EAX, ECX<br/>
              RET
            </div>
          </div>
          <div class="mt-2.5 pt-1.5 border-t border-slate-800/80 text-[8px] text-slate-400">
            1:1 symbolic mapping to physical CPU registers
          </div>
        </div>

        <!-- Tier 3: C / Rust / Systems -->
        <div class="p-3 rounded-xl bg-slate-900/90 border border-sky-500/40 shadow-md flex flex-col justify-between text-center relative group hover:border-sky-400 transition-all">
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[8.5px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/60 font-bold">LEVEL 2</span>
              <span class="text-sm">🦀</span>
            </div>
            <div class="text-xs font-black text-white leading-tight">C / Rust / C++</div>
            <div class="text-[8px] font-mono text-sky-400 font-bold mt-0.5 uppercase">Compiled Systems</div>
            
            <div class="mt-2.5 p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[8px] text-sky-300/90 text-left leading-relaxed">
              struct Specimen {<br/>
              &nbsp;&nbsp;id: u64,<br/>
              &nbsp;&nbsp;coords: [f64; 2]<br/>
              }
            </div>
          </div>
          <div class="mt-2.5 pt-1.5 border-t border-slate-800/80 text-[8px] text-slate-400">
            Manual memory control, structs & native binaries
          </div>
        </div>

        <!-- Tier 4: Python / R (Object-Oriented Scientific) -->
        <div class="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/40 shadow-md flex flex-col justify-between text-center relative group hover:border-emerald-400 transition-all">
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[8.5px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60 font-bold">LEVEL 3</span>
              <span class="text-sm">🐍</span>
            </div>
            <div class="text-xs font-black text-white leading-tight">Python / R</div>
            <div class="text-[8px] font-mono text-emerald-400 font-bold mt-0.5 uppercase">Scientific Objects</div>
            
            <div class="mt-2.5 p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[8px] text-emerald-300/90 text-left leading-relaxed">
              df.filter(<br/>
              &nbsp;&nbsp;lat &gt; 0<br/>
              ).groupby('taxon')<br/>
              .count()
            </div>
          </div>
          <div class="mt-2.5 pt-1.5 border-t border-slate-800/80 text-[8px] text-slate-400">
            Dataframes, objects, vectorization & packages
          </div>
        </div>

      </div>

      <!-- Comparative Gradient Spectrum Bars -->
      <div class="w-full mt-3 space-y-2 px-1 font-mono">
        
        <!-- Bar 1: Semantic Distance from Human Thought -->
        <div class="flex items-center gap-2 text-[9.5px]">
          <span class="w-38 text-slate-400 shrink-0 text-right">Semantic Distance:</span>
          <div class="flex-1 h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden relative flex">
            <div class="h-full w-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 opacity-90"></div>
          </div>
          <div class="w-32 text-[8px] text-slate-300 flex justify-between shrink-0 pl-1">
            <span class="text-rose-400">Extreme</span>
            <span class="text-emerald-400">Low</span>
          </div>
        </div>

        <!-- Bar 2: Cognitive Burden on Scientist -->
        <div class="flex items-center gap-2 text-[9.5px]">
          <span class="w-38 text-slate-400 shrink-0 text-right">Cognitive Translation:</span>
          <div class="flex-1 h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden relative flex">
            <div class="h-full w-full bg-gradient-to-r from-rose-600 via-orange-500 to-emerald-500 opacity-90"></div>
          </div>
          <div class="w-32 text-[8px] text-slate-300 flex justify-between shrink-0 pl-1">
            <span class="text-rose-400">Exhausting</span>
            <span class="text-emerald-400">Manageable</span>
          </div>
        </div>

        <!-- Bar 3: Hardware Control & Determinism -->
        <div class="flex items-center gap-2 text-[9.5px]">
          <span class="w-38 text-slate-400 shrink-0 text-right">Hardware Control:</span>
          <div class="flex-1 h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden relative flex">
            <div class="h-full w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-600 opacity-90"></div>
          </div>
          <div class="w-32 text-[8px] text-slate-300 flex justify-between shrink-0 pl-1">
            <span class="text-emerald-400">Total (100%)</span>
            <span class="text-purple-400">Abstracted</span>
          </div>
        </div>

      </div>

      <!-- Bottom Insight Callout -->
      <div class="w-full mt-3 bg-slate-900/90 border border-slate-800 rounded-lg px-3.5 py-2 flex items-center justify-between text-[10.5px] text-slate-300">
        <div class="flex items-center gap-2">
          <span class="text-sky-400 font-bold">The Abstraction Ladder:</span>
          <span>Each level of the language hierarchy trades low-level hardware control for higher expressive power — moving computational science closer to natural human thought.</span>
        </div>
      </div>

    </div>

  </div>
</template>

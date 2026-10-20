<template>
  <div class="h-full w-full select-none flex flex-col justify-between p-4 bg-slate-950 text-white overflow-hidden font-sans">
    
    <!-- Top Header Bar -->
    <div class="flex items-center justify-between pb-2 border-b border-slate-800 shrink-0">
      <div class="flex items-center gap-2.5">
        <span class="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[9.5px] font-mono font-bold tracking-wider">
          THE COST OF ABSTRACTION
        </span>
        <div class="text-[15px] font-extrabold tracking-tight text-white flex items-center gap-1.5">
          <span>The Onion of Implicit Trust:</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-fuchsia-400">
            Distance from Silicon
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
        <span class="text-emerald-400 font-semibold">Deterministic Physics</span>
        <span class="text-slate-600">➔</span>
        <span class="text-amber-400 font-semibold">Code Trust</span>
        <span class="text-slate-600">➔</span>
        <span class="text-fuchsia-400 font-bold">Probabilistic Faith</span>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="flex-1 grid grid-cols-12 gap-5 items-center min-h-0 py-2">
      
      <!-- Left: Concentric Onion Graphic (5 cols) -->
      <div class="col-span-5 h-full flex flex-col items-center justify-center relative">
        <div class="relative w-[270px] h-[270px] flex items-center justify-center">
          
          <!-- Layer 6: AI & LLMs (Outermost Shell, v-click="1") -->
          <div 
            v-click="1"
            class="absolute inset-0 rounded-full border-2 border-dashed border-fuchsia-400 bg-fuchsia-500/10 shadow-[0_0_26px_rgba(236,72,153,0.5)] animate-pulse flex items-start justify-center pt-1"
          >
            <span class="px-2 py-0.2 rounded-full bg-fuchsia-950/95 text-fuchsia-200 border border-fuchsia-400 text-[7.5px] font-mono font-black uppercase tracking-wider shadow">
              ✨ Layer 6 · Generative AI
            </span>
          </div>

          <!-- Layer 5: GUI Applications -->
          <div class="absolute inset-[20px] rounded-full border border-purple-400/80 bg-purple-500/10 flex items-start justify-center pt-0.5">
            <span class="px-1.5 py-0.1 rounded bg-slate-950/90 text-purple-300 border border-purple-500/50 text-[7px] font-mono font-bold">
              🖥️ Layer 5 · GUI (IPT, Excel)
            </span>
          </div>

          <!-- Layer 4: Scientific R Stack -->
          <div class="absolute inset-[42px] rounded-full border border-sky-400/80 bg-sky-500/10 flex items-start justify-center pt-0.5">
            <span class="px-1.5 py-0.1 rounded bg-slate-950/90 text-sky-300 border border-sky-500/50 text-[7px] font-mono font-bold">
              📊 Layer 4 · Scientific R Stack
            </span>
          </div>

          <!-- Layer 3: C / Rust Compilers -->
          <div class="absolute inset-[64px] rounded-full border border-teal-400/80 bg-teal-500/10 flex items-start justify-center pt-0.5">
            <span class="px-1.5 py-0.1 rounded bg-slate-950/90 text-teal-300 border border-teal-500/50 text-[7px] font-mono font-bold">
              🦀 Layer 3 · C / Rust
            </span>
          </div>

          <!-- Layer 2: Assembly & Kernel -->
          <div class="absolute inset-[86px] rounded-full border border-orange-400/80 bg-orange-500/15 flex items-start justify-center pt-0.5">
            <span class="px-1 py-0.1 rounded bg-slate-950/90 text-orange-300 border border-orange-500/50 text-[6.5px] font-mono font-semibold">
              ⚙️ Layer 2 · ASM & OS
            </span>
          </div>

          <!-- Layer 1: Bytecode & Microcode -->
          <div class="absolute inset-[108px] rounded-full border border-rose-400/80 bg-rose-500/20 flex items-start justify-center pt-0.5">
            <span class="px-1 py-0.1 rounded bg-slate-950/90 text-rose-300 border border-rose-500/50 text-[6px] font-mono font-semibold">
              01 Bytecode
            </span>
          </div>

          <!-- Core: Hardware & Silicon Transistors -->
          <div class="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 border-2 border-white shadow-[0_0_16px_rgba(16,185,129,0.95)] flex flex-col items-center justify-center z-10">
            <span class="text-[11px]">⚡</span>
            <span class="text-[6.5px] font-mono font-black text-slate-950 tracking-tighter leading-none">SILICON</span>
          </div>

        </div>

        <!-- Subtitle below onion -->
        <div class="text-[8.5px] font-mono text-slate-400 mt-2 text-center">
          Concentric Abstraction Shells: <span class="text-amber-400 font-bold">Outermost = Maximum Trust Deficit</span>
        </div>
      </div>

      <!-- Right: Structured Trust Breakdown (7 cols, 4 clean tiers without p tags) -->
      <div class="col-span-7 flex flex-col justify-center gap-2">
        
        <!-- Tier 1: Hardware Core -->
        <div class="p-2 px-3 rounded-lg bg-slate-900/90 border border-emerald-500/40 flex items-center justify-between shadow-sm">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-500/50 flex items-center justify-center text-xs shrink-0 font-bold">
              ⚡
            </div>
            <div>
              <div class="text-[10.5px] font-bold text-emerald-300 flex items-center gap-1.5 leading-none">
                <span>Core · Silicon Hardware & Physics</span>
                <span class="text-[7.5px] font-mono px-1 py-0.1 rounded bg-emerald-900/60 text-emerald-200 border border-emerald-600/40 font-semibold">
                  Zero Software Trust
                </span>
              </div>
              <div class="text-[8.5px] text-slate-300 leading-tight mt-1">
                Grounded in physical laws: transistor voltage states. Deterministic and verifiable with an oscilloscope. Hardware cannot lie about physical state.
              </div>
            </div>
          </div>
          <div class="text-right shrink-0 ml-3">
            <span class="text-[8.5px] font-mono font-bold text-emerald-400 block">100% Deterministic</span>
            <span class="text-[7px] text-slate-500">Physical Reality</span>
          </div>
        </div>

        <!-- Tier 2: Low-Level Architecture, OS & Compilers (Bytecode, ASM, C/Rust) -->
        <div class="p-2 px-3 rounded-lg bg-slate-900/90 border border-sky-500/40 flex items-center justify-between shadow-sm">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-md bg-sky-950 text-sky-400 border border-sky-500/50 flex items-center justify-center text-xs shrink-0 font-bold">
              ⚙️
            </div>
            <div>
              <div class="text-[10.5px] font-bold text-sky-300 flex items-center gap-1.5 leading-none">
                <span>Layers 1–3 · OS Kernel, ASM & Compilers (C/Rust)</span>
                <span class="text-[7.5px] font-mono px-1 py-0.1 rounded bg-sky-900/60 text-sky-200 border border-sky-600/40 font-semibold">
                  Low–Moderate Trust
                </span>
              </div>
              <div class="text-[8.5px] text-slate-300 leading-tight mt-1">
                Trusting CPU microcode, OS virtual memory (MMU), process schedulers, and compiler optimization passes (<code class="font-mono text-sky-300">-O3</code>) not to alter logic.
              </div>
            </div>
          </div>
          <div class="text-right shrink-0 ml-3">
            <span class="text-[8.5px] font-mono font-bold text-sky-300 block">Formal Logic</span>
            <span class="text-[7px] text-slate-500">Determinism Preserved</span>
          </div>
        </div>

        <!-- Tier 3: Scientific R & GUI Tools (R tidyverse, Excel, IPT) -->
        <div class="p-2 px-3 rounded-lg bg-slate-900/90 border border-purple-500/40 flex items-center justify-between shadow-sm">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-lg bg-purple-950 text-purple-400 border border-purple-500/50 flex items-center justify-center text-xs shrink-0 font-bold">
              📊
            </div>
            <div>
              <div class="text-[10.5px] font-bold text-purple-300 flex items-center gap-1.5 leading-none">
                <span>Layers 4–5 · R Packages (`tidyverse`) & GUI Apps (IPT, Excel)</span>
                <span class="text-[7.5px] font-mono px-1 py-0.1 rounded bg-purple-900/60 text-purple-200 border border-purple-600/40 font-semibold">
                  Substantial Trust
                </span>
              </div>
              <div class="text-[8.5px] text-slate-300 leading-tight mt-1">
                Trusting 50+ nested open-source CRAN package authors, R's garbage collector, and Excel's silent defaults (which corrupted ~20% of published genetic papers!).
              </div>
            </div>
          </div>
          <div class="text-right shrink-0 ml-3">
            <span class="text-[8.5px] font-mono font-bold text-purple-300 block">Supply-Chain Trust</span>
            <span class="text-[7px] text-slate-500">Unvetted Codebases</span>
          </div>
        </div>

        <!-- Tier 4: Generative AI & LLMs -->
        <div class="w-full">
          <!-- State before click: Subtle placeholder box -->
          <div 
            v-if="!$slidev.nav.clicks"
            class="p-2 px-3 rounded-lg border border-dashed border-slate-800 bg-slate-900/40 flex items-center justify-between text-slate-500 text-[10px] font-mono"
          >
            <div class="flex items-center gap-2">
              <span class="text-xs">✨</span>
              <span>Next Click ➔ What happens when we reach Generative AI?</span>
            </div>
            <span class="text-[8px] px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700">CLICK NEXT ➔</span>
          </div>

          <!-- State on click 1: Revealed AI Card -->
          <div 
            v-else
            class="p-2 px-3 rounded-lg bg-gradient-to-r from-fuchsia-950/95 via-purple-950/90 to-slate-900 border-2 border-fuchsia-400 shadow-[0_0_22px_rgba(236,72,153,0.5)] flex items-center justify-between animate-fadeIn"
          >
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-md bg-fuchsia-900 text-fuchsia-200 border border-fuchsia-400 flex items-center justify-center text-xs shrink-0 font-bold animate-pulse">
                ✨
              </div>
              <div>
                <div class="text-[10.5px] font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-pink-200 to-amber-200 flex items-center gap-1.5 leading-none">
                  <span>Layer 6 · Generative AI & Large Language Models</span>
                  <span class="text-[7.5px] font-mono uppercase px-1 py-0.1 rounded bg-rose-500/30 text-rose-200 border border-rose-400/60 font-bold">
                    MAXIMUM BLIND TRUST
                  </span>
                </div>
                <div class="text-[8.5px] text-fuchsia-100/90 leading-tight mt-1">
                  <strong>First non-deterministic layer in human history:</strong> Trillions of uninterpretable weights, stochastic sampling, and plausible hallucinations (fake taxa, fabricated DwC terms). Zero formal proofs.
                </div>
              </div>
            </div>
            <div class="text-right shrink-0 ml-3">
              <span class="text-[8.5px] font-mono font-black text-fuchsia-300 block">Probabilistic Faith</span>
              <span class="text-[7px] text-fuchsia-200/80 font-bold">Requires Verification</span>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- Bottom Takeaway Callout (REVEALED ON CLICK 1) -->
    <div 
      v-click="1"
      class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-950/80 via-slate-900 to-fuchsia-950/80 border border-amber-500/40 flex items-center justify-between text-xs shrink-0 shadow-lg"
    >
      <div class="flex items-center gap-2">
        <span class="text-sm text-amber-400">💡</span>
        <div class="text-[10px] leading-snug">
          <strong class="text-amber-300 font-semibold">The Abstraction Paradox:</strong>
          <span class="text-slate-200 ml-1">
            As semantic distance drops to zero, the requirement for human verification skyrockets to 100%. 
            Because AI requires <strong>the most implicit trust of all</strong>, AI in scientific data publishing must always be paired with <strong>active human-in-the-loop validation</strong>.
          </span>
        </div>
      </div>
      <span class="shrink-0 ml-3 text-[8.5px] font-mono px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40 font-semibold">
        HUMAN-IN-THE-LOOP MANDATE →
      </span>
    </div>

  </div>
</template>

<script setup>
</script>

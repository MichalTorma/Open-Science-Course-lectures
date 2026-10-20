<template>
  <div class="h-full w-full select-none flex flex-col justify-between p-4 bg-slate-950 text-white overflow-hidden font-sans">
    
    <!-- Top Header Bar -->
    <div class="flex items-center justify-between pb-2 border-b border-slate-800 shrink-0">
      <div class="flex items-center gap-2.5">
        <span class="px-2 py-0.5 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/40 text-fuchsia-300 text-[9.5px] font-mono font-bold tracking-wider">
          FOUNDATIONAL AI MECHANICS
        </span>
        <div class="text-[15px] font-extrabold tracking-tight text-white flex items-center gap-1.5">
          <span>The Pure LLM:</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-pink-200 to-amber-200">
            A Next-Token Prediction Engine
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
        <span class="text-slate-500">No Search</span>
        <span class="text-slate-700">·</span>
        <span class="text-slate-500">No DB</span>
        <span class="text-slate-700">·</span>
        <span class="text-slate-500">No Logic Rules</span>
        <span class="text-slate-700">·</span>
        <span class="text-fuchsia-400 font-bold">Only Statistical Probability</span>
      </div>
    </div>

    <!-- Main Content Area: 2 Columns -->
    <div class="flex-1 grid grid-cols-12 gap-5 items-center min-h-0 py-1.5">
      
      <!-- Left Column (6 cols): Visual Generation Simulation -->
      <div class="col-span-6 flex flex-col justify-between h-full space-y-2">
        
        <!-- Step 1: Prompt Context Window Box -->
        <div class="p-2.5 rounded-xl bg-slate-900/95 border border-slate-800 shadow-md">
          <div class="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1 mb-1.5 border-b border-slate-800/80">
            <span class="flex items-center gap-1.5 font-bold text-slate-300">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Input Context Window (Tokens in Memory)
            </span>
            <span class="text-slate-500 text-[9px]">Length: t = 10 tokens</span>
          </div>

          <div class="flex flex-wrap items-center gap-1 font-mono text-[11px] leading-relaxed">
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">In</span>
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">GBIF</span>
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">taxonomy</span>
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">,</span>
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">the</span>
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">scientific</span>
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">name</span>
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">of</span>
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">badger</span>
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">is</span>
            
            <!-- Predicted Token Pulsing -->
            <span class="px-2 py-0.5 rounded bg-fuchsia-950 text-fuchsia-300 border-2 border-fuchsia-400 font-bold shadow-[0_0_12px_rgba(236,72,153,0.6)] animate-pulse flex items-center gap-1">
              <span>Meles</span>
              <span class="text-[8px] text-fuchsia-400 font-normal">?</span>
            </span>
          </div>
        </div>

        <!-- Step 2: The Softmax Probability Distribution (Candidate Tokens) -->
        <div class="p-2.5 rounded-xl bg-slate-900/95 border border-fuchsia-500/30 shadow-md">
          <div class="flex items-center justify-between text-[10px] font-mono text-fuchsia-300 pb-1 mb-2 border-b border-slate-800/80">
            <span class="font-bold flex items-center gap-1.5">
              <span>📊</span>
              Softmax Distribution: P(Token | Context)
            </span>
            <span class="text-[9px] text-slate-400">Vocabulary: ~100k tokens</span>
          </div>

          <!-- Bar 1: Selected Candidate -->
          <div class="space-y-1.5 font-mono text-[10px]">
            <div class="flex items-center justify-between">
              <span class="w-20 text-emerald-300 font-bold flex items-center gap-1">
                <span>✓</span> "Meles"
              </span>
              <div class="flex-1 h-3.5 mx-2 bg-slate-950 rounded-full overflow-hidden border border-emerald-500/40 relative">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style="width: 89.2%"></div>
              </div>
              <span class="w-12 text-right text-emerald-300 font-bold">89.2%</span>
            </div>

            <!-- Bar 2 -->
            <div class="flex items-center justify-between opacity-70">
              <span class="w-20 text-slate-400 font-normal pl-3">"Taxidea"</span>
              <div class="flex-1 h-2.5 mx-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800 relative">
                <div class="h-full bg-slate-500 rounded-full" style="width: 6.4%"></div>
              </div>
              <span class="w-12 text-right text-slate-400">6.4%</span>
            </div>

            <!-- Bar 3 -->
            <div class="flex items-center justify-between opacity-50">
              <span class="w-20 text-slate-400 font-normal pl-3">"Arctonyx"</span>
              <div class="flex-1 h-2 mx-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800 relative">
                <div class="h-full bg-slate-600 rounded-full" style="width: 2.8%"></div>
              </div>
              <span class="w-12 text-right text-slate-400">2.8%</span>
            </div>

            <!-- Bar 4 -->
            <div class="flex items-center justify-between opacity-35">
              <span class="w-20 text-slate-400 font-normal pl-3">"Mellivora"</span>
              <div class="flex-1 h-1.5 mx-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800 relative">
                <div class="h-full bg-slate-700 rounded-full" style="width: 1.1%"></div>
              </div>
              <span class="w-12 text-right text-slate-400">1.1%</span>
            </div>
          </div>

          <div class="mt-2 pt-1.5 border-t border-slate-800 text-[9px] font-mono text-slate-400 flex items-center justify-between">
            <span>Sampling: <strong class="text-slate-300">Temperature = 0.2</strong> (Greedy / Low entropy)</span>
            <span class="text-emerald-400 font-semibold">Token "Meles" sampled</span>
          </div>
        </div>

        <!-- Step 3: Autoregressive Feedback Loop -->
        <div class="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 text-[10px]">
          <span class="w-6 h-6 rounded-lg bg-sky-950 text-sky-400 border border-sky-500/40 flex items-center justify-center font-mono font-bold shrink-0">
            ↻
          </span>
          <div class="leading-tight text-slate-300">
            <strong class="text-sky-300">The Autoregressive Loop:</strong> The sampled token is appended to the prompt, and the <em>entire sequence</em> is fed back into the model to predict the next token (<code class="text-emerald-300 font-mono">"meles"</code>), continuing until an <code class="text-rose-300 font-mono">&lt;EOS&gt;</code> token is reached.
          </div>
        </div>

      </div>

      <!-- Right Column (6 cols): Core Conceptual Truths -->
      <div class="col-span-6 flex flex-col justify-center h-full space-y-2">
        
        <!-- Card 1: What It Is (Statistical Mimicry) -->
        <div class="p-2 px-3 rounded-xl bg-slate-900/90 border border-sky-500/30 shadow-sm flex items-start gap-2.5">
          <div class="w-6 h-6 rounded-md bg-sky-950 text-sky-400 border border-sky-500/40 flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
            1
          </div>
          <div>
            <div class="text-[10.5px] font-bold text-sky-300 flex items-center gap-1.5 leading-none">
              <span>Pure Statistical Pattern Matching</span>
              <span class="text-[7.5px] font-mono px-1 py-0.1 rounded bg-sky-900/60 text-sky-200 border border-sky-600/40">
                Token Co-occurrence
              </span>
            </div>
            <div class="text-[8.5px] text-slate-300 leading-tight mt-1">
              The model does not know what a badger is, what DNA is, or what biology means. It only knows that in human text, the token <code class="text-sky-300 font-mono">"Meles"</code> correlates with <code class="text-sky-300 font-mono">"badger"</code> across millions of training documents.
            </div>
          </div>
        </div>

        <!-- Card 2: No Database, No Internal Fact Checker -->
        <div class="p-2 px-3 rounded-xl bg-slate-900/90 border border-amber-500/30 shadow-sm flex items-start gap-2.5">
          <div class="w-6 h-6 rounded-md bg-amber-950 text-amber-400 border border-amber-500/40 flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
            2
          </div>
          <div>
            <div class="text-[10.5px] font-bold text-amber-300 flex items-center gap-1.5 leading-none">
              <span>No Database Lookup & No Truth Sensor</span>
              <span class="text-[7.5px] font-mono px-1 py-0.1 rounded bg-amber-900/60 text-amber-200 border border-amber-600/40">
                Zero Knowledge Base
              </span>
            </div>
            <div class="text-[8.5px] text-slate-300 leading-tight mt-1">
              A pure LLM cannot query SQL, check GBIF, or calculate coordinates. All "knowledge" is frozen in static neural weights. It optimizes for <strong>linguistic plausibility</strong>, not empirical truth.
            </div>
          </div>
        </div>

        <!-- Card 3: The Root of Hallucination (Revealed on Click 1) -->
        <div 
          v-click="1"
          class="p-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-950/90 via-slate-900 to-purple-950/90 border-2 border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.35)] flex items-start gap-2.5"
        >
          <div class="w-6 h-6 rounded-md bg-rose-950 text-rose-300 border border-rose-500 flex items-center justify-center text-xs shrink-0 font-bold mt-0.5 animate-pulse">
            ⚠️
          </div>
          <div>
            <div class="text-[10.5px] font-bold text-rose-300 flex items-center gap-1.5 leading-none">
              <span>Why Pure LLMs Hallucinate by Design</span>
              <span class="text-[7px] font-mono uppercase px-1 py-0.1 rounded bg-rose-500/30 text-rose-200 border border-rose-400/60 font-bold">
                Critical Scientific Limit
              </span>
            </div>
            <div class="text-[8.5px] text-rose-100/90 leading-tight mt-1">
              If asked for a rare orchid species in a specific county, the LLM will generate Latin-sounding binomials and plausible decimal coordinates. To the model, a <em>real species</em> and a <em>plausible hallucinated species</em> have identical mathematical status!
            </div>
          </div>
        </div>

        <!-- Card 4: Scientific Implication (Revealed on Click 1) -->
        <div 
          v-click="1"
          class="p-2 px-3 rounded-xl bg-slate-900/95 border border-purple-500/40 flex items-start gap-2.5 shadow-sm"
        >
          <div class="w-6 h-6 rounded-md bg-purple-950 text-purple-300 border border-purple-500/40 flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
            💡
          </div>
          <div>
            <div class="text-[10.5px] font-bold text-purple-300 flex items-center gap-1.5 leading-none">
              <span>Scientific Implication: Grammatical Fluency ≠ Truth</span>
            </div>
            <div class="text-[8.5px] text-slate-300 leading-tight mt-1">
              Pure LLMs produce <strong>impeccable grammar and scientific tone</strong> even when producing 100% false Darwin Core mappings. Fluency is an illusion of competence.
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- Bottom Takeaway Callout -->
    <div class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-slate-900 via-purple-950/70 to-slate-900 border border-slate-800 flex items-center justify-between text-xs shrink-0 shadow-lg">
      <div class="flex items-center gap-2">
        <span class="text-sm text-fuchsia-400">🤖</span>
        <div class="text-[9.5px] leading-snug">
          <strong class="text-fuchsia-300 font-semibold">The Fundamental Rule:</strong>
          <span class="text-slate-200 ml-1">
            A pure LLM is an <em>intuitive author</em>, not a <em>verification database</em>. In biodiversity informatics, never trust an unassisted model to "remember" taxon keys, coordinates, or Darwin Core terms without external tools.
          </span>
        </div>
      </div>
      <span class="shrink-0 ml-3 text-[8.5px] font-mono px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40 font-semibold">
        NEXT: AUGMENTING WITH TOOLS →
      </span>
    </div>

  </div>
</template>

<script setup>
</script>

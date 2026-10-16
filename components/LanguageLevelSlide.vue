<template>
  <div class="grid grid-cols-12 gap-5 mt-2 select-none">

    <!-- Left Column: Concepts & Key Takeaways -->
    <div class="col-span-7 flex flex-col justify-between space-y-3">
      
      <!-- Primary Concept Card -->
      <div 
        class="p-3.5 rounded-xl bg-slate-900 border shadow-md"
        :class="borderClass"
      >
        <div 
          class="text-xs font-bold flex items-center gap-1.5 mb-1.5"
          :class="titleColorClass"
        >
          <span>{{ icon }}</span>
          <span>{{ conceptTitle }}</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed" v-html="conceptDescription"></p>
      </div>

      <!-- Takeaway Points -->
      <div class="space-y-2 text-xs">
        <div 
          v-for="(point, i) in bulletPoints" 
          :key="i"
          class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2.5"
        >
          <span class="text-sm shrink-0" :class="point.iconColor || titleColorClass">{{ point.icon }}</span>
          <div class="leading-relaxed">
            <strong class="text-white mr-1.5 font-semibold">{{ point.title }}:</strong>
            <span class="text-slate-300">{{ point.text }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Right Column: Code Window & Semantic Metric -->
    <div class="col-span-5 flex flex-col justify-between">
      
      <!-- Code Box -->
      <div 
        class="p-3 rounded-xl bg-slate-950 border shadow-xl font-mono text-xs"
        :class="codeBorderClass"
      >
        <div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
          <span>{{ codeHeaderLeft }}</span>
          <span class="font-bold tracking-wide" :class="titleColorClass">{{ codeHeaderRight }}</span>
        </div>
        <div class="text-[11px] leading-relaxed text-slate-300 font-mono space-y-1" v-html="codeHtml"></div>
      </div>

      <!-- Semantic Distance Pill -->
      <div 
        class="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-[11px] mt-3 flex items-center justify-between font-mono shadow-md"
      >
        <span class="text-slate-400 font-sans text-xs flex items-center gap-1.5">
          <span>📏</span> Semantic Distance
        </span>
        <span class="font-bold px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800" :class="titleColorClass">
          {{ semanticDistance }}
        </span>
      </div>

    </div>

  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '⚡' },
  titleColorClass: { type: String, default: 'text-rose-400' },
  borderClass: { type: String, default: 'border-slate-700/80' },
  codeBorderClass: { type: String, default: 'border-rose-500/40' },
  pillClass: { type: String, default: 'bg-rose-950/40 border-rose-600/40 text-rose-200' },
  conceptTitle: { type: String, required: true },
  conceptDescription: { type: String, required: true },
  bulletPoints: { type: Array, required: true },
  codeHeaderLeft: { type: String, default: 'CODE LISTING' },
  codeHeaderRight: { type: String, default: '' },
  codeHtml: { type: String, required: true },
  semanticDistance: { type: String, required: true }
})
</script>

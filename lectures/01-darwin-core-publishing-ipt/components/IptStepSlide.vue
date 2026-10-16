<template>
  <div class="w-full flex flex-col select-none mt-2">
    
    <div class="grid grid-cols-12 gap-5 items-start">

      <!-- Left: Screenshot Card -->
      <div class="col-span-8 flex flex-col items-center">
        <div class="w-full rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-white p-2.5">
          <img 
            :src="imageSrc" 
            :alt="title" 
            class="w-full max-h-[235px] object-contain rounded" 
          />
        </div>
        <span class="text-[9px] font-mono text-slate-400 mt-1.5">
          {{ caption }}
        </span>
      </div>

      <!-- Right: Key Takeaways -->
      <div class="col-span-4 flex flex-col gap-1.5">
        
        <div 
          v-for="(card, i) in cards" 
          :key="i"
          class="px-2.5 py-1.5 rounded-lg bg-slate-900/95 border shadow-sm"
          :class="card.borderClass || 'border-slate-700'"
        >
          <div 
            class="font-bold text-[11px] flex items-center gap-1 mb-0.5"
            :class="card.titleClass || 'text-slate-200'"
          >
            <span class="text-[11px]">{{ card.icon }}</span>
            <span>{{ card.title }}</span>
          </div>
          <p class="text-[9px] text-slate-300 leading-tight" v-html="card.text"></p>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
defineProps({
  imageSrc: { type: String, required: true },
  caption: { type: String, default: '' },
  title: { type: String, default: '' },
  cards: { type: Array, required: true }
})
</script>

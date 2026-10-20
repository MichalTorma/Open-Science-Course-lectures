<template>
  <footer
    v-if="$slidev.nav.currentPage !== 1"
    class="absolute bottom-3 right-4 z-50 flex items-center gap-2 select-none pointer-events-none"
  >
    <div class="px-2.5 py-0.5 rounded-full bg-slate-950/70 border border-slate-700/60 backdrop-blur-sm text-[11px] font-mono text-slate-400 shadow-lg flex items-center gap-1.5">
      <span class="text-sky-400 font-semibold">{{ $slidev.nav.currentPage }}</span>
      <span class="opacity-40">/</span>
      <span>{{ $slidev.nav.total }}</span>
    </div>
  </footer>
</template>

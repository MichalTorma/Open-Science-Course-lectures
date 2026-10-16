<template>
  <LanguageLevelSlide
    icon="⚡"
    titleColorClass="text-rose-400"
    borderClass="border-rose-500/30"
    codeBorderClass="border-rose-500/40"
    pillClass="bg-rose-950/40 border-rose-600/40 text-rose-200"
    conceptTitle="What Actually Runs on Silicon"
    conceptDescription="The Central Processing Unit (CPU) contains billions of microscopic transistors acting as physical switches. Instructions are fetched, decoded, and executed strictly as sequences of <strong>bytes and binary bits</strong>."
    :bulletPoints="bulletPoints"
    codeHeaderLeft="RAW BINARY / HEX DUMP"
    codeHeaderRight="x86_64 Opcodes"
    :codeHtml="codeHtml"
    semanticDistance="Maximum (Incomprehensible to humans)"
  />
</template>

<script setup>
const bulletPoints = [
  {
    icon: '🔒',
    title: 'Architecture-Locked',
    text: 'Machine code compiled for x86-64 cannot execute on ARM64 or Apple Silicon without binary translation.'
  },
  {
    icon: '🧩',
    title: 'Zero Semantic Meaning',
    text: 'Raw numbers carry no inherent context — a byte could represent an opcode, an integer, an ASCII letter, or a RAM address.'
  }
]

const codeHtml = `
<div class="text-slate-500">; Raw instructions in memory</div>
<div><span class="text-rose-400">48 89 5c 24 08</span>  <span class="text-slate-500">; mov [rsp+8], rbx</span></div>
<div><span class="text-rose-400">48 83 ec 20</span>     <span class="text-slate-500">; sub rsp, 32</span></div>
<div><span class="text-rose-400">8b 47 04</span>        <span class="text-slate-500">; mov eax, [rdi+4]</span></div>
<div><span class="text-rose-400">03 07</span>           <span class="text-slate-500">; add eax, [rdi]</span></div>
<div><span class="text-rose-400">c3</span>              <span class="text-slate-500">; ret</span></div>
`
</script>

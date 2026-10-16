<template>
  <LanguageLevelSlide
    icon="⚙️"
    titleColorClass="text-orange-400"
    borderClass="border-orange-500/30"
    codeBorderClass="border-orange-500/40"
    pillClass="bg-orange-950/40 border-orange-600/40 text-orange-200"
    conceptTitle="Direct Hardware Mnemonics"
    conceptDescription="Assembly provides a <strong>1-to-1 symbolic representation</strong> of CPU machine instructions. Instead of remembering binary opcodes like <code class='text-rose-300 font-mono'>0x03</code>, the programmer writes human-readable mnemonics like <code class='text-orange-300 font-mono'>ADD</code>."
    :bulletPoints="bulletPoints"
    codeHeaderLeft="ASSEMBLY LISTING"
    codeHeaderRight="x86_64 ASM"
    :codeHtml="codeHtml"
    semanticDistance="Very High (Tied to silicon registers)"
  />
</template>

<script setup>
const bulletPoints = [
  {
    icon: '🎛️',
    title: 'Thinking in CPU Registers',
    text: 'The scientist must explicitly manage hardware registers (RAX, RBX, RSP) and memory stack offsets.'
  },
  {
    icon: '🧩',
    title: 'No Scientific Abstractions',
    text: 'No dataframes, variables, loops, or types exist — only raw memory addresses, pointers, and arithmetic jumps.'
  }
]

const codeHtml = `
<div class="text-orange-400 font-bold">calculate_sum:</div>
<div class="pl-3"><span class="text-sky-300">push</span>  rbp</div>
<div class="pl-3"><span class="text-sky-300">mov</span>   rbp, rsp</div>
<div class="pl-3"><span class="text-sky-300">mov</span>   eax, [rdi]      <span class="text-slate-500">; load val A</span></div>
<div class="pl-3"><span class="text-sky-300">add</span>   eax, [rsi]      <span class="text-slate-500">; add val B</span></div>
<div class="pl-3"><span class="text-sky-300">pop</span>   rbp</div>
<div class="pl-3"><span class="text-sky-300">ret</span></div>
`
</script>

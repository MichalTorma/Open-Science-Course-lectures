import{S as e,V as t,_ as n,_t as r,b as i,g as a,m as o,w as s,x as c,xt as l,y as u,z as d}from"../modules/shiki-Bq-puRM0.js";import{c as f}from"./env-DnVGrse4.js";import{S as p}from"../modules/vue-bLnN6-Nw.js";import{bt as m,y as h}from"../index-DAtHykY4.js";import{t as g}from"./NoteDisplay-oOVs_v27.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=s({__name:`print`,setup(s){let{slides:E,total:D}=h();p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),m({title:`Notes - ${f.title}`});let O=a(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(a,s)=>(d(),i(`div`,_,[n(`div`,v,[n(`div`,y,[n(`h1`,b,l(r(f).title),1),n(`div`,x,l(new Date().toLocaleString()),1)]),(d(!0),i(o,null,t(O.value,(t,a)=>(d(),i(`div`,{key:a,class:`flex flex-col gap-4 break-inside-avoid-page`},[n(`div`,null,[n(`h2`,S,[n(`div`,C,[n(`div`,w,l(t?.no)+`/`+l(r(D)),1),c(` `+l(t?.title)+` `,1),s[0]||=n(`div`,{class:`flex-auto`},null,-1)])]),e(g,{"note-html":t.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),a<O.value.length-1?(d(),i(`hr`,T)):u(`v-if`,!0)]))),128))])]))}});export{E as default};
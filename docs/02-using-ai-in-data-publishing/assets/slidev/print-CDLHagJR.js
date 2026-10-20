import{B as e,R as t,S as n,bt as r,g as i,gt as a,h as o,p as s,v as c,w as l,x as u,y as d}from"../modules/shiki-B6ZFRy1h.js";import{x as f}from"../modules/vue-DYLXnT1J.js";import{Et as p,_ as m,_t as h}from"../index-B_SzwIrU.js";import{t as g}from"./NoteDisplay-DgOSasMX.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=l({__name:`print`,setup(l){let{slides:E,total:D}=m();f(`
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
`),h({title:`Notes - ${p.title}`});let O=o(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(o,l)=>(t(),d(`div`,_,[i(`div`,v,[i(`div`,y,[i(`h1`,b,r(a(p).title),1),i(`div`,x,r(new Date().toLocaleString()),1)]),(t(!0),d(s,null,e(O.value,(e,o)=>(t(),d(`div`,{key:o,class:`flex flex-col gap-4 break-inside-avoid-page`},[i(`div`,null,[i(`h2`,S,[i(`div`,C,[i(`div`,w,r(e?.no)+`/`+r(a(D)),1),u(` `+r(e?.title)+` `,1),l[0]||=i(`div`,{class:`flex-auto`},null,-1)])]),n(g,{"note-html":e.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),o<O.value.length-1?(t(),d(`hr`,T)):c(`v-if`,!0)]))),128))])]))}});export{E as default};
import{B as e,C as t,H as n,S as r,St as i,T as a,_ as o,b as s,g as c,m as l,vt as u,y as d}from"../modules/shiki-8xXR1m5z.js";import{c as f}from"./env-17vzxvsk.js";import{S as p}from"../modules/vue-D8ibrTf3.js";import{bt as m,y as h}from"../index-5WIzUx8o.js";import{t as g}from"./NoteDisplay-BVpTo3tK.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=a({__name:`print`,setup(a){let{slides:E,total:D}=h();p(`
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
`),m({title:`Notes - ${f.title}`});let O=c(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(a,c)=>(e(),s(`div`,_,[o(`div`,v,[o(`div`,y,[o(`h1`,b,i(u(f).title),1),o(`div`,x,i(new Date().toLocaleString()),1)]),(e(!0),s(l,null,n(O.value,(n,a)=>(e(),s(`div`,{key:a,class:`flex flex-col gap-4 break-inside-avoid-page`},[o(`div`,null,[o(`h2`,S,[o(`div`,C,[o(`div`,w,i(n?.no)+`/`+i(u(D)),1),r(` `+i(n?.title)+` `,1),c[0]||=o(`div`,{class:`flex-auto`},null,-1)])]),t(g,{"note-html":n.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),a<O.value.length-1?(e(),s(`hr`,T)):d(`v-if`,!0)]))),128))])]))}});export{E as default};
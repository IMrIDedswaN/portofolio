import {readCollection, comments, addComment, profilePhoto} from "./portfolio-data-kontak2.js";
import{j as e}from"./framer-DIYrIZAr-kontak2.js";import{c as a,H as v}from"./index-BHdktB2O-basket2.js";import{r as l}from"./react-vendor-DtkDK1ro-kontak2.js";import{t as b}from"./slug-6Dq9Wj5H-kontak2.js";import{u as N,b as M}from"./router-BF0rr27P-kontak2.js";import{A as C}from"./arrow-left-Be78Ej8T-kontak2.js";import{C as P}from"./chevron-right-dqoXEJeJ-kontak2.js";import{C as o}from"./code-B3-Q0Un0-kontak2.js";import"./utils-BTGVH9Kg-kontak2.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=a("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=a("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=a("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=a("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=a("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=a("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=a("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]),g={React:D,Tailwind:z,Express:I,Python:o,Javascript:o,HTML:o,CSS:o,default:S},q=({tech:s})=>{const n=g[s]||g.default;return e.jsx("div",{className:"group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-white/5 rounded-xl border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-300 cursor-default",children:e.jsxs("div",{className:"relative flex items-center gap-1.5 md:gap-2",children:[e.jsx(n,{className:"w-3.5 h-3.5 md:w-4 md:h-4 text-white/60 group-hover:text-white transition-colors"}),e.jsx("span",{className:"text-xs md:text-sm font-medium text-white/80 group-hover:text-white transition-colors",children:s})]})})},X=()=>{var x,h;const{slug:s}=N(),n=M(),[t,f]=l.useState(null),[A,j]=l.useState(!1),[r,c]=l.useState(!1);if(l.useEffect(()=>{window.scrollTo(0,0),c(!1),(async()=>{const{data:i}=await readCollection("projects"),y=i==null?void 0:i.find(w=>b(w.title)===s);y&&f(y)})()},[s]),!t)return e.jsx("div",{className:"min-h-screen bg-[#030014] flex items-center justify-center",children:e.jsxs("div",{className:"text-center space-y-6 animate-fadeIn",children:[e.jsx("div",{className:"w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"}),e.jsx("h2",{className:"text-xl md:text-3xl font-bold text-white",children:"Loading Project..."})]})});const m=`${window.location.origin}/project/${b(t.title)}`,d=(t.description||"").replace(/\\n/g,`
`),p=d.length>220||(d.match(/\n/g)||[]).length>=4;return e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx("title",{children:"Dedy Setiawan"}),e.jsx("meta",{name:"description",content:t.description?t.description.slice(0,155):`Project ${t.title} oleh Dedy Setiawan.`}),e.jsx("meta",{name:"robots",content:"index, follow"}),e.jsx("link",{rel:"canonical",href:m}),e.jsx("meta",{property:"og:title",content:`${t.title} — Dedy Setiawan`}),e.jsx("meta",{property:"og:description",content:(x=t.description)==null?void 0:x.slice(0,155)}),e.jsx("meta",{property:"og:url",content:m}),e.jsx("meta",{property:"og:type",content:"website"}),t.img&&e.jsx("meta",{property:"og:image",content:t.img})]}),e.jsxs("div",{className:"min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden",children:[e.jsx("div",{className:"fixed inset-0",children:e.jsxs("div",{className:"absolute -inset-[10px] opacity-20",children:[e.jsx("div",{className:"absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"}),e.jsx("div",{className:"absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"}),e.jsx("div",{className:"absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"})]})}),e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16",children:[e.jsxs("div",{className:"flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12",children:[e.jsxs("button",{onClick:()=>n(-1),className:"group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base",children:[e.jsx(C,{className:"w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform"}),e.jsx("span",{children:"Back"})]}),e.jsxs("div",{className:"flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50",children:[e.jsx("span",{children:"Projects"}),e.jsx(P,{className:"w-3 h-3 md:w-4 md:h-4"}),e.jsx("span",{className:"text-white/90 truncate",children:t.title})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 md:gap-16",children:[e.jsxs("div",{className:"space-y-6 md:space-y-10",children:[e.jsx("div",{className:"space-y-4 md:space-y-6",children:e.jsx("h1",{className:"text-3xl md:text-6xl font-bold text-white leading-tight",children:t.title})}),e.jsxs("div",{className:"prose prose-invert max-w-none",children:[e.jsx("p",{className:`text-base md:text-lg text-gray-300/90 leading-relaxed whitespace-pre-line ${!r&&p?"line-clamp-4 md:line-clamp-6":""}`,children:d}),p&&e.jsxs("button",{type:"button",onClick:()=>c(!r),className:"mt-3 inline-flex items-center gap-1.5 text-sm md:text-base font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200 focus:outline-none group/btn",children:[e.jsx("span",{children:r?"Tampilkan lebih sedikit":"Lihat selengkapnya"}),r?e.jsx(E,{className:"w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5"}):e.jsx(L,{className:"w-4 h-4 transition-transform group-hover/btn:translate-y-0.5"})]})]}),e.jsxs("div",{className:"space-y-4 md:space-y-6",children:[e.jsxs("h3",{className:"text-lg md:text-xl font-semibold text-white/90 flex items-center gap-2 md:gap-3",children:[e.jsx(T,{className:"w-4 h-4 md:w-5 md:h-5 text-white/60"}),"Technologies Used"]}),((h=t.tech_stack)==null?void 0:h.length)>0?e.jsx("div",{className:"flex flex-wrap gap-2 md:gap-3",children:t.tech_stack.map((u,i)=>e.jsx(q,{tech:u},i))}):e.jsx("p",{className:"text-sm md:text-base text-gray-400 opacity-50",children:"No technologies added."})]})]}),e.jsx("div",{className:"space-y-6 md:space-y-10",children:e.jsx("div",{className:"relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group",children:e.jsx("img",{src:t.img,alt:t.title,className:"w-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105",onLoad:()=>j(!0)})})})]})]})}),e.jsx("style",{jsx:!0,children:`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 10s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `})]})]})};export{X as default};

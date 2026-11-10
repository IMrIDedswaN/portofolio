import {readCollection, comments, addComment, profilePhoto} from "./portfolio-data-kontak2.js";
import{j as e,u as ke,a as je,b as He,m as Ne}from"./framer-DIYrIZAr-kontak2.js";import{r}from"./react-vendor-DtkDK1ro-kontak2.js";import{c as De,A as Ue}from"./index-BHdktB2O-basket2.js";import{T as Ke}from"./backgrounds-topography-BevkasWh-kontak2.js";import{C as Me}from"./code-B3-Q0Un0-kontak2.js";import"./router-BF0rr27P-kontak2.js";import"./utils-BTGVH9Kg-kontak2.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=De("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),qe={aurora:{style:"streak",colors:["#f4efe9","#e9c2b8","#c2433f","#2a1e2a","#22395e","#6f97c2","#e5edf4"],scale:.7,warp:1.4,angle:-.62,gloss:.18,veins:0},ember:{style:"marble",colors:["#07090c","#16252c","#3d5f68","#1a1416","#a3201a","#ef4a2b","#ff8a5c"],scale:.62,warp:3.2,angle:-.5,gloss:.55,veins:.6},dusk:{style:"marble",colors:["#120c18","#3e2850","#8f6c9c","#2b1a24","#b3502f","#eab08a","#fbe7d2"],scale:.75,warp:3.6,angle:.8,gloss:.5,veins:.5},glacier:{style:"streak",colors:["#f7f8fa","#d9e2ea","#9fb4c7","#e8edf2","#bccbd8","#ffffff"],scale:.7,warp:1.6,angle:.35,gloss:.25,veins:0},verdant:{style:"marble",colors:["#070b08","#173024","#4f7a5a","#141812","#a7843a","#e9cf87","#fbf3d6"],scale:.7,warp:3.4,angle:2.1,gloss:.5,veins:.5}};function We(o){let n=(o||"").trim().replace(/^#/,"");n.length===3&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);const t=/^[0-9a-f]{6}$/i.test(n)?parseInt(n,16):8421504;return[t>>16&255,t>>8&255,t&255]}function ye(o){let n=o>>>0;return()=>{n=n+1831565813>>>0;let t=n;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ee(o){const n=String(o||"");let t=2166136261;for(let c=0;c<n.length;c++)t=Math.imul(t^n.charCodeAt(c),16777619);return t>>>0}function Ge(o){const n=ye(o),t=new Uint8Array(512),c=new Float32Array(512),i=[];for(let l=0;l<256;l++)i.push(l);for(let l=255;l>0;l--){const u=Math.floor(n()*(l+1)),v=i[l];i[l]=i[u],i[u]=v}for(let l=0;l<512;l++)t[l]=i[l&255];for(let l=0;l<256;l++){const u=n()*Math.PI*2;c[l*2]=Math.cos(u),c[l*2+1]=Math.sin(u)}const x=(l,u)=>{const v=Math.floor(l),y=Math.floor(u),h=l-v,b=u-y,P=v&255,T=y&255,B=t[P+t[T]]*2,F=t[P+1+t[T]]*2,D=t[P+t[T+1]]*2,U=t[P+1+t[T+1]]*2,G=c[B]*h+c[B+1]*b,_=c[F]*(h-1)+c[F+1]*b,J=c[D]*h+c[D+1]*(b-1),I=c[U]*(h-1)+c[U+1]*(b-1),K=h*h*h*(h*(h*6-15)+10),X=b*b*b*(b*(b*6-15)+10);return G+K*(_-G)+X*(J-G+K*(I-J-_+G))};return(l,u,v)=>{let y=0,h=.5;for(let b=0;b<v;b++){y+=h*x(l,u);const P=1.6*l+1.2*u+7.1;u=-1.2*l+1.6*u+3.3,l=P,h*=.5}return y}}function Je(o,n,t,c){const i=Math.max(1,Math.round(o)),x=Math.max(1,Math.round(n)),l=t.colors&&t.colors.length>=2?t.colors:["#111111","#eeeeee"],u=l.map((S,z)=>({t:z/(l.length-1),c:We(S)})),v=t.scale??.7,y=t.warp??3,h=t.gloss??.4,b=t.veins??0,P=t.style==="streak",T=Ge(c*977+13),B=ye(c+1),F=B()*50,D=B()*50,U=(t.angle??0)+(B()-.5)*.5,G=Math.cos(U),_=Math.sin(U),J=Math.min(i,x),I=Math.ceil(i/2)+3,K=Math.ceil(x/2)+3,X=new Float32Array(I*K),V=new Float32Array(I*K),q=new Float32Array(i*x),W=new Float32Array(i*x),a=new Uint8ClampedArray(i*x*4);let f=0;const m=S=>{for(let z=0;z<I;z++){const E=((z-1)*2-i/2)/J,N=((S-1)*2-x/2)/J;let d=(E*G-N*_)*v,g=(E*_+N*G)*v;P&&(d*=.14,g*=2.2),d+=F,g+=D;const w=T(d,g,3),R=T(d+5.2,g+1.3,3),$=T(d+y*w+1.7,g+y*R+9.2,3),L=T(d+y*w+8.3,g+y*R+2.8,3);X[S*I+z]=T(d+y*$,g+y*L,4),V[S*I+z]=Math.sqrt(w*w+R*R)}},O=()=>{const S=(E,N,d,g)=>(-E+9*N+9*d-g)/16,z=new Float32Array(i*K);for(let E=0;E<K;E++){const N=E*I;for(let d=0;d<i;d++){const g=(d>>1)+1;z[E*i+d]=d&1?S(X[N+g-1],X[N+g],X[N+g+1],X[N+g+2]):X[N+g]}}for(let E=0;E<x;E++){const N=(E>>1)+1;for(let d=0;d<i;d++){q[E*i+d]=E&1?S(z[(N-1)*i+d],z[N*i+d],z[(N+1)*i+d],z[(N+2)*i+d]):z[N*i+d];const g=(d>>1)+1,w=V[N*I+g],R=d&1?(w+V[N*I+g+1])/2:w,$=E&1?d&1?(V[(N+1)*I+g]+V[(N+1)*I+g+1])/2:V[(N+1)*I+g]:R;W[E*i+d]=(R+$)/2}}},C=()=>{const S=[],z=Math.max(1,Math.floor(q.length/4096));for(let L=0;L<q.length;L+=z)S.push(q[L]);S.sort((L,M)=>L-M);const E=S[Math.floor(S.length*.02)],d=1/(S[Math.floor(S.length*.98)]-E||1),g=-.55,w=-.65,R=.52,$=d*J*.012;for(let L=0;L<x;L++)for(let M=0;M<i;M++){const H=L*i+M;let ae=(q[H]-E)*d;ae=ae<0?0:ae>1?1:ae;let re=1;for(;re<u.length-1&&u[re].t<ae;)re++;const Z=u[re-1],se=u[re];let Y=(ae-Z.t)/(se.t-Z.t||1);Y=Y<0?0:Y>1?1:Y,Y=Y*Y*(3-2*Y);const ie=(q[M<i-1?H+1:H]-q[M>0?H-1:H])*$,ne=(q[L<x-1?H+i:H]-q[L>0?H-i:H])*$,s=(-ie*g-ne*w+R)/Math.sqrt(ie*ie+ne*ne+1),p=Math.pow(s>0?s:0,24)*h*255,k=1+.035*Math.sin(ae*150+W[H]*24),j=b*Math.max(0,1-Math.abs(W[H]-.42)*14)*.6,A=(.82+.28*s)*k*(1-j);a[H*4]=(Z.c[0]+(se.c[0]-Z.c[0])*Y)*A+p,a[H*4+1]=(Z.c[1]+(se.c[1]-Z.c[1])*Y)*A+p,a[H*4+2]=(Z.c[2]+(se.c[2]-Z.c[2])*Y)*A+p,a[H*4+3]=255}};return{width:i,height:x,pixels:a,step:S=>{if(f>=K)return!0;const z=Math.min(K,f+Math.max(1,S));for(;f<z;)m(f++);return f<K?!1:(O(),C(),!0)}}}function Ye(o,n){return n<=1?0:o/(n-1)*2-1}const Xe=o=>typeof o=="string"?qe[o]:o,Ae=new Map,ce=[];let be=!1;function $e(){if(be)return;be=!0;const o=()=>{var t;const n=performance.now()+7;for(;ce.length&&performance.now()<n;){const c=ce[0];if(c.job.step(4)){ce.shift();const i=document.createElement("canvas");i.width=c.job.width,i.height=c.job.height,(t=i.getContext("2d"))==null||t.putImageData(new ImageData(c.job.pixels,i.width,i.height),0,0),c.done(i)}}ce.length?requestAnimationFrame(o):be=!1};requestAnimationFrame(o)}function Ve(o,n,t,c,i){const x=JSON.stringify([o,n,t,c]);let l=Ae.get(x);return l||(l=new Promise(u=>{let v=ce.length;for(;v>1&&ce[v-1].priority>i;)v--;ce.splice(v,0,{job:Je(t,c,o,n),priority:i,done:u}),$e()}),Ae.set(x,l)),l}function Ie({art:o,seed:n,w:t,h:c,density:i,priority:x,className:l}){const u=r.useRef(null),[v,y]=r.useState(!1),h=Xe(o),b=JSON.stringify(h),P=Math.round(t*i),T=Math.round(c*i);return r.useEffect(()=>{let B=!0;return y(!1),Ve(JSON.parse(b),n,P,T,x).then(F=>{var U;const D=u.current;!B||!D||(D.width=F.width,D.height=F.height,(U=D.getContext("2d"))==null||U.drawImage(F,0,0),y(!0))}),()=>{B=!1}},[b,n,P,T,x]),e.jsx("canvas",{ref:u,"aria-hidden":"true",className:l,"data-ready":v||void 0,style:{width:t,height:c,maxWidth:"none"}})}const le=340,ue=272,Ce=54,Qe=74,me=ue-Qe,Le=272,ze=184,Pe="M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z",_e="M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 "+(me-22)+"A22 22 0 0 1 318 "+me+"L22 "+me+"A22 22 0 0 1 0 "+(me-22)+"Z",Oe=(o,n,t)=>{const c=`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${o} ${n}"><path fill="#000" d="${t}"/></svg>`)}")`;return{WebkitMaskImage:c,maskImage:c,WebkitMaskSize:"100% 100%",maskSize:"100% 100%",WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat"}},Ze=Oe(le,ue,Pe),et=Oe(le,me,_e),tt=4,at=[{name:"Cover — final",meta:"PNG · 4.8 MB",art:"ember"},{name:"Moodboard",meta:"24 images",art:"dusk"},{name:"Brief.pdf",meta:"PDF · 1.2 MB"}];function ve({label:o="My Files",meta:n,tone:t="light",art:c="aurora",seed:i=3,image:x,files:l=at,action:u="add",onAdd:v,onFilesChange:y,menu:h=[],labelPlacement:b="bottom-left",open:P,defaultOpen:T=!1,onOpenChange:B,onFileSelect:F,width:D=340,appear:U=!0,appearDelay:G=0,className:_,style:J}){const I=r.useId().replace(/:/g,""),K=r.useRef(null),X=r.useRef(null),V=r.useRef(null),q=r.useRef(null),W=r.useRef(null),[a,f]=r.useState(l),m=r.useRef(l.map((s,p)=>p)),O=r.useRef(l.length),[C,te]=r.useState(null),[S,z]=r.useState(0),[E,N]=r.useState(T),d=P??E,g=r.useCallback(s=>{P===void 0&&N(s),B==null||B(s)},[P,B]),[w,R]=r.useState(!1),[$,L]=r.useState(!U);r.useEffect(()=>{f(l),m.current=l.map((s,p)=>p),O.current=l.length},[l]);const M=D/le,H=Math.min(1.5,Math.max(1,typeof window>"u"?1:window.devicePixelRatio||1))*M;r.useEffect(()=>{if(!U)return;const s=K.current;if(!s||typeof IntersectionObserver>"u"){L(!0);return}let p=0;const k=new IntersectionObserver(j=>{j.some(A=>A.isIntersecting)&&(k.disconnect(),p=window.setTimeout(()=>L(!0),G))},{threshold:.25});return k.observe(s),()=>{k.disconnect(),window.clearTimeout(p)}},[U,G]),r.useEffect(()=>{const s=K.current;if(!s)return;let p=0,k=0,j=0,A=null;const ee=()=>{p=0,s.style.setProperty("--gf-px",k.toFixed(3)),s.style.setProperty("--gf-py",j.toFixed(3))},Q=xe=>{xe.pointerType!=="touch"&&(A=s.getBoundingClientRect())},he=xe=>{if(xe.pointerType==="touch")return;const de=A||(A=s.getBoundingClientRect());!de.width||!de.height||(k=(xe.clientX-de.left)/de.width*2-1,j=(xe.clientY-de.top)/de.height*2-1,p||(p=requestAnimationFrame(ee)))},we=()=>{A=null,k=0,j=0,p||(p=requestAnimationFrame(ee))};return s.addEventListener("pointerenter",Q,{passive:!0}),s.addEventListener("pointermove",he,{passive:!0}),s.addEventListener("pointerleave",we,{passive:!0}),()=>{s.removeEventListener("pointerenter",Q),s.removeEventListener("pointermove",he),s.removeEventListener("pointerleave",we),cancelAnimationFrame(p)}},[]),r.useEffect(()=>{var s;(s=X.current)==null||s.toggleAttribute("inert",!d)},[d]),r.useEffect(()=>{if(!d&&!w)return;const s=k=>{var j,A;k.key==="Escape"&&(w?(R(!1),(j=q.current)==null||j.focus()):(g(!1),(A=V.current)==null||A.focus()))},p=k=>{var A,ee,Q;const j=k.target;w&&!((A=W.current)!=null&&A.contains(j))&&!((ee=q.current)!=null&&ee.contains(j))&&R(!1),d&&!w&&!((Q=K.current)!=null&&Q.contains(j))&&g(!1)};return document.addEventListener("keydown",s),document.addEventListener("pointerdown",p),()=>{document.removeEventListener("keydown",s),document.removeEventListener("pointerdown",p)}},[d,w,g]),r.useEffect(()=>{var s,p;w&&((p=(s=W.current)==null?void 0:s.querySelector("[role=menuitem]"))==null||p.focus())},[w]);const ae=()=>{const p=(v==null?void 0:v(a))||{name:"Untitled "+(a.length+1),meta:"Just now"},k=[...a,p],j=O.current++;m.current=[...m.current,j],f(k),te(j),z(A=>A+1),y==null||y(k)},re=[{label:d?"Close folder":"Open folder",onSelect:()=>g(!d)},...h],Z=s=>{var A;const p=Array.from(((A=W.current)==null?void 0:A.querySelectorAll("[role=menuitem]"))??[]),k=p.indexOf(document.activeElement),j=ee=>{var Q;s.preventDefault(),(Q=p[(ee+p.length)%p.length])==null||Q.focus()};s.key==="ArrowDown"?j(k+1):s.key==="ArrowUp"?j(k-1):s.key==="Home"?j(0):s.key==="End"?j(p.length-1):s.key==="Tab"&&R(!1)},se=Math.max(0,a.length-tt),Y=a.slice(se),ie=a.length,ne=n!==void 0?n:ie;return e.jsxs("div",{ref:K,className:"gf-root"+(_?" "+_:""),"data-tone":t,"data-open":d||void 0,"data-entered":$||void 0,"data-place":b,style:{width:D,height:(ue+Ce)*M,...J},children:[e.jsx(st,{}),e.jsx("div",{className:"gf-stage",style:{transform:"translateY("+Ce*M+"px) scale("+M+")"},children:e.jsxs("div",{className:"gf-tilt",children:[e.jsx("div",{className:"gf-shadow","aria-hidden":"true"}),e.jsxs("div",{className:"gf-back",style:Ze,"aria-hidden":"true",children:[x?e.jsx("img",{className:"gf-art",src:x,alt:"",width:le+24,height:ue+24,loading:"lazy",decoding:"async",draggable:!1}):c!=="none"?e.jsx(Ie,{className:"gf-art",art:c,seed:i,w:le+24,h:ue+24,density:H,priority:0}):null,e.jsx("div",{className:"gf-back-sheen"})]}),e.jsx("svg",{className:"gf-rim gf-back-rim",viewBox:"0 0 "+le+" "+ue,"aria-hidden":"true",children:e.jsx("path",{d:Pe})}),e.jsxs("div",{className:"gf-front"+(S?" gf-front--bump":""),style:et,children:[e.jsx("div",{className:"gf-tint","aria-hidden":"true"}),e.jsx("div",{className:"gf-spec","aria-hidden":"true"}),e.jsxs("svg",{className:"gf-rim gf-front-rim",viewBox:"0 0 "+le+" "+me,"aria-hidden":"true",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gf-rim-"+I,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0.95"}),e.jsx("stop",{offset:"0.35",stopColor:"#fff",stopOpacity:"0.35"}),e.jsx("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0.12"})]})}),e.jsx("path",{d:_e,stroke:"url(#gf-rim-"+I+")"})]}),e.jsx("button",{ref:V,type:"button",className:"gf-hit","aria-expanded":d,"aria-label":(d?"Close ":"Open ")+o+", "+ie+(ie===1?" item":" items"),onClick:()=>{R(!1),g(!d)}}),e.jsxs("div",{className:"gf-label",children:[ne!=null&&e.jsx("span",{className:"gf-meta",children:ne},ne),e.jsx("span",{className:"gf-title",children:o})]})]},S),e.jsx("div",{ref:X,className:"gf-files",role:"list","aria-label":o+" contents",children:Y.map((s,p)=>{const k=m.current[se+p],j=Ye(p,Y.length),A=ye(Ee(s.name)+k),ee=!!(s.art||s.image),Q=e.jsxs(e.Fragment,{children:[ee?s.image?e.jsx("img",{className:"gf-sheet-art",src:s.image,alt:"",width:Le,height:ze,loading:"lazy",decoding:"async",draggable:!1}):e.jsx(Ie,{className:"gf-sheet-art",art:s.art,seed:Ee(s.name)%997,w:Le,h:ze,density:Math.min(H,1.25),priority:1}):e.jsxs("span",{className:"gf-lines","aria-hidden":"true",children:[e.jsx("i",{style:{width:"86%"}}),e.jsx("i",{style:{width:"92%"}}),e.jsx("i",{style:{width:"64%"}}),e.jsx("i",{style:{width:"88%"}}),e.jsx("i",{style:{width:"42%"}})]}),s.name||s.meta?e.jsxs("span",{className:"gf-sheet-head",children:[s.name?e.jsx("span",{className:"gf-sheet-name",children:s.name}):null,s.meta?e.jsx("span",{className:"gf-sheet-meta",children:s.meta}):null]}):null]}),he={className:"gf-sheet"+(ee?" gf-sheet--art":"")+(k===C?" gf-sheet--drop":""),style:{"--gf-slot":j,"--gf-depth":Y.length-1-p,"--gf-jx":((A()-.5)*10).toFixed(2)+"px","--gf-jr":((A()-.5)*3.2).toFixed(2)+"deg",zIndex:p+1},onAnimationEnd:k===C?()=>te(null):void 0};return e.jsx("div",{role:"listitem",className:"gf-sheet-slot",children:s.href?e.jsx("a",{...he,href:s.href,onClick:()=>F==null?void 0:F(s,se+p),children:Q}):e.jsx("button",{...he,type:"button",onClick:()=>F==null?void 0:F(s,se+p),children:Q})},k)})}),u!=="none"?e.jsx("button",{ref:q,type:"button",className:"gf-key gf-key--"+u,"aria-label":u==="add"?"Add a file to "+o:"More options for "+o,"aria-haspopup":u==="more"?"menu":void 0,"aria-expanded":u==="more"?w:void 0,"aria-controls":u==="more"?"gf-menu-"+I:void 0,onClick:()=>u==="add"?ae():R(s=>!s),children:u==="add"?e.jsx("svg",{className:"gf-glyph gf-glyph--plus",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M12 4.5v15M4.5 12h15"})},S):e.jsxs("svg",{className:"gf-glyph gf-glyph--more",viewBox:"0 0 30 12","aria-hidden":"true",children:[e.jsx("rect",{x:"1",y:"1.5",width:"8",height:"9",rx:"3.4"}),e.jsx("rect",{x:"11",y:"1.5",width:"8",height:"9",rx:"3.4"}),e.jsx("rect",{x:"21",y:"1.5",width:"8",height:"9",rx:"3.4"})]})}):null,u==="more"?e.jsx("div",{ref:W,id:"gf-menu-"+I,role:"menu","aria-label":o+" options",className:"gf-menu","data-open":w||void 0,onKeyDown:Z,children:re.map((s,p)=>e.jsx("button",{type:"button",role:"menuitem",tabIndex:w?-1:void 0,disabled:!w,className:"gf-menu-item"+(s.danger?" gf-menu-item--danger":""),onClick:()=>{var k,j;R(!1),(k=q.current)==null||k.focus(),(j=s.onSelect)==null||j.call(s)},children:s.label},s.label+p))}):null]})})]})}let Re=!1;function st(){return r.useInsertionEffect(()=>{if(!(Re||typeof document>"u")){if(!document.getElementById("gf-shared-styles")){const o=document.createElement("style");o.id="gf-shared-styles",o.textContent=nt,document.head.appendChild(o)}Re=!0}},[]),null}const nt=`
.gf-root {
  --gf-px: 0;
  --gf-py: 0;
  --gf-ease: cubic-bezier(.2, .8, .2, 1);
  --gf-spring: cubic-bezier(.22, 1, .36, 1);
  --gf-hinge: 0deg;
  --gf-lift: 42px;
  --gf-spread: 0px;
  --gf-fan: 0deg;
  --gf-stack: 15px;
  --gf-ink: #141416;
  --gf-ink-soft: rgba(20, 20, 22, .55);
  position: relative;
  display: inline-block;
  flex: none;
  vertical-align: top;
  font-family: ui-sans-serif, system-ui, -apple-system, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  isolation: isolate;
}
.gf-root[data-tone="dark"] { --gf-ink: #f5f5f7; --gf-ink-soft: rgba(245, 245, 247, .58); }
.gf-root:hover, .gf-root:focus-within { --gf-hinge: -11deg; --gf-lift: -34px; --gf-spread: 8px; --gf-fan: 1.4deg; --gf-stack: 10px; }
.gf-root[data-open] { --gf-hinge: -24deg; --gf-lift: -96px; --gf-spread: 40px; --gf-fan: 5deg; --gf-stack: 30px; }

.gf-stage {
  position: absolute;
  left: 0;
  top: 0;
  width: 340px;
  height: 272px;
  transform-origin: 0 0;
}
.gf-tilt {
  position: absolute;
  inset: 0;
  transform: none;
  transition: transform .18s linear;
}
.gf-root:hover .gf-tilt {
  transform: perspective(1400px) rotateX(calc(var(--gf-py) * -3deg)) rotateY(calc(var(--gf-px) * 4deg));
}

.gf-shadow {
  position: absolute;
  left: 4px;
  right: 4px;
  bottom: -18px;
  height: 84px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(16, 18, 24, .36) 0%, rgba(16, 18, 24, 0) 72%);
  transform: translateX(calc(var(--gf-px) * -6px));
  transition: opacity .9s var(--gf-ease);
  pointer-events: none;
}
.gf-root[data-tone="dark"] .gf-shadow {
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, .68) 0%, rgba(0, 0, 0, 0) 72%);
}

.gf-back {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #f3f3f4 0%, #e3e3e6 100%);
}
.gf-root[data-tone="dark"] .gf-back {
  background: linear-gradient(180deg, rgba(36, 39, 48, 0.92) 0%, rgba(15, 17, 23, 0.96) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 0 18px rgba(0, 0, 0, 0.5);
}
.gf-art {
  position: absolute;
  left: -12px;
  top: -12px;
  width: 364px;
  height: 296px;
  max-width: none;
  object-fit: cover;
  transform: translate(calc(var(--gf-px) * -7px), calc(var(--gf-py) * -6px)) scale(1.02);
  transition: transform 1.1s var(--gf-ease), opacity 1.2s var(--gf-ease), filter 1.2s var(--gf-ease);
}
canvas.gf-art { opacity: 0; filter: blur(14px) saturate(.6); }
canvas.gf-art[data-ready] { opacity: 1; filter: none; }
.gf-back-sheen {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .15) 0%, rgba(255, 255, 255, 0) 24%),
    radial-gradient(120% 80% at 80% 0%, rgba(255, 255, 255, .12), rgba(255, 255, 255, 0) 60%);
  pointer-events: none;
}

.gf-rim {
  position: absolute;
  left: 0;
  top: 0;
  max-width: none;
  overflow: visible;
  pointer-events: none;
  fill: none;
}
.gf-back-rim { width: 340px; height: 272px; }
.gf-back-rim path { stroke: rgba(255, 255, 255, .45); stroke-width: 1; }
.gf-root[data-tone="dark"] .gf-back-rim path { stroke: rgba(255, 255, 255, .2); stroke-width: 1.5; }

/* ---- files ---------------------------------------------------------------- */
.gf-files {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  clip-path: inset(-130px -36px 10px -36px);
}
.gf-sheet-slot { display: contents; }
.gf-sheet {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  left: 34px;
  top: 96px;
  width: 272px;
  height: 184px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  pointer-events: auto;
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f0 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .9),
    0 0 0 .5px rgba(0, 0, 0, .1),
    0 10px 26px -8px rgba(10, 12, 20, .28);
  transform-origin: 50% 100%;
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1))
    rotate(calc(var(--gf-jr) + var(--gf-slot) * var(--gf-fan)));
  transition:
    transform .75s var(--gf-spring) calc(var(--gf-depth) * 40ms),
    box-shadow .4s var(--gf-ease),
    translate .9s var(--gf-ease),
    opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-sheet { background: linear-gradient(180deg, #2c2c30 0%, #1c1c1f 100%); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .14), 0 0 0 .5px rgba(255, 255, 255, .08), 0 12px 28px -8px rgba(0, 0, 0, .7); }
.gf-sheet--art { background: #1a1a1d; }
.gf-root[data-open] .gf-sheet:hover,
.gf-root[data-open] .gf-sheet:focus-visible {
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1 - 18px))
    rotate(calc(var(--gf-slot) * var(--gf-fan) * .6));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .1), 0 22px 40px -12px rgba(10, 12, 20, .42);
  transition-delay: 0s;
}
.gf-sheet:focus-visible { outline: 2px solid #4c8dff; outline-offset: 2px; }
.gf-sheet-art {
  position: absolute;
  left: 0;
  top: 0;
  width: 272px;
  height: 184px;
  max-width: none;
  object-fit: cover;
  transition: opacity .9s var(--gf-ease), filter .9s var(--gf-ease);
}
canvas.gf-sheet-art { opacity: 0; filter: blur(10px); }
canvas.gf-sheet-art[data-ready] { opacity: 1; filter: none; }
.gf-sheet--art::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .18), inset 0 1px 0 rgba(255, 255, 255, .25);
  pointer-events: none;
}
.gf-sheet-head {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 11px;
  z-index: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  white-space: nowrap;
}
.gf-sheet-name {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12.5px;
  font-weight: 560;
  letter-spacing: -.005em;
  color: #18181b;
}
.gf-sheet-meta {
  flex: none;
  font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 10px;
  letter-spacing: .02em;
  color: rgba(24, 24, 27, .5);
}
.gf-root[data-tone="dark"] .gf-sheet-name, .gf-sheet--art .gf-sheet-name { color: #ffffff; text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9); }
.gf-root[data-tone="dark"] .gf-sheet-meta, .gf-sheet--art .gf-sheet-meta { color: rgba(255, 255, 255, 0.85); text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9); }
.gf-lines {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.gf-lines i {
  display: block;
  height: 5px;
  border-radius: 3px;
  background: rgba(24, 24, 27, .08);
}
.gf-lines i:first-child { height: 9px; margin-bottom: 4px; background: rgba(24, 24, 27, .14); }
.gf-root[data-tone="dark"] .gf-lines i { background: rgba(255, 255, 255, .08); }
.gf-root[data-tone="dark"] .gf-lines i:first-child { background: rgba(255, 255, 255, .16); }

.gf-sheet--drop { animation: gf-drop .65s var(--gf-ease) both; }
@keyframes gf-drop {
  0% { translate: 0 -160px; rotate: -6deg; opacity: 0; }
  40% { opacity: 1; }
  100% { translate: 0 0; rotate: 0deg; opacity: 1; }
}

/* ---- front glass ----------------------------------------------------------- */
.gf-front {
  position: absolute;
  left: 0;
  top: 74px;
  width: 340px;
  height: 198px;
  z-index: 10;
  transform-origin: 50% 100%;
  transform: none;
  transition: transform .8s var(--gf-spring), translate 1s var(--gf-ease), opacity 1s var(--gf-ease);
}
.gf-root:hover .gf-front,
.gf-root:focus-within .gf-front,
.gf-root[data-open] .gf-front {
  transform: perspective(760px) rotateX(var(--gf-hinge));
}
.gf-front--bump { animation: gf-bump .5s var(--gf-ease) .3s both; }
@keyframes gf-bump {
  0% { scale: 1; }
  50% { scale: .99 .985; }
  100% { scale: 1; }
}
.gf-tint {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .82) 0%, rgba(248, 248, 250, .93) 46%, rgba(242, 242, 245, .99) 100%);
}
.gf-root[data-tone="dark"] .gf-tint {
  background: linear-gradient(180deg, rgba(36, 40, 50, .86) 0%, rgba(19, 21, 28, .94) 48%, rgba(10, 11, 15, .99) 100%);
}
.gf-spec {
  position: absolute;
  inset: 0;
  background: radial-gradient(260px 200px at calc(50% + var(--gf-px) * 46%) calc(30% + var(--gf-py) * 40%), rgba(255, 255, 255, .36), rgba(255, 255, 255, 0) 70%);
  opacity: .9;
  pointer-events: none;
}
.gf-root[data-tone="dark"] .gf-spec {
  background: radial-gradient(260px 200px at calc(50% + var(--gf-px) * 46%) calc(30% + var(--gf-py) * 40%), rgba(255, 255, 255, .13), rgba(255, 255, 255, 0) 70%);
  opacity: 1;
}
.gf-front-rim { width: 340px; height: 198px; }
.gf-front-rim path { stroke-width: 2.4; transition: stroke-width .3s var(--gf-ease); }
.gf-root[data-tone="dark"] .gf-front-rim { opacity: .55; }

.gf-hit {
  all: unset;
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
}
.gf-hit:focus-visible ~ .gf-label .gf-title { text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 4px; }
.gf-front:has(.gf-hit:focus-visible) .gf-front-rim path { stroke-width: 5; }

.gf-label {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 200px;
  pointer-events: none;
  color: var(--gf-ink);
}
.gf-root[data-place="bottom-left"] .gf-label { left: 28px; bottom: 28px; }
.gf-root[data-place="top-left"] .gf-label { left: 28px; top: 34px; }
.gf-root[data-place="top-right"] .gf-label { right: 32px; top: 52px; align-items: flex-start; }
.gf-meta {
  font-family: var(--font-display), system-ui, -apple-system, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--gf-ink);
  white-space: nowrap;
  animation: gf-roll .5s var(--gf-ease) both;
}
.gf-root[data-tone="dark"] .gf-meta {
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
.gf-title {
  font-family: var(--font-display), system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: var(--gf-ink-soft);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gf-root[data-tone="dark"] .gf-title {
  color: rgba(255, 255, 255, 0.78);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}
@keyframes gf-roll {
  from { opacity: 0; translate: 0 5px; }
  to { opacity: 1; translate: 0 0; }
}

/* ---- the key: + or ··· ------------------------------------------------------ */
.gf-key {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  right: 22px;
  bottom: 22px;
  z-index: 12;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), background .35s var(--gf-ease);
}
.gf-key:hover { transform: translateY(-2px); }
.gf-key:active { transform: translateY(0) scale(.93); transition-duration: .12s; }
.gf-key:focus-visible { outline: 2px solid #4c8dff; outline-offset: 3px; }
.gf-key--add {
  color: #fff;
  background: radial-gradient(120% 90% at 50% 0%, #3a3a3f 0%, #121214 55%, #050506 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .22),
    inset 0 -3px 8px rgba(0, 0, 0, .7),
    0 0 0 1px rgba(0, 0, 0, .75),
    0 14px 22px -8px rgba(0, 0, 0, .55),
    0 3px 6px -2px rgba(0, 0, 0, .35);
}
.gf-root[data-tone="dark"] .gf-key--add {
  color: #111113;
  background: radial-gradient(120% 90% at 50% 0%, #ffffff 0%, #ececee 55%, #d2d2d6 100%);
  box-shadow: inset 0 1px 0 #fff, inset 0 -3px 8px rgba(0, 0, 0, .14), 0 0 0 1px rgba(0, 0, 0, .4), 0 14px 22px -8px rgba(0, 0, 0, .7);
}
.gf-key--more {
  color: #111113;
  background: linear-gradient(180deg, rgba(255, 255, 255, .94) 0%, rgba(226, 226, 230, .88) 100%);
  box-shadow:
    inset 0 1px 0 #fff,
    inset 0 -2px 4px rgba(0, 0, 0, .06),
    0 0 0 1px rgba(0, 0, 0, .16),
    0 10px 18px -8px rgba(0, 0, 0, .3);
}
.gf-root[data-tone="dark"] .gf-key--more {
  color: #f5f5f7;
  background: linear-gradient(180deg, rgba(46, 46, 52, .92) 0%, rgba(28, 28, 32, .94) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .22), 0 0 0 1px rgba(255, 255, 255, .1), 0 10px 18px -8px rgba(0, 0, 0, .6);
}
.gf-key--more[aria-expanded="true"] { transform: scale(.96); }
.gf-glyph { display: block; max-width: none; fill: none; stroke: currentColor; stroke-linecap: round; }
.gf-glyph--plus { width: 26px; height: 26px; stroke-width: 1.6; animation: gf-turn .6s var(--gf-spring); }
.gf-glyph--more { width: 30px; height: 12px; stroke-width: 1.7; }
@keyframes gf-turn { from { rotate: -90deg; } to { rotate: 0deg; } }

/* ---- menu ------------------------------------------------------------------- */
.gf-menu {
  position: absolute;
  right: 22px;
  bottom: 90px;
  z-index: 20;
  min-width: 176px;
  padding: 6px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background: rgba(252, 252, 253, .92);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .14), 0 24px 48px -16px rgba(10, 12, 20, .4);
  transform-origin: 100% 100%;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px) scale(.94);
  transition: opacity .2s var(--gf-ease), transform .32s var(--gf-spring), visibility 0s .32s;
}
.gf-menu[data-open] {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition-delay: 0s;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}
.gf-root[data-tone="dark"] .gf-menu { background: rgba(28, 28, 32, .94); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 0 0 .5px rgba(255, 255, 255, .1), 0 24px 48px -16px rgba(0, 0, 0, .8); }
.gf-menu-item {
  all: unset;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 450;
  color: #18181b;
  cursor: pointer;
}
.gf-root[data-tone="dark"] .gf-menu-item { color: #f4f4f5; }
.gf-menu-item:hover, .gf-menu-item:focus-visible { background: rgba(24, 24, 27, .07); }
.gf-root[data-tone="dark"] .gf-menu-item:hover, .gf-root[data-tone="dark"] .gf-menu-item:focus-visible { background: rgba(255, 255, 255, .09); }
.gf-menu-item--danger { color: #d92d20; }
.gf-root[data-tone="dark"] .gf-menu-item--danger { color: #ff6b5e; }

/* ---- entrance: the folder assembles itself ---------------------------------- */
.gf-root:not([data-entered]) .gf-back,
.gf-root:not([data-entered]) .gf-back-rim { translate: 0 22px; opacity: 0; }
.gf-root:not([data-entered]) .gf-sheet { translate: 0 -120px; opacity: 0; }
.gf-root:not([data-entered]) .gf-front { translate: 0 46px; opacity: 0; }
.gf-root:not([data-entered]) .gf-key { opacity: 0; scale: .6; }
.gf-root:not([data-entered]) .gf-shadow { opacity: 0; }
.gf-back, .gf-back-rim { transition: translate 1s var(--gf-ease), opacity .9s var(--gf-ease); }
.gf-root[data-entered] .gf-sheet { transition-delay: calc(var(--gf-depth) * 40ms), 0s, calc(.18s + var(--gf-depth) * 90ms), calc(.18s + var(--gf-depth) * 90ms); }
.gf-root[data-entered] .gf-front { transition-delay: 0s, .42s, .42s; }
.gf-key { transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), opacity .6s var(--gf-ease) .7s, scale .7s var(--gf-spring) .7s; }

@media (prefers-reduced-motion: reduce) {
  .gf-root *, .gf-root *::before, .gf-root *::after {
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    animation: none !important;
  }
  .gf-tilt { transform: none; }
}
`,ot=r.memo(()=>e.jsx("div",{className:"text-center lg:mb-10 mb-8 px-[5%]",children:e.jsx("div",{"data-aos":"fade-up","data-aos-duration":"600",children:e.jsx("h2",{className:"section-label mx-auto",style:{fontFamily:"var(--font-display)"},children:"About Me"})})})),Fe=r.memo(function AboutPortrait(){
  function reveal(event){
    const portrait=event.currentTarget;
    const bounds=portrait.getBoundingClientRect();
    const x=event.clientX-bounds.left;
    const y=event.clientY-bounds.top;
    portrait.style.setProperty("--reveal-x",x+"px");
    portrait.style.setProperty("--reveal-y",y+"px");
    portrait.style.setProperty("--reveal-radius",Math.min(bounds.width*.27,105)+"px");
  }
  function hide(event){event.currentTarget.style.setProperty("--reveal-radius","0px")}
  const mask="radial-gradient(circle var(--reveal-radius,0px) at var(--reveal-x,-999px) var(--reveal-y,-999px),black 67%,transparent 100%)";
  return e.jsx("div",{className:"flex justify-center items-center w-full max-w-md mx-auto lg:max-w-none",children:
    e.jsxs("div",{className:"relative w-full overflow-hidden",style:{maxWidth:400,aspectRatio:"2 / 3",touchAction:"pan-y"},
      onPointerEnter:reveal,onPointerMove:reveal,onPointerDown:reveal,onPointerLeave:hide,onPointerCancel:hide,
      onPointerUp:event=>{if(event.pointerType!=="mouse")hide(event)},
      children:[
        e.jsx("img",{src:"./about/dedy-transparan.webp",alt:"Potret Dedy Setiawan",className:"absolute inset-0 w-full h-full object-contain pointer-events-none"}),
        e.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden","aria-hidden":true,style:{maskImage:mask,WebkitMaskImage:mask},children:
          e.jsx("img",{src:"./about/decade-frontal.webp",alt:"",className:"absolute inset-0 w-full h-full object-contain",style:{mask:"url(./about/dedy-transparan.webp) center / contain no-repeat",WebkitMask:"url(./about/dedy-transparan.webp) center / contain no-repeat"}})
        })
      ]})
  });
}),ge=[{"id": 101, "title": "Desain Grafis Edutour", "link": "https://canva.link/ztj5uu8j7m8819k", "img": "./uploads/canva-0.png", "description": "Desain grafis", "tech_stack": ["Canva"], "features": [], "is_published": true}, {"id": 102, "title": "Desain Grafis Edukasi BPJS KC Ungaran", "link": "https://canva.link/ez1tp13uhkl9dpq", "img": "./uploads/canva-1.png", "description": "Desain grafis", "tech_stack": ["Canva"], "features": [], "is_published": true}, {"id": 103, "title": "Desain BPJS ON AIR", "link": "https://canva.link/qop3be79cxou28n", "img": "./uploads/canva-2.png", "description": "Desain grafis", "tech_stack": ["Canva"], "features": [], "is_published": true}, {"id": 104, "title": "Desain INFOGRAFIS", "link": "https://canva.link/lk198ydjpo0ww5t", "img": "./uploads/canva-3.png", "description": "Desain grafis", "tech_stack": ["Canva"], "features": [], "is_published": true}],oe=[{category:"keahlian",img:"./uploads/cert-15-gcloud.webp"},{category:"keahlian",img:"./uploads/cert-14-055815.png"},{category:"keahlian",img:"./uploads/cert-13-061803.png"},{category:"keahlian",img:"./uploads/cert-12-061646.png"},{category:"keahlian",img:"./uploads/cert-11-061435.png"},{category:"keahlian",img:"./uploads/cert-10-061109.png"}],pe=[{category:"prestasi",img:"./uploads/cert-16-prestasi.jpeg"},{category:"prestasi",img:"./uploads/cert-8-rauiux.jpg"},{category:"prestasi",img:"./uploads/cert-7-finalis.jpg"},{category:"prestasi",img:"./uploads/cert-6-bronze.jpg"}],Te=[{"id": "edu-1", "school": "Universitas Dian Nuswantoro", "degree": "Jurusan Ilmu Komunikasi", "faculty": "Fakultas Ilmu Komputer", "year": "2021–2025", "tag": "S1", "logo": "./uploads/logo-udinus.png"}, {"id": "edu-2", "school": "SMAK BPK Penabur Cirebon", "degree": "IPS", "faculty": "", "year": "2018–2021", "tag": "SMA", "logo": "./uploads/logo-penabur.png"}],rt=[{"id": "exp-1", "company": "BPJS Kesehatan KC Ungaran", "role": "Komunikasi & Kesekretariatan", "year": "Agu 2026 – Present", "tag": "Internship", "subtitle": "", "logo": "./uploads/logo-bpjs.png", "order_index": 1}, {"id": "exp-2", "company": "PT Morich Indo Fashion 2", "role": "Industrial Engineer CNC", "year": "Juli 2026 – Agu 2026", "tag": "Internship", "subtitle": "", "logo": "./uploads/logo-morich.png", "order_index": 2}, {"id": "exp-3", "company": "TVKU Semarang", "role": "Produksi (Cameraman)", "year": "Agu 2024 – Jan 2025", "tag": "Internship", "subtitle": "", "logo": "./uploads/logo-tvku.png", "order_index": 3}, {"id": "exp-4", "company": "PT. Telkom Indonesia Witel Cirebon", "role": "Business Service", "year": "Mar 2024 – Agu 2024", "tag": "Internship", "subtitle": "", "logo": "./uploads/logo-telkom.png", "order_index": 4}],it=(o,n)=>{if(o&&!o.includes("yhbvnhccgdpukbuwsscd"))return o;const t=(n||"").toLowerCase();return t.includes("google")&&!t.includes("developer")?"./uploads/exp-gsa.jpg":t.includes("gdg")||t.includes("developer groups")?"./uploads/exp-gdgoc.png":t.includes("hology")?"./uploads/exp-hology.png":t.includes("raion")?"./uploads/exp-raion.png":t.includes("cubiespot")?"./uploads/exp-cubie.png":t.includes("sinau bareng")?"./uploads/exp-sinau.jpg":t.includes("brawijaya")||t.includes("filkom")?"./uploads/exp-filkom.jpg":""},Be=r.memo(({logo:o,name:n})=>{const t=it(o,n);if(t)return e.jsx("div",{className:"w-10 h-10 rounded-xl bg-white border border-white/10 p-1 flex items-center justify-center flex-shrink-0 overflow-hidden",children:e.jsx("img",{src:t,alt:n||"Logo",width:40,height:40,loading:"lazy",className:"w-full h-full object-contain",onError:x=>{x.currentTarget.style.display="none"}})});const c=(n||"").toLowerCase();if(c.includes("google"))return e.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 font-bold flex items-center justify-center flex-shrink-0 text-sm",children:"G"});if(c.includes("hology"))return e.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 font-bold flex items-center justify-center flex-shrink-0 text-xs",children:"</>"});if(c.includes("raion"))return e.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-xs",children:"RN"});if(c.includes("brawijaya")||c.includes("filkom"))return e.jsx("div",{className:"w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 font-bold flex items-center justify-center flex-shrink-0 text-xs",children:"UB"});const i=(n||"EX").split(" ").filter(Boolean).slice(0,2).map(x=>x[0]).join("").toUpperCase();return e.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/5 border border-white/15 text-zinc-300 font-bold font-mono flex items-center justify-center flex-shrink-0 text-xs tracking-tight",children:i})}),lt=o=>{if(o.subtitle||o.tag||o.location||o.type)return{subtitle:o.subtitle||o.location||"",tag:o.tag||o.type||""};const n=(o.company||"").toLowerCase(),t=(o.role||"").toLowerCase();return n.includes("google")&&t.includes("ambassador")?{subtitle:"Universitas Brawijaya",tag:"Ambassador"}:n.includes("gdg")||n.includes("developer groups")?{subtitle:"Universitas Brawijaya",tag:"Community"}:n.includes("hology")?{subtitle:"FILKOM UB",tag:"Committee"}:n.includes("filkom")||n.includes("brawijaya")?{subtitle:"FILKOM UB",tag:"Academic"}:n.includes("sinau bareng")?{subtitle:"FILKOM UB",tag:"Speaker"}:n.includes("raion")?{subtitle:"Malang",tag:"Internship"}:n.includes("cubiespot")?{subtitle:"Pasuruan",tag:"Internship"}:t.includes("intern")?{subtitle:"Company",tag:"Internship"}:{subtitle:"",tag:"Experience"}},ct=()=>{const[o,n]=r.useState(()=>typeof window<"u"?window.matchMedia("(min-width: 1024px)").matches:!0),[t,c]=r.useState({totalProjects:0,totalCertificates:0,totalAwards:0}),[i,x]=r.useState(()=>{try{const a=localStorage.getItem("dedy-design-projects")||"[]";if(a.includes("yhbvnhccgdpukbuwsscd"))return localStorage.removeItem("dedy-design-projects"),ge;const f=JSON.parse(a);return f.length>0?f:ge}catch{return ge}}),[l,u]=r.useState(()=>{try{const a=localStorage.getItem("certificates")||"[]";if(a.includes("yhbvnhccgdpukbuwsscd"))return localStorage.removeItem("certificates"),oe;const m=JSON.parse(a).filter(O=>O.category==="keahlian");return m.length>0?m:oe}catch{return oe}}),[v,y]=r.useState(()=>{try{const a=localStorage.getItem("certificates")||"[]";if(a.includes("yhbvnhccgdpukbuwsscd"))return pe;const m=JSON.parse(a).filter(O=>O.category==="prestasi");return m.length>0?m:pe}catch{return pe}});r.useEffect(()=>{(async()=>{var f,m,O;try{const[C,te]=await Promise.all([readCollection("projects"),readCollection("certificates")]),S=(g,w)=>g.length===w.length&&g.every((R,$)=>{var L;return(R==null?void 0:R.img)===((L=w[$])==null?void 0:L.img)});if(C.data&&C.data.length>0&&(x(g=>S(g,C.data)?g:C.data),localStorage.setItem("dedy-design-projects",JSON.stringify(C.data))),te.data&&te.data.length>0){const g=te.data,w=g.filter(M=>M.category==="keahlian"),R=new Set(w.map(M=>M.img)),$=[...w,...oe.filter(M=>!R.has(M.img))],L=g.filter(M=>M.category==="prestasi");u(M=>S(M,$)?M:$),y(M=>S(M,L)?M:L),localStorage.setItem("certificates",JSON.stringify([...$,...L]))}const z=((f=C.data)==null?void 0:f.length)||i.length,E=((m=te.data)==null?void 0:m.filter(g=>g.category==="keahlian").length)||0,N=Math.max(E,oe.length),d=((O=te.data)==null?void 0:O.filter(g=>g.category==="prestasi").length)||v.length;c({totalProjects:z,totalCertificates:N,totalAwards:d})}catch(C){console.error("Error fetching stats data:",C)}})()},[]);const[h,b]=r.useState([]),[P,T]=r.useState(!0),[B,F]=r.useState(null),[D,U]=r.useState(null),G=r.useRef(null),_=B!==null?B:0,J=D!==null?D:0,I=r.useMemo(()=>h&&h.length>0?h:rt,[h]),K=r.useCallback(()=>{if(G.current){const a=G.current;a.scrollTop+a.clientHeight>=a.scrollHeight-25?a.scrollTo({top:0,behavior:"smooth"}):a.scrollTo({top:a.scrollTop+110,behavior:"smooth"})}},[]);r.useEffect(()=>{const a=async()=>{let{data:m,error:O}=await readCollection("experiences");(O||!m)&&(m=(await readCollection("experiences")).data||[]),b(m||[]),T(!1)};a()},[]);const X=r.useMemo(()=>(i.length>0?i:ge).slice(0,4).map((f,m)=>({name:"",meta:"",image:f.img||ge[m%ge.length].img})),[i]),V=r.useMemo(()=>(l.length>0?l:oe).slice(0,4).map((f,m)=>({name:"",meta:"",image:f.img||oe[m%oe.length].img})),[l]),q=r.useMemo(()=>(v.length>0?v:pe).slice(0,4).map((f,m)=>({name:"",meta:"",image:f.img||pe[m%pe.length].img})),[v]);r.useEffect(()=>{const a=window.matchMedia("(min-width: 1024px)"),f=m=>n(m.matches);return n(a.matches),a.addEventListener("change",f),()=>a.removeEventListener("change",f)},[]),r.useEffect(()=>{const a=requestAnimationFrame(()=>{Ue.refreshHard()});return()=>cancelAnimationFrame(a)},[o]);const W=r.useCallback(a=>{typeof a=="number"&&window.dispatchEvent(new CustomEvent("changeTab",{detail:{tabIndex:a}}));const f=document.getElementById("Portofolio");if(!f)return;const m=Math.max(0,f.getBoundingClientRect().top+window.scrollY);window.lenis?window.lenis.scrollTo(m,{duration:.9}):window.scrollTo({top:m,behavior:"smooth"})},[]);return e.jsxs("div",{className:"h-auto pb-[10%] text-white px-[5%] sm:px-[5%] lg:px-[10%] pt-12 sm:pt-16 bg-[#030712] relative z-10",id:"About",itemScope:!0,itemType:"https://schema.org/Person",children:[e.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-clip z-0","aria-hidden":"true",children:[e.jsx("div",{className:"sticky top-0 h-screen w-full",children:e.jsx(Ke,{className:"h-full w-full bg-[#030712]",lineColor:"#64748b",lineOpacity:.38,levels:12,speed:.45,interactive:!1})}),e.jsx("div",{className:"absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030712] to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pointer-events-none"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx(ot,{}),e.jsxs("div",{className:"w-full mx-auto pt-8 sm:pt-12 relative",children:[o?e.jsxs("div",{className:"grid grid-cols-[2.5fr_3fr_2fr] gap-6 items-center",children:[e.jsxs("div",{className:"min-w-0 space-y-6 text-left","data-aos":"fade-right","data-aos-duration":"1000",children:[e.jsxs("h3",{className:"text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight",style:{fontFamily:"var(--font-display)"},children:[e.jsx("span",{className:"grad-vi block",children:"Hi, I'm"}),e.jsx("span",{className:"block text-white mt-1 whitespace-nowrap",children:"Dedy"}),e.jsx("span",{className:"block text-white whitespace-nowrap",children:"Setiawan"})]}),e.jsx("div",{className:"mt-8",children:e.jsx("a",{href:"./cv/Dedy-Setiawan.pdf",target:"_blank",rel:"noopener noreferrer",children:e.jsxs("button",{className:"px-6 py-3 rounded-xl font-semibold bg-[#2c67ed] hover:bg-[#1d4ed8] transition-[transform,background-color] duration-200 hover:scale-[1.03] flex items-center gap-2 text-white whitespace-nowrap",style:{fontFamily:"var(--font-display)"},children:[e.jsx(Se,{className:"w-4 h-4"})," View CV"]})})})]}),e.jsx("div",{className:"min-w-0 flex justify-center items-end",children:e.jsx(Fe,{})}),e.jsxs("div",{className:"min-w-0 space-y-6 text-left","data-aos":"fade-left","data-aos-duration":"1000",children:[e.jsx("div",{className:"text-base sm:text-lg leading-relaxed",style:{color:"var(--col-muted)"},children:e.jsx("p",{children:"Saya lulusan S1 Ilmu Komunikasi Universitas Dian Nuswantoro. Lewat pengalaman magang di BPJS Kesehatan, PT Telkom Indonesia, PT Morich Indo Fashion 2, dan TVKU Semarang, saya mengasah keterampilan mengelola media sosial, membuat konten digital, dan mendokumentasikan kegiatan. Pengalaman memimpin tim organisasi mengajarkan saya cara menyatukan ide dan bekerja lintas tim."})}),e.jsx("div",{className:"mt-8",children:e.jsx("a",{href:"#Portofolio",onClick:a=>{a.preventDefault(),W()},children:e.jsxs("button",{className:"px-6 py-3 rounded-xl font-semibold bg-[#2c67ed] hover:bg-[#1d4ed8] transition-[transform,background-color] duration-200 hover:scale-[1.03] flex items-center gap-2 text-white whitespace-nowrap",style:{fontFamily:"var(--font-display)"},children:[e.jsx(Me,{className:"w-4 h-4"})," View Projects"]})})})]})]}):e.jsxs("div",{className:"flex flex-col items-start gap-6",children:[e.jsx("div",{className:"flex justify-center w-full",children:e.jsx(Fe,{})}),e.jsxs("h3",{className:"text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-left w-full",style:{fontFamily:"var(--font-display)"},"data-aos":"fade-up","data-aos-duration":"1000",children:[e.jsx("span",{className:"grad-vi block",children:"Hi, I'm"}),e.jsx("span",{className:"block text-white mt-1",children:"Dedy Setiawan"})]}),e.jsx("div",{className:"text-base sm:text-lg leading-relaxed text-left w-full",style:{color:"var(--col-muted)"},children:e.jsx("p",{children:"Saya lulusan S1 Ilmu Komunikasi Universitas Dian Nuswantoro. Lewat pengalaman magang di BPJS Kesehatan, PT Telkom Indonesia, PT Morich Indo Fashion 2, dan TVKU Semarang, saya mengasah keterampilan mengelola media sosial, membuat konten digital, dan mendokumentasikan kegiatan. Pengalaman memimpin tim organisasi mengajarkan saya cara menyatukan ide dan bekerja lintas tim."})}),e.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[e.jsx("a",{href:"./cv/Dedy-Setiawan.pdf",target:"_blank",rel:"noopener noreferrer",className:"w-full",children:e.jsxs("button",{className:"w-full px-6 py-3 rounded-xl font-semibold bg-[#2c67ed] hover:bg-[#1d4ed8] transition-colors duration-200 flex items-center justify-center gap-2 text-white",style:{fontFamily:"var(--font-display)"},children:[e.jsx(Se,{className:"w-4 h-4"})," View CV"]})}),e.jsx("a",{href:"#Portofolio",onClick:a=>{a.preventDefault(),W()},className:"w-full",children:e.jsxs("button",{className:"w-full px-6 py-3 rounded-xl font-semibold bg-[#2c67ed] hover:bg-[#1d4ed8] transition-colors duration-200 flex items-center justify-center gap-2 text-white",style:{fontFamily:"var(--font-display)"},children:[e.jsx(Me,{className:"w-4 h-4"})," View Projects"]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-14","data-aos":"fade-up","data-aos-duration":"900",children:[e.jsx("div",{className:"flex flex-col justify-between",onMouseLeave:()=>F(null),children:e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold text-white mb-6",style:{fontFamily:"var(--font-display)"},children:"Education"}),e.jsx("div",{className:"relative pt-2 pb-2 px-2",children:e.jsx("div",{children:Te.map((a,f)=>{const m=_===f,O=f===Te.length-1;return e.jsxs("div",{onMouseEnter:()=>F(f),className:`relative flex items-start group transition-all duration-300 cursor-pointer ${O?"pb-1":"pb-6 sm:pb-7"} ${m?"opacity-100":"opacity-45 hover:opacity-90"}`,children:[!O&&e.jsx("div",{className:"absolute left-[17px] top-9 bottom-0 w-[2px] bg-white/15 z-0","aria-hidden":"true"}),e.jsx("div",{className:"relative z-10 flex-shrink-0 mr-4 sm:mr-5",children:e.jsx("div",{className:`w-9 h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${m?"bg-white text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.35)] ring-4 ring-white/15 scale-105":"bg-zinc-900/90 text-zinc-400 border border-white/20 group-hover:border-white/40 group-hover:text-zinc-200"}`,children:f+1})}),e.jsxs("div",{className:"flex-1 min-w-0 pt-0.5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(Be,{logo:a.logo,name:a.school}),e.jsx("span",{className:"text-sm sm:text-base font-semibold text-zinc-200 min-w-0 break-words",children:a.school}),e.jsx("span",{className:"ml-auto flex-shrink-0 text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-medium",children:a.year})]}),e.jsx("div",{className:"mt-2 flex items-center",children:e.jsx("h5",{className:"text-base sm:text-lg font-bold text-white tracking-tight",children:a.degree})}),e.jsxs("div",{className:"mt-1 flex items-center gap-2 text-xs text-zinc-400 flex-wrap",children:[a.faculty&&e.jsx("span",{children:a.faculty}),a.faculty&&e.jsx("span",{className:"text-zinc-600",children:"•"}),e.jsx("span",{className:"px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-medium",children:a.tag})]})]})]},a.id)})})}),e.jsxs("section",{style:{marginTop:"2rem"},children:[
    e.jsx("h4",{className:"text-xl font-bold text-white mb-6",style:{fontFamily:"var(--font-display)"},children:"Organizational Experience"}),
    e.jsxs("div",{className:"flex items-start gap-3 px-2",children:[
      e.jsx("span",{className:"relative z-10 w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center text-sm font-bold bg-white text-zinc-950 ring-4 ring-white/15",children:1}),
      e.jsx("img",{src:"./uploads/udinus-basketball.webp",alt:"Logo UDINUS Basketball",width:56,height:56,loading:"lazy",className:"rounded-xl flex-shrink-0",style:{objectFit:"contain",background:"#000"}}),
      e.jsxs("div",{className:"flex-1 min-w-0",children:[
        e.jsx("h5",{className:"text-base sm:text-lg font-bold text-white",children:"UKM Bola Basket UDINUS"}),
        e.jsx("p",{className:"text-sm text-zinc-300",children:"Divisi Dekorasi dan Dokumentasi"}),
        e.jsx("ul",{className:"mt-2",children:[["Anggota","2022–2023"],["Kepala Divisi","2023–2024"]].map(([role,year])=>e.jsxs("li",{className:"flex flex-wrap items-center justify-between gap-2 py-1 text-sm text-zinc-200",children:[role,e.jsx("span",{className:"text-xs text-zinc-400",children:year})]},year))})
      ]})
    ]})
  ]})]})}),e.jsxs("div",{className:"flex flex-col justify-between",onMouseLeave:()=>U(null),children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold text-white mb-6",style:{fontFamily:"var(--font-display)"},children:"Experience Internship"}),e.jsx("div",{ref:G,"data-lenis-prevent":!0,onWheel:a=>a.stopPropagation(),className:"relative overflow-y-auto px-2 pt-3.5 pb-2 overscroll-contain",style:{maxHeight:"360px",scrollbarWidth:"none",msOverflowStyle:"none",WebkitOverflowScrolling:"touch"},children:I.map((a,f)=>{const m=J===f,O=f===I.length-1,C=lt(a);return e.jsxs("div",{onMouseEnter:()=>U(f),className:`relative flex items-start group transition-all duration-300 cursor-pointer ${O?"pb-2":"pb-6 sm:pb-7"} ${m?"opacity-100":"opacity-45 hover:opacity-90"}`,children:[!O&&e.jsx("div",{className:"absolute left-[17px] top-9 bottom-0 w-[2px] bg-white/15 z-0","aria-hidden":"true"}),e.jsx("div",{className:"relative z-10 flex-shrink-0 mr-4 sm:mr-5",children:e.jsx("div",{className:`w-9 h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${m?"bg-white text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.35)] ring-4 ring-white/15 scale-105":"bg-zinc-900/90 text-zinc-400 border border-white/20 group-hover:border-white/40 group-hover:text-zinc-200"}`,children:f+1})}),e.jsxs("div",{className:"flex-1 min-w-0 pt-0.5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(Be,{logo:a.logo,name:a.company}),e.jsx("span",{className:"text-sm sm:text-base font-semibold text-zinc-200 min-w-0 break-words",children:a.company}),e.jsx("span",{className:"ml-auto flex-shrink-0 text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-medium",children:a.year})]}),e.jsx("div",{className:"mt-2 flex items-center",children:e.jsx("h5",{className:"text-base sm:text-lg font-bold text-white tracking-tight",children:a.role})}),(C.subtitle||C.tag)&&e.jsxs("div",{className:"mt-1 flex items-center gap-2 text-xs text-zinc-400 flex-wrap",children:[C.subtitle&&e.jsx("span",{children:C.subtitle}),C.subtitle&&C.tag&&e.jsx("span",{className:"text-zinc-600",children:"•"}),C.tag&&e.jsx("span",{className:"px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-medium",children:C.tag})]})]})]},a.id||f)})})]}),e.jsx("div",{className:"relative border-t border-dashed border-white/15 pt-3 mt-4 flex items-center justify-center",children:e.jsx("button",{type:"button",onClick:K,className:"text-xs font-mono text-zinc-400 tracking-wider flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 mt-16 justify-items-center",children:[e.jsx("div",{"data-aos":"fade-right","data-aos-duration":"800",className:"flex flex-col items-center",children:e.jsx(ve,{label:"Projects",meta:t.totalProjects||X.length,tone:"dark",art:"none",action:"more",appearDelay:0,files:X,width:320,menu:[{label:"Explore All Projects",onSelect:()=>W(0)}],onFileSelect:()=>W(0)})})]})]})]})]})},xt=r.memo(ct);export{xt as default};

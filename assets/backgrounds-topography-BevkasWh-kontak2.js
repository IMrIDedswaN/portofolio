import{e as ft,f as ut,u as Ne,a as je,j as Ke,g as dt,h as ht}from"./framer-DIYrIZAr-kontak2.js";import{r as M}from"./react-vendor-DtkDK1ro-kontak2.js";import{a as pt}from"./index-BHdktB2O-basket2.js";const v=14,mt=2,vt=50,wt=50,At=16,xt=.85,Ze=1,Je=280,Ae=.95,ot=90,Ue=60,yt=(()=>{const e=Array.from({length:256},(n,o)=>o);let t=1013;for(let n=255;n>0;n--){t=t*16807%2147483647;const o=t%(n+1);[e[n],e[o]]=[e[o],e[n]]}return Uint8Array.from([...e,...e])})();function gt(){const[e,t]=M.useState(()=>typeof document>"u"?!0:document.visibilityState!=="hidden");return M.useEffect(()=>{const n=()=>t(document.visibilityState!=="hidden");return document.addEventListener("visibilitychange",n),()=>document.removeEventListener("visibilitychange",n)},[]),e}function ee(e,t){typeof e.jump=="function"?e.jump(t):e.set(t)}function We(e){return e*e*e*(e*(e*6-15)+10)}function pe(e,t,n){return e+(t-e)*n}function te(e,t,n,o){const a=e&15,l=a<8?t:n,r=a<4?n:a===12||a===14?t:o;return(a&1?-l:l)+(a&2?-r:r)}function Qe(e,t,n){const o=yt,a=Math.floor(e)&255,l=Math.floor(t)&255,r=Math.floor(n)&255;e-=Math.floor(e),t-=Math.floor(t),n-=Math.floor(n);const i=We(e),c=We(t),s=We(n),h=o[a]+l,W=o[h]+r,I=o[h+1]+r,S=o[a+1]+l,w=o[S]+r,xe=o[S+1]+r;return pe(pe(pe(te(o[W],e,t,n),te(o[w],e-1,t,n),i),pe(te(o[I],e,t-1,n),te(o[xe],e-1,t-1,n),i),c),pe(pe(te(o[W+1],e,t,n-1),te(o[w+1],e-1,t,n-1),i),pe(te(o[I+1],e,t-1,n-1),te(o[xe+1],e-1,t-1,n-1),i),c),s)}function De(e){return{segments:new Float64Array(0),count:0,used:new Uint8Array(0),first:new Int32Array(e).fill(-1),second:new Int32Array(e).fill(-1),points:new Float64Array(0),scratch:new Float64Array(0)}}function Y(e,t,n,o,a,l,r){if((e.count+1)*6>e.segments.length){const s=Math.max(256,e.count*2),h=new Float64Array(s*6);h.set(e.segments),e.segments=h,e.used=new Uint8Array(s),e.points=new Float64Array(s*4+16),e.scratch=new Float64Array(s*4+16)}const i=e.count*6,c=e.segments;c[i]=t,c[i+1]=n,c[i+2]=o,c[i+3]=a,c[i+4]=l,c[i+5]=r,e.count++}function et(e,t,n){e.first[t]<0?e.first[t]=n:e.second[t]=n}function tt(e,t,n){const o=e.first[t],a=o===n?e.second[t]:o;return a>=0&&!e.used[a]?a:-1}function Rt(e,t,n,o,a){for(let l=0;l<mt;l++){a.set(e.subarray(t,t+n*2));for(let r=o?0:1;r<(o?n:n-1);r++){const i=(r-1+n)%n*2,c=(r+1)%n*2;e[t+r*2]=(a[i]+2*a[r*2]+a[c])/4,e[t+r*2+1]=(a[i+1]+2*a[r*2+1]+a[c+1])/4}}}function Ge(e,t,n,o){return t+(o+n)%n*2}function Mt(e,t,n,o,a,l){const r=(o-n)/2;if(!(r<2)){if(r>3&&Rt(t,n,r,a,l),a&&r>2){const i=Ge(t,n,r,-1);e.moveTo((t[i]+t[n])/2,(t[i+1]+t[n+1])/2);for(let c=0;c<r;c++){const s=Ge(t,n,r,c),h=Ge(t,n,r,c+1);e.quadraticCurveTo(t[s],t[s+1],(t[s]+t[h])/2,(t[s+1]+t[h+1])/2)}return}e.moveTo(t[n],t[n+1]);for(let i=1;i<r-1;i++){const c=n+i*2;e.quadraticCurveTo(t[c],t[c+1],(t[c]+t[c+2])/2,(t[c+1]+t[c+3])/2)}e.lineTo(t[o-2],t[o-1])}}function bt(e,t){const n=t.segments,o=t.points;for(let l=0;l<t.count;l++)t.used[l]=0,et(t,n[l*6],l),et(t,n[l*6+3],l);const a=o.length>>2<<1;for(let l=0;l<t.count;l++){if(t.used[l])continue;t.used[l]=1;const r=l*6;let i=a,c=a;o[c++]=n[r+1],o[c++]=n[r+2],o[c++]=n[r+4],o[c++]=n[r+5];let s=l,h=n[r+3];for(;;){const I=tt(t,h,s);if(I<0)break;t.used[I]=1;const S=I*6,w=n[S]===h?3:0;o[c++]=n[S+w+1],o[c++]=n[S+w+2],h=n[S+w],s=I}const W=h===n[r]&&c-i>6;if(W)c-=2;else for(s=l,h=n[r];;){const I=tt(t,h,s);if(I<0)break;t.used[I]=1;const S=I*6,w=n[S]===h?3:0;o[--i]=n[S+w+2],o[--i]=n[S+w+1],h=n[S+w],s=I}Mt(e,o,i,c,W,t.scratch)}for(let l=0;l<t.count;l++){const r=n[l*6],i=n[l*6+3];t.first[r]=t.second[r]=-1,t.first[i]=t.second[i]=-1}t.count=0}const Et=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Bt=`
#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec2 size;
uniform float dpr;
uniform float feature;
uniform float z;
uniform float step;
uniform float range;
uniform float amount;
uniform float lift;
uniform float hillRadius;
uniform vec2 hill;
uniform vec4 ripples[4];
uniform float reach;
uniform float rippleWidth;
uniform vec3 color;
uniform float lineOpacity;

vec3 mod289v(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float mod289f(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float perm(float x) {
  return mod289f(((x * 34.0) + 10.0) * x);
}

float grad(float hash, float x, float y, float z) {
  float h = floor(fract(hash * (1.0 / 16.0)) * 16.0);
  float u = h < 8.0 ? x : y;
  float v = h < 4.0 ? y : (h == 12.0 || h == 14.0 ? x : z);
  float s1 = fract(h * 0.5) < 0.25 ? u : -u;
  float s2 = fract(floor(h * 0.5) * 0.5) < 0.25 ? v : -v;
  return s1 + s2;
}

float noise(vec3 p) {
  vec3 cell = mod289v(floor(p));
  vec3 f = fract(p);
  vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float A = perm(cell.x) + cell.y;
  float AA = perm(A) + cell.z;
  float AB = perm(A + 1.0) + cell.z;
  float B = perm(cell.x + 1.0) + cell.y;
  float BA = perm(B) + cell.z;
  float BB = perm(B + 1.0) + cell.z;
  return mix(
    mix(
      mix(grad(perm(AA), f.x, f.y, f.z), grad(perm(BA), f.x - 1.0, f.y, f.z), u.x),
      mix(grad(perm(AB), f.x, f.y - 1.0, f.z), grad(perm(BB), f.x - 1.0, f.y - 1.0, f.z), u.x),
      u.y
    ),
    mix(
      mix(grad(perm(AA + 1.0), f.x, f.y, f.z - 1.0), grad(perm(BA + 1.0), f.x - 1.0, f.y, f.z - 1.0), u.x),
      mix(grad(perm(AB + 1.0), f.x, f.y - 1.0, f.z - 1.0), grad(perm(BB + 1.0), f.x - 1.0, f.y - 1.0, f.z - 1.0), u.x),
      u.y
    ),
    u.z
  );
}

void main() {
  vec2 point = vec2(gl_FragCoord.x, size.y - gl_FragCoord.y) / dpr;
  vec2 n = point / feature;
  float value = noise(vec3(n, z)) * 1.1 + noise(vec3(n * 2.1, z * 1.7)) * 0.45;
  if (lift > 0.0) value += lift * exp(-length(point - hill) / hillRadius);
  for (int i = 0; i < 4; i++) {
    vec4 ripple = ripples[i];
    if (ripple.w > 0.5) {
      float d = length(point - ripple.xy) - ripple.z * reach;
      value += 0.9 * (1.0 - ripple.z) * cos(d / rippleWidth * 1.8) * exp(-(d * d) / (2.0 * rippleWidth * rippleWidth));
    }
  }
  value *= amount;
  float level = (value + range) / step;
  float nearest = floor(level + 0.5);
  float slope = length(vec2(dFdx(level), dFdy(level)));
  float pixels = abs(level - nearest) / max(slope, 1e-6);
  bool major = mod(nearest, 5.0) == 0.0;
  float width = max(1.0, (major ? 1.5 : 1.0) * dpr);
  float alpha = slope > 1e-6 ? clamp(width * 0.5 + 0.5 - pixels, 0.0, 1.0) * (major ? 0.85 : 0.4) * lineOpacity : 0.0;
  gl_FragColor = vec4(color * alpha, alpha);
}
`;function nt(e,t,n){const o=e.createShader(t);return o?(e.shaderSource(o,n),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?o:null):null}function Ft(e){if(!e.getExtension("OES_standard_derivatives"))return null;const t=nt(e,e.VERTEX_SHADER,Et),n=nt(e,e.FRAGMENT_SHADER,Bt),o=e.createProgram();if(!t||!n||!o||(e.attachShader(o,t),e.attachShader(o,n),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)))return null;e.useProgram(o);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const l=e.getAttribLocation(o,"position");e.enableVertexAttribArray(l),e.vertexAttribPointer(l,2,e.FLOAT,!1,0,0);const r=s=>e.getUniformLocation(o,s),i={size:r("size"),dpr:r("dpr"),feature:r("feature"),z:r("z"),step:r("step"),range:r("range"),amount:r("amount"),lift:r("lift"),hillRadius:r("hillRadius"),hill:r("hill"),ripples:r("ripples"),reach:r("reach"),rippleWidth:r("rippleWidth"),color:r("color"),lineOpacity:r("lineOpacity")};e.uniform1f(i.range,Ae),e.uniform1f(i.hillRadius,ot),e.uniform1f(i.rippleWidth,Ue);const c=s=>{const h=Math.max(1,Math.round(s.width*s.dpr)),W=Math.max(1,Math.round(s.height*s.dpr));e.viewport(0,0,h,W),e.uniform2f(i.size,h,W),e.uniform1f(i.dpr,s.dpr),e.uniform1f(i.feature,s.feature),e.uniform1f(i.z,s.z),e.uniform1f(i.step,s.step),e.uniform1f(i.amount,s.amount),e.uniform1f(i.lift,s.lift),e.uniform2f(i.hill,s.hill[0],s.hill[1]),e.uniform4fv(i.ripples,s.ripples),e.uniform1f(i.reach,s.reach),e.uniform3f(i.color,s.color[0],s.color[1],s.color[2]),e.uniform1f(i.lineOpacity,s.lineOpacity),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLES,0,3)};return c.dispose=()=>{e.deleteBuffer(a),e.deleteProgram(o),e.deleteShader(t),e.deleteShader(n)},c}let me=null;function It(e){if(typeof document>"u")return[.45,.45,.45];if(!me){const n=document.createElement("canvas");n.width=1,n.height=1,me=n.getContext("2d",{willReadFrequently:!0})}if(!me)return[.45,.45,.45];me.clearRect(0,0,1,1),me.fillStyle=e,me.fillRect(0,0,1,1);const t=me.getImageData(0,0,1,1).data;return[t[0]/255,t[1]/255,t[2]/255]}const Lt=M.forwardRef(function({lineColor:t,lineOpacity:n=1,levels:o=14,speed:a=.85,scale:l=1,peak:r=.85,interactive:i=!0,paused:c=!1,transition:s={stiffness:120,damping:22},className:h,children:W,...I},S){const w=M.useRef(null),xe=M.useRef(null);M.useImperativeHandle(S,()=>w.current);const rt=ft(w,{margin:"0px"}),it=gt(),st=ut(),Ce=rt&&it&&!st&&!c,ne=Ne(0),oe=Ne(0),ye=Ne(0),ge=je(ne,s),Re=je(oe,s),re=je(ye,{stiffness:80,damping:20}),Me=Ne(1),ie=M.useRef([]),ve=M.useRef(()=>{}),se=M.useRef(0),Ve=M.useRef(!1),ze=M.useRef(!1),Ye={lineColor:t,lineOpacity:n,levels:o,speed:a,scale:l,peak:r},ke=M.useRef(Ye);return M.useLayoutEffect(()=>{ke.current=Ye}),M.useEffect(()=>{const m=xe.current,A=w.current;if(!m||!A)return;const V=m.getContext("webgl",{premultipliedAlpha:!0,preserveDrawingBuffer:!1,antialias:!1}),b=V?Ft(V):null;if(b){Ve.current=!0;let F=0,P=0,K=1,we=0,ae="",fe=[.45,.45,.45];const C=new Float32Array(16),ue=()=>{const y=A.getBoundingClientRect();F=y.width,P=y.height,K=Math.min(window.devicePixelRatio||1,Ze)*xt,m.width=Math.max(1,Math.round(F*K)),m.height=Math.max(1,Math.round(P*K)),m.style.width=`${F}px`,m.style.height=`${P}px`,re.get()===0&&(ee(ne,F/2),ee(oe,P/2),ee(ge,F/2),ee(Re,P/2))},Z=(y,J=!1)=>{if(F===0||P===0)return;const{lineColor:X,lineOpacity:q,levels:de,speed:f,scale:u,peak:j}=ke.current;if(!J||we++%30===0){const R=X??(getComputedStyle(A).color||"#737373");R!==ae&&(ae=R,fe=It(R))}C.fill(0),ie.current.slice(-4).forEach((R,T)=>{C[T*4]=R.x,C[T*4+1]=R.y,C[T*4+2]=R.progress.get(),C[T*4+3]=1}),b({width:F,height:P,dpr:K,feature:Je*u,z:y*5e-5*f,step:2*Ae/Math.max(2,Math.round(de)),amount:Me.get(),lift:re.get()*j*1.5,hill:[ge.get(),Re.get()],ripples:C,reach:Math.hypot(F,P)*.8,color:fe,lineOpacity:q??1})};ve.current=Z,ue(),Z(se.current);const O=new ResizeObserver(()=>{ue(),Z(se.current)});return O.observe(A),()=>{var y;O.disconnect(),(y=b.dispose)==null||y.call(b),ve.current=()=>{}}}Ve.current=!1;const g=m.getContext("2d");if(!g)return;let E=0,B=0,d=1,p=0,x=0,_=new Float32Array(0),le=new Int16Array(0),$=new Int16Array(0),L=new Int32Array(0),ce=new Int32Array(0),be=De(0),lt=0,qe="#737373";const He=()=>{const F=A.getBoundingClientRect();E=F.width,B=F.height,d=Math.max(1,Math.min(window.devicePixelRatio||1,Ze)),m.width=Math.max(1,Math.round(E*d)),m.height=Math.max(1,Math.round(B*d)),m.style.width=`${E}px`,m.style.height=`${B}px`,p=Math.ceil(E/v)+1,x=Math.ceil(B/v)+1,_=new Float32Array((p+1)*(x+1)),le=new Int16Array(x*p),$=new Int16Array(x*p),be=De(2*(x+1)*(p+1)+4),re.get()===0&&(ee(ne,E/2),ee(oe,B/2),ee(ge,E/2),ee(Re,B/2))},ct=F=>{const{speed:P,scale:K,peak:we}=ke.current,ae=Je*K,fe=F*5e-5*P,C=re.get()*we*1.5,ue=ge.get(),Z=Re.get(),O=ie.current,y=Math.hypot(E,B)*.8,J=Me.get();let X=0;for(let q=0;q<=x;q++){const de=q*v;for(let f=0;f<=p;f++){const u=f*v,j=u/ae,R=de/ae;let T=Qe(j,R,fe)*1.1+Qe(j*2.1,R*2.1,fe*1.7)*.45;const Q=u-ue,he=de-Z;C>0&&(T+=C*Math.exp(-Math.hypot(Q,he)/ot));for(const z of O){const k=z.progress.get(),H=Math.hypot(u-z.x,de-z.y)-k*y;T+=.9*(1-k)*Math.cos(H/Ue*1.8)*Math.exp(-(H*H)/(2*Ue*Ue))}_[X++]=T*J}}},Xe=(F,P=!1)=>{if(E===0||B===0)return;const{lineColor:K,lineOpacity:we=1,levels:ae}=ke.current;ct(F);const fe=Math.max(2,Math.round(ae)),C=2*Ae/fe,ue=new Path2D,Z=new Path2D,O=p+1;let y=1/0,J=-1/0;for(let f=0;f<x;f++)for(let u=0;u<p;u++){const j=f*O+u,R=_[j],T=_[j+1],Q=_[j+O+1],he=_[j+O],z=Math.ceil((Math.min(R,T,Q,he)+Ae)/C),k=Math.floor((Math.max(R,T,Q,he)+Ae)/C);le[f*p+u]=z,$[f*p+u]=k,z<y&&(y=z),k>J&&(J=k)}const X=J-y+1;if(X<=0||!Number.isFinite(X))return;L.length<X+1&&(L=new Int32Array(X+1)),L.fill(0,0,X+1);let q=0;for(let f=0;f<x*p;f++)for(let u=le[f];u<=$[f];u++)L[u-y+1]++,q++;for(let f=0;f<X;f++)L[f+1]+=L[f];ce.length<q&&(ce=new Int32Array(q*2));const de=L.slice(0,X);for(let f=0;f<x*p;f++)for(let u=le[f];u<=$[f];u++)ce[de[u-y]++]=f;for(let f=y;f<=J;f++){const u=f*C-Ae,j=L[f-y+1];for(let R=L[f-y];R<j;R++){const T=ce[R],Q=T/p|0,he=T-Q*p,z=Q*O+he,k=_[z],H=_[z+1],Pe=_[z+O+1],Ee=_[z+O],Oe=(k>u?8:0)|(H>u?4:0)|(Pe>u?2:0)|(Ee>u?1:0);if(Oe===0||Oe===15)continue;const N=he*v,U=Q*v,Be=N+(u-k)/(H-k)*v,Fe=U+(u-H)/(Pe-H)*v,Ie=N+(u-Ee)/(Pe-Ee)*v,Se=U+(u-k)/(Ee-k)*v,D=z*2,Te=D+O*2,_e=D+1,Le=D+3,G=be;switch(Oe){case 1:case 14:Y(G,_e,N,Se,Te,Ie,U+v);break;case 2:case 13:Y(G,Te,Ie,U+v,Le,N+v,Fe);break;case 3:case 12:Y(G,_e,N,Se,Le,N+v,Fe);break;case 4:case 11:Y(G,D,Be,U,Le,N+v,Fe);break;case 6:case 9:Y(G,D,Be,U,Te,Ie,U+v);break;case 7:case 8:Y(G,_e,N,Se,D,Be,U);break;case 5:case 10:{const at=(k+H+Pe+Ee)/4>u;Oe===5===at?(Y(G,_e,N,Se,D,Be,U),Y(G,Te,Ie,U+v,Le,N+v,Fe)):(Y(G,_e,N,Se,Te,Ie,U+v),Y(G,D,Be,U,Le,N+v,Fe));break}}}bt(f%5===0?Z:ue,be)}g.setTransform(d,0,0,d,0,0),g.clearRect(0,0,E,B),(!P||lt++%30===0)&&(qe=getComputedStyle(A).color||"#737373"),g.strokeStyle=K??qe,g.lineCap="round",g.globalAlpha=.4*we,g.lineWidth=1,g.stroke(ue),g.globalAlpha=.85*we,g.lineWidth=1.5,g.stroke(Z),g.globalAlpha=1};ve.current=Xe,He(),Xe(se.current);const $e=new ResizeObserver(()=>{He(),Xe(se.current)});return $e.observe(A),()=>{$e.disconnect(),ve.current=()=>{}}},[re,ge,Re,ne,oe,Me]),M.useEffect(()=>{ve.current(se.current)},[t,n,o,l,r]),M.useEffect(()=>{if(!Ce||!i){ye.set(0);return}let m=!1,A=0,V=0,b=0;const g=()=>{if(b=0,!m||!w.current)return;m=!1;const d=w.current.getBoundingClientRect();A>=d.left&&A<=d.right&&V>=d.top&&V<=d.bottom?(ne.set(A-d.left),oe.set(V-d.top),ye.set(1)):ye.set(0)},E=d=>{d.pointerType!=="touch"&&(A=d.clientX,V=d.clientY,m=!0,b||(b=requestAnimationFrame(g)))},B=d=>{var ce;const p=w.current;if(!p)return;const x=p.getBoundingClientRect();if(d.clientX<x.left||d.clientX>x.right||d.clientY<x.top||d.clientY>x.bottom)return;const _=d.clientX-x.left,le=d.clientY-x.top;ne.set(_),oe.set(le);const $={x:_,y:le,progress:dt(0)};ie.current=[...ie.current.slice(-3),$];const L=ht($.progress,1,{duration:2.4,ease:[.25,.4,.45,1]});(ce=L.then)==null||ce.call(L,()=>{ie.current=ie.current.filter(be=>be!==$)})};return window.addEventListener("pointermove",E,{passive:!0}),window.addEventListener("pointerdown",B,{passive:!0}),()=>{b&&cancelAnimationFrame(b),window.removeEventListener("pointermove",E),window.removeEventListener("pointerdown",B)}},[Ce,i,ne,oe,ye]),M.useEffect(()=>{if(!Ce)return;let m=0,A=0,V=performance.now(),b=0;const g=()=>{ze.current=!0,A&&window.clearTimeout(A),A=window.setTimeout(()=>{ze.current=!1,V=performance.now()},140)};window.addEventListener("scroll",g,{passive:!0});const E=B=>{const d=B-V;V=B;const p=re.get()>.02||ie.current.length>0||Me.get()<.99;if(ze.current&&!p){m=requestAnimationFrame(E);return}b+=d;const x=Ve.current?p?At:wt:vt;b>=x&&(se.current+=Math.min(b,64),b=0,ve.current(se.current,!0)),m=requestAnimationFrame(E)};return m=requestAnimationFrame(E),()=>{cancelAnimationFrame(m),A&&window.clearTimeout(A),window.removeEventListener("scroll",g),ze.current=!1}},[Ce,re,Me]),Ke.jsxs("div",{ref:w,"data-slot":"topography-background",className:pt("relative w-full h-full overflow-hidden",h),...I,children:[Ke.jsx("canvas",{ref:xe,"aria-hidden":"true",className:"pointer-events-none absolute inset-0"}),W]})});export{Lt as T};

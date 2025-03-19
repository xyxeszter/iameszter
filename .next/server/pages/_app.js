(()=>{var e={};e.id=636,e.ids=[636],e.modules={361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},1414:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(8732);r(2768);var a=r(5760),o=r.n(a);let i=require("next/head");var s=r.n(i),l=r(8379),c=r.n(l);r(2015);let u=function({Component:e,pageProps:t}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("title",{children:"Eszter Ozsvald | Tech, Motion, & Nutrition"}),(0,n.jsx)("meta",{name:"description",content:"Entrepreneur, product designer, and engineer working on AI, wearables, movement tracking, and future food innovations."}),(0,n.jsx)("meta",{name:"keywords",content:"AI, wearables, movement, biomechanics, sports technology, nutrition, future food, robotics, smart textiles"}),(0,n.jsx)("meta",{name:"author",content:"Eszter Ozsvald"}),(0,n.jsx)("meta",{property:"og:title",content:"Eszter Ozsvald | Tech, Motion, & Nutrition"}),(0,n.jsx)("meta",{property:"og:description",content:"Exploring AI, wearables, biomechanics, and future food innovations."}),(0,n.jsx)("meta",{property:"og:image",content:"https://iameszter.com/images/profile.jpg"}),(0,n.jsx)("meta",{property:"og:url",content:"https://iameszter.com"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"robots",content:"index, follow"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"/favicon.ico"})]}),(0,n.jsx)(c(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=G-RDYPFSWN9F"}),(0,n.jsx)(c(),{id:"google-analytics",strategy:"afterInteractive",children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RDYPFSWN9F');
        `}),(0,n.jsx)("main",{className:o().className,children:(0,n.jsx)(e,{...t})})]})}},1484:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return _},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return y}});let n=r(7020),a=r(3147),o=r(8732),i=n._(r(2326)),s=a._(r(2015)),l=r(1523),c=r(8941),u=r(4841),d=new Map,f=new Set,p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}},g=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:s="afterInteractive",onError:l,stylesheets:u}=e,g=r||t;if(g&&f.has(g))return;if(d.has(t)){f.add(g),d.get(t).then(n,l);return}let m=()=>{a&&a(),f.add(g)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),n&&n.call(this,t),m()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});o?(y.innerHTML=o.__html||"",m()):i?(y.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(y.src=t,d.set(t,b)),(0,c.setAttributesFromProps)(y,e),"worker"===s&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",s),u&&p(u),document.body.appendChild(y)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>g(e))}):g(e)}function y(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...m}=e,{updateScripts:y,scripts:b,getIsSsr:_,appDir:v,nonce:h}=(0,s.useContext)(l.HeadManagerContext),x=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||r;x.current||(a&&e&&f.has(e)&&a(),x.current=!0)},[a,t,r]);let j=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{if(!j.current){if("afterInteractive"===c)g(e);else if("lazyOnload"===c)"complete"===document.readyState?(0,u.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>g(e))});j.current=!0}},[e,c]),("beforeInteractive"===c||"worker"===c)&&(y?(b[c]=(b[c]||[]).concat([{id:t,src:r,onLoad:n,onReady:a,onError:d,...m}]),y(b)):_&&_()?f.add(t||r):_&&!_()&&g(e)),v){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return r?(i.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:h,crossOrigin:m.crossOrigin}:{as:"script",nonce:h,crossOrigin:m.crossOrigin}),(0,o.jsx)("script",{nonce:h,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:h,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===c&&r&&i.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:h,crossOrigin:m.crossOrigin}:{as:"script",nonce:h,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let _=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1523:(e,t,r)=>{"use strict";e.exports=r(3885).vendored.contexts.HeadManagerContext},2015:e=>{"use strict";e.exports=require("react")},2326:e=>{"use strict";e.exports=require("react-dom")},2768:()=>{},3147:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(a,i,s):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}},3885:(e,t,r)=>{"use strict";e.exports=r(361)},4841:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5760:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}},7020:(e,t)=>{"use strict";t._=function(e){return e&&e.__esModule?e:{default:e}}},8379:(e,t,r)=>{e.exports=r(1484)},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},8941:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},n=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function a(e){return["async","defer","noModule"].includes(e)}function o(e,t){for(let[o,i]of Object.entries(t)){if(!t.hasOwnProperty(o)||n.includes(o)||void 0===i)continue;let s=r[o]||o.toLowerCase();"SCRIPT"===e.tagName&&a(s)?e[s]=!!i:e.setAttribute(s,String(i)),(!1===i||"SCRIPT"===e.tagName&&a(s)&&(!i||"false"===i))&&(e.setAttribute(s,""),e.removeAttribute(s))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}};var t=require("../webpack-runtime.js");t.C(e);var r=t(t.s=1414);module.exports=r})();
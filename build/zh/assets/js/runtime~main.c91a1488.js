(()=>{"use strict";var e,t,r,a,o,c={},n={};function f(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=c,f.c=n,e=[],f.O=(t,r,a,o)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var n=!0,i=0;i<r.length;i++)(!1&o||c>=o)&&Object.keys(f.O).every((e=>f.O[e](r[i])))?r.splice(i--,1):(n=!1,o<c&&(c=o));if(n){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,f.d(o,c),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",75:"755fc1a7",185:"09c465bd",194:"08ca9640",277:"655d0574",287:"3870cbce",383:"69e56a95",514:"1be78505",598:"93459102",677:"139204c8",727:"be21fc7a",745:"ff36c167",775:"571e4ec3",857:"e824a8f8",866:"ec1c5c54",887:"218a97b8",912:"b38251c5",918:"17896441",923:"fc1715e0",928:"63965796",964:"eb168eb5",983:"258375d6"}[e]||e)+"."+{53:"3dc9ed72",75:"f92f4a55",185:"7683b64a",194:"b4a3db2c",277:"2baee809",287:"b63e25ae",383:"f5a01163",514:"a399639a",598:"43c4348e",677:"72bb8cbd",727:"5cdc7d5d",745:"57ea983e",775:"97603f31",857:"d1fbcbf2",866:"40e76a7b",887:"cd3b66ba",912:"65d171c2",918:"bab389d5",923:"4a4368b4",928:"006903ad",964:"9cfd4a67",972:"9d6448e8",983:"6ad6c2bd"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="daspire-docs:",f.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var n,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var b=d[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==o+r){n=b;break}}n||(i=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),i&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/zh/",f.gca=function(e){return e={17896441:"918",63965796:"928",93459102:"598","935f2afb":"53","755fc1a7":"75","09c465bd":"185","08ca9640":"194","655d0574":"277","3870cbce":"287","69e56a95":"383","1be78505":"514","139204c8":"677",be21fc7a:"727",ff36c167:"745","571e4ec3":"775",e824a8f8:"857",ec1c5c54:"866","218a97b8":"887",b38251c5:"912",fc1715e0:"923",eb168eb5:"964","258375d6":"983"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var a=f.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=f.p+f.u(t),n=new Error;f.l(c,(r=>{if(f.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",n.name="ChunkLoadError",n.type=o,n.request=c,a[1](n)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],n=r[1],i=r[2],d=0;if(c.some((t=>0!==e[t]))){for(a in n)f.o(n,a)&&(f.m[a]=n[a]);if(i)var u=i(f)}for(t&&t(r);d<c.length;d++)o=c[d],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(u)},r=self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
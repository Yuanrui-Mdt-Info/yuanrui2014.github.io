(()=>{"use strict";var e,t,r,a,o,c={},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=c,i.c=n,e=[],i.O=(t,r,a,o)=>{if(!r){var c=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],o=e[b][2];for(var n=!0,f=0;f<r.length;f++)(!1&o||c>=o)&&Object.keys(i.O).every((e=>i.O[e](r[f])))?r.splice(f--,1):(n=!1,o<c&&(c=o));if(n){e.splice(b--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,i.d(o,c),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({53:"935f2afb",75:"755fc1a7",185:"09c465bd",194:"08ca9640",277:"655d0574",287:"3870cbce",383:"69e56a95",514:"1be78505",598:"93459102",677:"139204c8",727:"be21fc7a",745:"ff36c167",775:"571e4ec3",857:"e824a8f8",866:"ec1c5c54",887:"218a97b8",912:"b38251c5",918:"17896441",923:"fc1715e0",928:"63965796",964:"eb168eb5",983:"258375d6"}[e]||e)+"."+{53:"3dc9ed72",75:"19b3e1c8",185:"c4f2fa60",194:"b4a3db2c",277:"2baee809",287:"b63e25ae",383:"f5a01163",514:"a399639a",598:"43c4348e",677:"72bb8cbd",727:"5cdc7d5d",745:"57ea983e",775:"ce699af3",857:"d1fbcbf2",866:"40e76a7b",887:"cd3b66ba",912:"65d171c2",918:"bab389d5",923:"4a4368b4",928:"4e35363a",964:"1292f8c1",972:"9d6448e8",983:"dbc44ee7"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="daspire-docs:",i.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var n,f;if(void 0!==r)for(var d=document.getElementsByTagName("script"),b=0;b<d.length;b++){var u=d[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(f=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),f&&document.head.appendChild(n)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/zh/",i.gca=function(e){return e={17896441:"918",63965796:"928",93459102:"598","935f2afb":"53","755fc1a7":"75","09c465bd":"185","08ca9640":"194","655d0574":"277","3870cbce":"287","69e56a95":"383","1be78505":"514","139204c8":"677",be21fc7a:"727",ff36c167:"745","571e4ec3":"775",e824a8f8:"857",ec1c5c54:"866","218a97b8":"887",b38251c5:"912",fc1715e0:"923",eb168eb5:"964","258375d6":"983"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=i.p+i.u(t),n=new Error;i.l(c,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",n.name="ChunkLoadError",n.type=o,n.request=c,a[1](n)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],n=r[1],f=r[2],d=0;if(c.some((t=>0!==e[t]))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(f)var b=f(i)}for(t&&t(r);d<c.length;d++)o=c[d],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(b)},r=self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
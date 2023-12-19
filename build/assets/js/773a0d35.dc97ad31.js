"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[2898],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,p(p({ref:t},u),{},{components:r})):n.createElement(h,p({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5116:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},p="Shein",o={unversionedId:"setup-guide/sources/shein",id:"setup-guide/sources/shein",title:"Shein",description:"This page contains the setup guide and reference information for Shein.",source:"@site/docs/setup-guide/sources/shein.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/shein",permalink:"/setup-guide/sources/shein",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shopify",permalink:"/setup-guide/sources/shopify"},next:{title:"Slack",permalink:"/setup-guide/sources/slack"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Features",id:"features",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Obtain Shein setup details",id:"step-1-obtain-shein-setup-details",level:3},{value:"Step 2: Set up Shein in Daspire",id:"step-2-set-up-shein-in-daspire",level:3},{value:"Supported streams",id:"supported-streams",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shein"},"Shein"),(0,a.kt)("p",null,"This page contains the setup guide and reference information for Shein."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shein access account"),(0,a.kt)("li",{parentName:"ul"},"openKeyId"),(0,a.kt)("li",{parentName:"ul"},"secretKey")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSL connection"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))),(0,a.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,a.kt)("h3",{id:"step-1-obtain-shein-setup-details"},"Step 1: Obtain Shein setup details"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Apply for Shein ",(0,a.kt)("a",{parentName:"p",href:"https://openapi-portal.sheincorp.com/#/home"},"Access account"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Obtain ",(0,a.kt)("strong",{parentName:"p"},"openKeyId")," and ",(0,a.kt)("strong",{parentName:"p"},"secretKey")," which you will need to set up Shein in Daspire.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You're ready to set up Shein in Daspire!"))),(0,a.kt)("h3",{id:"step-2-set-up-shein-in-daspire"},"Step 2: Set up Shein in Daspire"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Shein")," from the Source list.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a ",(0,a.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter your Shein ",(0,a.kt)("strong",{parentName:"p"},"openKeyId"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter your Shein ",(0,a.kt)("strong",{parentName:"p"},"secretKey"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("strong",{parentName:"p"},"Data Replication Schedule"),", choose an option between ",(0,a.kt)("strong",{parentName:"p"},"Based on Start Date")," or ",(0,a.kt)("strong",{parentName:"p"},"Periodic Replication"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,a.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,a.kt)("p",null,"This source is capable of syncing the following streams:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openapi-portal.sheincorp.com/#/home/2/1"},"Order"))),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))}c.isMDXComponent=!0}}]);
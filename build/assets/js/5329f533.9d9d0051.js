"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={description:"A high level view of Airbyte's components."},o="Architecture overview",l={unversionedId:"understanding-airbyte/high-level-view",id:"understanding-airbyte/high-level-view",title:"Architecture overview",description:"A high level view of Airbyte's components.",source:"@site/../docs/understanding-airbyte/high-level-view.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/high-level-view",permalink:"/understanding-airbyte/high-level-view",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/understanding-airbyte/high-level-view.md",tags:[],version:"current",frontMatter:{description:"A high level view of Airbyte's components."},sidebar:"mySidebar",previous:{title:"Operations",permalink:"/understanding-airbyte/operations"},next:{title:"Workers & Jobs",permalink:"/understanding-airbyte/jobs"}},c={},s=[],u={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture-overview"},"Architecture overview"),(0,i.kt)("p",null,"Airbyte is conceptually composed of two parts: platform and connectors. "),(0,i.kt)("p",null,"The platform provides all the horizontal services required to configure and run data movement operations e.g: the UI, configuration API, job scheduling, logging, alerting, etc. and is structured as a set of microservices. "),(0,i.kt)("p",null,"Connectors are independent modules which push/pull data to/from sources and destinations. Connectors are built in accordance with the ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"Airbyte Specification"),", which describes the interface with which data can be moved between a source and a destination using Airbyte. Connectors are packaged as Docker images, which allows total flexibility over the technologies used to implement them. "),(0,i.kt)("p",null,"A more concrete diagram can be seen below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3.048-Kilometer view",src:n(48958).Z,width:"3338",height:"1294"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UI"),": An easy-to-use graphical interface for interacting with the Airbyte API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WebApp Server"),": Handles connection between UI and API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Config Store"),": Stores all the connections information ","(","credentials, frequency...",")","."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scheduler Store"),": Stores statuses and job information for the scheduler bookkeeping."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Config API"),": Airbyte's main control plane. All operations in Airbyte such as creating sources, destinations, connections, managing configurations, etc.. are configured and invoked from the API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scheduler"),": The scheduler takes work requests from the API and sends them to the Temporal service to parallelize. It is responsible for tracking success/failure and for triggering syncs based on the configured frequency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Temporal Service"),": Manages the task queue and workflows for the Scheduler. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Worker"),": The worker connects to a source connector, pulls the data and writes it to a destination."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Temporary Storage"),": A storage that workers can use whenever they need to spill data on a disk.")))}d.isMDXComponent=!0},48958:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/understanding_airbyte_high_level_architecture-ac5aa905ca8916521b41cdaecec4cd08.png"}}]);
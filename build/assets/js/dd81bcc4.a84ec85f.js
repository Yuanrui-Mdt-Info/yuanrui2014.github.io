"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[5506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},l="WooCommerce",i={unversionedId:"setup-guide/sources/woocommerce",id:"setup-guide/sources/woocommerce",title:"WooCommerce",description:"This page contains the setup guide and reference information for WooCommerce.",source:"@site/docs/setup-guide/sources/woocommerce.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/woocommerce",permalink:"/setup-guide/sources/woocommerce",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Walmart Marketplace",permalink:"/setup-guide/sources/walmart-marketplace"},next:{title:"Zendesk Chat",permalink:"/setup-guide/sources/zendesk-chat"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"woocommerce"},"WooCommerce"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for WooCommerce."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:null},"No")))),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to your store's WordPress admin interface, go to WooCommerce ",">"," Settings ",">"," Advanced ",">"," REST API.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click on "Add Key" to generate an API Key.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose the level of access for this REST API key, which can be Read access, Write access or Read/Write access. Daspire only needs read-level access."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The UI will show all possible data sources and will show errors when syncing if it doesn't have permissions to access a resource."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The two keys, Consumer Key and Consumer Secret are what you'll use respectively as api","_","key and api","_","secret for the integration.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You're ready to set up WooCommerce in Daspire!"))),(0,n.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,n.kt)("p",null,"The WooCommerce source supports both ",(0,n.kt)("strong",{parentName:"p"},"Full Refresh")," and ",(0,n.kt)("strong",{parentName:"p"},"Incremental")," syncs. You can choose to copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,n.kt)("p",null,"Daspire can sync data for the ",(0,n.kt)("a",{parentName:"p",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/"},"WooCommerce API"),"."),(0,n.kt)("h2",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-customers"},"Customers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-orders"},"Orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-coupons"},"Coupons"))),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},i="BigCommerce",l={unversionedId:"setup-guide/sources/bigcommerce",id:"setup-guide/sources/bigcommerce",title:"BigCommerce",description:"This page contains the setup guide and reference information for BigCommerce.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/setup-guide/sources/bigcommerce.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/bigcommerce",permalink:"/zh/setup-guide/sources/bigcommerce",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e9a\u9a6c\u900a\u5356\u5bb6\u5408\u4f5c\u4f19\u4f34\uff08Amazon Seller Partner\uff09",permalink:"/zh/setup-guide/sources/amazon-seller-partner"},next:{title:"eBay",permalink:"/zh/setup-guide/sources/ebay"}},c={},s=[{value:"Features",id:"features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:s};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bigcommerce"},"BigCommerce"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for BigCommerce."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:null},"No")))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BigCommerce ",(0,n.kt)("a",{parentName:"li",href:"https://support.bigcommerce.com/s/article/User-Permissions?language=en_US#highrisk"},"high-risk user permission"))),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to your store's control panel. In the left side menu, click ",(0,n.kt)("strong",{parentName:"p"},"Settings"),". On the page opened on the right side, scroll down and find ",(0,n.kt)("strong",{parentName:"p"},"Store-level API accounts"),".\n",(0,n.kt)("img",{alt:"BigCommerce API Accounts",src:r(451).Z,title:"BigCommerce API Accounts",width:"1026",height:"508"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create an API account"),".\n",(0,n.kt)("img",{alt:"BigCommerce Create API Accounts",src:r(2663).Z,title:"BigCommerce Create API Accounts",width:"1026",height:"508"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the resources you want to allow access to. Daspire only needs read-level access.\n",(0,n.kt)("img",{alt:"BigCommerce API Scope",src:r(3792).Z,title:"BigCommerce API Scope",width:"1026",height:"516"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once you're done with the selection, click ",(0,n.kt)("strong",{parentName:"p"},"Save"),". You will get ",(0,n.kt)("strong",{parentName:"p"},"Client ID"),", ",(0,n.kt)("strong",{parentName:"p"},"Client secret"),", and ",(0,n.kt)("strong",{parentName:"p"},"Access token"),". Copy them, you will use them later to set up the source.\n",(0,n.kt)("img",{alt:"BigCommerce API Credentials",src:r(4511).Z,title:"BigCommerce API Credentials",width:"1026",height:"508"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You're ready to set up BigCommerce in Daspire!"))),(0,n.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,n.kt)("p",null,"The BigCommerce source supports both ",(0,n.kt)("strong",{parentName:"p"},"Full Refresh")," and ",(0,n.kt)("strong",{parentName:"p"},"Incremental")," syncs. You can choose to copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,n.kt)("p",null,"Daspire can sync data for the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.bigcommerce.com/api-docs/getting-started/making-requests"},"BigCommerce API"),"."),(0,n.kt)("h2",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customers/customersget"},"Customers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/orders/orders/getallorders"},"Orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/docs/rest-management/transactions#get-transactions"},"Transactions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/store-content/pages/getallpages"},"Pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/catalog/products/getproducts"},"Products")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/d2298071793d6-get-all-channels"},"Channels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/docs/rest-management/store-information#get-store-information"},"Store")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/3b4dfef625708-list-order-products"},"OrderProducts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/c2610608c20c8-get-all-brands"},"Brands")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/9cc3a53863922-get-all-categories"},"Categories"))),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"BigCommerce has some ",(0,n.kt)("a",{parentName:"p",href:"https://developer.bigcommerce.com/api-docs/getting-started/best-practices"},"rate limit restrictions"),"."),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))}m.isMDXComponent=!0},3792:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/bigcommerce-api-scope-d284b143cf3a727810cb94481c8de64e.jpg"},2663:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/bigcommerce-create-api-account-ad564012337ad4d5ce1c4c34a9d2af63.jpg"},4511:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/bigcommerce-creds-e182c09dc47801ff002177db78f372d8.jpg"},451:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/bigcommerce-settings-b13bc4b5f94c209d0b06a255c3b205b5.jpg"}}]);
"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[13],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},l="BigCommerce",i={unversionedId:"setup-guide/sources/bigcommerce",id:"setup-guide/sources/bigcommerce",title:"BigCommerce",description:"This page contains the setup guide and reference information for BigCommerce.",source:"@site/docs/setup-guide/sources/bigcommerce.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/bigcommerce",permalink:"/setup-guide/sources/bigcommerce",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon Seller Partner",permalink:"/setup-guide/sources/amazon-seller-partner"},next:{title:"Cart.com",permalink:"/setup-guide/sources/cart.com"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Performance considerations",id:"performance-considerations",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bigcommerce"},"BigCommerce"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for BigCommerce."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:null},"No")))),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to your store's control panel (Advanced Settings ",">"," API Accounts ",">"," Create API Account)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create an API account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the resources you want to allow access to. Daspire only needs read-level access."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The UI will show all possible data sources and will show errors when syncing if it doesn't have permissions to access a resource."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The generated Access Token is what you'll use as the access","_","token for the integration.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You're ready to set up BigCommerce in Daspire!"))),(0,n.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,n.kt)("p",null,"The BigCommerce source supports both ",(0,n.kt)("strong",{parentName:"p"},"Full Refresh")," and ",(0,n.kt)("strong",{parentName:"p"},"Incremental")," syncs. You can choose to copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,n.kt)("p",null,"Daspire can sync data for the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.bigcommerce.com/api-docs/getting-started/making-requests"},"BigCommerce API"),"."),(0,n.kt)("h2",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customers/customersget"},"Customers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/orders/orders/getallorders"},"Orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/order-transactions/transactions/gettransactions"},"Transactions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/store-content/pages/getallpages"},"Pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/catalog/products/getproducts"},"Products"))),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"array")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"object")))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"BigCommerce has some ",(0,n.kt)("a",{parentName:"p",href:"https://developer.bigcommerce.com/api-docs/getting-started/best-practices"},"rate limit restrictions"),"."))}m.isMDXComponent=!0}}]);
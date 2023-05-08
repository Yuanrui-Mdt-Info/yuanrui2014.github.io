"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[761],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||p;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<p;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const p={},i="Shopify",s={unversionedId:"setup-guide/sources/shopify",id:"setup-guide/sources/shopify",title:"Shopify",description:"This page contains the setup guide and reference information for Shopify.",source:"@site/docs/setup-guide/sources/shopify.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/shopify",permalink:"/setup-guide/sources/shopify",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plaid",permalink:"/setup-guide/sources/plaid"},next:{title:"Walmart Marketplace",permalink:"/setup-guide/sources/walmart-marketplace"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Features",id:"features",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Using API password to set up",id:"using-api-password-to-set-up",level:3},{value:"Set up Shopify in Daspire",id:"set-up-shopify-in-daspire",level:3},{value:"Output schema",id:"output-schema",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:l};function m(e){let{components:t,...p}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"shopify"},"Shopify"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for Shopify."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your Shopify store name"),(0,n.kt)("li",{parentName:"ul"},"Your Shopify login details or API password")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:null},"No")))),(0,n.kt)("p",null,"The Shopify source supports both ",(0,n.kt)("strong",{parentName:"p"},"Full Refresh")," and ",(0,n.kt)("strong",{parentName:"p"},"Incremental")," syncs. You can choose to copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,n.kt)("p",null,"Daspire can sync data for the ",(0,n.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/api/reference"},"Shopify API"),"."),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"using-api-password-to-set-up"},"Using API password to set up"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://admin.shopify.com/store/YOURSTORE"},"https://admin.shopify.com/store/YOURSTORE"),", click ",(0,n.kt)("strong",{parentName:"p"},"Settings")," from the side menu.\n",(0,n.kt)("img",{alt:"Shopify Store Settings",src:a(9878).Z,title:"Shopify Store Settings",width:"1062",height:"494"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Apps and sales channels")," from the side menu. Then click ",(0,n.kt)("strong",{parentName:"p"},"Develop apps"),".\n",(0,n.kt)("img",{alt:"Shopify Develop Apps",src:a(3956).Z,title:"Shopify Develop Apps",width:"1062",height:"484"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create an app")," to create a private application.\n",(0,n.kt)("img",{alt:"Shopify Create an App",src:a(5006).Z,title:"Shopify Create an App",width:"1062",height:"481"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your ",(0,n.kt)("strong",{parentName:"p"},"App name")," and select the appropriate ",(0,n.kt)("strong",{parentName:"p"},"App developer"),".\n",(0,n.kt)("img",{alt:"Shopify Create an App",src:a(6891).Z,title:"Shopify Create an App",width:"1062",height:"481"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the App you just created, click ",(0,n.kt)("strong",{parentName:"p"},"Configuration"),". Then click ",(0,n.kt)("strong",{parentName:"p"},"Configure")," in ",(0,n.kt)("strong",{parentName:"p"},"Admin API integration"),".\n",(0,n.kt)("img",{alt:"Shopify Config",src:a(6342).Z,title:"Shopify Config",width:"1062",height:"481"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("strong",{parentName:"p"},"Admin API access scopes"),", select the resources you want to allow access to. Daspire only needs read-level access. Once you're done, click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The UI will show all possible data sources and will show errors when syncing if it doesn't have permissions to access a resource.")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Shopify Access Scopes",src:a(7618).Z,title:"Shopify Access Scopes",width:"1062",height:"797"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once you have assigned the APP relevant access scope, click the ",(0,n.kt)("strong",{parentName:"p"},"API credentials")," tab, and then click ",(0,n.kt)("strong",{parentName:"p"},"Install app"),".\n",(0,n.kt)("img",{alt:"Shopify API Credentials",src:a(6792).Z,title:"Shopify API Credentials",width:"1062",height:"501"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the app is installed, your ",(0,n.kt)("strong",{parentName:"p"},"Admin API access token")," will show, copy it. Your API access token starts with ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"shpat_")),". You'll use as the api","_","password for the integration\n",(0,n.kt)("img",{alt:"Shopify API Access Token",src:a(8125).Z,title:"Shopify API Access Token",width:"1062",height:"940"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You're ready to set up Shopify in Daspire!"))),(0,n.kt)("h3",{id:"set-up-shopify-in-daspire"},"Set up Shopify in Daspire"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Shopify")," from the Source list.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your Shopify ",(0,n.kt)("strong",{parentName:"p"},"Store Name"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using OAuth 2.0, ",(0,n.kt)("strong",{parentName:"p"},"Authenticate your Shopify account")," or using API password, enter your ",(0,n.kt)("strong",{parentName:"p"},"API password"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter ",(0,n.kt)("strong",{parentName:"p"},"Replication Start Date")," - the date you would like to replicate data from. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,n.kt)("h2",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/abandoned_checkouts"},"Abandoned Checkouts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products/collect"},"Collects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products/customcollection"},"Custom Collections")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/customers"},"Customers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/draftorder"},"Draft Orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode"},"Discount Codes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/metafield"},"Metafields")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/order"},"Orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin/rest/reference/orders/refund"},"Orders Refunds")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin/rest/reference/orders/order-risk"},"Orders Risks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products"},"Products")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/transaction"},"Transactions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/online-store/page"},"Pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/discounts/pricerule"},"Price Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/location"},"Locations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/inventoryItem"},"InventoryItems")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/inventorylevel"},"InventoryLevels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/fulfillmentorder"},"Fulfillment Orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/fulfillment"},"Fulfillments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/shop"},"Shop"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE")),(0,n.kt)("p",null,"For better experience with Incremental Refresh the following is recommended:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Order Refunds, Order Risks, Transactions should be synced along with Orders stream.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Discount Codes should be synced along with Price Rules stream."))),(0,n.kt)("p",null,"If child streams are synced alone from the parent stream - the full sync will take place, and the records are filtered out afterwards."),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Shopify has some ",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/concepts/about-apis/rate-limits"},"rate limit restrictions"),". Typically, there should not be issues with throttling or exceeding the rate limits but in some edge cases, user can receive the warning message as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Caught retryable error '<some_error> or null' after <some_number> tries. Waiting <some_number> seconds then retrying...\"\n")),(0,n.kt)("p",null,"This is expected when the source hits the 429 - Rate Limit Exceeded HTTP Error. With the given error message, the sync operation still goes on, but will require more time to finish."),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))}m.isMDXComponent=!0},7618:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-access-scopes-d3a117f9324fe93343b64bd4e05b6cb7.jpg"},8125:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-api-access-token-46b61d0e3691725493ea45b50264b445.jpg"},6792:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-api-creds-65303f04edee7814fce506b6cb5791a8.jpg"},6342:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-configuration-e311c6666f9cb87c137ce2c121c9dbd7.jpg"},5006:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-create-app-a2badaa51f2f4d0c4cf20c17cccb8cc4.jpg"},6891:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-create-app2-88117041e6a69fb297cc18e3cb7823fb.jpg"},3956:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-develop-apps-91373b513ea2d7989105bf5d57b72155.jpg"},9878:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-settings-4368c1fde70789fce78d651f83550dce.jpg"}}]);
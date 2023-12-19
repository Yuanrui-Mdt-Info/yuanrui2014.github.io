"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[9500],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={},l="Plaid",o={unversionedId:"setup-guide/sources/plaid",id:"setup-guide/sources/plaid",title:"Plaid",description:"This page contains the setup guide and reference information for Plaid.",source:"@site/docs/setup-guide/sources/plaid.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/plaid",permalink:"/setup-guide/sources/plaid",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PayPal",permalink:"/setup-guide/sources/paypal"},next:{title:"QuickBooks",permalink:"/setup-guide/sources/quickbooks"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Features",id:"features",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Obtain Plaid setup details",id:"step-1-obtain-plaid-setup-details",level:3},{value:"Step 2: Set up Plaid in Daspire",id:"step-2-set-up-plaid-in-daspire",level:3},{value:"Supported streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:s};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"plaid"},"Plaid"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for Plaid."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Plaid API key"),(0,n.kt)("li",{parentName:"ul"},"Client ID"),(0,n.kt)("li",{parentName:"ul"},"Access token")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:null},"No")))),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-obtain-plaid-setup-details"},"Step 1: Obtain Plaid setup details"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Visit your ",(0,n.kt)("a",{parentName:"strong",href:"https://dashboard.plaid.com/overview"},"Plaid dashboard"),":")," Click ",(0,n.kt)("strong",{parentName:"p"},"Keys")," from the ",(0,n.kt)("strong",{parentName:"p"},"Team Settings")," dropdown.\n",(0,n.kt)("img",{alt:"Plaid Keys",src:a(8703).Z,title:"Plaid Keys",width:"1026",height:"506"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Get Client id and API key:")," On the Keys page, copy your ",(0,n.kt)("strong",{parentName:"p"},"client_id")," and Sandbox ",(0,n.kt)("strong",{parentName:"p"},"secret"),".\n",(0,n.kt)("img",{alt:"Plaid Client Id Secret",src:a(8115).Z,title:"Plaid Client Id Secret",width:"1026",height:"506"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Create an Access Token:")," First you have to create a public token key and then you can create an access token."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Create public key:")," Make this API call described in ",(0,n.kt)("a",{parentName:"li",href:"https://plaid.com/docs/api/sandbox/#sandboxpublic_tokencreate"},"Plaid docs"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl --location --request POST \'https://sandbox.plaid.com/sandbox/public_token/create\' \\\n  --header \'Content-Type: application/json;charset=UTF-16\' \\\n  --data-raw \'{\n      "client_id": "<your-client-id>",\n      "secret": "<your-sandbox-api-key>",\n      "institution_id": "ins_43",\n      "initial_products": ["auth", "transactions"]\n  }\'\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Exchange public key for access token:")," Make this API call described in ",(0,n.kt)("a",{parentName:"li",href:"https://plaid.com/docs/api/tokens/#itempublic_tokenexchange"},"Plaid docs"),". The public token used in this request, is the token returned in the response of the previous request.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl --location --request POST \'https://sandbox.plaid.com/item/public_token/exchange\' \\\n  --header \'Content-Type: application/json;charset=UTF-16\' \\\n  --data-raw \'{\n      "client_id": "<your-client-id>",\n      "secret": "<your-sandbox-api-key>",\n      "public_token": "<public-token-returned-by-previous-request>"\n  }\'\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"You're ready to set up Plaid in Daspire!")),(0,n.kt)("h3",{id:"step-2-set-up-plaid-in-daspire"},"Step 2: Set up Plaid in Daspire"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Plaid")," from the Source list.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your Plaid ",(0,n.kt)("strong",{parentName:"p"},"API key"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your Plaid ",(0,n.kt)("strong",{parentName:"p"},"Client ID"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select your Plaid environment from ",(0,n.kt)("strong",{parentName:"p"},"sandbox"),", ",(0,n.kt)("strong",{parentName:"p"},"development"),", or ",(0,n.kt)("strong",{parentName:"p"},"production"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your Plaid ",(0,n.kt)("strong",{parentName:"p"},"Access Token"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,n.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,n.kt)("p",null,"This source is capable of syncing the following streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://plaid.com/docs/api/products/#balance"},"Balance"))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The Plaid connector should not run into Stripe API limitations under normal usage. Please ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@daspire.com"},"contact us")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))}d.isMDXComponent=!0},8115:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/plaid-client-id-secret-a5d6a9fe316931c2350595c9137ced40.jpg"},8703:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/plaid-keys-510d5b63398d1859f008e26d77ad6b4a.jpg"}}]);
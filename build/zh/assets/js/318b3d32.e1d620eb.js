"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={},i="Instagram",l={unversionedId:"setup-guide/sources/instagram",id:"setup-guide/sources/instagram",title:"Instagram",description:"This page contains the setup guide and reference information for Instagram.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/setup-guide/sources/instagram.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/instagram",permalink:"/zh/setup-guide/sources/instagram",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/zh/setup-guide/sources/github"},next:{title:"MySQL",permalink:"/zh/setup-guide/sources/mysql"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Connect you Instagram account to your Facebook Page",id:"step-1-connect-you-instagram-account-to-your-facebook-page",level:3},{value:"Step 2: Obtain credentials to set up Instagram",id:"step-2-obtain-credentials-to-set-up-instagram",level:3},{value:"Step 3: Set up Instagram in Daspire",id:"step-3-set-up-instagram-in-daspire",level:3},{value:"Output schema",id:"output-schema",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"instagram"},"Instagram"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for Instagram."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Full Refresh - Overwrite"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Full Refresh - Append"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Incremental - Append"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Incremental - Append + Deduped"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: Incremental sync modes are only available for the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user/insights"},"User Insights")," stream.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.facebook.com/business/help/898752960195806"},"Instagram business account")," linked to your Facebook page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/"},"Meta for Developers account")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.facebook.com/business/help/1492627900875762"},"Facebook ad account ID number")),(0,n.kt)("li",{parentName:"ul"},"Access Token generated using ",(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/tools/explorer/"},"Graph API Explorer")," or by using ",(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/getting-started"},"an app you created on Facebook"))),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-connect-you-instagram-account-to-your-facebook-page"},"Step 1: Connect you Instagram account to your Facebook Page"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On yuor Facebook Page, click ",(0,n.kt)("strong",{parentName:"p"},"Professional dashboard"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Inside your dashboard, scroll down and find ",(0,n.kt)("strong",{parentName:"p"},"Linked accounts")," on the left sidebar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("strong",{parentName:"p"},"Instagram")," and click ",(0,n.kt)("strong",{parentName:"p"},"Connect account"),". You will be asked to login to your Instagram account. Once done, your Instagram account will be connected to your Facebook page."))),(0,n.kt)("h3",{id:"step-2-obtain-credentials-to-set-up-instagram"},"Step 2: Obtain credentials to set up Instagram"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/tools/explorer/"},"Graph API Explorer")," or by using an app you can create on Facebook with the required permissions:"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"instagram_basic"),(0,n.kt)("li",{parentName:"ul"},"instagram_manage_insights"),(0,n.kt)("li",{parentName:"ul"},"pages_show_list"),(0,n.kt)("li",{parentName:"ul"},"pages_read_engagement")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the guide ",(0,n.kt)("a",{parentName:"p",href:"https://www.facebook.com/business/help/1492627900875762"},"here")," to obtain your ",(0,n.kt)("strong",{parentName:"p"},"Facebook ad account ID number"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You're ready to set up Instagram in Daspire!"))),(0,n.kt)("h3",{id:"step-3-set-up-instagram-in-daspire"},"Step 3: Set up Instagram in Daspire"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Instagram")," from the Source list.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter ",(0,n.kt)("strong",{parentName:"p"},"Access Token")," you obtained in Step 2.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) Enter the ",(0,n.kt)("strong",{parentName:"p"},"Start Date")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:mm:ssZ")," format. All data generated after this date will be replicated. If left blank, the start date will be set to 2 years before the present date.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,n.kt)("h2",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user"},"Users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user/insights"},"User Insights")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user/media"},"Media")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-media/insights"},"Media Insights")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user/stories/"},"Stories")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-media/insights"},"Story Insights"))),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Instagram limits the number of requests that can be made at a time, but the Instagram integration gracefully handles rate limiting. See ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/graph-api/overview/rate-limiting/#instagram-graph-api"},"Facebook's documentation on rate limiting")," for more information."),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))}m.isMDXComponent=!0}}]);
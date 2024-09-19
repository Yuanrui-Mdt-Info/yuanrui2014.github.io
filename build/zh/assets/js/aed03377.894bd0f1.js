"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[7602],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,m=c["".concat(o,".").concat(k)]||c[k]||u[k]||i;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6909:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},s="Zendesk Talk",l={unversionedId:"setup-guide/sources/zendesk-talk",id:"setup-guide/sources/zendesk-talk",title:"Zendesk Talk",description:"This page contains the setup guide and reference information for Zendesk Talk.",source:"@site/docs/setup-guide/sources/zendesk-talk.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/zendesk-talk",permalink:"/zh/setup-guide/sources/zendesk-talk",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Zendesk Support",permalink:"/zh/setup-guide/sources/zendesk-support"},next:{title:"**Zoho Desk - Setup Guide**",permalink:"/zh/setup-guide/sources/zohodesk"}},o={},p=[{value:"Features",id:"features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Generate an API token",id:"step-1-generate-an-api-token",level:3},{value:"Step 2: Set up Zendesk Talk in Daspire",id:"step-2-set-up-zendesk-talk-in-daspire",level:3},{value:"Output schema",id:"output-schema",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zendesk-talk"},"Zendesk Talk"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for Zendesk Talk."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Zendesk account with an Administrator role"),(0,r.kt)("li",{parentName:"ul"},"Zendesk API Token"),(0,r.kt)("li",{parentName:"ul"},"Zendesk subdomain")),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h3",{id:"step-1-generate-an-api-token"},"Step 1: Generate an API token"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside your Zendesk account, click the Zendesk Products icon (four squares) in the top-right corner, then select ",(0,r.kt)("strong",{parentName:"p"},"Admin Center"),".\n",(0,r.kt)("img",{alt:"Zendesk Admin Center",src:a(2415).Z,title:"Zendesk Admin Center",width:"1026",height:"497"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left navbar, scroll down to ",(0,r.kt)("strong",{parentName:"p"},"Apps and Integrations"),", then select ",(0,r.kt)("strong",{parentName:"p"},"APIs")," > ",(0,r.kt)("strong",{parentName:"p"},"Zendesk API"),".\n",(0,r.kt)("img",{alt:"Zendesk API",src:a(5976).Z,title:"Zendesk API",width:"1026",height:"497"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," tab, toggle the option to enable token access.\n",(0,r.kt)("img",{alt:"Zendesk Enable Token Access",src:a(7952).Z,title:"Zendesk Enable Token Access",width:"1026",height:"497"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Add API token")," button. And then click Save.\n",(0,r.kt)("img",{alt:"Zendesk API Token",src:a(5459).Z,title:"Zendesk API Token",width:"1026",height:"497"})),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"CAUTION: Be sure to copy the token and save it in a secure location. You will not be able to access the token's value after you close the page.")))),(0,r.kt)("h3",{id:"step-2-set-up-zendesk-talk-in-daspire"},"Step 2: Set up Zendesk Talk in Daspire"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Zendesk Talk")," from the Source list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a ",(0,r.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To authenticate your account, select ",(0,r.kt)("strong",{parentName:"p"},"API Token")," and enter the API Token you generated in Step 1.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Subdomain"),", enter your Zendesk subdomain. This is the subdomain found in your account URL. For example, if your account URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://MY_SUBDOMAIN.zendesk.com/"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"MY_SUBDOMAIN")," is your subdomain.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Start Date"),", enter a UTC date and time programmatically in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:mm:ssZ"),". The data added on and after this date will be replicated. If this field is left blank, Daspire will replicate the data for the last two years by default.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,r.kt)("h2",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/stats#show-account-overview"},"Account Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/phone_numbers#list-phone-numbers"},"Addresses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/stats#list-agents-activity"},"Agents Activity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/stats#show-agents-overview"},"Agents Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/incremental_exports#incremental-calls-export"},"Calls")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/incremental_exports#incremental-call-legs-export"},"Call Legs")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/stats#show-current-queue-activity"},"Current Queue Activity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/greetings#list-greeting-categories"},"Greeting Categories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/greetings#list-greetings"},"Greetings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/ivrs#list-ivrs"},"IVRs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/ivrs#list-ivrs"},"IVR Menus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/ivr_routes#list-ivr-routes"},"IVR Routes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/voice-api/phone_numbers#list-phone-numbers"},"Phone Numbers"))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"The integration is restricted by normal ",(0,r.kt)("a",{parentName:"p",href:"https://developer.zendesk.com/rest_api/docs/voice-api/introduction#rate-limits"},"Zendesk requests limitation"),". The integration ideally should not run into Zendesk API limitations under normal usage."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))}u.isMDXComponent=!0},2415:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zendesk-admin-center-dbf5b3a0558f0169db91bf5c119e139d.jpg"},5459:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zendesk-api-token-01d9f9a579d67077abdb0d720971a781.jpg"},5976:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zendesk-api-a17fa2ca4af884c366482b004cfab8ec.jpg"},7952:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zendesk-enable-token-access-1c5cbd3df3aff23b39aba99d3db1de79.jpg"}}]);
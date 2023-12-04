"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="Notion",l={unversionedId:"setup-guide/sources/notion",id:"setup-guide/sources/notion",title:"Notion",description:"This page contains the setup guide and reference information for Notion.",source:"@site/docs/setup-guide/sources/notion.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/notion",permalink:"/setup-guide/sources/notion",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NetSuite",permalink:"/setup-guide/sources/netsuite"},next:{title:"Plaid",permalink:"/setup-guide/sources/plaid"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Create an integration in Notion\u200b",id:"step-1-create-an-integration-in-notion",level:3},{value:"Step 2: Make your integration public and obtain credentials",id:"step-2-make-your-integration-public-and-obtain-credentials",level:3},{value:"Using OAuth 2.0",id:"using-oauth-20",level:4},{value:"Using Access Token",id:"using-access-token",level:4},{value:"Step 3: Set up Notion in Daspire",id:"step-3-set-up-notion-in-daspire",level:3},{value:"Output schema",id:"output-schema",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notion"},"Notion"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for Notion."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Refresh - Overwrite"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Refresh - Append"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental - Append"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental - Append + Deduped"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: ",(0,r.kt)("a",{parentName:"p",href:"https://developers.notion.com/reference/get-users"},"Users")," stream only supports full refresh sync mode.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access to a Notion workspace"),(0,r.kt)("li",{parentName:"ul"},"Client ID (when using Access Token to authenticate)"),(0,r.kt)("li",{parentName:"ul"},"Client Secret (when using Access Token to authenticate)"),(0,r.kt)("li",{parentName:"ul"},"Access Token")),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h3",{id:"step-1-create-an-integration-in-notion"},"Step 1: Create an integration in Notion\u200b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to your Notion workspace and navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/my-integrations"},"My integrations")," page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"+ New integration"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"NOTE: You must be the owner of the Notion workspace to create a new integration.\n",(0,r.kt)("img",{alt:"Notion New Integration",src:n(6281).Z,title:"Notion New Integratione",width:"1026",height:"517"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a Name for your integration. Make sure you have selected the correct workspace from the Associated workspace dropdown menu, and click ",(0,r.kt)("strong",{parentName:"p"},"Submit"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the integration you just created, click ",(0,r.kt)("strong",{parentName:"p"},"Capabilities")," from the left sidebar. Check the following capabilities based on your use case:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Read content: required for all connections."),(0,r.kt)("li",{parentName:"ul"},"Read comments: required if you wish to sync the Comments stream"),(0,r.kt)("li",{parentName:"ul"},"Read user information (either with or without emails): required if you wish to sync the Users stream"))))),(0,r.kt)("h3",{id:"step-2-make-your-integration-public-and-obtain-credentials"},"Step 2: Make your integration public and obtain credentials"),(0,r.kt)("h4",{id:"using-oauth-20"},"Using OAuth 2.0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the integration you just created, click ",(0,r.kt)("strong",{parentName:"p"},"Distribution")," from the left sidebar, and toggle the switch to make the integration ",(0,r.kt)("strong",{parentName:"p"},"public"),".\n",(0,r.kt)("img",{alt:"Notion Public Distribution",src:n(2190).Z,title:"Notion Public Distribution",width:"1026",height:"517"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the required fields in the ",(0,r.kt)("strong",{parentName:"p"},"Organization")," information and ",(0,r.kt)("strong",{parentName:"p"},"OAuth Domain & URIs")," section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you click Submit after filling out all the required field, you will be directed to the ",(0,r.kt)("strong",{parentName:"p"},"Secrets")," tab. Copy your ",(0,r.kt)("strong",{parentName:"p"},"Client ID"),", ",(0,r.kt)("strong",{parentName:"p"},"Client Secret")," and ",(0,r.kt)("strong",{parentName:"p"},"Authorization URL"),".\n",(0,r.kt)("img",{alt:"Notion Secrets",src:n(8851).Z,title:"Notion Secrets",width:"1026",height:"517"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You need to use your integration's ",(0,r.kt)("strong",{parentName:"p"},"Authorization URL")," to set the necessary page permissions and send a request to obtain your ",(0,r.kt)("strong",{parentName:"p"},"Access Token"),". A thorough explanation of the necessary steps is provided in the official ",(0,r.kt)("a",{parentName:"p",href:"https://developers.notion.com/docs/authorization#public-integration-auth-flow-set-up"},"Notion documentation"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You're ready to set up Notion in Daspire!"))),(0,r.kt)("h4",{id:"using-access-token"},"Using Access Token"),(0,r.kt)("p",null,"If you are authenticating via Access Token, you will need to manually share each page you want to sync with Daspire."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the page(s) you want to sync with Daspire. Click the ",(0,r.kt)("strong",{parentName:"p"},"\u2022\u2022\u2022")," menu at the top right of the page, scroll down to ",(0,r.kt)("strong",{parentName:"p"},"Add connections"),", and choose the integration you created in Step 1.\n",(0,r.kt)("img",{alt:"Notion Add Connection",src:n(4222).Z,title:"Notion Add Connection",width:"1029",height:"633"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you have done that to all the pages you want to sync, go back to your integration, and copy the ",(0,r.kt)("strong",{parentName:"p"},"Access Token")," from the ",(0,r.kt)("strong",{parentName:"p"},"Secrets")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You're ready to set up Notion in Daspire!"))),(0,r.kt)("h3",{id:"step-3-set-up-notion-in-daspire"},"Step 3: Set up Notion in Daspire"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Notion")," from the Source list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a ",(0,r.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy and paste the ",(0,r.kt)("strong",{parentName:"p"},"Client ID"),", ",(0,r.kt)("strong",{parentName:"p"},"Client Secret")," and ",(0,r.kt)("strong",{parentName:"p"},"Access Token")," you acquired after setting up your public integration.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) You may optionally provide a ",(0,r.kt)("strong",{parentName:"p"},"Start Date")," in the format: ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:mm:ss.SSSZ"),". When using incremental syncs, only data generated after this date will be replicated. If left blank, Airbyte will set the start date two years from the current date by default.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,r.kt)("h2",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.notion.com/reference/retrieve-a-block"},"Blocks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.notion.com/reference/retrieve-a-comment"},"Comments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.notion.com/reference/retrieve-a-database"},"Databases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.notion.com/reference/retrieve-a-page"},"Pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.notion.com/reference/get-users"},"Users"))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"The integration is restricted by Notion ",(0,r.kt)("a",{parentName:"p",href:"https://developers.notion.com/reference/request-limits"},"request limits"),". The Notion integration should not run into Notion API limitations under normal usage."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))}c.isMDXComponent=!0},4222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/notion-add-connection-21404358ce524420ddf5d001bff571ec.jpg"},2190:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/notion-distribution-3e3c01b2794e2f9b9fbbd4ef23d1318b.jpg"},6281:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/notion-new-integration-76a0a9d86a7a489a9767dfd5ed30f319.jpg"},8851:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/notion-secrets-a7d189f0ac0d09f9b67cbcb7369b41a4.jpg"}}]);
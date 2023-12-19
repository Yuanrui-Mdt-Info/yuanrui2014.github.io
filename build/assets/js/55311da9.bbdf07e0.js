"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[1782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9615:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i="HubSpot",o={unversionedId:"setup-guide/sources/hubspot",id:"setup-guide/sources/hubspot",title:"HubSpot",description:"This page contains the setup guide and reference information for HubSpot.",source:"@site/docs/setup-guide/sources/hubspot.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/hubspot",permalink:"/setup-guide/sources/hubspot",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/setup-guide/sources/github"},next:{title:"Instagram",permalink:"/setup-guide/sources/instagram"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Create a HubSpot App",id:"step-1-create-a-hubspot-app",level:3},{value:"Step 2: Set up HubSpot in Daspire",id:"step-2-set-up-hubspot-in-daspire",level:3},{value:"Supported streams",id:"supported-streams",level:2},{value:"Notes on the <code>engagements</code> stream",id:"notes-on-the-engagements-stream",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hubspot"},"HubSpot"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for HubSpot."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"There are two types of incremental sync:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Incremental (standard server-side, where API returns only the data updated or generated since the last sync)"),(0,r.kt)("li",{parentName:"ul"},"Client-Side Incremental (API returns all available data and connector filters out only new records)")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A private HubSpot app with Access Token, OR")),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h3",{id:"step-1-create-a-hubspot-app"},"Step 1: Create a HubSpot App"),(0,r.kt)("p",null,"Follow these ",(0,r.kt)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/api/private-apps"},"instructions")," or the below steps to create a HubSpot App and obtain the Access Token needed to set up the source in Daspire."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your HubSpot account, click the ",(0,r.kt)("strong",{parentName:"p"},"settings icon")," in the top navigation bar.\n",(0,r.kt)("img",{alt:"HubSpot Settings",src:a(2684).Z,title:"HubSpot Settings",width:"1026",height:"64"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left sidebar menu, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Integrations > Private Apps"),".\n",(0,r.kt)("img",{alt:"HubSpot Private Apps",src:a(6929).Z,title:"HubSpot Private Apps",width:"1026",height:"501"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create private app"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Basic Info")," tab, enter your app's name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Scopes")," tab. Select the Read checkbox for each scope you want your private app to be able to access."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"NOTE: Daspire needs the following Scopes to be able to sync all the streams listed below.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stream"),(0,r.kt)("th",{parentName:"tr",align:null},"Scope"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"campaigns")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"companies")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.companies.read"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"crm.schemas.companies.read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contact_lists")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.lists.read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contacts")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.contacts.read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contacts_list_memberships")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.contacts.read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom CRM Objects"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.custom.read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deal_pipelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.contacts.read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deals")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.deals.read"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"crm.schemas.deals.read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deals_archived")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.deals.read"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"crm.schemas.deals.read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email_events")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email_subscriptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"engagements")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.companies.read"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.contacts.read"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.deals.read"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"tickets"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"e-commerce"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"engagements_emails")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sales-email-read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forms")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forms"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"form_submissions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forms"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goals")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.goals.read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"line_items")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"e-commerce"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"owners")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.owners.read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"products")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"e-commerce"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"property_history")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"crm.objects.contacts.read"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subscription_changes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tickets")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tickets"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"workflows")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"automation"))))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After you're done configuring your app, click ",(0,r.kt)("strong",{parentName:"p"},"Create app")," on the top right.\n",(0,r.kt)("img",{alt:"HubSpot Create Private App",src:a(5112).Z,title:"HubSpot Create Private App",width:"1030",height:"503"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once your private app is created, you will get an ",(0,r.kt)("strong",{parentName:"p"},"Access Token"),". Copy that. You will use it to set up the source in Daspire.\n",(0,r.kt)("img",{alt:"HubSpot Access Token",src:a(9598).Z,title:"HubSpot Access Token",width:"1026",height:"503"})))),(0,r.kt)("h3",{id:"step-2-set-up-hubspot-in-daspire"},"Step 2: Set up HubSpot in Daspire"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"HubSpot")," from the Source list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a ",(0,r.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To authenticate using a Private App, enter the ",(0,r.kt)("strong",{parentName:"p"},"Access Token")," for your HubSpot account you obtained in Step 1.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Start date"),", enter the date in the following format: ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy-mm-ddThh:mm:ssZ"),". The data added on and after this date will be replicated.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,r.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,r.kt)("p",null,"This source is capable of syncing the following streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/email/get_campaign_data"},"Campaigns")," (Client-Side Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/companies"},"Companies")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://developers.hubspot.com/docs/methods/lists/get_lists"},"Contact Lists")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/contacts/get_contacts"},"Contacts")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/contacts/get_contacts"},"Contacts List Memberships")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/pipelines/get_pipelines_for_object_type"},"Deal Pipelines")," (Client-Side Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/deals"},"Deals")," (including Contact associations) (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/deals"},"Deals Archived")," (including Contact associations) (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/email/get_events"},"Email Events")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/email/get_subscriptions"},"Email Subscriptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/engagements/get-all-engagements"},"Engagements")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/calls"},"Engagements Calls")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/email"},"Engagements Emails")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/meetings"},"Engagements Meetings")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/notes"},"Engagements Notes")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/tasks"},"Engagements Tasks")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/marketing/forms"},"Forms")," (Client-Side Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/forms/get-submissions-for-a-form"},"Form Submissions")," (Client-Side Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/goals"},"Goals")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/line-items"},"Line Items")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/cms_email/get-all-marketing-email-statistics"},"Marketing Emails")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/owners/get_owners"},"Owners")," (Client-Side Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/products"},"Products")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/contacts/get_contacts"},"Property History")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/email/get_subscriptions_timeline"},"Subscription Changes")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/tickets"},"Tickets")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/pipelines"},"Ticket Pipelines")," (Client-Side Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/workflows/v3/get_workflows"},"Workflows")," (Client-Side Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"ContactsWebAnalytics")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"CompaniesWebAnalytics")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"DealsWebAnalytics")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"TicketsWebAnalytics")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"EngagementsCallsWebAnalytics")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"EngagementsEmailsWebAnalytics")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"EngagementsMeetingsWebAnalytics")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"EngagementsNotesWebAnalytics")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"EngagementsTasksWebAnalytics")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"GoalsWebAnalytics")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"LineItemsWebAnalytics")," (Incremental)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/events/web-analytics"},"ProductsWebAnalytics")," (Incremental)")),(0,r.kt)("h3",{id:"notes-on-the-engagements-stream"},"Notes on the ",(0,r.kt)("inlineCode",{parentName:"h3"},"engagements")," stream"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Objects in the ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements")," stream can have one of the following types: ",(0,r.kt)("inlineCode",{parentName:"li"},"note"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"email"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"task"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"meeting"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"call"),". Depending on the type of engagement, different properties are set for that object in the ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements_metadata")," table in the destination:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"call")," engagement has a corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements_metadata")," object with non-null values in the ",(0,r.kt)("inlineCode",{parentName:"li"},"toNumber"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"fromNumber"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"status"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"externalId"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"durationMilliseconds"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"externalAccountId"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"recordingUrl"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"body"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"disposition")," columns."),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"email")," engagement has a corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements_metadata")," object with non-null values in the ",(0,r.kt)("inlineCode",{parentName:"li"},"subject"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"html"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"text")," columns. In addition, there will be records in four related tables, ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements_metadata_from"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements_metadata_to"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements_metadata_cc"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements_metadata_bcc"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"meeting")," engagement has a corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements_metadata")," object with non-null values in the ",(0,r.kt)("inlineCode",{parentName:"li"},"body"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"endTime"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"title")," columns."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"note")," engagement has a corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements_metadata")," object with non-null values in the ",(0,r.kt)("inlineCode",{parentName:"li"},"body")," column."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"task")," engagement has a corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements_metadata")," object with non-null values in the ",(0,r.kt)("inlineCode",{parentName:"li"},"body"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"status"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"forObjectType")," columns.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"engagements")," stream uses two different APIs based on the length of time since the last sync and the number of records which Daspire hasn't yet synced.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"EngagementsRecent")," if the following two criteria are met:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The last sync was performed within the last 30 days"),(0,r.kt)("li",{parentName:"ul"},"Fewer than 10,000 records are being synced"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"EngagementsAll")," if either of these criteria are not met."),(0,r.kt)("p",{parentName:"li"},"Because of this, the ",(0,r.kt)("inlineCode",{parentName:"p"},"engagements")," stream can be slow to sync if it hasn't synced within the last 30 days and/or is generating large volumes of new data. We therefore recommend scheduling frequent syncs."))),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rate limiting")),(0,r.kt)("p",null,"The integration is restricted by normal ",(0,r.kt)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/api/usage-details"},"HubSpot rate limitations"),"."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Enabling streams:")," Some streams, such as `workflows``, need to be enabled before they can be read using an integration authenticated using an API Key. If reading a stream that is not enabled, a log message returned to the output and the sync operation will only sync the other streams available.")),(0,r.kt)("p",null,"Example of the output message when trying to read ",(0,r.kt)("inlineCode",{parentName:"p"},"workflows")," stream with missing permissions for the API Key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "type": "LOG",\n    "log": {\n        "level": "WARN",\n        "message": "Stream `workflows` cannot be proceed. This API Key (EXAMPLE_API_KEY) does not have proper permissions! (requires any of [automation-access])"\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Unnesting top level properties:")," Since version 1.5.0, in order to not make the users query their destinations for complicated json fields, we duplicate most of nested data as top level fields.")),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "id": 1,\n  "updatedAt": "2020-01-01",\n  "properties": {\n    "hs_note_body": "World\'s best boss",\n    "hs_created_by": "Michael Scott"\n  }\n}\n')),(0,r.kt)("p",null,"becomes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "id": 1,\n    "updatedAt": "2020-01-01",\n    "properties": {\n      "hs_note_body": "World\'s best boss",\n      "hs_created_by": "Michael Scott"\n    },\n    "properties_hs_note_body": "World\'s best boss",\n    "properties_hs_created_by": "Michael Scott"\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"403 Forbidden Error"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Hubspot has ",(0,r.kt)("strong",{parentName:"p"},"scopes")," for each API call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each stream is tied to a scope and will need access to that scope to sync data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Review the Hubspot OAuth scope documentation ",(0,r.kt)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/api/working-with-oauth#scopes"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Additional permissions:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"feedback_submissions"),": Service Hub Professional account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"marketing_emails"),": Market Hub Starter account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"workflows"),": Sales, Service, and Marketing Hub Professional accounts"))))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached.")))}d.isMDXComponent=!0},9598:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hubspot-access-token-a6b1a01070c6564e6c1557f228b45a0c.jpg"},5112:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hubspot-create-app-40a926f1109140df17f5683058f7616b.jpg"},6929:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hubspot-private-apps-cb5ba86144111ad36a7abc2b6bca6f2e.jpg"},2684:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hubspot-settings-9d592df1b8118d880809ea31da3aa859.jpg"}}]);
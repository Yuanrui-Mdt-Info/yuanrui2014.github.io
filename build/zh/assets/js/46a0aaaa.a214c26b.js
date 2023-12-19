"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[8730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),o=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(a),d=n,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return a?r.createElement(k,s(s({ref:t},m),{},{components:a})):r.createElement(k,s({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var o=2;o<i;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const i={},s="Microsoft Teams",p={unversionedId:"setup-guide/sources/microsoft-teams",id:"setup-guide/sources/microsoft-teams",title:"Microsoft Teams",description:"This page contains the setup guide and reference information for Microsoft Teams.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/setup-guide/sources/microsoft-teams.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/microsoft-teams",permalink:"/zh/setup-guide/sources/microsoft-teams",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Instagram",permalink:"/zh/setup-guide/sources/instagram"},next:{title:"MySQL",permalink:"/zh/setup-guide/sources/mysql"}},l={},o=[{value:"Features",id:"features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Obtain Microsoft Teams crendentials",id:"step-1-obtain-microsoft-teams-crendentials",level:3},{value:"Step 2: Set up Microsoft Teams  in Daspire",id:"step-2-set-up-microsoft-teams--in-daspire",level:3},{value:"Supported streams",id:"supported-streams",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:o};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"microsoft-teams"},"Microsoft Teams"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for Microsoft Teams."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:null},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:null},"No")))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An Azure account that has an active subscription"),(0,n.kt)("li",{parentName:"ul"},"Application (client) ID"),(0,n.kt)("li",{parentName:"ul"},"Directory (tenant) ID"),(0,n.kt)("li",{parentName:"ul"},"Client secrets")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/graph/overview"},"Microsoft Graph API")," uses OAuth for authentication. Microsoft Graph exposes granular permissions that control the access that apps have to resources, like users, groups, and mail. When a user signs in to your app they, or, in some cases, an administrator, are given a chance to consent to these permissions. If the user consents, your app is given access to the resources and APIs that it has requested. For apps that don't take a signed-in user, permissions can be pre-consented to by an administrator when the app is installed."),(0,n.kt)("p",null,"Microsoft Graph has two types of permissions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Delegated permissions")," are used by apps that have a signed-in user present. For these apps, either the user or an administrator consents to the permissions that the app requests, and the app can act as the signed-in user when making calls to Microsoft Graph. Some delegated permissions can be consented by non-administrative users, but some higher-privileged permissions require administrator consent.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Application permissions")," are used by apps that run without a signed-in user present; for example, apps that run as background services or daemons. Application permissions can only be consented by an administrator. This source requires ",(0,n.kt)("strong",{parentName:"p"},"Application permissions"),"."))),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-obtain-microsoft-teams-crendentials"},"Step 1: Obtain Microsoft Teams crendentials"),(0,n.kt)("p",null,"Follow these ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/auth-v2-service?context=graph%2Fapi%2F1.0&view=graph-rest-1.0"},"instructions")," or the below steps for creating an app in the Azure portal. This process will produce the ",(0,n.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"client_secret"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"tenant_id")," needed to set up the source in Daspire."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login to ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com/#home"},"Azure Portal"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Entra ID")," from list Azure services, or search for it in the search bar.\n",(0,n.kt)("img",{alt:"Microsoft Entra ID",src:a(6849).Z,title:"Microsoft Entra ID",width:"1026",height:"197"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the left side nav bar, click ",(0,n.kt)("strong",{parentName:"p"},"App registrations"),", and click click the ",(0,n.kt)("strong",{parentName:"p"},"New registration")," tab.\n",(0,n.kt)("img",{alt:"Microsoft App Registration",src:a(7942).Z,title:"Microsoft App Registration",width:"1026",height:"571"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Register an application. Enter a name for your app, and in Supported account types, select ",(0,n.kt)("strong",{parentName:"p"},"Accounts in this organizational directory only"),". Cick the Register button.\n",(0,n.kt)("img",{alt:"Microsoft Register an App",src:a(5043).Z,title:"Microsoft Register an App",width:"1026",height:"590"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be directed to your App's Overview page. From there, copy the ",(0,n.kt)("strong",{parentName:"p"},"Application (client) ID")," and ",(0,n.kt)("strong",{parentName:"p"},"Directory (tenant) ID"),". You will use them later for authentication in Daspire.\n",(0,n.kt)("img",{alt:"Microsoft App Details",src:a(2839).Z,title:"Microsoft App Details",width:"1032",height:"565"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add a certificate or secret"),", which will open the Certificates & secrets page.\n",(0,n.kt)("img",{alt:"Microsoft App Client Secret",src:a(8201).Z,title:"Microsoft App Client Secret",width:"1026",height:"588"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"+ New client secret"),". In the opened pop up, provide a description for the client secret and select the expirary duration that suits your need. Then click Add.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the client secret ",(0,n.kt)("strong",{parentName:"p"},"Value"),". You will use it later for authentication in Daspire.\n",(0,n.kt)("img",{alt:"Microsoft Client Secret",src:a(8151).Z,title:"Microsoft Client Secret",width:"1026",height:"503"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the left side nav bar, click ",(0,n.kt)("strong",{parentName:"p"},"API permissions"),", then ",(0,n.kt)("strong",{parentName:"p"},"Add a permission"),".\n",(0,n.kt)("img",{alt:"Microsoft API Permissions",src:a(2617).Z,title:"Microsoft API Permissions",width:"1026",height:"587"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Graph"),", then select ",(0,n.kt)("strong",{parentName:"p"},"Application permissions"),".\n",(0,n.kt)("img",{alt:"Microsoft Graph",src:a(3491).Z,title:"Microsoft Graph",width:"1026",height:"503"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the following permissions:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Channels"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Channel.ReadBasic.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ChannelMembers"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ChannelMember.Read.All"),(0,n.kt)("li",{parentName:"ul"},"ChannelMember.ReadWrite.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ChannelMessage"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ChannelMessage.Read.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Chat"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Chat.Read.All"),(0,n.kt)("li",{parentName:"ul"},"Chat.ReadBasic.All"),(0,n.kt)("li",{parentName:"ul"},"Chat.ReadWrite.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ChatMember"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ChatMember.Read.All"),(0,n.kt)("li",{parentName:"ul"},"ChatMember.ReadWrite.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ChatMessage"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ChatMessage.Read.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Files"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Files.Read.All"),(0,n.kt)("li",{parentName:"ul"},"Files.ReadWrite.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Groups"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Group.Read.All"),(0,n.kt)("li",{parentName:"ul"},"Group.ReadWrite.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"GroupMembers"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GroupMember.Read.All"),(0,n.kt)("li",{parentName:"ul"},"GroupMember.ReadWrite.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TeamsActivity"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TeamsActivity.Read.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TeamMember"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TeamMember.Read.All"),(0,n.kt)("li",{parentName:"ul"},"TeamMember.ReadWrite.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TeamTabs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TeamsTab.Read.All"),(0,n.kt)("li",{parentName:"ul"},"TeamsTab.ReadWrite.All"),(0,n.kt)("li",{parentName:"ul"},"TeamsTab.ReadWriteForTeam.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Team"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Team.ReadBasic.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TeamworkDevice"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TeamworkDevice.Read.All"),(0,n.kt)("li",{parentName:"ul"},"TeamworkDevice.ReadWrite.All"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Users"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User.Read.All"),(0,n.kt)("li",{parentName:"ul"},"User.ReadWrite.All")))),(0,n.kt)("ol",{start:12},(0,n.kt)("li",{parentName:"ol"},"Once you're done, click ",(0,n.kt)("strong",{parentName:"li"},"Add permissions"),".\n",(0,n.kt)("img",{alt:"Microsoft Graph App Permissions",src:a(6329).Z,title:"Microsoft Graph App Permissions",width:"1026",height:"503"}))),(0,n.kt)("h3",{id:"step-2-set-up-microsoft-teams--in-daspire"},"Step 2: Set up Microsoft Teams  in Daspire"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Teams")," from the Source list.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter ",(0,n.kt)("strong",{parentName:"p"},"Application (client) ID"),", ",(0,n.kt)("strong",{parentName:"p"},"Directory (tenant) ID"),", and ",(0,n.kt)("strong",{parentName:"p"},"Client secrets")," you obtained in Step 1.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,n.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,n.kt)("p",null,"This source is capable of syncing the following streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/channel-list?view=graph-rest-1.0&tabs=http"},"channels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/channel-list-members?view=graph-rest-1.0&tabs=http"},"channel_members")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/channel-list-tabs?view=graph-rest-1.0&tabs=http"},"channel_tabs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/group-list-conversations?view=graph-rest-beta&tabs=http"},"conversations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/conversation-list-threads?view=graph-rest-beta&tabs=http"},"conversation_threads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/conversationthread-list-posts?view=graph-rest-beta&tabs=http"},"conversation_posts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/teams-list-all-teams?context=graph%2Fapi%2F1.0&view=graph-rest-1.0"},"groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/group-list-members?view=graph-rest-1.0&tabs=http"},"group_members")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/group-list-owners?view=graph-rest-1.0&tabs=http"},"group_owners")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/drive-get?view=graph-rest-beta&tabs=http#get-the-document-library-associated-with-a-group"},"team_drives")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/reportroot-getteamsdeviceusageuserdetail?view=graph-rest-1.0"},"team_device_usage_report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-beta&tabs=http"},"users"))),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rate limit: This integration is restricted by normal ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/throttling"},"Microsoft Graph requests limitation"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))))}c.isMDXComponent=!0},8201:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/teams-app-client-secret-5ed5388d060006f13fc0c816010710ab.jpg"},2839:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/teams-app-details-cf4dfc01f8017eadb32df472c3579698.jpg"},2617:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/teams-app-permissions-f4295741201d44f7f4ddbed87b773299.jpg"},7942:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/teams-app-registration-df408f1fdb2f6efa131159b88e4d4b3f.jpg"},8151:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/teams-client-secret-5d1a4c00cf931c3f2b07fa78ab77a1a6.jpg"},6849:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/teams-entra-id-d213c9c8396e7d14c1d11a093b5c86f9.jpg"},3491:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/teams-ms-graph-api-3a3c7d7f9e4d775425ee8952cc05d9cd.jpg"},6329:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/teams-ms-graph-app-permissions-492c3b98f22ca237f95d3cb32b500229.jpg"},5043:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/teams-register-app-e1154e022e2e2b0fdce606c6a1f3065f.jpg"}}]);
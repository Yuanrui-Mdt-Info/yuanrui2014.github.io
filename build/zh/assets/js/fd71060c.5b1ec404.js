"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[5680],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,w=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(w,o(o({ref:t},c),{},{components:r})):a.createElement(w,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),i=(r(7294),r(3905));const n={},o="Twilio",l={unversionedId:"setup-guide/sources/twilio",id:"setup-guide/sources/twilio",title:"Twilio",description:"This page contains the setup guide and reference information for Twilio.",source:"@site/docs/setup-guide/sources/twilio.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/twilio",permalink:"/zh/setup-guide/sources/twilio",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TikTok Ads - Setup Guide",permalink:"/zh/setup-guide/sources/tiktok"},next:{title:"\u6c83\u5c14\u739b\u5546\u57ce\uff08Walmart Marketplace\uff09",permalink:"/zh/setup-guide/sources/walmart-marketplace"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Obtain Twilio credentails",id:"step-1-obtain-twilio-credentails",level:3},{value:"Step 2: Set up Twilio in Daspire",id:"step-2-set-up-twilio-in-daspire",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Output schema",id:"output-schema",level:2},{value:"Performance considerations &amp; troubleshooting",id:"performance-considerations--troubleshooting",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"twilio"},"Twilio"),(0,i.kt)("p",null,"This page contains the setup guide and reference information for Twilio."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Twilio Account SID"),(0,i.kt)("li",{parentName:"ul"},"Auth Token")),(0,i.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h3",{id:"step-1-obtain-twilio-credentails"},"Step 1: Obtain Twilio credentails"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sign in to your Twilio account.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will find your ",(0,i.kt)("strong",{parentName:"p"},"Account SID")," and ",(0,i.kt)("strong",{parentName:"p"},"Auth Token")," on your ",(0,i.kt)("a",{parentName:"p",href:"https://www.twilio.com/user/account"},"Twilio dashboard"),". Copy them."))),(0,i.kt)("h3",{id:"step-2-set-up-twilio-in-daspire"},"Step 2: Set up Twilio in Daspire"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Twilio")," from the Source list.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a ",(0,i.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the ",(0,i.kt)("strong",{parentName:"p"},"Account SID")," you obtained in Step 1.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the ",(0,i.kt)("strong",{parentName:"p"},"Auth Token")," you obtained in Step 1.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For ",(0,i.kt)("strong",{parentName:"p"},"Start Date"),", enter a UTC date and time in the format ",(0,i.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:mm:ssZ"),". The data added on and after this date will be replicated.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For ",(0,i.kt)("strong",{parentName:"p"},"Lookback Window"),", enter the number of days you want data to be replicated.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,i.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature"),(0,i.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Incremental Sync"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Replicate Incremental Deletes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h2",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/account#read-multiple-account-resources"},"Accounts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/address#read-multiple-address-resources"},"Addresses")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/monitor-alert#read-multiple-alert-resources"},"Alerts")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/applications#read-multiple-application-resources"},"Applications")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#read-a-list-of-countries"},"Available Phone Number Countries")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumberlocal-resource#read-multiple-availablephonenumberlocal-resources"},"Available Phone Numbers Local")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-mobile-resource#read-multiple-availablephonenumbermobile-resources"},"Available Phone Numbers Mobile")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-tollfree-resource#read-multiple-availablephonenumbertollfree-resources"},"Available Phone Numbers Toll Free")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/call-resource#create-a-call-resource"},"Calls")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/conference-participant-resource#read-multiple-participant-resources"},"Conference Participants")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/conference-resource#read-multiple-conference-resources"},"Conferences")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/conversations/api/conversation-resource#read-multiple-conversation-resources"},"Conversations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/conversations/api/conversation-message-resource#list-all-conversation-messages"},"Conversation Messages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/conversations/api/conversation-participant-resource"},"Conversation Participants")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/address?code-sample=code-list-dependent-pns-subresources&code-language=curl&code-sdk-version=json#instance-subresources"},"Dependent Phone Numbers")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource#read-multiple-incomingphonenumber-resources"},"Executions")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource#read-multiple-incomingphonenumber-resources"},"Incoming Phone Numbers")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/studio/rest-api/flow#read-a-list-of-flows"},"Flows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/keys#read-a-key-resource"},"Keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/sms/api/media-resource#read-multiple-media-resources"},"Message Media")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/sms/api/message-resource#read-multiple-message-resources"},"Messages")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/outgoing-caller-ids#outgoingcallerids-list-resource"},"Outgoing Caller Ids")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/queue-resource#read-multiple-queue-resources"},"Queues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/recording#read-multiple-recording-resources"},"Recordings")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/chat/rest/service-resource#read-multiple-service-resources"},"Services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/studio/rest-api/v2/step#read-a-list-of-step-resources"},"Step")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/chat/rest/role-resource#read-multiple-role-resources"},"Roles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/recording-transcription?code-sample=code-read-list-all-transcriptions&code-language=curl&code-sdk-version=json#read-multiple-transcription-resources"},"Transcriptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/sip-trunking/api/trunk-resource#trunk-properties"},"Trunks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/usage-record#read-multiple-usagerecord-resources"},"Usage Records")," (Incremental)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/usage-trigger#read-multiple-usagetrigger-resources"},"Usage Triggers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/conversations/api/user-resource"},"Users")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/conversations/api/user-conversation-resource#list-all-of-a-users-conversations"},"UserConversations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/verify/api/service#maincontent"},"VerifyServices"))),(0,i.kt)("h2",{id:"performance-considerations--troubleshooting"},"Performance considerations & troubleshooting"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Twilio integration will gracefully handle rate limits. For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://support.twilio.com/hc/en-us/articles/360044308153-Twilio-API-response-Error-429-Too-Many-Requests-"},"Twilio docs")," for rate limitations.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))))}u.isMDXComponent=!0}}]);
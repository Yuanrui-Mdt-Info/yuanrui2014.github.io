"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[70],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,m=u["".concat(p,".").concat(c)]||u[c]||g[c]||l;return a?o.createElement(m,n(n({ref:t},d),{},{components:a})):o.createElement(m,n({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,n=new Array(l);n[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var s=2;s<l;s++)n[s]=a[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4826:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=a(7462),r=(a(7294),a(3905));const l={},n="Google Ads",i={unversionedId:"setup-guide/sources/google-ads",id:"setup-guide/sources/google-ads",title:"Google Ads",description:"This page contains the setup guide and reference information for Google Ads.",source:"@site/docs/setup-guide/sources/google-ads.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/google-ads",permalink:"/setup-guide/sources/google-ads",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Facebook Marketing",permalink:"/setup-guide/sources/facebook-marketing"},next:{title:"Google Analytics 4 (GA4)",permalink:"/setup-guide/sources/google-analytics"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Features",id:"features",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Supported streams",id:"supported-streams",level:2},{value:"Main Tables",id:"main-tables",level:3},{value:"Report Tables",id:"report-tables",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:s};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-ads"},"Google Ads"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for Google Ads."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/google-ads/answer/6366720"},"Google Ads Account")," linked to a ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/google-ads/answer/7459601"},"Google Ads Manager account"))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Google Ads")," from the Source list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a ",(0,r.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Sign in with Google")," to authenticate your Google Ads account. In the pop-up, select the appropriate Google account and click Continue to proceed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a comma-separated list of the ",(0,r.kt)("strong",{parentName:"p"},"Customer ID(s)")," for your account. These IDs are 10-digit numbers that uniquely identify your account. To find your Customer ID, please follow ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/google-ads/answer/1704344"},"Google's instructions"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) Enter a ",(0,r.kt)("strong",{parentName:"p"},"Start Date")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. The data added on and after this date will be replicated. Default start date is 2 years ago.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) You can use the ",(0,r.kt)("strong",{parentName:"p"},"Custom GAQL Queries")," field to enter a custom query using Google Ads Query Language. Click Add and enter your query, as well as the desired name of the table for this data in the destination. Multiple queries can be provided. For more information on formulating these queries, refer to our guide below.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Required for Manager accounts) If accessing your account through a Google Ads Manager account, you must enter the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid"},"Customer ID")," of the Manager account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) Enter a ",(0,r.kt)("strong",{parentName:"p"},"Conversion Window"),". This is the number of days after an ad interaction during which a conversion is recorded in Google Ads. For more information on this topic, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/google-ads/answer/3123169?hl=en"},"Google Ads Help Center"),". This field defaults to 14 days.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) Enter an ",(0,r.kt)("strong",{parentName:"p"},"End Date")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. Any data added after this date will not be replicated. Leaving this field blank will replicate all data from the start date onward.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,r.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,r.kt)("p",null,"This source is capable of syncing the following streams:"),(0,r.kt)("h3",{id:"main-tables"},"Main Tables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/customer"},"customer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/customer_label"},"customer_label")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/campaign_criterion"},"campaign_criterion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/campaign"},"campaign_bidding_strategy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/campaign_label"},"campaign_label")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/label"},"label")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/ad_group_ad"},"ad_group_ad")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/ad_group_ad_label"},"ad_group_ad_label")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/ad_group"},"ad_group")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/ad_group_label"},"ad_group_label")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/ad_group"},"ad_group_bidding_strategy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/ad_group_criterion"},"ad_group_criterion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/ad_group_criterion"},"ad_listing_group_criterion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/ad_group_criterion_label"},"ad_group_criterion_label")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/audience"},"audience")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/user_interest"},"user_interest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/reference/rpc/v14/ClickView"},"click_view"))),(0,r.kt)("h3",{id:"report-tables"},"Report Tables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/docs/migration/mapping#account_performance"},"account_performance_report")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/campaign"},"campaign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v13/campaign_budget"},"campaign_budget")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/geographic_view"},"geographic_view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/user_location_view"},"user_location_view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/display_keyword_view"},"display_keyword_view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/topic_view"},"topic_view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/docs/migration/mapping#shopping_performance"},"shopping_performance_view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/keyword_view"},"keyword_view")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/google-ads/api/fields/v14/ad_group_ad"},"ad_group_ad_legacy"))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This source is constrained by the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/google-ads/api/docs/best-practices/quotas"},"Google Ads API limits"),"."),(0,r.kt)("p",{parentName:"li"},"Due to a limitation in the Google Ads API which does not allow getting performance data at a granularity level smaller than a day, the Google Ads connector usually pulls data up until the previous day. For example, if the sync runs on Wednesday at 5 PM, then data up until Tuesday midnight is pulled. Data for Wednesday is exported only if a sync runs after Wednesday (for example, 12:01 AM on Thursday) and so on. This avoids syncing partial performance data, only to have to resync it again once the full day's data has been recorded by Google. For example, without this functionality, a sync which runs on Wednesday at 5 PM would get ads performance data for Wednesday between 12:01 AM - 5 PM on Wednesday, then it would need to run again at the end of the day to get all of Wednesday's data.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))))}g.isMDXComponent=!0}}]);
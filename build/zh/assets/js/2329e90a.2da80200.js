"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[4100],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},i="Facebook Marketing",l={unversionedId:"setup-guide/sources/facebook-marketing",id:"setup-guide/sources/facebook-marketing",title:"Facebook Marketing",description:"This page contains the setup guide and reference information for Facebook Marketing.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/setup-guide/sources/facebook-marketing.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/facebook-marketing",permalink:"/zh/setup-guide/sources/facebook-marketing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Files (CSV, JSON, Excel, Feather, Parquet)",permalink:"/zh/setup-guide/sources/files"},next:{title:"Google Ads",permalink:"/zh/setup-guide/sources/google-ads"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Features",id:"features",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Create a Facebook app",id:"step-1-create-a-facebook-app",level:3},{value:"Step 2: Obtain Facebook credentials",id:"step-2-obtain-facebook-credentials",level:3},{value:"Step 3: Set up Facebook Marketing in Daspire",id:"step-3-set-up-facebook-marketing-in-daspire",level:3},{value:"Supported streams",id:"supported-streams",level:2},{value:"Facebook Marketing Attribution Reporting",id:"facebook-marketing-attribution-reporting",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"facebook-marketing"},"Facebook Marketing"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for Facebook Marketing."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Facebook Developer Account"),(0,r.kt)("li",{parentName:"ul"},"Facebook Ad Account ID"),(0,r.kt)("li",{parentName:"ul"},"Facebook app with the Marketing API enabled"),(0,r.kt)("li",{parentName:"ul"},"Facebook Marketing API Access Token")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h3",{id:"step-1-create-a-facebook-app"},"Step 1: Create a Facebook app"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},"Meta for Developers")," and follow the steps provided in the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/development/create-an-app/"},"Facebook documentation")," to create a Facebook app.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'While creating the app, when you are prompted for "What do you want your app to do?", select ',(0,r.kt)("strong",{parentName:"p"},"Other"),".\n",(0,r.kt)("img",{alt:"Facebook App Use Case",src:a(7198).Z,title:"Facebook App Use Case",width:"1026",height:"517"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the app type to ",(0,r.kt)("strong",{parentName:"p"},"Business")," when prompted.\n",(0,r.kt)("img",{alt:"Facebook App Type",src:a(2276).Z,title:"Facebook App Type",width:"1026",height:"517"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give your app a name, add a contact email, and click ",(0,r.kt)("strong",{parentName:"p"},"Create app"),".\n",(0,r.kt)("img",{alt:"Facebook Create App",src:a(9391).Z,title:"Facebook Create App",width:"1026",height:"517"})))),(0,r.kt)("h3",{id:"step-2-obtain-facebook-credentials"},"Step 2: Obtain Facebook credentials"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From your App\u2019s Dashboard, find ",(0,r.kt)("strong",{parentName:"p"},"Marketing API"),". And Click ",(0,r.kt)("strong",{parentName:"p"},"Set up"),".\n",(0,r.kt)("img",{alt:"Facebook Marketing API",src:a(3084).Z,title:"Facebook Marketing API",width:"1026",height:"525"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside Marketing API, click ",(0,r.kt)("strong",{parentName:"p"},"Tools"),".\n",(0,r.kt)("img",{alt:"Facebook Marketing API Tools",src:a(9748).Z,title:"Facebook Marketing AP Tools",width:"1026",height:"517"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select all the available ",(0,r.kt)("strong",{parentName:"p"},"Token Permissions")," (ads_management, ads_read, read_insights). And then click ",(0,r.kt)("strong",{parentName:"p"},"Get token"),". Copy the generated token for later use.\n",(0,r.kt)("img",{alt:"Facebook Marketing API Token",src:a(7662).Z,title:"Facebook Marketing API Token",width:"1026",height:"517"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Request a ",(0,r.kt)("strong",{parentName:"p"},"rate limit increase"),": Facebook heavily throttles API tokens generated from Facebook apps with the default Standard Access tier, making it infeasible to use the token for syncs with Daspire. You'll need to request an upgrade to Advanced Access for your app on the following permissions:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Ads Management Standard Access"),(0,r.kt)("li",{parentName:"ul"},"ads_read"),(0,r.kt)("li",{parentName:"ul"},"Ads_management"))),(0,r.kt)("p",{parentName:"li"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/marketing-api/overview/authorization/#access-levels"},"Facebook documentation on Authorization")," to request Advanced Access to the relevant permissions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Obtain your ",(0,r.kt)("strong",{parentName:"p"},"Facebook Ad Account ID Number"),": open your Meta Ads Manager. The Ad Account ID number is in the Account dropdown menu or in your browser's address bar. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.facebook.com/business/help/1492627900875762"},"Facebook docs for more information"),"."))),(0,r.kt)("h3",{id:"step-3-set-up-facebook-marketing-in-daspire"},"Step 3: Set up Facebook Marketing in Daspire"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Facebook Marketing")," from the Source list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a ",(0,r.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("strong",{parentName:"p"},"Access Token")," you obtained in Step 2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("strong",{parentName:"p"},"Account ID")," you obtained in Step 2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Start Date"),", enter the date programmatically in the ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:mm:ssZ")," format. If not set then all data will be replicated for usual streams and only last 2 years for insight streams."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: Insight tables are only able to pull data from the last 37 months. If you are syncing insight tables and your start date is older than 37 months, your sync will fail."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) For ",(0,r.kt)("strong",{parentName:"p"},"End Date"),", enter the date programmatically in the ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:mm:ssZ")," format. This is the date until which you'd like to replicate data for all Incremental streams. All data generated between the start date and this end date will be replicated. Not setting this option will result in always syncing the latest data.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) Toggle the ",(0,r.kt)("strong",{parentName:"p"},"Include Deleted Campaigns, Ads, and AdSets")," button to include data from deleted Campaigns, Ads, and AdSets."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The Facebook Marketing API does not have a concept of deleting records in the same way that a database does. While you can archive or delete an ad campaign, the API maintains a record of the campaign. Toggling the Include Deleted button lets you replicate records for campaigns or ads even if they were archived or deleted from the Facebook platform."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) Toggle the ",(0,r.kt)("strong",{parentName:"p"},"Fetch Thumbnail Images")," button to fetch the ",(0,r.kt)("inlineCode",{parentName:"p"},"thumbnail_url")," and store the result in ",(0,r.kt)("inlineCode",{parentName:"p"},"thumbnail_data_url")," for each ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/marketing-api/creative/"},"Ad Creative"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) In the ",(0,r.kt)("strong",{parentName:"p"},"Custom Insights")," section, you may provide a list of ad statistics entries. Each entry should have a unique name and can contain fields, breakdowns or action_breakdowns. Fields refer to the different data points you can collect from an ad, while breakdowns and action_breakdowns let you segment this data for more detailed insights. Click on Add to create a new entry in this list."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"To retrieve specific fields from Facebook Ads Insights combined with other breakdowns, you can choose which fields and breakdowns to sync. However, please note that not all fields can be requested, and many are only functional when combined with specific other fields. For example, the breakdown app_id is only supported with the total_postbacks field. For more information on the breakdown limitations, refer to the Facebook documentation.")),(0,r.kt)("p",{parentName:"li"},"To configure Custom Insights:"),(0,r.kt)("p",{parentName:"li"},"i. For ",(0,r.kt)("strong",{parentName:"p"},"Name"),", enter a name for the insight. This will be used as the Daspire stream name."),(0,r.kt)("p",{parentName:"li"},"ii. (Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Level"),", enter the level of granularity for the data you want to pull from the Facebook Marketing API (",(0,r.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ad"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"adset"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"campaign"),"). Set to ad by default."),(0,r.kt)("p",{parentName:"li"},"iii. (Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Fields"),", use the dropdown list to select the fields you want to pull from the Facebook Marketing API."),(0,r.kt)("p",{parentName:"li"},"iv. (Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Breakdowns"),", use the dropdown list to select the breakdowns you want to configure."),(0,r.kt)("p",{parentName:"li"},"v. (Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Action Breakdowns"),", use the dropdown list to select the action breakdowns you want to configure."),(0,r.kt)("p",{parentName:"li"},"vi. (Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Action Report Time"),", enter the action report time you want to configure. This value determines the timing used to report action statistics. For example, if a user sees an ad on Jan 1st but converts on Jan 2nd, this value will determine how the action is reported."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"impression: Actions are attributed to the time the ad was viewed (Jan 1st)."),(0,r.kt)("li",{parentName:"ul"},"conversion: Actions are attributed to the time the action was taken (Jan 2nd)."),(0,r.kt)("li",{parentName:"ul"},"mixed: Click-through actions are attributed to the time the ad was viewed (Jan 1st), and view-through actions are attributed to the time the action was taken (Jan 2nd)."))),(0,r.kt)("p",{parentName:"li"},"vii. (Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Time Increment"),", you may provide a value in days by which to aggregate statistics. The sync will be chunked into intervals of this size. For example, if you set this value to 7, the sync will be chunked into 7-day intervals. The default value is 1 day."),(0,r.kt)("p",{parentName:"li"},"viii. (Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Start Date"),", enter the date in the YYYY-MM-DDTHH:mm:ssZ format. The data added on and after this date will be replicated. If this field is left blank, Daspire will replicate all data."),(0,r.kt)("p",{parentName:"li"},"ix. (Optional) For ",(0,r.kt)("strong",{parentName:"p"},"End Date"),", enter the date in the YYYY-MM-DDTHH:mm:ssZ format. The data added on and before this date will be replicated. If this field is left blank, Daspire will replicate the latest data."),(0,r.kt)("p",{parentName:"li"},"x. (Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Custom Insights Lookback Window"),", you may set a window in days to revisit data during syncing to capture updated conversion data from the API. Facebook allows for attribution windows of up to 28 days, during which time a conversion can be attributed to an ad. If you have set a custom attribution window in your Facebook account, please set the same value here. Otherwise, you may leave it at the default value of 28. For more information on action attributions, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.facebook.com/business/help/458681590974355?id=768381033531365"},"Meta Help Center"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: Additional data streams for your Facebook Marketing connector are dynamically generated according to the Custom Insights you specify. If you have an existing Facebook Marketing source and you decide to update or remove some of your Custom Insights, you must also adjust the connections that sync to these streams. Specifically, you should either disable these connections or refresh the source schema associated with them to reflect the changes."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Page Size of Requests"),", you can specify the number of records per page for paginated responses. Most users do not need to set this field unless specific issues arise or there are unique use cases that require tuning the connector's settings. The default value is set to retrieve 100 records per page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) For ",(0,r.kt)("strong",{parentName:"p"},"Insights Window Lookback"),", you may set a window in days to revisit data during syncing to capture updated conversion data from the API. Facebook allows for attribution windows of up to 28 days, during which time a conversion can be attributed to an ad. If you have set a custom attribution window in your Facebook account, please set the same value here. Otherwise, you may leave it at the default value of 28. For more information on action attributions, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.facebook.com/business/help/458681590974355?id=768381033531365"},"Meta Help Center"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,r.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,r.kt)("p",null,"This source is capable of syncing the following streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"},"Activities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/ad-accounts"},"AdAccount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/ad-creative#fields"},"AdCreatives")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/ad-campaign#fields"},"AdSets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/adgroup#fields"},"Ads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/adgroup/insights/"},"AdInsights")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-group#fields"},"Campaigns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/custom-conversion"},"CustomConversions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/custom-audience"},"CustomAudiences")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/ad-image"},"Images")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/marketing-api/reference/video"},"Videos"))),(0,r.kt)("p",null,"Daspire also supports the following Prebuilt Facebook Ad Insights Reports:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stream"),(0,r.kt)("th",{parentName:"tr",align:null},"Breakdowns"),(0,r.kt)("th",{parentName:"tr",align:null},"Action Breakdowns"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Action Carousel Card"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_carousel_card_id"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"action_carousel_card_name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Action Conversion Device"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device_platform")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Action Product ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"product_id")),(0,r.kt)("td",{parentName:"tr",align:null},"---")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Action Reaction"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_reaction"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Action Video Sound"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_video_sound"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Action Video Type"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_video_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Action Type"),(0,r.kt)("td",{parentName:"tr",align:null},"---"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Age And Gender"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"age"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"gender")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"action_target_id"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"action_destination"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Delivery Device"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device_platform")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Delivery Platform"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"publisher_platform")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Delivery Platform And Device Platform"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"publisher_platform"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"device_platform")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Demographics Age"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"age")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Demographics Country"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"country")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Demographics DMA Region"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dma")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Demographics Gender"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gender")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights DMA"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dma")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"action_target_id"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"action_destination"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Country"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"country")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"action_target_id"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"action_destination"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Platform And Device"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"publisher_platform"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"platform_position"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"impression_device")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Insights Region"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"region")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action_type"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"action_target_id"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"action_destination"))))),(0,r.kt)("p",null,"You can segment the Ad Insights table into parts based on the following information. Each part will be synced as a separate table if normalization is enabled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Country"),(0,r.kt)("li",{parentName:"ul"},"DMA (Designated Market Area)"),(0,r.kt)("li",{parentName:"ul"},"Gender & Age"),(0,r.kt)("li",{parentName:"ul"},"Platform & Device"),(0,r.kt)("li",{parentName:"ul"},"Region")),(0,r.kt)("p",null,"For more information, see the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/marketing-api/reference/adgroup/insights/"},"Facebook Insights API documentation"),"."),(0,r.kt)("h2",{id:"facebook-marketing-attribution-reporting"},"Facebook Marketing Attribution Reporting"),(0,r.kt)("p",null,"The Facebook Marketing connector uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"lookback_window")," parameter to repeatedly read data from the last ",(0,r.kt)("inlineCode",{parentName:"p"},"<lookback_window>")," days during an Incremental sync. This means some data will be synced twice (or possibly more often) despite the cursor value being up to date, in order to capture updated ads conversion data from Facebook. You can change this date window by adjusting the ",(0,r.kt)("inlineCode",{parentName:"p"},"lookback_window")," parameter when setting up the source, up to a maximum of 28 days. Smaller values will result in fewer duplicates, while larger values provide more accurate results. For a deeper understanding of the purpose and role of the attribution window, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.facebook.com/business/help/458681590974355?id=768381033531365"},"this Meta article"),"."),(0,r.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))}m.isMDXComponent=!0},2276:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/facebook-app-type-515d917a84c62a62b2927c8479cff5c5.jpg"},7198:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/facebook-app-usecase-af328ee3269a697408dbecb708c4890c.jpg"},9391:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/facebook-create-app-1be361f89689fd16a8c5dd4f4f0587e3.jpg"},7662:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/facebook-marketing-api-token-6bdaf2d120ddfd950b166b30c8cf903a.jpg"},9748:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/facebook-marketing-api-tools-bf958028b35096e393722f75b909a005.jpg"},3084:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/facebook-marketing-api-cc68f22009a338e1f2970a2d7b625f3e.jpg"}}]);
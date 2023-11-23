"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[74],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const n={},i="Google Analytics 4 (GA4)",p={unversionedId:"setup-guide/sources/google-analytics",id:"setup-guide/sources/google-analytics",title:"Google Analytics 4 (GA4)",description:"This page contains the setup guide and reference information for Google Analytics 4 (GA4).",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/setup-guide/sources/google-analytics.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/google-analytics",permalink:"/zh/setup-guide/sources/google-analytics",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Ads",permalink:"/zh/setup-guide/sources/google-ads"},next:{title:"MySQL",permalink:"/zh/setup-guide/sources/mysql"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Features",id:"features",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Create a GA4 Service Account for authentication",id:"step-1-create-a-ga4-service-account-for-authentication",level:3},{value:"Step 2: Enable the Google Analytics APIs",id:"step-2-enable-the-google-analytics-apis",level:3},{value:"Step 3: Obtain your GA4 property id",id:"step-3-obtain-your-ga4-property-id",level:3},{value:"Step 4: Set up GA4 in Daspire",id:"step-4-set-up-ga4-in-daspire",level:3},{value:"Supported streams",id:"supported-streams",level:2},{value:"Integration-specific features",id:"integration-specific-features",level:2},{value:"Custom Reports",id:"custom-reports",level:3},{value:"Data Sampling and Data Request Intervals",id:"data-sampling-and-data-request-intervals",level:3},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-analytics-4-ga4"},"Google Analytics 4 (GA4)"),(0,o.kt)("p",null,"This page contains the setup guide and reference information for Google Analytics 4 (GA4)."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Google Analytics account with access to the GA4 property you want to sync"),(0,o.kt)("li",{parentName:"ul"},"Google Service Account JSON Key"),(0,o.kt)("li",{parentName:"ul"},"Google Analytics Property ID")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Incremental Sync"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,o.kt)("h3",{id:"step-1-create-a-ga4-service-account-for-authentication"},"Step 1: Create a GA4 Service Account for authentication"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign in to the Google Account you are using for GA as an admin.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.developers.google.com/iam-admin/serviceaccounts"},"Service Accounts")," page in the Google Developers console.\n",(0,o.kt)("img",{alt:"GA4 Service Accounts",src:a(6184).Z,title:"GA4 Service Accounts",width:"1026",height:"480"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the project you want to use (or create a new one).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"+ Create Service Account")," at the top of the page.\n",(0,o.kt)("img",{alt:"GA4 Create Service Account",src:a(319).Z,title:"GA4 Create Service Account",width:"1026",height:"480"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a name for the service account, and click ",(0,o.kt)("strong",{parentName:"p"},"Create and Continue"),".\n",(0,o.kt)("img",{alt:"GA4 Service Account Details",src:a(284).Z,title:"GA4 Service Account Details",width:"1026",height:"480"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the role for the service account. We recommend the ",(0,o.kt)("strong",{parentName:"p"},"Viewer role (Read & Analyze permissions)"),". Click Continue. And then click Done.\n",(0,o.kt)("img",{alt:"GA4 Service Account Role",src:a(492).Z,title:"GA4 Service Account Role",width:"1026",height:"480"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your new service account from the list, and open the Keys tab. Click ",(0,o.kt)("strong",{parentName:"p"},"Keys")," > ",(0,o.kt)("strong",{parentName:"p"},"Add Key"),".\n",(0,o.kt)("img",{alt:"GA4 Service Account Add Key",src:a(6838).Z,title:"GA4 Service Account Add Key",width:"1026",height:"480"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"JSON")," as the Key type. Then click Create. This will generate and download the JSON key file that you'll use for authentication."))),(0,o.kt)("h3",{id:"step-2-enable-the-google-analytics-apis"},"Step 2: Enable the Google Analytics APIs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/api/analyticsreporting.googleapis.com/overview"},"Google Analytics Reporting API dashboard"),". Make sure you have selected the associated project for your service account, and ",(0,o.kt)("strong",{parentName:"p"},"Enable")," the API. You can also set quotas and check usage.\n",(0,o.kt)("img",{alt:"GA4 Reporting API",src:a(1598).Z,title:"GA4 Reporting API",width:"1026",height:"500"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/api/analytics.googleapis.com/overview"},"Google Analytics API dashboard"),". Make sure you have selected the associated project for your service account, and ",(0,o.kt)("strong",{parentName:"p"},"Enable")," the API.\n",(0,o.kt)("img",{alt:"GA4 API",src:a(7233).Z,title:"GA4 API",width:"1026",height:"500"})))),(0,o.kt)("h3",{id:"step-3-obtain-your-ga4-property-id"},"Step 3: Obtain your GA4 property id"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign in to the ",(0,o.kt)("a",{parentName:"p",href:"https://analytics.google.com/"},"Google Analytics account")," as an admin.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the left sidebar, click ",(0,o.kt)("strong",{parentName:"p"},"Admin"),".\n",(0,o.kt)("img",{alt:"GA4 Admin",src:a(2828).Z,title:"GA4 Admin",width:"1026",height:"556"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Property"),".\n",(0,o.kt)("img",{alt:"GA4 Property",src:a(4453).Z,title:"GA4 Property",width:"1026",height:"555"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Property details")," and you will find your ",(0,o.kt)("strong",{parentName:"p"},"Property ID")," on the top right corner. This ID should be a numeric value, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"123456789"),". Copy it for later use.\n",(0,o.kt)("img",{alt:"GA4 Property ID",src:a(1917).Z,title:"GA4 Property ID",width:"1026",height:"541"})))),(0,o.kt)("h3",{id:"step-4-set-up-ga4-in-daspire"},"Step 4: Set up GA4 in Daspire"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Google Analytics 4 (GA4)")," from the Source list.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Service Account Key Authenication")," dropdown list and enter ",(0,o.kt)("strong",{parentName:"p"},"Service Account JSON Key")," you obtained from Step 1.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the ",(0,o.kt)("strong",{parentName:"p"},"GA4 Property ID")," you obtained from Step 3.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) In the ",(0,o.kt)("strong",{parentName:"p"},"Start Date")," field, enter a date in the format ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),". All data added from this date onward will be replicated. Note that this setting is not applied to custom Cohort reports."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Note: If the start date is not provided, the default value will be used, which is two years from the initial sync."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) In the ",(0,o.kt)("strong",{parentName:"p"},"Custom Reports")," field, you may optionally provide a JSON array describing any custom reports you want to sync from GA4. See the Custom Reports section below for more information on formulating these reports.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) In the ",(0,o.kt)("strong",{parentName:"p"},"Data Request Interval (Days)")," field, you can specify the interval in days (ranging from 1 to 364) used when requesting data from the Google Analytics API. The bigger this value is, the faster the sync will be, but the more likely that sampling will be applied to your data, potentially causing inaccuracies in the returned results. We recommend setting this to 1 unless you have a hard requirement to make the sync faster at the expense of accuracy. This field does not apply to custom Cohort reports. See the Data Sampling section below for more context on this field.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,o.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,o.kt)("p",null,"This source is capable of syncing the following streams:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"daily_active_users")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"devices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"four_weekly_active_users")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"locations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"traffic_sources")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"website_overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"weekly_active_users")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"user_acquisition_first_user_medium_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"user_acquisition_first_user_source_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"user_acquisition_first_user_source_medium_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"user_acquisition_first_user_source_platform_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"user_acquisition_first_user_campaign_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"user_acquisition_first_user_google_ads_ad_network_type_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"user_acquisition_first_user_google_ads_ad_group_name_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"traffic_acquisition_session_source_medium_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"traffic_acquisition_session_medium_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"traffic_acquisition_session_source_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"traffic_acquisition_session_campaign_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"traffic_acquisition_session_default_channel_grouping_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"traffic_acquisition_session_source_platform_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"events_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"weekly_events_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"conversions_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"pages_title_and_screen_class_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"pages_path_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"pages_title_and_screen_name_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"content_group_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"ecommerce_purchases_item_name_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"ecommerce_purchases_item_id_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"ecommerce_purchases_item_category_report_combined")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"ecommerce_purchases_item_category_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"ecommerce_purchases_item_category_2_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"ecommerce_purchases_item_category_3_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"ecommerce_purchases_item_category_4_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"ecommerce_purchases_item_category_5_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"ecommerce_purchases_item_brand_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"publisher_ads_ad_unit_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"publisher_ads_page_path_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"publisher_ads_ad_format_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"publisher_ads_ad_source_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"demographic_country_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"demographic_region_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"demographic_city_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"demographic_language_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"demographic_age_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"demographic_gender_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"demographic_interest_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"tech_browser_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"tech_device_category_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"tech_device_model_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"tech_screen_resolution_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"tech_app_version_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"tech_platform_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"tech_platform_device_category_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"tech_operating_system_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"tech_os_with_version_report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"Custom stream(s)"))),(0,o.kt)("h2",{id:"integration-specific-features"},"Integration-specific features"),(0,o.kt)("h3",{id:"custom-reports"},"Custom Reports"),(0,o.kt)("p",null,"Custom reports in GA4 allow for flexibility in querying specific data tailored to your needs. You can define the following components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name:")," The name of the custom report."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dimensions:")," An array of categories for data, such as city, user type, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Metrics:")," An array of quantitative measurements, such as active users, page views, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CohortSpec:")," (Optional) An object containing specific cohort analysis settings, such as cohort size and date range. More information on this object can be found in the ",(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/CohortSpec"},"GA4 documentation"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pivots:")," (Optional) An array of pivot tables for data, such as page views by city, etc. More information on pivots can be found in the ",(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/Pivot"},"GA4 documentation"),".")),(0,o.kt)("p",null,"A full list of dimensions and metrics supported in the API can be found ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema"},"here"),". To ensure your dimensions and metrics are compatible for your GA4 property, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://ga-dev-tools.google/ga4/dimensions-metrics-explorer/"},"GA4 Dimensions & Metrics Explorer"),"."),(0,o.kt)("p",null,"Custom reports should be constructed as an array of JSON objects in the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n  {\n    "name": "<report-name>",\n    "dimensions": ["<dimension-name>", ...],\n    "metrics": ["<metric-name>", ...],\n    "cohortSpec": {/* cohortSpec object */},\n    "pivots": [{/* pivot object */}, ...]\n  }\n]\n')),(0,o.kt)("p",null,"The following is an example of a basic User Engagement report to track sessions and bounce rate, segmented by city:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n  {\n    "name": "User Engagement Report",\n    "dimensions": ["city"],\n    "metrics": ["sessions", "bounceRate"]\n  }\n]\n')),(0,o.kt)("p",null,"By specifying a cohort with a 7-day range and pivoting on the city dimension, the report can be further tailored to offer a detailed view of engagement trends within the top 50 cities for the specified date range."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n  {\n    "name": "User Engagement Report",\n    "dimensions": ["city"],\n    "metrics": ["sessions", "bounceRate"],\n    "cohortSpec": {\n      "cohorts": [\n        {\n          "name": "Last 7 Days",\n          "dateRange": {\n            "startDate": "2023-07-27",\n            "endDate": "2023-08-03"\n          }\n        }\n      ],\n      "cohortReportSettings": {\n        "accumulate": true\n      }\n    },\n    "pivots": [\n      {\n        "fieldNames": ["city"],\n        "limit": 50,\n        "metricAggregations": ["TOTAL"]\n      }\n    ]\n  }\n]\n')),(0,o.kt)("h3",{id:"data-sampling-and-data-request-intervals"},"Data Sampling and Data Request Intervals"),(0,o.kt)("p",null,"Data sampling in GA4 refers to the process of estimating analytics data when the amount of data in an account exceeds Google's predefined compute thresholds. To mitigate the chances of data sampling being applied to the results, the Data Request Interval field allows users to specify the interval used when requesting data from the Google Analytics API."),(0,o.kt)("p",null,"By setting the interval to 1 day, users can reduce the data processed per request, minimizing the likelihood of data sampling and ensuring more accurate results. While larger time intervals (up to 364 days) can speed up the sync, we recommend choosing a smaller value to prioritize data accuracy unless there is a specific need for faster synchronization at the expense of some potential inaccuracies. Please note that this field does not apply to custom Cohort reports."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/topic/13384306?sjid=2450288706152247916-NA"},"Google Analytics documentation")," for more information on data sampling."),(0,o.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"array"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"object"))))),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Google Analytics integration is subject to Google Analytics Data API quotas. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/quotas"},"Google's documentation")," for specific breakdowns on these quotas.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))))}d.isMDXComponent=!0},2828:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ga4-admin-cd5c8898dea97a2dfed270d3f36efbff.jpg"},7233:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ga4-api-d04416a3d683e89d7f63d5f3ac4bddc2.jpg"},319:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ga4-create-service-account-4aced925c9cab9aac78ff2b7ee5d847f.jpg"},1917:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ga4-property-id-c8f64e33ea47aeca5aa03744f74d60cd.jpg"},4453:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ga4-property-246b3503099f43082396f4b3b2d041e6.jpg"},1598:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ga4-reporting-api-7da941a49cf460f762b0c350b0f228a7.jpg"},6838:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ga4-service-account-add-key-54957cfee440d6931f36b963b8150f77.jpg"},284:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ga4-service-account-details-fae73275055d30ef266243f8fa3b9738.jpg"},492:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ga4-service-account-role-dfb4d806fe9c6817a364090b28bb62c5.jpg"},6184:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ga4-service-accounts-28b57f1ed9c7ec57fce0da800c207917.jpg"}}]);
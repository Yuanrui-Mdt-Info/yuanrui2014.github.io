"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7722],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(a),c=n,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(h,l(l({ref:e},d),{},{components:a})):r.createElement(h,l({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49824:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},l="Amplitude",o={unversionedId:"integrations/sources/amplitude",id:"integrations/sources/amplitude",title:"Amplitude",description:"This page guides you through setting up the Amplitude source connector to sync data for the Amplitude API.",source:"@site/../docs/integrations/sources/amplitude.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/amplitude",permalink:"/integrations/sources/amplitude",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/amplitude.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Amazon SQS",permalink:"/integrations/sources/amazon-sqs"},next:{title:"Apify Dataset",permalink:"/integrations/sources/apify-dataset"}},p={},s=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Set up the Amplitude source connector",id:"set-up-the-amplitude-source-connector",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:s};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"amplitude"},"Amplitude"),(0,n.kt)("p",null,"This page guides you through setting up the Amplitude source connector to sync data for the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.amplitude.com/docs/http-api-v2"},"Amplitude API"),"."),(0,n.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,n.kt)("p",null,"To set up the Amplitude source connector, you'll need your Amplitude ",(0,n.kt)("a",{parentName:"p",href:"https://help.amplitude.com/hc/en-us/articles/360058073772-Create-and-manage-organizations-and-projects#view-and-edit-your-project-information"},(0,n.kt)("inlineCode",{parentName:"a"},"API Key")," and ",(0,n.kt)("inlineCode",{parentName:"a"},"Secret Key")),"."),(0,n.kt)("h2",{id:"set-up-the-amplitude-source-connector"},"Set up the Amplitude source connector"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into your ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Airbyte Cloud")," or Airbyte Open Source account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),". "),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Amplitude")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter a name for your source."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"API Key")," and ",(0,n.kt)("strong",{parentName:"li"},"Secret Key"),", enter the Amplitude ",(0,n.kt)("a",{parentName:"li",href:"https://help.amplitude.com/hc/en-us/articles/360058073772-Create-and-manage-organizations-and-projects#view-and-edit-your-project-information"},"API key and secret key"),"."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Replication Start Date"),", enter the date in YYYY-MM-DDTHH:mm:ssZ format. The data added on and after this date will be replicated. If this field is blank, Airbyte will replicate all data."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"The Amplitude source connector supports the following streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.amplitude.com/docs/dashboard-rest-api#active-and-new-user-counts"},"Active Users Counts")," ","(","Incremental sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.amplitude.com/docs/chart-annotations-api#get-all-annotations"},"Annotations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.amplitude.com/docs/dashboard-rest-api#average-session-length"},"Average Session Length")," ","(","Incremental sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.amplitude.com/docs/behavioral-cohorts-api#listing-all-cohorts"},"Cohorts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.amplitude.com/docs/export-api#export-api---export-your-projects-event-data"},"Events")," ","(","Incremental sync",")")),(0,n.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Amplitude source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full Refresh"),(0,n.kt)("li",{parentName:"ul"},"Incremental")),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The Amplitude connector ideally should gracefully handle Amplitude API limitations under normal usage. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"Create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16185"},"16185")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Re-release on new ",(0,n.kt)("inlineCode",{parentName:"td"},"airbyte_cdk==0.1.81"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15506"},"15506")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Changed slice day window to 1, instead of 3 for Events stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14924"},"14924")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove ",(0,n.kt)("inlineCode",{parentName:"td"},"additionalProperties")," field from spec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13846"},"13846")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Try-catch the BadZipFile error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13638"},"13638")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed an infinite loop when fetching Amplitude data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13373"},"13373")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed the issue when JSON Validator produces errors on ",(0,n.kt)("inlineCode",{parentName:"td"},"date-time")," check")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13074"},"13074")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Removed time offset for ",(0,n.kt)("inlineCode",{parentName:"td"},"Events")," stream, which caused a lot of duplicated records")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12500"},"12500")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve input configuration copy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12430"},"12430")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added HTTP error descriptions and fixed ",(0,n.kt)("inlineCode",{parentName:"td"},"Events")," stream fail caused by ",(0,n.kt)("inlineCode",{parentName:"td"},"404")," HTTP Error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8434"},"8434")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update fields in source-connectors specifications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6375"},"6375")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Log Transient 404 Error in Events stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6353"},"6353")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Correct output schemas on cohorts, events, active","_","users, and average","_","session","_","lengths streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"3973")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add AIRBYTE","_","ENTRYPOINT for kubernetes support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3664"},"3664")),(0,n.kt)("td",{parentName:"tr",align:"left"},"New Source: Amplitude")))))}m.isMDXComponent=!0}}]);
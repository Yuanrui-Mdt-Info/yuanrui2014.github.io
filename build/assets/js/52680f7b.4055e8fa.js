"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[478],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,k=d["".concat(i,".").concat(u)]||d[u]||c[u]||p;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<p;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4215:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const p={},l="Amazon Seller Partner",o={unversionedId:"setup-guide/sources/amazon-seller-partner",id:"setup-guide/sources/amazon-seller-partner",title:"Amazon Seller Partner",description:"This page contains the setup guide and reference information for Amazon Seller Partner (SP).",source:"@site/docs/setup-guide/sources/amazon-seller-partner.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/amazon-seller-partner",permalink:"/setup-guide/sources/amazon-seller-partner",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon Ads",permalink:"/setup-guide/sources/amazon-ads"},next:{title:"BigCommerce",permalink:"/setup-guide/sources/bigcommerce"}},i={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported streams",id:"supported-streams",level:2},{value:"Report options",id:"report-options",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"amazon-seller-partner"},"Amazon Seller Partner"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for Amazon Seller Partner (SP)."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Store Name"),(0,n.kt)("li",{parentName:"ul"},"Amazon SP Account"),(0,n.kt)("li",{parentName:"ul"},"Region")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Amazon Seller Partner")," from the Source list.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your Amazon ",(0,n.kt)("strong",{parentName:"p"},"Store Name"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Authenticate your Amazon Seller Partner Account"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Max wait time for reports (in seconds)")," is the maximum number of minutes the connector waits for the generation of a report for streams.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Period In Days")," will be used for stream slicing for initial full_refresh sync when no updated state is present for reports that support sliced incremental sync. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select your the ",(0,n.kt)("strong",{parentName:"p"},"Region")," of your store."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Marketplace availability:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"North America: United States (US), Canada (CA), Mexico (MX)"),(0,n.kt)("li",{parentName:"ul"},"Europe: Belgium (BE), Germany (DE), Spain (ES), France (FR), Italy (IT), United Kingdom (UK), Netherlands (NL), Sweden (SE), Poland (PL), Turkey (TR)"),(0,n.kt)("li",{parentName:"ul"},"Middle East: United Arab Emirates (AE), Saudi Arabia (SA), Egypt (EG)"),(0,n.kt)("li",{parentName:"ul"},"Asia Pacific: Japan (JP), India (IN), Australia (AU), Singapore (SG)")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"End Date (optional)")," - any data after this date will not be replicated.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Start Date")," - Any data before this date will not be replicated.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Report Options")," is additional information passed to reports. Must be a valid json string.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Amazon SP data source supports the following sync modes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full Refresh"),(0,n.kt)("li",{parentName:"ul"},"Incremental")),(0,n.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,n.kt)("p",null,"This source is capable of syncing the following streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/200740930"},"FBA Inventory Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=200989110"},"FBA Orders Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=200989100"},"FBA Shipments Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/200453300"},"FBA Replacements Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/G202086720"},"FBA Storage Fees Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/202105670"},"Restock Inventory Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Open Listings Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Orders Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Orders Reports By Last Update")," (incremental)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Amazon-Fulfilled Shipments Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Merchant Listings Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-v1-reference"},"Vendor Direct Fulfillment Shipping")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Vendor Inventory Health Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/orders-api-v0-reference"},"Orders")," (incremental)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Seller Feedback Report")," (incremental)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Alternate Purchase Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Item Comparison Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Market Basket Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Repeat Purchase Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Search Terms Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#browse-tree-report"},"Browse tree report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialeventgroups"},"Financial Event Groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialevents"},"Financial Events"))),(0,n.kt)("h2",{id:"report-options"},"Report options"),(0,n.kt)("p",null,"Make sure to configure the ",(0,n.kt)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values"},"required parameters")," in the report options setting for the reports configured."),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"float"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"date")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"date"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"datetime")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"datetime"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))))}c.isMDXComponent=!0}}]);
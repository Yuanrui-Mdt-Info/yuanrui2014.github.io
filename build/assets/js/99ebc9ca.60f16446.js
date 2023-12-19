"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[3598],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(k,p(p({ref:t},u),{},{components:a})):n.createElement(k,p({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5989:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={},p="QuickBooks",o={unversionedId:"setup-guide/sources/quickbooks",id:"setup-guide/sources/quickbooks",title:"QuickBooks",description:"This page contains the setup guide and reference information for QuickBooks.",source:"@site/docs/setup-guide/sources/quickbooks.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/quickbooks",permalink:"/setup-guide/sources/quickbooks",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plaid",permalink:"/setup-guide/sources/plaid"},next:{title:"Salesforce",permalink:"/setup-guide/sources/salesforce"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Features",id:"features",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Create a QuickBooks Application",id:"step-1-create-a-quickbooks-application",level:3},{value:"Step 2: Obtain QuickBooks credentials",id:"step-2-obtain-quickbooks-credentials",level:3},{value:"Step 3: Set up QuickBooks in Daspire",id:"step-3-set-up-quickbooks-in-daspire",level:3},{value:"Supported streams",id:"supported-streams",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickbooks"},"QuickBooks"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for QuickBooks."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Intuit Developer account"),(0,r.kt)("li",{parentName:"ul"},"OAuth2.0 credentials (Client ID, Client secret, Refresh token, Access token, Token expiry date, Realm id)")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h3",{id:"step-1-create-a-quickbooks-application"},"Step 1: Create a QuickBooks Application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.intuit.com/app/developer/qbo/docs/get-started"},"Intuit Developer account"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit your ",(0,r.kt)("a",{parentName:"p",href:"https://developer.intuit.com/app/developer/dashboard"},"Intuit Developer Dashboard"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create an application"),", give your app a name, and select the scopes of the APIs you would like to access."))),(0,r.kt)("h3",{id:"step-2-obtain-quickbooks-credentials"},"Step 2: Obtain QuickBooks credentials"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The easiest way to get these credentials is by using ",(0,r.kt)("a",{parentName:"p",href:"https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0-playground"},"Quickbook's OAuth 2.0 playground"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Select app")," dropdown, select one of your ",(0,r.kt)("strong",{parentName:"p"},"sandbox")," companies. Copy your ",(0,r.kt)("strong",{parentName:"p"},"Client Id")," and ",(0,r.kt)("strong",{parentName:"p"},"Client Secret"),". You will use them when creating the source in Daspire.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Scopes")," section, select one or more scopes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Get authorization code"),". If asked, select Connect to connect your app to the OAuth Playground.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review and copy the auto-generated ",(0,r.kt)("strong",{parentName:"p"},"Authorization code")," and ",(0,r.kt)("strong",{parentName:"p"},"Realm ID"),". The authorization code is based on your app\u2019s scopes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Get tokens"),". Copy the ",(0,r.kt)("strong",{parentName:"p"},"Access Token"),", ",(0,r.kt)("strong",{parentName:"p"},"Refresh Token"),", and ",(0,r.kt)("strong",{parentName:"p"},"Realm ID"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the sample request and response."))),(0,r.kt)("h3",{id:"step-3-set-up-quickbooks-in-daspire"},"Step 3: Set up QuickBooks in Daspire"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"QuickBooks")," from the Source list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a ",(0,r.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("strong",{parentName:"p"},"Client ID")," - The OAuth2.0 application ID you obtained in Step 2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("strong",{parentName:"p"},"Client Secret")," - The OAuth2.0 application secret you obtained in Step 2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("strong",{parentName:"p"},"Refresh Token")," you obtained in Step 2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("strong",{parentName:"p"},"Access Token")," you obtained in Step 2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("strong",{parentName:"p"},"Token Expiry Date")," - DateTime when the access token becomes invalid.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("strong",{parentName:"p"},"Realm ID")," - The Labeled Company ID you'd like to replicate data for streams you obtained in Step 2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("strong",{parentName:"p"},"Start date")," - The date starting from which you'd like to replicate data.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sandbox")," - Turn on if you're going to replicate the data from the sandbox environment.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,r.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,r.kt)("p",null,"This source is capable of syncing the following streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"},"Accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/billpayment"},"BillPayments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/budget"},"Budgets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/bill"},"Bills")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/class"},"Classes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/creditmemo"},"CreditMemos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer"},"Customers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/department"},"Departments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/deposit"},"Deposits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/employee"},"Employees")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/estimate"},"Estimates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/invoice"},"Invoices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/item"},"Items")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/journalentry"},"JournalEntries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/payment"},"Payments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/paymentmethod"},"PaymentMethods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchase"},"Purchases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder"},"PurchaseOrders")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/refundreceipt"},"RefundReceipts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt"},"SalesReceipts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/taxagency"},"TaxAgencies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/taxcode"},"TaxCodes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/taxrate"},"TaxRates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/term"},"Terms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/timeactivity"},"TimeActivities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/transfer"},"Transfers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/vendorcredit"},"VendorCredits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/vendor"},"Vendors"))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))}c.isMDXComponent=!0}}]);
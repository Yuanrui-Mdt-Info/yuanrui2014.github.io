"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[964],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=s(r),d=n,c=k["".concat(o,".").concat(d)]||k[d]||u[d]||p;return r?a.createElement(c,l(l({ref:t},m),{},{components:r})):a.createElement(c,l({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<p;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const p={},l="Shopify",i={unversionedId:"setup-guide/sources/shopify",id:"setup-guide/sources/shopify",title:"Shopify",description:"\u6b64\u9875\u9762\u5305\u542bShopify\u7684\u8bbe\u7f6e\u6307\u5357\u548c\u53c2\u8003\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/setup-guide/sources/shopify.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/shopify",permalink:"/zh/setup-guide/sources/shopify",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NetSuite",permalink:"/zh/setup-guide/sources/netsuite"},next:{title:"\u6c83\u5c14\u739b\u5546\u57ce\uff08Walmart Marketplace\uff09",permalink:"/zh/setup-guide/sources/walmart-marketplace"}},o={},s=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bbe\u7f6e\u6307\u5357",id:"\u8bbe\u7f6e\u6307\u5357",level:2},{value:"\u4f7f\u7528API\u5bc6\u7801\u8bbe\u7f6e",id:"\u4f7f\u7528api\u5bc6\u7801\u8bbe\u7f6e",level:3},{value:"\u5728Daspire\u4e2d\u8bbe\u7f6eShopify",id:"\u5728daspire\u4e2d\u8bbe\u7f6eshopify",level:3},{value:"\u652f\u6301\u7684\u6570\u636e\u6d41",id:"\u652f\u6301\u7684\u6570\u636e\u6d41",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u6027\u80fd\u8003\u8651",id:"\u6027\u80fd\u8003\u8651",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"shopify"},"Shopify"),(0,n.kt)("p",null,"\u6b64\u9875\u9762\u5305\u542bShopify\u7684\u8bbe\u7f6e\u6307\u5357\u548c\u53c2\u8003\u4fe1\u606f\u3002"),(0,n.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u60a8\u7684Shopify\u5546\u5e97\u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},"Shopify\u767b\u5f55\u4fe1\u606f\u6216API\u5bc6\u7801")),(0,n.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u5237\u65b0\u540c\u6b65"),(0,n.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u589e\u91cf\u540c\u6b65 - \u8ffd\u52a0\u540c\u6b65"),(0,n.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")))),(0,n.kt)("p",null,"Shopify\u6570\u636e\u6e90\u652f\u6301",(0,n.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u5237\u65b0\u590d\u5236"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u589e\u91cf\u590d\u5236"),"\u540c\u6b65\u3002\u6bcf\u6b21\u8fd0\u884c\u540c\u6b65\u65f6\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u4ec5\u590d\u5236\u65b0\u6570\u636e\u6216\u66f4\u65b0\u6570\u636e\uff0c\u6216\u60a8\u4e3a\u590d\u5236\u8bbe\u7f6e\u7684\u8868\u548c\u5217\u4e2d\u7684\u6240\u6709\u884c\u3002"),(0,n.kt)("p",null,"Daspire\u53ef\u4ee5\u4e3a",(0,n.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/api/reference"},"Shopify API")," \u540c\u6b65\u6570\u636e\u3002"),(0,n.kt)("h2",{id:"\u8bbe\u7f6e\u6307\u5357"},"\u8bbe\u7f6e\u6307\u5357"),(0,n.kt)("h3",{id:"\u4f7f\u7528api\u5bc6\u7801\u8bbe\u7f6e"},"\u4f7f\u7528API\u5bc6\u7801\u8bbe\u7f6e"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80",(0,n.kt)("a",{parentName:"p",href:"https://YOURSTORE.myshopify.com/admin/apps/private"},"https://YOURSTORE.myshopify.com/admin/apps/private"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u672a\u542f\u7528\uff0c\u5219\u542f\u7528\u79c1\u6709\u5f00\u53d1\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u79c1\u6709\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u60a8\u8981\u5141\u8bb8\u8bbf\u95ee\u7684\u8d44\u6e90\u3002Daspire\u53ea\u9700\u8981\u8bfb\u53d6\u7ea7\u522b\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u7528\u6237\u754c\u9762\u5c06\u663e\u793a\u6240\u6709\u53ef\u80fd\u7684\u6570\u636e\u6e90\uff0c\u5982\u679c\u5b83\u6ca1\u6709\u8bbf\u95ee\u8d44\u6e90\u7684\u6743\u9650\uff0c\u5219\u4f1a\u5728\u540c\u6b65\u65f6\u663e\u793a\u9519\u8bef\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Admin API\u90e8\u5206\u4e0b\u7684\u5bc6\u7801\u662f\u60a8\u5c06\u7528\u4f5c\u96c6\u6210\u7684api","_","password\u7684\u5bc6\u7801\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u60a8\u5df2\u51c6\u5907\u597d\u5728Daspire\u4e2d\u8bbe\u7f6eShopify\uff01"))),(0,n.kt)("h3",{id:"\u5728daspire\u4e2d\u8bbe\u7f6eshopify"},"\u5728Daspire\u4e2d\u8bbe\u7f6eShopify"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4ece\u6570\u636e\u6e90\u5217\u8868\u4e2d\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"p"},"Shopify"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165\u4e00\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u6e90\u540d\u79f0"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165\u60a8\u7684Shopify",(0,n.kt)("strong",{parentName:"p"},"\u5e97\u94fa\u540d\u79f0"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528OAuth 2.0\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1\u60a8\u7684Shopify\u5e10\u6237"),"\uff0c\u6216\u4f7f\u7528API\u5bc6\u7801\uff0c\u8f93\u5165\u60a8\u7684",(0,n.kt)("strong",{parentName:"p"},"API\u5bc6\u7801"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165",(0,n.kt)("strong",{parentName:"p"},"\u590d\u5236\u5f00\u59cb\u65e5\u671f")," - \u60a8\u5e0c\u671b\u590d\u5236\u6570\u636e\u7684\u5f00\u59cb\u65e5\u671f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u6570\u636e\u6e90"),"\u3002"))),(0,n.kt)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6d41"},"\u652f\u6301\u7684\u6570\u636e\u6d41"),(0,n.kt)("p",null,"\u6b64\u6570\u636e\u6e90\u80fd\u591f\u540c\u6b65\u4ee5\u4e0b\u6570\u636e\u6d41\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/abandoned_checkouts"},"\u653e\u5f03\u7ed3\u5e10\uff08Abandoned Checkouts\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products/collect"},"\u7cfb\u5217\uff08Collects\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products/customcollection"},"\u81ea\u5b9a\u4e49\u7cfb\u5217\uff08Custom Collections\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/customers"},"\u5ba2\u6237\uff08Customers\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/draftorder"},"\u8ba2\u5355\u8349\u7a3f\uff08Draft Orders\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode"},"\u6298\u6263\u7801\uff08Discount Codes\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/metafield"},"\u5143\u5b57\u6bb5\uff08Metafields\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/order"},"\u8ba2\u5355\uff08Orders\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin/rest/reference/orders/refund"},"\u8ba2\u5355\u9000\u6b3e\uff08Orders Refunds\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin/rest/reference/orders/order-risk"},"\u8ba2\u5355\u98ce\u9669\uff08Orders Risks\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products"},"\u4ea7\u54c1\uff08Products\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/transaction"},"\u4ea4\u6613\uff08Transactions\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/transactions"},"\u4f59\u989d\u4ea4\u6613\uff08Balance Transactions\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/online-store/page"},"\u9875\u9762\uff08Pages\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/discounts/pricerule"},"\u4ef7\u683c\u89c4\u5219\uff08Price Rules\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/location"},"\u4f4d\u7f6e\uff08Locations\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/inventoryItem"},"\u5e93\u5b58\u9879\u76ee\uff08InventoryItems\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/inventorylevel"},"\u5e93\u5b58\u6c34\u5e73\uff08InventoryLevels\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/fulfillmentorder"},"\u914d\u9001\u8ba2\u5355\uff08Fulfillment Orders\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/fulfillment"},"\u914d\u9001\uff08Fulfillments\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/shop"},"\u5e97\u94fa\uff08Shop\uff09"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,n.kt)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u66f4\u597d\u7684\u589e\u91cf\u590d\u5236\u4f53\u9a8c\uff0c\u5efa\u8bae\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8ba2\u5355\u9000\u6b3e\u3001\u8ba2\u5355\u98ce\u9669\u3001\u4ea4\u6613\u5e94\u4e0e\u8ba2\u5355\u6d41\u540c\u6b65\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6298\u6263\u4ee3\u7801\u5e94\u4e0e\u4ef7\u683c\u89c4\u5219\u6d41\u540c\u6b65\u3002"))),(0,n.kt)("p",null,"\u5982\u679c\u5b50\u6d41\u5355\u72ec\u4ece\u7236\u6d41\u540c\u6b65 - \u5c06\u8fdb\u884c\u5b8c\u5168\u540c\u6b65\uff0c\u7136\u540e\u8fc7\u6ee4\u6389\u8bb0\u5f55\u3002"),(0,n.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u96c6\u6210\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"Daspire\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,n.kt)("h2",{id:"\u6027\u80fd\u8003\u8651"},"\u6027\u80fd\u8003\u8651"),(0,n.kt)("p",null,"Shopify\u6709\u4e00\u4e9b",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/concepts/about-apis/rate-limits"},"\u901f\u7387\u9650\u5236"),"\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e0d\u5e94\u8be5\u5b58\u5728\u8282\u6d41\u6216\u8d85\u8fc7\u901f\u7387\u9650\u5236\u7684\u95ee\u9898\uff0c\u4f46\u5728\u67d0\u4e9b\u6781\u7aef\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u4f1a\u6536\u5230\u5982\u4e0b\u8b66\u544a\u6d88\u606f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Caught retryable error '<some_error> or null' after <some_number> tries. Waiting <some_number> seconds then retrying...\"\n")),(0,n.kt)("p",null,"\u5f53\u6570\u636e\u6e90\u547d\u4e2d429 - \u8d85\u51fa\u901f\u7387\u9650\u5236HTTP\u9519\u8bef\u65f6\uff0c\u8fd9\u662f\u9884\u671f\u4e2d\u7684\u3002\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u9519\u8bef\u6d88\u606f\uff0c\u540c\u6b65\u64cd\u4f5c\u4ecd\u5728\u7ee7\u7eed\uff0c\u4f46\u9700\u8981\u66f4\u591a\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\u3002"))}u.isMDXComponent=!0}}]);
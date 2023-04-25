"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[964],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=s(a),d=n,h=k["".concat(o,".").concat(d)]||k[d]||c[d]||p;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<p;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3904:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const p={},i="Shopify",l={unversionedId:"setup-guide/sources/shopify",id:"setup-guide/sources/shopify",title:"Shopify",description:"\u6b64\u9875\u9762\u5305\u542bShopify\u7684\u8bbe\u7f6e\u6307\u5357\u548c\u53c2\u8003\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/setup-guide/sources/shopify.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/shopify",permalink:"/zh/setup-guide/sources/shopify",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NetSuite",permalink:"/zh/setup-guide/sources/netsuite"},next:{title:"\u6c83\u5c14\u739b\u5546\u57ce\uff08Walmart Marketplace\uff09",permalink:"/zh/setup-guide/sources/walmart-marketplace"}},o={},s=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bbe\u7f6e\u6307\u5357",id:"\u8bbe\u7f6e\u6307\u5357",level:2},{value:"\u4f7f\u7528API\u5bc6\u7801\u8bbe\u7f6e",id:"\u4f7f\u7528api\u5bc6\u7801\u8bbe\u7f6e",level:3},{value:"\u5728Daspire\u4e2d\u8bbe\u7f6eShopify",id:"\u5728daspire\u4e2d\u8bbe\u7f6eshopify",level:3},{value:"\u652f\u6301\u7684\u6570\u636e\u6d41",id:"\u652f\u6301\u7684\u6570\u636e\u6d41",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u6027\u80fd\u8003\u8651",id:"\u6027\u80fd\u8003\u8651",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}],m={toc:s};function c(e){let{components:t,...p}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"shopify"},"Shopify"),(0,n.kt)("p",null,"\u6b64\u9875\u9762\u5305\u542bShopify\u7684\u8bbe\u7f6e\u6307\u5357\u548c\u53c2\u8003\u4fe1\u606f\u3002"),(0,n.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u60a8\u7684Shopify\u5e97\u94fa\u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},"Shopify\u767b\u5f55\u4fe1\u606f\u6216API\u5bc6\u7801")),(0,n.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u5237\u65b0\u590d\u5236"),(0,n.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u589e\u91cf\u590d\u5236 - \u8ffd\u52a0\u540c\u6b65"),(0,n.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")))),(0,n.kt)("p",null,"Shopify\u6570\u636e\u6e90\u652f\u6301",(0,n.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u5237\u65b0\u590d\u5236"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u589e\u91cf\u590d\u5236"),"\u540c\u6b65\u3002\u6bcf\u6b21\u8fd0\u884c\u540c\u6b65\u65f6\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u4ec5\u590d\u5236\u65b0\u6570\u636e\u6216\u66f4\u65b0\u6570\u636e\uff0c\u6216\u60a8\u4e3a\u590d\u5236\u8bbe\u7f6e\u7684\u8868\u548c\u5217\u4e2d\u7684\u6240\u6709\u884c\u3002"),(0,n.kt)("p",null,"Daspire\u53ef\u4ee5\u4e3a",(0,n.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/api/reference"},"Shopify API")," \u540c\u6b65\u6570\u636e\u3002"),(0,n.kt)("h2",{id:"\u8bbe\u7f6e\u6307\u5357"},"\u8bbe\u7f6e\u6307\u5357"),(0,n.kt)("h3",{id:"\u4f7f\u7528api\u5bc6\u7801\u8bbe\u7f6e"},"\u4f7f\u7528API\u5bc6\u7801\u8bbe\u7f6e"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80",(0,n.kt)("a",{parentName:"p",href:"https://admin.shopify.com/store/YOURSTORE"},"https://admin.shopify.com/store/YOURSTORE")," \uff0c\u70b9\u51fb\u4fa7\u8fb9\u680f\u7684",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\uff08Settings\uff09"),"\u6309\u94ae\u3002\n",(0,n.kt)("img",{alt:"Shopify Store Settings",src:a(9878).Z,title:"Shopify Store Settings",width:"1062",height:"494"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb\u4fa7\u8fb9\u680f\u7684",(0,n.kt)("strong",{parentName:"p"},"\u5e94\u7528\u7a0b\u5e8f\u548c\u9500\u552e\u6e20\u9053\uff08Apps and sales channels\uff09"),"\uff0c\u7136\u540e\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f\uff08Develop apps\uff09"),"\u3002\n",(0,n.kt)("img",{alt:"Shopify Develop Apps",src:a(3956).Z,title:"Shopify Develop Apps",width:"1062",height:"484"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa\u5e94\u7528\uff08Create an app\uff09"),"\u521b\u5efa\u79c1\u6709\u5e94\u7528\u3002\n",(0,n.kt)("img",{alt:"Shopify Create an App",src:a(5006).Z,title:"Shopify Create an App",width:"1062",height:"481"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u586b\u5199",(0,n.kt)("strong",{parentName:"p"},"\u5e94\u7528\u540d\u79f0*\uff08App name\uff09"),"\u5e76\u9009\u62e9",(0,n.kt)("strong",{parentName:"p"},"\u5e94\u7528\u5f00\u53d1\u8005\uff08App developer\uff09"),".\n",(0,n.kt)("img",{alt:"Shopify Create an App",src:a(6891).Z,title:"Shopify Create an App",width:"1062",height:"481"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00\u60a8\u521a\u521a\u521b\u5efa\u7684\u5e94\u7528\uff0c\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u914d\u7f6e*\uff08Configuration\uff09"),"\uff0c\u7136\u540e\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u7ba1\u7406API\u96c6\u6210\uff08Admin API integration\uff09"),"\u4e2d\u7684",(0,n.kt)("strong",{parentName:"p"},"\u914d\u7f6e\uff08Configure\uff09"),"\u3002\n",(0,n.kt)("img",{alt:"Shopify Config",src:a(6342).Z,title:"Shopify Config",width:"1062",height:"481"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728",(0,n.kt)("strong",{parentName:"p"},"\u7ba1\u7406API\u8bbf\u95ee\u6743\u9650\uff08Admin API access scopes\uff09"),"\u4e2d\uff0c\u9009\u62e9\u60a8\u8981\u5141\u8bb8\u8bbf\u95ee\u7684\u8d44\u6e90\u3002Daspire\u53ea\u9700\u8981\u8bfb\u53d6\u7ea7\u522b\u7684\u8bbf\u95ee\u6743\u9650\u3002\u9009\u62e9\u5b8c\u6210\u540e\uff0c\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u4fdd\u5b58\uff08Save\uff09"),"\u3002"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u7528\u6237\u754c\u9762\u5c06\u663e\u793a\u6240\u6709\u53ef\u80fd\u7684\u6570\u636e\u6e90\uff0c\u5982\u679c\u5b83\u6ca1\u6709\u8bbf\u95ee\u8d44\u6e90\u7684\u6743\u9650\uff0c\u5219\u4f1a\u5728\u540c\u6b65\u65f6\u663e\u793a\u9519\u8bef\u3002")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Shopify Access Scopes",src:a(7618).Z,title:"Shopify Access Scopes",width:"1062",height:"797"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u4e3a\u5e94\u7528\u7a0b\u5e8f\u5206\u914d\u76f8\u5173\u8bbf\u95ee\u8303\u56f4\u540e\uff0c\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"API\u51ed\u636e\uff08API credentials\uff09"),"\uff0c\u7136\u540e\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u5e94\u7528\uff08Install app\uff09"),".\n",(0,n.kt)("img",{alt:"Shopify API Credentials",src:a(6792).Z,title:"Shopify API Credentials",width:"1062",height:"501"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5b89\u88c5\u5e94\u7528\u7a0b\u5e8f\u540e\uff0c\u60a8\u7684",(0,n.kt)("strong",{parentName:"p"},"\u7ba1\u7406API\u8bbf\u95ee\u4ee4\u724c\uff08Admin API access token\uff09"),"\u5c06\u4f1a\u663e\u793a\uff0c\u590d\u5236\u5b83\u3002\u60a8\u7684API\u8bbf\u95ee\u4ee4\u724c\u4ee5 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"shpat_")),"\u5f00\u5934\u3002\u60a8\u5c06\u7528\u4f5c\u96c6\u6210\u7684api","_","password\u7684\u5bc6\u7801\u3002\n",(0,n.kt)("img",{alt:"Shopify API Access Token",src:a(8125).Z,title:"Shopify API Access Token",width:"1062",height:"940"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u60a8\u5df2\u51c6\u5907\u597d\u5728Daspire\u4e2d\u8bbe\u7f6eShopify\uff01"))),(0,n.kt)("h3",{id:"\u5728daspire\u4e2d\u8bbe\u7f6eshopify"},"\u5728Daspire\u4e2d\u8bbe\u7f6eShopify"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4ece\u6570\u636e\u6e90\u5217\u8868\u4e2d\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"p"},"Shopify"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165\u4e00\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u6e90\u540d\u79f0"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165\u60a8\u7684Shopify",(0,n.kt)("strong",{parentName:"p"},"\u5e97\u94fa\u540d\u79f0"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528OAuth 2.0\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1\u60a8\u7684Shopify\u5e10\u6237"),"\uff0c\u6216\u4f7f\u7528API\u5bc6\u7801\uff0c\u8f93\u5165\u60a8\u7684",(0,n.kt)("strong",{parentName:"p"},"API\u5bc6\u7801"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165",(0,n.kt)("strong",{parentName:"p"},"\u590d\u5236\u5f00\u59cb\u65e5\u671f")," - \u60a8\u5e0c\u671b\u590d\u5236\u6570\u636e\u7684\u5f00\u59cb\u65e5\u671f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u4fdd\u5b58\u5e76\u6d4b\u8bd5"),"\u3002"))),(0,n.kt)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6d41"},"\u652f\u6301\u7684\u6570\u636e\u6d41"),(0,n.kt)("p",null,"\u6b64\u6570\u636e\u6e90\u80fd\u591f\u540c\u6b65\u4ee5\u4e0b\u6570\u636e\u6d41\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/abandoned_checkouts"},"\u653e\u5f03\u7ed3\u5e10\uff08Abandoned Checkouts\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products/collect"},"\u7cfb\u5217\uff08Collects\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products/customcollection"},"\u81ea\u5b9a\u4e49\u7cfb\u5217\uff08Custom Collections\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/customers"},"\u5ba2\u6237\uff08Customers\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/draftorder"},"\u8ba2\u5355\u8349\u7a3f\uff08Draft Orders\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode"},"\u6298\u6263\u7801\uff08Discount Codes\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/metafield"},"\u5143\u5b57\u6bb5\uff08Metafields\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/order"},"\u8ba2\u5355\uff08Orders\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin/rest/reference/orders/refund"},"\u8ba2\u5355\u9000\u6b3e\uff08Orders Refunds\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin/rest/reference/orders/order-risk"},"\u8ba2\u5355\u98ce\u9669\uff08Orders Risks\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products"},"\u4ea7\u54c1\uff08Products\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/transaction"},"\u4ea4\u6613\uff08Transactions\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/transactions"},"\u4f59\u989d\u4ea4\u6613\uff08Balance Transactions\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/online-store/page"},"\u9875\u9762\uff08Pages\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/discounts/pricerule"},"\u4ef7\u683c\u89c4\u5219\uff08Price Rules\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/location"},"\u4f4d\u7f6e\uff08Locations\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/inventoryItem"},"\u5e93\u5b58\u9879\u76ee\uff08InventoryItems\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/inventorylevel"},"\u5e93\u5b58\u6c34\u5e73\uff08InventoryLevels\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/fulfillmentorder"},"\u914d\u9001\u8ba2\u5355\uff08Fulfillment Orders\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/fulfillment"},"\u914d\u9001\uff08Fulfillments\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/shop"},"\u5e97\u94fa\uff08Shop\uff09"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,n.kt)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u66f4\u597d\u7684\u589e\u91cf\u590d\u5236\u4f53\u9a8c\uff0c\u5efa\u8bae\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8ba2\u5355\u9000\u6b3e\u3001\u8ba2\u5355\u98ce\u9669\u3001\u4ea4\u6613\u5e94\u4e0e\u8ba2\u5355\u6d41\u540c\u6b65\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6298\u6263\u4ee3\u7801\u5e94\u4e0e\u4ef7\u683c\u89c4\u5219\u6d41\u540c\u6b65\u3002"))),(0,n.kt)("p",null,"\u5982\u679c\u5b50\u6d41\u5355\u72ec\u4ece\u7236\u6d41\u540c\u6b65 - \u5c06\u8fdb\u884c\u5b8c\u5168\u540c\u6b65\uff0c\u7136\u540e\u8fc7\u6ee4\u6389\u8bb0\u5f55\u3002"),(0,n.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u96c6\u6210\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"Daspire\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,n.kt)("h2",{id:"\u6027\u80fd\u8003\u8651"},"\u6027\u80fd\u8003\u8651"),(0,n.kt)("p",null,"Shopify\u6709\u4e00\u4e9b",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/concepts/about-apis/rate-limits"},"\u901f\u7387\u9650\u5236"),"\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e0d\u5e94\u8be5\u5b58\u5728\u8282\u6d41\u6216\u8d85\u8fc7\u901f\u7387\u9650\u5236\u7684\u95ee\u9898\uff0c\u4f46\u5728\u67d0\u4e9b\u6781\u7aef\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u4f1a\u6536\u5230\u5982\u4e0b\u8b66\u544a\u6d88\u606f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Caught retryable error '<some_error> or null' after <some_number> tries. Waiting <some_number> seconds then retrying...\"\n")),(0,n.kt)("p",null,"\u5f53\u6570\u636e\u6e90\u547d\u4e2d429 - \u8d85\u51fa\u901f\u7387\u9650\u5236HTTP\u9519\u8bef\u65f6\uff0c\u8fd9\u662f\u9884\u671f\u4e2d\u7684\u3002\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u9519\u8bef\u6d88\u606f\uff0c\u540c\u6b65\u64cd\u4f5c\u4ecd\u5728\u7ee7\u7eed\uff0c\u4f46\u9700\u8981\u66f4\u591a\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\u3002"),(0,n.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,n.kt)("p",null,"\u5355\u6b21\u53ef\u540c\u6b65\u7684\u6700\u5927\u8868\u6570\u4e3a6\u5343\u5f20\u3002\u5982\u679c\u7531\u4e8e\u8fbe\u5230\u6700\u5927\u8868\u6570\u800c\u65e0\u6cd5\u83b7\u53d6\u6570\u636e\u67b6\u6784\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u8c03\u6574\u6570\u636e\u6e90\u8bbe\u7f6e\u3002"))}c.isMDXComponent=!0},7618:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-access-scopes-d3a117f9324fe93343b64bd4e05b6cb7.jpg"},8125:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-api-access-token-46b61d0e3691725493ea45b50264b445.jpg"},6792:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-api-creds-65303f04edee7814fce506b6cb5791a8.jpg"},6342:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-configuration-e311c6666f9cb87c137ce2c121c9dbd7.jpg"},5006:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-create-app-a2badaa51f2f4d0c4cf20c17cccb8cc4.jpg"},6891:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-create-app2-88117041e6a69fb297cc18e3cb7823fb.jpg"},3956:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-develop-apps-91373b513ea2d7989105bf5d57b72155.jpg"},9878:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shopify-settings-4368c1fde70789fce78d651f83550dce.jpg"}}]);
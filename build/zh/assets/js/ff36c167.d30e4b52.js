"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(r),d=a,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={},l="WooCommerce",i={unversionedId:"setup-guide/sources/woocommerce",id:"setup-guide/sources/woocommerce",title:"WooCommerce",description:"\u6b64\u9875\u9762\u5305\u542bWooCommerce\u7684\u8bbe\u7f6e\u6307\u5357\u548c\u53c2\u8003\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/setup-guide/sources/woocommerce.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/woocommerce",permalink:"/zh/setup-guide/sources/woocommerce",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6c83\u5c14\u739b\u5546\u57ce\uff08Walmart Marketplace\uff09",permalink:"/zh/setup-guide/sources/walmart-marketplace"},next:{title:"Zendesk Support",permalink:"/zh/setup-guide/sources/zendesk-support"}},p={},m=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bbe\u7f6e\u6307\u5357",id:"\u8bbe\u7f6e\u6307\u5357",level:2},{value:"\u540c\u6b65\u6982\u8ff0",id:"\u540c\u6b65\u6982\u8ff0",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6d41",id:"\u652f\u6301\u7684\u6570\u636e\u6d41",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],u={toc:m};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"woocommerce"},"WooCommerce"),(0,a.kt)("p",null,"\u6b64\u9875\u9762\u5305\u542bWooCommerce\u7684\u8bbe\u7f6e\u6307\u5357\u548c\u53c2\u8003\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5b8c\u5168\u5237\u65b0\u540c\u6b65"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u589e\u91cf\u540c\u6b65 - \u8ffd\u52a0\u540c\u6b65"),(0,a.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")))),(0,a.kt)("h2",{id:"\u8bbe\u7f6e\u6307\u5357"},"\u8bbe\u7f6e\u6307\u5357"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5bfc\u822a\u5230\u60a8\u5e97\u94fa\u7684WordPress\u7ba1\u7406\u754c\u9762\uff0c\u8f6c\u5230WooCommerce ",">"," Settings ",">"," Advanced ",">"," REST API\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb\u201cAdd Key\u201d\u751f\u6210API Key\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u6b64REST API\u5bc6\u94a5\u7684\u8bbf\u95ee\u7ea7\u522b\uff0c\u53ef\u4ee5\u662f\u8bfb\u8bbf\u95ee\u3001\u5199\u8bbf\u95ee\u6216\u8bfb/\u5199\u8bbf\u95ee\u3002Daspire\u53ea\u9700\u8981\u8bfb\u53d6\u7ea7\u522b\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u7528\u6237\u754c\u9762\u5c06\u663e\u793a\u6240\u6709\u53ef\u80fd\u7684\u6570\u636e\u6e90\uff0c\u5982\u679c\u5b83\u6ca1\u6709\u8bbf\u95ee\u8d44\u6e90\u7684\u6743\u9650\uff0c\u5219\u4f1a\u5728\u540c\u6b65\u65f6\u663e\u793a\u9519\u8bef\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Consumer Key\u548cConsumer Secret\u8fd9\u4e24\u4e2a\u5bc6\u94a5\u662f\u60a8\u5c06\u5206\u522b\u7528\u4f5c\u63a5\u53e3\u7684api","_","key\u548capi","_","secret\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u60a8\u5df2\u51c6\u5907\u597d\u5728Daspire\u4e2d\u8bbe\u7f6eWooCommerce\uff01"))),(0,a.kt)("h2",{id:"\u540c\u6b65\u6982\u8ff0"},"\u540c\u6b65\u6982\u8ff0"),(0,a.kt)("p",null,"WooCommerce\u6570\u636e\u6e90\u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u5237\u65b0\u590d\u5236"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u589e\u91cf\u590d\u5236"),"\u3002\u6bcf\u6b21\u8fd0\u884c\u540c\u6b65\u65f6\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u4ec5\u590d\u5236\u65b0\u6570\u636e\u6216\u66f4\u65b0\u6570\u636e\uff0c\u6216\u60a8\u4e3a\u590d\u5236\u8bbe\u7f6e\u7684\u8868\u548c\u5217\u4e2d\u7684\u6240\u6709\u884c\u3002"),(0,a.kt)("p",null,"Daspire\u53ef\u4ee5\u4e3a",(0,a.kt)("a",{parentName:"p",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/"},"WooCommerce API"),"\u540c\u6b65\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6d41"},"\u652f\u6301\u7684\u6570\u636e\u6d41"),(0,a.kt)("p",null,"\u6b64\u6570\u636e\u6e90\u80fd\u591f\u540c\u6b65\u4ee5\u4e0b\u6570\u636e\u6d41\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-customers"},"\u987e\u5ba2\uff08Customers\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-orders"},"\u8ba2\u5355\uff08Orders\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-coupons"},"\u4f18\u60e0\u5238\uff08Coupons\uff09"))),(0,a.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,a.kt)("p",null,"\u5355\u6b21\u53ef\u540c\u6b65\u7684\u6700\u5927\u8868\u6570\u4e3a6\u5343\u5f20\u3002\u5982\u679c\u7531\u4e8e\u8fbe\u5230\u6700\u5927\u8868\u6570\u800c\u65e0\u6cd5\u83b7\u53d6\u6570\u636e\u67b6\u6784\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u8c03\u6574\u6570\u636e\u6e90\u8bbe\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u96c6\u6210\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"Daspire\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"array")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"array"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"object"))))))}c.isMDXComponent=!0}}]);
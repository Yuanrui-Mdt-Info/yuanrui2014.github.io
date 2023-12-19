"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[277],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=u(a),N=r,g=k["".concat(o,".").concat(N)]||k[N]||m[N]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},i="BigQuery",p={unversionedId:"setup-guide/destinations/bigquery",id:"setup-guide/destinations/bigquery",title:"BigQuery",description:"\u6b64\u9875\u9762\u5305\u542bBigQuery\u7684\u8bbe\u7f6e\u6307\u5357\u548c\u53c2\u8003\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/setup-guide/destinations/bigquery.md",sourceDirName:"setup-guide/destinations",slug:"/setup-guide/destinations/bigquery",permalink:"/zh/setup-guide/destinations/bigquery",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Zendesk Talk",permalink:"/zh/setup-guide/sources/zendesk-talk"},next:{title:"ClickHouse",permalink:"/zh/setup-guide/destinations/clickhouse"}},o={},u=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u8fde\u63a5\u6a21\u5f0f",id:"\u8fde\u63a5\u6a21\u5f0f",level:2},{value:"\u8bbe\u7f6e\u6307\u5357",id:"\u8bbe\u7f6e\u6307\u5357",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u8bbe\u7f6e\u6570\u636e\u52a0\u8f7d\u65b9\u5f0f",id:"\u7b2c\u4e00\u6b65\u8bbe\u7f6e\u6570\u636e\u52a0\u8f7d\u65b9\u5f0f",level:3},{value:"\u4f7f\u7528\u8c37\u6b4c\u4e91\u5b58\u50a8\u6876\uff08\u63a8\u8350\uff09",id:"\u4f7f\u7528\u8c37\u6b4c\u4e91\u5b58\u50a8\u6876\u63a8\u8350",level:4},{value:"\u4f7f\u7528<code>INSERT</code>",id:"\u4f7f\u7528insert",level:4},{value:"\u7b2c2\u6b65\uff1a\u5728Daspire\u4e2d\u8bbe\u7f6eBigQuery\u76ee\u7684\u5730",id:"\u7b2c2\u6b65\u5728daspire\u4e2d\u8bbe\u7f6ebigquery\u76ee\u7684\u5730",level:3},{value:"\u652f\u6301\u7684\u540c\u6b65\u6a21\u5f0f",id:"\u652f\u6301\u7684\u540c\u6b65\u6a21\u5f0f",level:2},{value:"\u8f93\u51fa\u6a21\u5f0f",id:"\u8f93\u51fa\u6a21\u5f0f",level:2},{value:"BigQuery\u547d\u540d\u7ea6\u5b9a",id:"bigquery\u547d\u540d\u7ea6\u5b9a",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u89e3\u51b3\u6743\u9650\u95ee\u9898",id:"\u89e3\u51b3\u6743\u9650\u95ee\u9898",level:2}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bigquery"},"BigQuery"),(0,r.kt)("p",null,"\u6b64\u9875\u9762\u5305\u542bBigQuery\u7684\u8bbe\u7f6e\u6307\u5357\u548c\u53c2\u8003\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u8bbe\u7f6eBigQuery\u76ee\u7684\u5730\u5305\u62ec\u8bbe\u7f6e\u6570\u636e\u52a0\u8f7d\u65b9\u6cd5\uff08BigQuery\u6807\u51c6\u65b9\u6cd5\u548c\u8c37\u6b4c\u4e91\u5b58\u50a8\u6876\uff09\u548c\u4f7f\u7528Daspire\u914d\u7f6eBigQuery\u76ee\u7684\u5730\u63a5\u53e3\u3002"),(0,r.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console"},"\u542f\u7528\u4e86BigQuery\u7684\u8c37\u6b4c\u4e91\u9879\u76ee"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui#create_a_dataset"},"BigQuery\u6570\u636e\u96c6"),"\u4ee5\u540c\u6b65\u6570\u636e\u81f3\u6570\u636e\u96c6"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u7528BigQuery\u7f16\u5199\u7684\u67e5\u8be2\u53ea\u80fd\u5f15\u7528\u540c\u4e00\u7269\u7406\u4f4d\u7f6e\u7684\u6570\u636e\u96c6\u3002\u5982\u679c\u60a8\u8ba1\u5212\u5c06Daspire\u540c\u6b65\u7684\u6570\u636e\u4e0e\u67e5\u8be2\u4e2d\u5176\u4ed6\u6570\u636e\u96c6\u7684\u6570\u636e\u76f8\u7ed3\u5408\uff0c\u8bf7\u5728\u8c37\u6b4c\u4e91\u4e0a\u7684\u76f8\u540c\u4f4d\u7f6e\u521b\u5efa\u6570\u636e\u96c6\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/datasets-intro"},"\u6570\u636e\u96c6\u7b80\u4ecb")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5177\u6709",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery"},"BigQuery\u7528\u6237"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery"},"BigQuery\u6570\u636e\u7f16\u8f91\u5668"),"\u89d2\u8272\u548c",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"JSON\u683c\u5f0f\u7684\u670d\u52a1\u5e10\u6237\u5bc6\u94a5"),"\u3002"))),(0,r.kt)("h2",{id:"\u8fde\u63a5\u6a21\u5f0f"},"\u8fde\u63a5\u6a21\u5f0f"),(0,r.kt)("p",null,"\u5728\u8bbe\u7f6eBigQuery\u65f6\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u914d\u7f6e\u4e3a\u4ee5\u4e0b\u6a21\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BigQuery"),"\uff1a\u901a\u8fc7\u5c06JSON blob\u6570\u636e\u5b58\u50a8\u5728","_","daspire","_","raw","_","*","\u8868\u683c\u4e2d\uff0c\u7136\u540e\u5c06\u6570\u636e\u8f6c\u6362\u548c\u89c4\u8303\u5316\u5230\u5355\u72ec\u7684\u8868\u4e2d\u6765\u751f\u6210\u6570\u636e\u6b63\u5e38\u5316\u8f93\u51fa\uff0c\u5982\u679c\u57fa\u672c\u89c4\u8303\u5316\u662f\uff0c\u53ef\u80fd\u4f1a\u5c06\u5d4c\u5957\u6d41\u5206\u89e3\u5230\u5b83\u4eec\u81ea\u5df1\u7684\u8868\u4e2d\u914d\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BigQuery\uff08\u975e\u89c4\u8303\u5316\uff09"),"\uff1a\u5229\u7528\u5177\u6709\u7ed3\u6784\u5316\u548c\u91cd\u590d\u5b57\u6bb5\u7684BigQuery\u529f\u80fd\u4e3a\u6bcf\u4e2a\u6570\u636e\u6d41\u751f\u6210\u4e00\u4e2a\u201c\u5927\u201d\u8868\u3002Daspire\u76ee\u524d\u4e0d\u652f\u6301\u6b64\u9009\u9879\u7684\u6570\u636e\u6b63\u5e38\u5316\u3002"))),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u6307\u5357"},"\u8bbe\u7f6e\u6307\u5357"),(0,r.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u8bbe\u7f6e\u6570\u636e\u52a0\u8f7d\u65b9\u5f0f"},"\u7b2c\u4e00\u6b65\uff1a\u8bbe\u7f6e\u6570\u636e\u52a0\u8f7d\u65b9\u5f0f"),(0,r.kt)("p",null,"\u867d\u7136\u60a8\u53ef\u4ee5\u4f7f\u7528BigQuery\u7684",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"},"INSERTS"),"\u52a0\u8f7d\u6570\u636e\uff0c\u4f46\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/introduction"},"\u8c37\u6b4c\u4e91\u5b58\u50a8\u6876"),"\u3002"),(0,r.kt)("h4",{id:"\u4f7f\u7528\u8c37\u6b4c\u4e91\u5b58\u50a8\u6876\u63a8\u8350"},"\u4f7f\u7528\u8c37\u6b4c\u4e91\u5b58\u50a8\u6876\uff08\u63a8\u8350\uff09"),(0,r.kt)("p",null,"\u4f7f\u7528\u8c37\u6b4c\u4e91\u5b58\u50a8\u6876\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets"},"\u521b\u5efa\u8c37\u6b4c\u4e91\u5b58\u50a8\u6876"),"\uff0c\u5c06\u4fdd\u62a4\u5de5\u5177\u8bbe\u7f6e\u4e3a\u65e0\u6216\u5bf9\u8c61\u7248\u672c\u63a7\u5236\u3002\u786e\u4fdd\u5b58\u50a8\u6876\u6ca1\u6709",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/samples/storage-set-retention-policy"},"\u4fdd\u7559\u7b56\u7565"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/authentication/managing-hmackeys#create"},"\u521b\u5efaHMAC\u5bc6\u94a5\u548c\u8bbf\u95eeID"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6388\u4e88",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam-roles#standard-roles"},"\u5b58\u50a8\u5bf9\u8c61\u7ba1\u7406\u5458")," ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam-roles#standard-roles"},"\u6743\u9650"),"\u5230\u8c37\u6b4c\u4e91",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/service-accounts"},"\u670d\u52a1\u5e10\u6237"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u786e\u4fdd\u53ef\u4ee5\u4ece\u8fd0\u884cDaspire\u7684\u673a\u5668\u8bbf\u95ee\u60a8\u7684\u4e91\u5b58\u50a8\u5b58\u50a8\u6876\u3002\u9a8c\u8bc1Daspire\u662f\u5426\u80fd\u591f\u8fde\u63a5\u5230\u60a8\u7684\u5b58\u50a8\u6876\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u901a\u8fc7\u63a7\u5236\u9762\u677f\u4e2d\u7684\u68c0\u67e5\u8fde\u63a5\u5de5\u5177\u3002"))),(0,r.kt)("h4",{id:"\u4f7f\u7528insert"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h4"},"INSERT")),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528BigQuery\u7684",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"},"INSERT"),"\u8bed\u53e5\u5c06\u6570\u636e\u76f4\u63a5\u4ece\u6570\u636e\u6e90\u4e0a\u4f20\u5230BigQuery\u3002\u867d\u7136\u6700\u521d\u8bbe\u7f6e\u8d77\u6765\u66f4\u5feb\uff0c\u4f46\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4e0d\u8981\u5c06\u6b64\u9009\u9879\u7528\u4e8e\u5feb\u901f\u6f14\u793a\u4ee5\u5916\u7684\u4efb\u4f55\u7528\u9014\u3002\u7531\u4e8e\u8c37\u6b4cBigQuery SDK\u5ba2\u6237\u7aef\u9650\u5236\uff0c\u4f7f\u7528INSERT\u6bd4\u4f7f\u7528\u8c37\u6b4c\u4e91\u5b58\u50a8\u5b58\u50a8\u6876\u616210\u500d\uff0c\u5e76\u4e14\u60a8\u53ef\u80fd\u4f1a\u770b\u5230\u5927\u6570\u636e\u96c6\u548c\u6162\u901f\u6e90\u7684\u4e00\u4e9b\u5931\u8d25\uff08\u4f8b\u5982\uff0c\u5982\u679c\u4ece\u6570\u636e\u6e90\u8bfb\u53d6\u9700\u8981\u8d85\u8fc710-12\u5c0f\u65f6)."),(0,r.kt)("h3",{id:"\u7b2c2\u6b65\u5728daspire\u4e2d\u8bbe\u7f6ebigquery\u76ee\u7684\u5730"},"\u7b2c2\u6b65\uff1a\u5728Daspire\u4e2d\u8bbe\u7f6eBigQuery\u76ee\u7684\u5730"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u767b\u5f55\u60a8\u7684Daspire\u5e10\u6237\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u76ee\u7684\u5730"),"\uff0c\u7136\u540e\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u65b0\u76ee\u7684\u5730"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u8bbe\u7f6e\u76ee\u6807\u9875\u9762\u4e0a\uff0c\u4ece",(0,r.kt)("strong",{parentName:"p"},"\u76ee\u7684\u5730"),"\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"BigQuery"),"\u6216",(0,r.kt)("strong",{parentName:"p"},"BigQuery\uff08\u975e\u6b63\u5e38\u5316\u7c7b\u578b\u7ed3\u6784\uff09"),"\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u60a8\u662f\u8981\u5728BigQuery\u8fd8\u662fBigQuery\u975e\u6b63\u5e38\u5316\u7c7b\u578b\u7ed3\u6784\u4e2d\u8fdb\u884c\u8bbe\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f93\u5165BigQuery\u94fe\u63a5\u7684\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u9879\u76eeID"),"\uff0c\u8f93\u5165\u60a8\u7684",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects"},"\u8c37\u6b4c\u4e91\u9879\u76eeID"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u96c6\u4f4d\u7f6e"),"\uff0c\u9009\u62e9\u60a8\u7684BigQuery\u6570\u636e\u96c6\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u60a8\u4ee5\u540e\u65e0\u6cd5\u66f4\u6539\u4f4d\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u6570\u636e\u96c6ID"),"\uff0c\u8f93\u5165BigQuery",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/datasets#create-dataset"},"\u6570\u636e\u96c6ID"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u52a0\u8f7d\u65b9\u5f0f"),"\uff0c\u9009\u62e9\u6807\u51c6\u63d2\u5165\u6216\u8c37\u6b4c\u4e91\u5b58\u50a8\u6682\u5b58\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a"),"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u8c37\u6b4c\u4e91\u5b58\u50a8\u6682\u5b58\u9009\u9879\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5e10\u6237\u5bc6\u94a5JSON\uff08\u4e91\u7aef\u5fc5\u9700\uff0c\u5f00\u6e90\u53ef\u9009\uff09"),"\uff0c\u8f93\u5165\u8c37\u6b4c\u4e91",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"JSON\u683c\u5f0f\u7684\u670d\u52a1\u5e10\u6237\u5bc6\u94a5"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u8f6c\u6362\u67e5\u8be2\u8fd0\u884c\u7c7b\u578b\uff08\u53ef\u9009\uff09"),"\uff0c\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"\u4ea4\u4e92"),"\u4ee5\u8ba9",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/running-queries#queries"},"BigQuery\u8fd0\u884c\u4ea4\u4e92\u5f0f\u67e5\u8be2\u4f5c\u4e1a")," \u6216",(0,r.kt)("strong",{parentName:"p"},"\u6279\u91cf"),"\u8ba9",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/running-queries#batch"},"BigQuery\u8fd0\u884c\u6279\u91cf\u67e5\u8be2"),"\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u4ea4\u4e92\u5f0f\u67e5\u8be2\u4f1a\u5c3d\u5feb\u6267\u884c\u5e76\u8ba1\u5165\u6bcf\u65e5\u5e76\u53d1\u914d\u989d\u548c\u9650\u5236\uff0c\u800c\u6279\u91cf\u67e5\u8be2\u4f1a\u5728BigQuery\u5171\u4eab\u8d44\u6e90\u6c60\u4e2d\u6709\u53ef\u7528\u8d44\u6e90\u65f6\u7acb\u5373\u6267\u884c\u3002\u5982\u679cBigQuery\u672a\u572824\u5c0f\u65f6\u5185\u5f00\u59cb\u67e5\u8be2BigQuery\u4f1a\u5c06\u4f5c\u4e1a\u4f18\u5148\u7ea7\u66f4\u6539\u4e3a\u4ea4\u4e92\u5f0f\u3002\u6279\u91cf\u67e5\u8be2\u4e0d\u8ba1\u5165\u60a8\u7684\u5e76\u53d1\u901f\u7387\u9650\u5236\uff0c\u8fd9\u6837\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u540c\u65f6\u542f\u52a8\u591a\u4e2a\u67e5\u8be2\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u8c37\u6b4cBigQuery\u5ba2\u6237\u7aef\u5757\u5927\u5c0f\uff08\u53ef\u9009\uff09"),"\uff0c\u4f7f\u7528\u9ed8\u8ba4\u503c15 MiB\u3002\u7a0d\u540e\uff0c\u5982\u679c\u60a8\u53d1\u73b0\u540c\u6b65\u51fa\u73b0\u7f51\u7edc\u6216\u5185\u5b58\u7ba1\u7406\u95ee\u9898\uff08\u7279\u522b\u662f\u5728\u76ee\u7684\u5730\u4e0a\uff09\uff0c\u8bf7\u5c1d\u8bd5\u51cf\u5c0f\u5757\u5927\u5c0f\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u540c\u6b65\u4f1a\u66f4\u6162\u4f46\u66f4\u6709\u53ef\u80fd\u6210\u529f\u3002"))),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u540c\u6b65\u6a21\u5f0f"},"\u652f\u6301\u7684\u540c\u6b65\u6a21\u5f0f"),(0,r.kt)("p",null,"BigQuery\u76ee\u7684\u5730\u652f\u6301\u4ee5\u4e0b\u540c\u6b65\u6a21\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u5237\u65b0\u540c\u6b65"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u91cf\u540c\u6b65 - \u8ffd\u52a0\u540c\u6b65"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u91cf\u540c\u6b65 - \u53bb\u91cd\u5386\u53f2")),(0,r.kt)("h2",{id:"\u8f93\u51fa\u6a21\u5f0f"},"\u8f93\u51fa\u6a21\u5f0f"),(0,r.kt)("p",null,"Daspire\u5c06\u6bcf\u4e2a\u6570\u636e\u6d41\u8f93\u51fa\u5230BigQuery\u4e2d\u5b83\u81ea\u5df1\u7684\u8868\u4e2d\u3002\u6bcf\u4e2a\u8868\u5305\u542b\u4e09\u5217\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"_daspire_ab_id"),"\uff1aDaspire\u5206\u914d\u7ed9\u6bcf\u4e2a\u5904\u7406\u7684\u4e8b\u4ef6\u7684UUID\u3002BigQuery\u4e2d\u7684\u5217\u7c7b\u578b\u662f\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"_daspire_emitted_at"),"\uff1a\u8868\u793a\u4e8b\u4ef6\u4f55\u65f6\u4ece\u6570\u636e\u6e90\u4e2d\u63d0\u53d6\u7684\u65f6\u95f4\u6233\u3002BigQuery\u4e2d\u7684\u5217\u7c7b\u578b\u662f\u65f6\u95f4\u6233\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"_daspire_data"),"\uff1a\u8868\u793a\u4e8b\u4ef6\u6570\u636e\u7684JSON blob\u3002BigQuery\u4e2d\u7684\u5217\u7c7b\u578b\u662f\u5b57\u7b26\u4e32\u3002"))),(0,r.kt)("p",null,"BigQuery\u4e2d\u7684\u8f93\u51fa\u8868\u6309\u65f6\u95f4\u5355\u4f4d\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"_daspire_emitted_at"),"\u4ee5\u6bcf\u65e5\u7c92\u5ea6\u8fdb\u884c\u5206\u533a\u548c\u805a\u7c7b\u3002\u5206\u533a\u8fb9\u754c\u57fa\u4e8e\u683c\u6797\u5a01\u6cbb\u6807\u51c6\u65f6\u95f4\u3002\u901a\u8fc7\u4f7f\u7528\u8c13\u8bcd\u8fc7\u6ee4\u5668\uff08WHERE\u5b50\u53e5\uff09\uff0c\u8fd9\u5bf9\u4e8e\u5728\u67e5\u8be2\u8fd9\u4e9b\u5206\u533a\u8868\u65f6\u9650\u5236\u626b\u63cf\u7684\u5206\u533a\u6570\u5f88\u6709\u7528\u3002\u5206\u533a\u5217\u4e0a\u7684\u8fc7\u6ee4\u5668\u7528\u4e8e\u4fee\u526a\u5206\u533a\u5e76\u964d\u4f4e\u67e5\u8be2\u6210\u672c\u3002\uff08Daspire\u672a\u542f\u7528\u53c2\u6570",(0,r.kt)("strong",{parentName:"p"},"\u5fc5\u9700\u5206\u533a\u8fc7\u6ee4\u5668"),"\uff0c\u4f46\u60a8\u53ef\u4ee5\u901a\u8fc7\u66f4\u65b0\u751f\u6210\u7684\u8868\u6765\u5207\u6362\u5b83\u3002\uff09"),(0,r.kt)("h2",{id:"bigquery\u547d\u540d\u7ea6\u5b9a"},"BigQuery\u547d\u540d\u7ea6\u5b9a"),(0,r.kt)("p",null,"\u9075\u5faa",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/datasets#dataset-naming"},"BigQuery\u6570\u636e\u96c6\u547d\u540d\u7ea6\u5b9a"),"\u3002"),(0,r.kt)("p",null,"Daspire\u5728\u5199\u5165\u6570\u636e\u65f6\u5c06\u4efb\u4f55\u65e0\u6548\u5b57\u7b26\u8f6c\u6362\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"_"),"\u5b57\u7b26\u3002\u4f46\u662f\uff0c\u7531\u4e8e\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"_"),"\u5f00\u5934\u7684\u6570\u636e\u96c6\u9690\u85cf\u5728BigQuery Explorer\u63a7\u5236\u9762\u677f\u4e0a\uff0c\u56e0\u6b64Daspire\u4f1a\u5728\u547d\u540d\u7a7a\u95f4\u524d\u52a0\u4e0an\u4ee5\u8868\u793a\u8f6c\u6362\u540e\u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Daspire\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"BigQuery\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"BigQuery\u975e\u89c4\u8303\u5316\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING (BASE64)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NUMBER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FLOAT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FLOAT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OBJECT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RECORD"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOLEAN")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOLEAN")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOLEAN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTEGER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTEGER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTEGER"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING (BIG_NUMBER)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING (BIG_INTEGER)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REPEATED")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REPEATED"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING (TIMESTAMP_WITH_TIMEZONE)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATETIME"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING (TIMESTAMP_WITHOUT_TIMEZONE)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATETIME"))))),(0,r.kt)("h2",{id:"\u89e3\u51b3\u6743\u9650\u95ee\u9898"},"\u89e3\u51b3\u6743\u9650\u95ee\u9898"),(0,r.kt)("p",null,"\u670d\u52a1\u5e10\u6237\u6ca1\u6709\u9002\u5f53\u7684\u6743\u9650\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u786e\u4fddBigQuery\u670d\u52a1\u5e10\u6237\u5177\u6709BigQuery\u7528\u6237\u548cBigQuery\u6570\u636e\u7f16\u8f91\u6743\u9650\u6216\u4e0e\u8fd9\u4e24\u4e2a\u6743\u9650\u7b49\u6548\u7684\u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u9009\u62e9\u8c37\u6b4c\u4e91\u5b58\u50a8\u6682\u5b58\u6a21\u5f0f\uff0c\u8bf7\u786e\u4fddBigQuery\u670d\u52a1\u5e10\u6237\u5bf9\u8c37\u6b4c\u4e91\u5b58\u50a8\u5b58\u50a8\u6876\u548c\u8def\u5f84\u6216\u4e91\u5b58\u50a8\u7ba1\u7406\u5458\u6743\u9650\u5177\u6709\u6b63\u786e\u7684\u6743\u9650\uff0c\u5176\u4e2d\u5305\u62ec\u6240\u9700\u6743\u9650\u7684\u8d85\u96c6\u3002"))),(0,r.kt)("p",null,"HMAC\u5bc6\u94a5\u9519\u8bef\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u4e3aBigQuery\u670d\u52a1\u5e10\u6237\u521b\u5efa\u4e86HMAC\u5bc6\u94a5\uff0c\u5e76\u4e14\u8be5\u670d\u52a1\u5e10\u6237\u6709\u6743\u8bbf\u95ee\u8c37\u6b4c\u4e91\u5b58\u50a8\u5b58\u50a8\u6876\u548c\u8def\u5f84\u3002")))}m.isMDXComponent=!0}}]);
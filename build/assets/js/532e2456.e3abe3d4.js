"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},o="Pagination",p={unversionedId:"connector-development/config-based/pagination",id:"connector-development/config-based/pagination",title:"Pagination",description:"Given a page size and a pagination strategy, the LimitPaginator will point to pages of results for as long as its strategy returns a nextpagetoken.",source:"@site/../docs/connector-development/config-based/pagination.md",sourceDirName:"connector-development/config-based",slug:"/connector-development/config-based/pagination",permalink:"/connector-development/config-based/pagination",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/pagination.md",tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Pagination Strategies",id:"pagination-strategies",level:2},{value:"Page increment",id:"page-increment",level:3},{value:"Offset increment",id:"offset-increment",level:3},{value:"Cursor",id:"cursor",level:3},{value:"Cursor paginator in request parameters",id:"cursor-paginator-in-request-parameters",level:4},{value:"Cursor paginator in path",id:"cursor-paginator-in-path",level:4}],c={toc:l};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"Given a page size and a pagination strategy, the ",(0,r.kt)("inlineCode",{parentName:"p"},"LimitPaginator")," will point to pages of results for as long as its strategy returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"next_page_token"),"."),(0,r.kt)("p",null,"Iterating over pages of result is different from iterating over stream slices.\nStream slices have semantic value, for instance, a Datetime stream slice defines data for a specific date range. Two stream slices will have data for different date ranges.\nConversely, pages don't have semantic value. More pages simply means that more records are to be read, without specifying any meaningful difference between the records of the first and later pages."),(0,r.kt)("p",null,"The paginator is defined by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page_size"),": The number of records to fetch in a single request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"limit_option"),": How to specify the page size in the outgoing HTTP request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pagination_strategy"),": How to compute the next page to fetch"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page_token_option"),": How to specify the next page to fetch in the outgoing HTTP request")),(0,r.kt)("p",null,"3 pagination strategies are supported"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Page increment"),(0,r.kt)("li",{parentName:"ol"},"Offset increment"),(0,r.kt)("li",{parentName:"ol"},"Cursor-based")),(0,r.kt)("h2",{id:"pagination-strategies"},"Pagination Strategies"),(0,r.kt)("h3",{id:"page-increment"},"Page increment"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"PageIncrement")," strategy, the page number will be set as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"page_token_option"),"."),(0,r.kt)("p",null,"The following paginator example will fetch 5 records per page, and specify the page number as a request_parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'paginator:\n  type: "LimitPaginator"\n  page_size: 5\n  limit_option:\n    inject_into: request_parameter\n    field_name: page_size\n  pagination_strategy:\n    type: "PageIncrement"\n  page_token:\n    inject_into: "request_parameter"\n    field_name: "page"\n')),(0,r.kt)("p",null,"If the page contains less than 5 records, then the paginator knows there are no more pages to fetch.\nIf the API returns more records than requested, all records will be processed."),(0,r.kt)("p",null,"Assuming the endpoint to fetch data from is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data"),",\nthe first request will be sent as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data?page_size=5&page=0"),"\nand the second request as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data?page_size=5&page=1"),","),(0,r.kt)("h3",{id:"offset-increment"},"Offset increment"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"OffsetIncrement")," strategy, the number of records read will be set as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"page_token_option"),"."),(0,r.kt)("p",null,"The following paginator example will fetch 5 records per page, and specify the offset as a request_parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'paginator:\n  type: "LimitPaginator"\n  page_size: 5\n  limit_option:\n    inject_into: request_parameter\n    field_name: page_size\n  pagination_strategy:\n    type: "OffsetIncrement"\n  page_token:\n    field_name: "offset"\n    inject_into: "request_parameter"\n\n')),(0,r.kt)("p",null,"Assuming the endpoint to fetch data from is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data"),",\nthe first request will be sent as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data?page_size=5&offset=0"),"\nand the second request as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data?page_size=5&offset=5"),","),(0,r.kt)("h3",{id:"cursor"},"Cursor"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CursorPaginationStrategy")," outputs a token by evaluating its ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor_value")," string with the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"response"),": The decoded response"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers"),": HTTP headers on the response"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"last_records"),": List of records selected from the last response")),(0,r.kt)("p",null,"This cursor value can be used to request the next page of record."),(0,r.kt)("h4",{id:"cursor-paginator-in-request-parameters"},"Cursor paginator in request parameters"),(0,r.kt)("p",null,"In this example, the next page of record is defined by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," request parameter to the id of the last record read:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'paginator:\n  type: "LimitPaginator"\n  <...>\n  pagination_strategy:\n    type: "CursorPaginationStrategy"\n    cursor_value: "{{ last_records[-1][\'id\'] }}"\n  page_token:\n    field_name: "from"\n    inject_into: "request_parameter"\n')),(0,r.kt)("p",null,"Assuming the endpoint to fetch data from is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data"),",\nthe first request will be sent as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data"),"."),(0,r.kt)("p",null,"Assuming the id of the last record fetched is 1000,\nthe next request will be sent as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data?from=1000"),"."),(0,r.kt)("h4",{id:"cursor-paginator-in-path"},"Cursor paginator in path"),(0,r.kt)("p",null,"Some APIs directly point to the URL of the next page to fetch. In this example, the URL of the next page is extracted from the response headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'paginator:\n  type: "LimitPaginator"\n  <...>\n  pagination_strategy:\n    type: "CursorPaginationStrategy"\n    cursor_value: "{{ headers[\'urls\'][\'next\'] }}"\n  page_token:\n    inject_into: "path"\n')),(0,r.kt)("p",null,"Assuming the endpoint to fetch data from is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data"),",\nthe first request will be sent as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data")),(0,r.kt)("p",null,"Assuming the response's next url is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data?page=1&page_size=100"),",\nthe next request will be sent as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cloud.airbyte.com/api/get_data?page=1&page_size=100")))}g.isMDXComponent=!0}}]);
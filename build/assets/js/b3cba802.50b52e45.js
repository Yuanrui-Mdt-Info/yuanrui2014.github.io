"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},i="Resetting Your Data",s={unversionedId:"operator-guides/reset",id:"operator-guides/reset",title:"Resetting Your Data",description:"The reset button gives you a blank slate, of sorts, to perform a fresh new sync. This can be useful if you are just testing Airbyte or don't necessarily require the data replicated to your destination to be saved permanently.",source:"@site/../docs/operator-guides/reset.md",sourceDirName:"operator-guides",slug:"/operator-guides/reset",permalink:"/operator-guides/reset",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/reset.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Upgrading Airbyte",permalink:"/operator-guides/upgrading-airbyte"},next:{title:"Configuring the Airbyte Database",permalink:"/operator-guides/configuring-airbyte-db"}},l={},u=[],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resetting-your-data"},"Resetting Your Data"),(0,o.kt)("p",null,"The reset button gives you a blank slate, of sorts, to perform a fresh new sync. This can be useful if you are just testing Airbyte or don't necessarily require the data replicated to your destination to be saved permanently."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(78703).Z,width:"1680",height:"562"})),(0,o.kt)("p",null,"As outlined above, you can click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset your data")," button to give you that clean slate. Just as a heads up, here is what it does and doesn't do:"),(0,o.kt)("p",null,"The reset button ",(0,o.kt)("strong",{parentName:"p"},"DOES"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Delete all records in your destination tables"),(0,o.kt)("li",{parentName:"ul"},"Delete all records in your destination file")),(0,o.kt)("p",null,"The reset button ",(0,o.kt)("strong",{parentName:"p"},"DOES NOT"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Delete the destination tables"),(0,o.kt)("li",{parentName:"ul"},"Delete a destination file if using the LocalCSV or LocalJSON Destinations")),(0,o.kt)("p",null,"Because of this, if you have any orphaned tables or files that are no longer being synced to, they will have to be cleaned up later, as Airbyte will not clean them up for you."))}p.isMDXComponent=!0},78703:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/reset_your_data_1-a0e954651b4f2eef6286f9bd9f37006a.png"}}]);
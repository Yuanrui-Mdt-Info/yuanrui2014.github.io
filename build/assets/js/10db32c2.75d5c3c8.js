"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),A=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=A(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=A(r),d=n,g=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return r?o.createElement(g,a(a({ref:t},u),{},{components:r})):o.createElement(g,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var A=2;A<i;A++)a[A]=r[A];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},30176:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>A});var o=r(87462),n=(r(67294),r(3905));const i={},a="Windows - Browsing Local File Output",l={unversionedId:"operator-guides/locating-files-local-destination",id:"operator-guides/locating-files-local-destination",title:"Windows - Browsing Local File Output",description:"Overview",source:"@site/../docs/operator-guides/locating-files-local-destination.md",sourceDirName:"operator-guides",slug:"/operator-guides/locating-files-local-destination",permalink:"/operator-guides/locating-files-local-destination",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/locating-files-local-destination.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Using the Dagster Integration",permalink:"/operator-guides/using-dagster-integration"},next:{title:"Transformations with SQL (Part 1/3)",permalink:"/operator-guides/transformation-and-normalization/transformations-with-sql"}},s={},A=[{value:"Overview",id:"overview",level:2},{value:"Locating where your temp folder is",id:"locating-where-your-temp-folder-is",level:2},{value:"Notes",id:"notes",level:2}],u={toc:A};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"windows---browsing-local-file-output"},"Windows - Browsing Local File Output"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This tutorial will describe how to look for json and csv files in when using local destinations on Windows on a local deployment."),(0,n.kt)("p",null,"There can be confusion when using local destinations in Airbyte on Windows, especially if you are running WSL2 to power Docker. There are also two folders generated at the root folder of your Docker folder which will point you in the wrong direction."),(0,n.kt)("h2",{id:"locating-where-your-temp-folder-is"},"Locating where your temp folder is"),(0,n.kt)("p",null,"While running Airbyte's Docker image on Windows with WSL2, you can access your temp folder by doing the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open File Explorer ","(","Or any folder where you can access the address bar",")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Type in ",(0,n.kt)("inlineCode",{parentName:"p"},"\\\\wsl$")," in the address bar")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The folders below will be displayed"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(59231).Z,width:"400",height:"89"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can start digging here, but it is recommended to start searching from here and just search for the folder name you used for your local files. The folder address should be similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"\\\\wsl$\\docker-desktop\\tmp\\docker-desktop-root\\containers\\services\\docker\\rootfs\\tmp\\airbyte_local"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You should be able to locate your local destination CSV or JSON files in this folder."))),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Local JSON and Local CSV files do not persist between Docker restarts. This means that once you turn off your Docker image, your data is lost. This is consistent with the ",(0,n.kt)("inlineCode",{parentName:"li"},"tmp")," nature of the folder."),(0,n.kt)("li",{parentName:"ol"},"In the root folder of your docker files, it might generate tmp and var folders that only have empty folders inside.")))}c.isMDXComponent=!0},59231:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);
"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[910],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(a),u=r,d=h["".concat(p,".").concat(u)]||h[u]||m[u]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},809:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},i="Configurations",l={unversionedId:"configurations",id:"configurations",title:"Configurations",description:"Edit data pipeline configuration",source:"@site/docs/configurations.md",sourceDirName:".",slug:"/configurations",permalink:"/configurations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Snowflake",permalink:"/setup-guide/destinations/snowflake"},next:{title:"Sync Log",permalink:"/sync-log"}},p={},s=[{value:"Edit data pipeline configuration",id:"edit-data-pipeline-configuration",level:2},{value:"To search for a stream",id:"to-search-for-a-stream",level:2},{value:"To change individual stream configuration",id:"to-change-individual-stream-configuration",level:2},{value:"To change multiple stream configurations",id:"to-change-multiple-stream-configurations",level:2},{value:"To save the changes",id:"to-save-the-changes",level:2},{value:"To refresh the source schema",id:"to-refresh-the-source-schema",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configurations"},"Configurations"),(0,r.kt)("h2",{id:"edit-data-pipeline-configuration"},"Edit data pipeline configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Daspire dashboard, click a ",(0,r.kt)("strong",{parentName:"p"},"Connection")," in the list you want to change.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Replication"),"."))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Transfer")," and ",(0,r.kt)("strong",{parentName:"p"},"Streams")," settings include the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Replication Frequency"),(0,r.kt)("td",{parentName:"tr",align:null},"How often the data syncs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Destination Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"Where the replicated data is written")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Destination Stream Prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Helps you identify streams from different connectors")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," These parameters apply to all streams in the connection.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Activate the streams you want to sync")," section, you can make changes to any stream you choose.")),(0,r.kt)("h2",{id:"to-search-for-a-stream"},"To search for a stream"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Search stream name")," search box.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the name of the stream you want to find.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Streams matching your search are displayed in the list."))),(0,r.kt)("h2",{id:"to-change-individual-stream-configuration"},"To change individual stream configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Sync")," column of the stream, toggle the sync on or off.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the dropdown arrow in the ",(0,r.kt)("strong",{parentName:"p"},"Sync mode")," column and select the sync mode you want to apply."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Depending on the sync mode you select, you may need to choose a cursor or primary key."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If there is a dropdown arrow in the ",(0,r.kt)("strong",{parentName:"p"},"Cursor")," or ",(0,r.kt)("strong",{parentName:"p"},"Primary key")," fields, click the dropdown arrow and choose the cursor or primary key."))),(0,r.kt)("h2",{id:"to-change-multiple-stream-configurations"},"To change multiple stream configurations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the first checkbox in the table header to select all streams in the connection.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deselect the checkboxes of streams you do not want to apply these changes to.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the highlighted header of the table, toggle the sync on or off.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the dropdown arrow in the ",(0,r.kt)("strong",{parentName:"p"},"Sync mode")," column and select the sync mode you want to apply to these streams.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If there is a dropdown arrow in the ",(0,r.kt)("strong",{parentName:"p"},"Cursor")," or ",(0,r.kt)("strong",{parentName:"p"},"Primary key")," fields of the highlighted table header, click the dropdown arrow and choose the cursor or primary key.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Apply")," to apply these changes to the streams you selected, or click ",(0,r.kt)("strong",{parentName:"p"},"Cancel")," to discard the changes."))),(0,r.kt)("h2",{id:"to-save-the-changes"},"To save the changes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save changes")," , or click ",(0,r.kt)("strong",{parentName:"p"},"Cancel")," to discard the changes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Stream configuration changed")," dialog displays. This gives you the option to reset streams when you save the changes."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"CAUTION:")," Daspire recommends that you reset the streams. A reset will delete data in the destination of the affected streams and then re-sync that data. Skipping the reset is discouraged and might lead to unexpected behavior."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save connection")," , or click ",(0,r.kt)("strong",{parentName:"p"},"Cancel")," to close the dialog."))),(0,r.kt)("h2",{id:"to-refresh-the-source-schema"},"To refresh the source schema"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Refresh source schema")," to fetch the schema of your data source.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If there are changes to the schema, the ",(0,r.kt)("strong",{parentName:"p"},"Refreshed source schema")," dialog displays them."))))}m.isMDXComponent=!0}}]);
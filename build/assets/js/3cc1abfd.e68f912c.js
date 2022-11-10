"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[96],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={},i="Key Concepts",l={unversionedId:"key-concepts",id:"key-concepts",title:"Key Concepts",description:"Daspire enables you to build data pipelines and replicate data from a source to a destination. You can configure how frequently the data is synced, what data is replicated, what format the data is written to in the destination, and if the data is stored in raw tables format or basic normalized (or JSON) format.",source:"@site/docs/key-concepts.md",sourceDirName:".",slug:"/key-concepts",permalink:"/key-concepts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Start Here",permalink:"/"},next:{title:"Amazon Ads",permalink:"/setup-guide/sources/amazon-ads"}},s={},d=[{value:"Space",id:"space",level:2},{value:"Source",id:"source",level:2},{value:"Destination",id:"destination",level:2},{value:"Connection",id:"connection",level:2},{value:"Stream",id:"stream",level:2},{value:"Field",id:"field",level:2},{value:"Namespace",id:"namespace",level:2},{value:"Daspire namespaces",id:"daspire-namespaces",level:3},{value:"Connection configurations",id:"connection-configurations",level:2},{value:"Connection sync modes",id:"connection-sync-modes",level:2},{value:"Normalization",id:"normalization",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"key-concepts"},"Key Concepts"),(0,r.kt)("p",null,"Daspire enables you to build data pipelines and replicate data from a source to a destination. You can configure how frequently the data is synced, what data is replicated, what format the data is written to in the destination, and if the data is stored in raw tables format or basic normalized (or JSON) format."),(0,r.kt)("p",null,"This page describes the concepts you need to know to use Daspire."),(0,r.kt)("h2",{id:"space"},"Space"),(0,r.kt)("p",null,"When you sign up for Daspire, we automatically create your first space where you are the only user with access. You can set up your sources and destinations to start syncing data and invite other users to join your space."),(0,r.kt)("p",null,"A space is a grouping of sources, destinations, connections, and other configurations. It lets you collaborate with team members and share resources across your team under a shared billing account."),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,"A source is an API, file, database, or data warehouse that you want to ingest data from."),(0,r.kt)("h2",{id:"destination"},"Destination"),(0,r.kt)("p",null,"A destination is a data warehouse, data lake, database, or an analytics tool where you want to load your ingested data."),(0,r.kt)("h2",{id:"connection"},"Connection"),(0,r.kt)("p",null,"A connection is an automated data pipeline that replicates data from a source to a destination."),(0,r.kt)("h2",{id:"stream"},"Stream"),(0,r.kt)("p",null,"A stream is a group of related records."),(0,r.kt)("p",null,"Examples of streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A table in a relational database"),(0,r.kt)("li",{parentName:"ul"},"A resource or API endpoint for a REST API"),(0,r.kt)("li",{parentName:"ul"},"The records from a directory containing many files in a filesystem")),(0,r.kt)("h2",{id:"field"},"Field"),(0,r.kt)("p",null,"A field is an attribute of a record in a stream."),(0,r.kt)("p",null,"Examples of fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A column in the table in a relational database"),(0,r.kt)("li",{parentName:"ul"},"A field in an API response")),(0,r.kt)("h2",{id:"namespace"},"Namespace"),(0,r.kt)("p",null,"Namespace is a group of streams in a source or destination. Common use cases for namespaces are enforcing permissions, segregating test and production data, and general data organization."),(0,r.kt)("p",null,"Examples of namespace:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A schema in a relational database system is an example of a namespace.")),(0,r.kt)("h3",{id:"daspire-namespaces"},"Daspire namespaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In a source, the namespace is the location from where the data is replicated to the destination.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In a destination, the namespace is the location where the replicated data is stored in the destination."))),(0,r.kt)("p",null,"Daspire supports the following configuration options for destination namespaces:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mirror source structure"),(0,r.kt)("td",{parentName:"tr",align:null},'Some sources (for example, databases) provide namespace information for a stream. If a source provides the namespace information, the destination will reproduce the same namespace when this configuration is set. For sources or streams where the source namespace is not known, the behavior will default to the "Destination default" option.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Destination default"),(0,r.kt)("td",{parentName:"tr",align:null},"All streams will be replicated and stored in the default namespace defined on the destination settings page. For settings for popular destinations, see \u200b\u200bDestination Connector Settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom format"),(0,r.kt)("td",{parentName:"tr",align:null},"All streams will be replicated and stored in a user-defined custom format. See Custom format for more details.")))),(0,r.kt)("h2",{id:"connection-configurations"},"Connection configurations"),(0,r.kt)("p",null,"Setting up a connection involves configuring the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sync schedule"),(0,r.kt)("td",{parentName:"tr",align:null},"When should a data sync be triggered?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Destination Namespace and stream names"),(0,r.kt)("td",{parentName:"tr",align:null},"How should the replicated data be written?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data selection"),(0,r.kt)("td",{parentName:"tr",align:null},"What data should be replicated from the source to the destination?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("td",{parentName:"tr",align:null},"How should the data be replicated?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transformations"),(0,r.kt)("td",{parentName:"tr",align:null},"How should Daspire protocol messages (raw JSON blob) data be converted into other data representations?")))),(0,r.kt)("h2",{id:"connection-sync-modes"},"Connection sync modes"),(0,r.kt)("p",null,"A sync mode governs how Daspire reads from a source and writes to a destination. Daspire provides different sync modes to account for various use cases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full Refresh | Overwrite:")," Sync all records from the source and replace data in destination by overwriting it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full Refresh | Append:")," Sync all records from the source and add them to the destination without deleting any data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incremental Sync | Append:")," Sync new records from the source and add them to the destination without deleting any data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incremental Sync | Deduped History:")," Sync new records from the source and add them to the destination. Also provides a de-duplicated view mirroring the state of the stream in the source.")),(0,r.kt)("h2",{id:"normalization"},"Normalization"),(0,r.kt)("p",null,"Normalization is the process of structuring data from the source into a format appropriate for consumption in the destination. For example, when writing data from a nested, dynamically typed source like a JSON API to a relational destination like Postgres, normalization is the process which un-nests JSON from the source into a relational table format which uses the appropriate column types in the destination."),(0,r.kt)("p",null,"Note that normalization is only relevant for the following relational database & warehouse destinations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BigQuery"),(0,r.kt)("li",{parentName:"ul"},"Snowflake"),(0,r.kt)("li",{parentName:"ul"},"Redshift"),(0,r.kt)("li",{parentName:"ul"},"Postgres"),(0,r.kt)("li",{parentName:"ul"},"Oracle"),(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"MSSQL")),(0,r.kt)("p",null,"Other destinations do not support normalization as described in this section, though they may normalize data in a format that makes sense for them. For example, the S3 destination connector offers the option of writing JSON files in S3, but also offers the option of writing statically typed files such as Parquet or Avro."),(0,r.kt)("p",null,"After a sync is complete, Daspire normalizes the data. When setting up a connection, you can choose one of the following normalization options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Raw data (no normalization): Daspire places the JSON blob version of your data in a table called ",(0,r.kt)("inlineCode",{parentName:"li"},"_daspire_raw_<stream name>")),(0,r.kt)("li",{parentName:"ul"},"Basic Normalization: Daspire converts the raw JSON blob version of your data to the format of your destination. ",(0,r.kt)("em",{parentName:"li"},"Note: Not all destinations support normalization."))))}p.isMDXComponent=!0}}]);
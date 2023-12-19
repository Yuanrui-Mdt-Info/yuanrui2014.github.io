"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[6037],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5586:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},o="BigQuery",l={unversionedId:"setup-guide/destinations/bigquery",id:"setup-guide/destinations/bigquery",title:"BigQuery",description:"This page contains the setup guide and reference information for BigQuery.",source:"@site/docs/setup-guide/destinations/bigquery.md",sourceDirName:"setup-guide/destinations",slug:"/setup-guide/destinations/bigquery",permalink:"/setup-guide/destinations/bigquery",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Zendesk Talk",permalink:"/setup-guide/sources/zendesk-talk"},next:{title:"ClickHouse",permalink:"/setup-guide/destinations/clickhouse"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connection modes",id:"connection-modes",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up a data loading method",id:"step-1-set-up-a-data-loading-method",level:3},{value:"Using a Google Cloud Storage bucket (Recommended)",id:"using-a-google-cloud-storage-bucket-recommended",level:4},{value:"Using <code>INSERT</code>",id:"using-insert",level:4},{value:"Step 2: Set up the BigQuery destination in Daspire",id:"step-2-set-up-the-bigquery-destination-in-daspire",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Output schema",id:"output-schema",level:2},{value:"BigQuery Naming Conventions",id:"bigquery-naming-conventions",level:2},{value:"Data type map",id:"data-type-map",level:2},{value:"Troubleshooting permission issues",id:"troubleshooting-permission-issues",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bigquery"},"BigQuery"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for BigQuery."),(0,r.kt)("p",null,"Setting up the BigQuery destination involves setting up the data loading method (BigQuery Standard method and Google Cloud Storage (GCS) bucket) and configuring the BigQuery destination connector using Daspire."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console"},"A Google Cloud project with BigQuery enabled"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui#create_a_dataset"},"A BigQuery dataset")," to sync data to"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Queries written in BigQuery can only reference datasets in the same physical location. If you plan on combining the data that Daspire syncs with data from other datasets in your queries, create the datasets in the same location on Google Cloud. For more information, read ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/datasets-intro"},"Introduction to Datasets")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Google Cloud ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/service-accounts"},"Service Account")," with the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery"},"BigQuery User")," and ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery"},"BigQuery Data Editor")," roles and the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Service Account Key in JSON format"),"."))),(0,r.kt)("h2",{id:"connection-modes"},"Connection modes"),(0,r.kt)("p",null,"While setting up BigQuery, you can configure it in the following modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BigQuery")," : Produces a normalized output by storing the JSON blob data in ","_","daspire","_","raw","_","*"," tables and then transforming and normalizing the data into separate tables, potentially exploding nested streams into their own tables if basic normalization is configured.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BigQuery (Denormalized)"),': Leverages BigQuery capabilities with Structured and Repeated fields to produce a single "big" table per stream. Daspire does not support normalization for this option at this time.'))),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h3",{id:"step-1-set-up-a-data-loading-method"},"Step 1: Set up a data loading method"),(0,r.kt)("p",null,"Although you can load data using BigQuery's ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"},"INSERTS"),", we highly recommend using a ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/introduction"},"Google Cloud Storage bucket"),"."),(0,r.kt)("h4",{id:"using-a-google-cloud-storage-bucket-recommended"},"Using a Google Cloud Storage bucket (Recommended)"),(0,r.kt)("p",null,"To use a Google Cloud Storage bucket:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets"},"Create a Cloud Storage bucket")," with the Protection Tools set to none or Object versioning. Make sure the bucket does not have a ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/samples/storage-set-retention-policy"},"retention policy"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/authentication/managing-hmackeys#create"},"Create an HMAC key and access ID"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam-roles#standard-roles"},"Storage Object Admin"),(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam-roles#standard-roles"},"role")," to the Google Cloud ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/service-accounts"},"Service Account"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure your Cloud Storage bucket is accessible from the machine running Daspire. The easiest way to verify if Daspire is able to connect to your bucket is via the check connection tool in the UI."))),(0,r.kt)("h4",{id:"using-insert"},"Using ",(0,r.kt)("inlineCode",{parentName:"h4"},"INSERT")),(0,r.kt)("p",null,"You can use BigQuery's ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"},"INSERT")," statement to upload data directly from your source to BigQuery. While this is faster to set up initially, we strongly recommend not using this option for anything other than a quick demo. Due to the Google BigQuery SDK client limitations, using INSERT is 10x slower than using a Google Cloud Storage bucket, and you may see some failures for big datasets and slow sources (for example, if reading from a source takes more than 10-12 hours)."),(0,r.kt)("h3",{id:"step-2-set-up-the-bigquery-destination-in-daspire"},"Step 2: Set up the BigQuery destination in Daspire"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into your Daspire account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Destinations")," and then click ",(0,r.kt)("strong",{parentName:"p"},"+ New destination"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Set up the destination page, select ",(0,r.kt)("strong",{parentName:"p"},"BigQuery")," or ",(0,r.kt)("strong",{parentName:"p"},"BigQuery (denormalized typed struct)")," from the ",(0,r.kt)("strong",{parentName:"p"},"Destination type")," dropdown depending on whether you want to set it up in BigQuery or BigQuery (Denormalized) mode.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the name for the BigQuery connection.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Project ID")," , enter your ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects"},"Google Cloud project ID"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Dataset Location")," , select the location of your BigQuery dataset."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"WARNING:")," You cannot change the location later.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Default Dataset ID")," , enter the BigQuery ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/datasets#create-dataset"},"Dataset ID"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Loading Method")," , select Standard Inserts or GCS Staging."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"TIP:")," We recommend using the GCS Staging option.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Service Account Key JSON (Required for cloud, optional for open-source)"),", enter the Google Cloud ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Service Account Key in JSON format"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Transformation Query Run Type (Optional)"),", select ",(0,r.kt)("strong",{parentName:"p"},"interactive")," to have ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/running-queries#queries"},"BigQuery run interactive query jobs")," or ",(0,r.kt)("strong",{parentName:"p"},"batch")," to have ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/running-queries#batch"},"BigQuery run batch queries"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Interactive queries are executed as soon as possible and count towards daily concurrent quotas and limits, while batch queries are executed as soon as idle resources are available in the BigQuery shared resource pool. If BigQuery hasn't started the query within 24 hours, BigQuery changes the job priority to interactive. Batch queries don't count towards your concurrent rate limit, making it easier to start many queries at once.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Google BigQuery Client Chunk Size (Optional)"),", use the default value of 15 MiB. Later, if you see networking or memory management problems with the sync (specifically on the destination), try decreasing the chunk size. In that case, the sync will be slower but more likely to succeed."))),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("p",null,"The BigQuery destination supports the following sync modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Full Refresh Sync"),(0,r.kt)("li",{parentName:"ul"},"Incremental - Append Sync"),(0,r.kt)("li",{parentName:"ul"},"Incremental - Deduped History")),(0,r.kt)("h2",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"Daspire outputs each stream into its own table in BigQuery. Each table contains three columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"_daspire_ab_id"),": A UUID assigned by Daspire to each event that is processed. The column type in BigQuery is String.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"_daspire_emitted_at"),": A timestamp representing when the event was pulled from the data source. The column type in BigQuery is Timestamp.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"_daspire_data"),": A JSON blob representing the event data. The column type in BigQuery is String."))),(0,r.kt)("p",null,"The output tables in BigQuery are partitioned and clustered by the Time-unit column ",(0,r.kt)("inlineCode",{parentName:"p"},"_daspire_emitted_at")," at a daily granularity. Partitions boundaries are based on UTC time. This is useful to limit the number of partitions scanned when querying these partitioned tables, by using a predicate filter (a WHERE clause). Filters on the partitioning column are used to prune the partitions and reduce the query cost. (The parameter ",(0,r.kt)("strong",{parentName:"p"},"Require partition filter")," is not enabled by Daspire, but you may toggle it by updating the produced tables.)"),(0,r.kt)("h2",{id:"bigquery-naming-conventions"},"BigQuery Naming Conventions"),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/datasets#dataset-naming"},"BigQuery Datasets Naming conventions"),"."),(0,r.kt)("p",null,"Daspire converts any invalid characters into ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," characters when writing data. However, since datasets that begin with ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," are hidden on the BigQuery Explorer panel, Daspire prepends the namespace with n for converted namespaces."),(0,r.kt)("h2",{id:"data-type-map"},"Data type map"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Daspire type"),(0,r.kt)("th",{parentName:"tr",align:null},"BigQuery type"),(0,r.kt)("th",{parentName:"tr",align:null},"BigQuery denormalized type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING (BASE64)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NUMBER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FLOAT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FLOAT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OBJECT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RECORD"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOLEAN")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOLEAN")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOLEAN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTEGER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTEGER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTEGER"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING (BIG_NUMBER)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING (BIG_INTEGER)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ARRAY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REPEATED")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REPEATED"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING (TIMESTAMP_WITH_TIMEZONE)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATETIME"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING (TIMESTAMP_WITHOUT_TIMEZONE)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATETIME"))))),(0,r.kt)("h2",{id:"troubleshooting-permission-issues"},"Troubleshooting permission issues"),(0,r.kt)("p",null,"The service account does not have the proper permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure the BigQuery service account has BigQuery User and BigQuery Data Editor roles or equivalent permissions as those two roles.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the GCS staging mode is selected, ensure the BigQuery service account has the right permissions to the GCS bucket and path or the Cloud Storage Admin role, which includes a superset of the required permissions."))),(0,r.kt)("p",null,"The HMAC key is wrong:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure the HMAC key is created for the BigQuery service account, and the service account has permission to access the GCS bucket and path.")))}d.isMDXComponent=!0}}]);
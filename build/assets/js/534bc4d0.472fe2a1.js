"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[50],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o="MySQL",l={unversionedId:"setup-guide/destinations/mysql",id:"setup-guide/destinations/mysql",title:"MySQL",description:"This page contains the setup guide and reference information for MySQL.",source:"@site/docs/setup-guide/destinations/mysql.md",sourceDirName:"setup-guide/destinations",slug:"/setup-guide/destinations/mysql",permalink:"/setup-guide/destinations/mysql",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BigQuery",permalink:"/setup-guide/destinations/bigquery"},next:{title:"Redshift",permalink:"/setup-guide/destinations/redshift"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Permission",id:"permission",level:3},{value:"Network Access",id:"network-access",level:3},{value:"Target Database",id:"target-database",level:3},{value:"Features",id:"features",level:2},{value:"Output Schema",id:"output-schema",level:3},{value:"Setup guide",id:"setup-guide",level:2},{value:"Default JDBC URL Parameters",id:"default-jdbc-url-parameters",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Connection via SSH Tunnel",id:"connection-via-ssh-tunnel",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mysql"},"MySQL"),(0,i.kt)("p",null,"This page contains the setup guide and reference information for MySQL."),(0,i.kt)("p",null,"There are two types of connection for this destination:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"destination-mysql. Supports both SSL and non SSL connections."),(0,i.kt)("li",{parentName:"ol"},"destination-mysql-strict-encrypt. Pretty same as connector above, but supports SSL connections only.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To sync data to MySQL ",(0,i.kt)("strong",{parentName:"li"},"with normalization")," you'll need MySQL 8.0.0 or above"),(0,i.kt)("li",{parentName:"ul"},"To sync data to MySQL ",(0,i.kt)("strong",{parentName:"li"},"without normalization")," you'll need MySQL 5.0 or above."),(0,i.kt)("li",{parentName:"ul"},"Host"),(0,i.kt)("li",{parentName:"ul"},"Port"),(0,i.kt)("li",{parentName:"ul"},"Database"),(0,i.kt)("li",{parentName:"ul"},"Username"),(0,i.kt)("li",{parentName:"ul"},"Password")),(0,i.kt)("h3",{id:"permission"},"Permission"),(0,i.kt)("p",null,"You will need a MySQL user with ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE, INSERT, SELECT, DROP")," permissions. We highly recommend creating a Daspire-specific user for this purpose."),(0,i.kt)("h3",{id:"network-access"},"Network Access"),(0,i.kt)("p",null,"Make sure your MySQL database can be accessed by Daspire. If your database is within a VPC, you may need to allow access from the IP you're using to expose Daspire."),(0,i.kt)("h3",{id:"target-database"},"Target Database"),(0,i.kt)("p",null,"MySQL doesn't differentiate between a database and schema. A database is essentially a schema where all the tables live in. You will need to choose an existing database or create a new database. This will act as a default database/schema where the tables will be created if the source doesn't provide a namespace."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature"),(0,i.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SSH Tunnel Connection"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h3",{id:"output-schema"},"Output Schema"),(0,i.kt)("p",null,"Each stream will be output into its own table in MySQL. Each table will contain 3 columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"_daspire_ab_id"),": a uuid assigned by Daspire to each event that is processed. The column type in MySQL is ",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR(256)"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"_daspire_emitted_at"),": a timestamp representing when the event was pulled from the data source. The column type in MySQL is ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP(6)"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"_daspire_data"),": a json blob representing with the event data. The column type in MySQL is ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON"),"."))),(0,i.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"Before setting up MySQL destination in Daspire, you need to set the ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_local_infile"},"local_infile")," system variable to true. You can do this by running the query ",(0,i.kt)("inlineCode",{parentName:"p"},"SET GLOBAL local_infile = true")," with a user with ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_system-variables-admin"},"SYSTEM","_","VARIABLES","_","ADMIN")," permission. This is required cause Daspire uses ",(0,i.kt)("inlineCode",{parentName:"p"},"LOAD DATA LOCAL INFILE")," to load data into table."),(0,i.kt)("p",null,"You should now have all the requirements needed to configure MySQL as a destination in the UI. You'll need the following information to configure the MySQL destination:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Host")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Port")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Database")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"jdbc","_","url","_","params")," (Optional)")),(0,i.kt)("h3",{id:"default-jdbc-url-parameters"},"Default JDBC URL Parameters"),(0,i.kt)("p",null,"The following JDBC URL parameters are set by Daspire and cannot be overridden by the ",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc_url_params")," field:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useSSL=true")," (unless ",(0,i.kt)("inlineCode",{parentName:"li"},"ssl")," is set to false)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requireSSL=true")," (unless ",(0,i.kt)("inlineCode",{parentName:"li"},"ssl")," is set to false)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyServerCertificate=false")," (unless ",(0,i.kt)("inlineCode",{parentName:"li"},"ssl")," is set to false)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zeroDateTimeBehavior=convertToNull"))),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Note that MySQL documentation discusses identifiers case sensitivity using the ",(0,i.kt)("inlineCode",{parentName:"p"},"lower_case_table_names")," system variable. One of their recommendations is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"It is best to adopt a consistent convention, such as always creating and referring to databases and tables using lowercase names.\nThis convention is recommended for maximum portability and ease of use."\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/identifier-case-sensitivity.html"},"Source: MySQL docs")),(0,i.kt)("p",null,"As a result, Daspire MySQL destination forces all identifier (table, schema and columns) names to be lowercase."),(0,i.kt)("h2",{id:"connection-via-ssh-tunnel"},"Connection via SSH Tunnel"),(0,i.kt)("p",null,"Daspire has the ability to connect to a MySQL instance via an SSH Tunnel. The reason you might want to do this because it is not possible (or against security policy) to connect to the database directly (e.g. it does not have a public IP address)."),(0,i.kt)("p",null,"When using an SSH tunnel, you are configuring Daspire to connect to an intermediate server (a.k.a. a bastion server) that does have direct access to the database. Daspire connects to the bastion and then asks the bastion to connect directly to the server."),(0,i.kt)("p",null,"Using this feature requires additional configuration, when creating the destination. We will talk through what each piece of configuration means."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure all fields for the destination as you normally would, except ",(0,i.kt)("inlineCode",{parentName:"p"},"SSH Tunnel Method"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SSH Tunnel Method")," defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"No Tunnel")," (meaning a direct connection). If you want to use an SSH Tunnel choose ",(0,i.kt)("inlineCode",{parentName:"p"},"SSH Key Authentication")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Password Authentication"),"."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Key Authentication")," if you will be using an RSA private key as your secret for establishing the SSH Tunnel (see below for more information on generating this key).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Password Authentication")," if you will be using a password as your secret for establishing the SSH Tunnel."))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SSH Tunnel Jump Server Host")," refers to the intermediate (bastion) server that Daspire will connect to. This should be a hostname or an IP Address.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SSH Connection Port")," is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ",(0,i.kt)("inlineCode",{parentName:"p"},"22"),", so unless you have explicitly changed something, go with the default.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SSH Login Username")," is the username that Daspire should use when connection to the bastion server. This is NOT the MySQL username.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"Password Authentication"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"SSH Login Username")," should be set to the password of the User from the previous step. If you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"SSH Key Authentication")," leave this blank. Again, this is not the MySQL password, but the password for the OS-user that Daspire is using to perform commands on the bastion.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"SSH Key Authentication"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"SSH Private Key")," should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"-----BEGIN RSA PRIVATE KEY-----")," and ending with ",(0,i.kt)("inlineCode",{parentName:"p"},"-----END RSA PRIVATE KEY-----"),"."))))}d.isMDXComponent=!0}}]);
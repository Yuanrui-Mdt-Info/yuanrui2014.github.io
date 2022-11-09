"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[50],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="MySQL",s={unversionedId:"setup-guide/destinations/mysql",id:"setup-guide/destinations/mysql",title:"MySQL",description:"This page contains the setup guide and reference information for MySQL.",source:"@site/docs/setup-guide/destinations/mysql.md",sourceDirName:"setup-guide/destinations",slug:"/setup-guide/destinations/mysql",permalink:"/setup-guide/destinations/mysql",draft:!1,editUrl:"https://github.com/Yuanrui-Mdt-Info/daspire-docs/tree/main/docs/docs/setup-guide/destinations/mysql.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/setup-guide/sources/mysql"}},l={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for MySQL."),(0,r.kt)("p",null,"There are two types of connection for this destination:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"destination-mysql. Supports both SSL and non SSL connections.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"destination-mysql-strict-encrypt. Pretty same as connector above, but supports SSL connections only."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSH Tunnel Connection"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Output Schema")),(0,r.kt)("p",null,"Each stream will be output into its own table in MySQL. Each table will contain 3 columns:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"_","airbyte","_","ab","_","id: a uuid assigned by Daspire to each event that is processed. The column type in MySQL is VARCHAR(256).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"_","airbyte","_","emitted","_","at: a timestamp representing when the event was pulled from the data source. The column type in MySQL is TIMESTAMP(6).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"_","airbyte","_","data: a json blob representing with the event data. The column type in MySQL is JSON."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To sync data to MySQL ",(0,r.kt)("strong",{parentName:"p"},"with**")," normalization** you'll need MySQL 8.0.0 or above")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To sync data to MySQL ",(0,r.kt)("strong",{parentName:"p"},"without**")," normalization** you'll need MySQL 5.0 or above."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network Access")),(0,r.kt)("p",null,"Make sure your MySQL database can be accessed by Daspire. If your database is within a VPC, you may need to allow access from the IP you're using to expose Daspire."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Permissions")),(0,r.kt)("p",null,"You need a MySQL user with CREATE, INSERT, SELECT, DROP permissions. We highly recommend creating a Daspire-specific user for this purpose."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Target Database")),(0,r.kt)("p",null,"MySQL doesn't differentiate between a database and schema. A database is essentially a schema where all the tables live in. You will need to choose an existing database or create a new database. This will act as a default database/schema where the tables will be created if the source doesn't provide a namespace."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Setup guide")),(0,r.kt)("p",null,"Before setting up MySQL destination in Daspire, you need to set the ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_local_infile"},"local","_","infile")," system variable to true. You can do this by running the query SET GLOBAL local","_","infile = true with a user with ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_system-variables-admin"},"SYSTEM","_","VARIABLES","_","ADMIN")," permission. This is required cause Daspire uses LOAD DATA LOCAL INFILE to load data into table."),(0,r.kt)("p",null,"You should now have all the requirements needed to configure MySQL as a destination in the UI. You'll need the following information to configure the MySQL destination:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Host"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Port"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Username"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Password"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Database"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"jdbc","_","url","_","params")," (Optional)"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default JDBC URL Parameters")),(0,r.kt)("p",null,"The following JDBC URL parameters are set by Daspire and cannot be overridden by the jdbc","_","url","_","params field:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"useSSL=true (unless ssl is set to false)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"requireSSL=true (unless ssl is set to false)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"verifyServerCertificate=false (unless ssl is set to false)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"zeroDateTimeBehavior=convertToNull"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Limitations")),(0,r.kt)("p",null,"Note that MySQL documentation discusses identifiers case sensitivity using the lower","_","case","_","table","_","names system variable. One of their recommendations is:"),(0,r.kt)("p",null,'| Plain Text\n"It is best to adopt a consistent convention, such as always creating and referring to databases and tables using lowercase names.\nThis convention is recommended for maximum portability and ease of use." |\n| --- |'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/identifier-case-sensitivity.html"},"Source: MySQL docs")),(0,r.kt)("p",null,"As a result, Daspire MySQL destination forces all identifier (table, schema and columns) names to be lowercase."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connection via SSH Tunnel")),(0,r.kt)("p",null,"Daspire has the ability to connect to a MySQL instance via an SSH Tunnel. The reason you might want to do this because it is not possible (or against security policy) to connect to the database directly (e.g. it does not have a public IP address)."),(0,r.kt)("p",null,"When using an SSH tunnel, you are configuring Daspire to connect to an intermediate server (a.k.a. a bastion server) that does have direct access to the database. Daspire connects to the bastion and then asks the bastion to connect directly to the server."),(0,r.kt)("p",null,"Using this feature requires additional configuration, when creating the destination. We will talk through what each piece of configuration means."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure all fields for the destination as you normally would, except SSH Tunnel Method.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SSH Tunnel Method defaults to No Tunnel (meaning a direct connection). If you want to use an SSH Tunnel choose SSH Key Authentication or Password Authentication.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose Key Authentication if you will be using an RSA private key as your secret for establishing the SSH Tunnel (see below for more information on generating this key).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose Password Authentication if you will be using a password as your secret for establishing the SSH Tunnel.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SSH Tunnel Jump Server Host refers to the intermediate (bastion) server that Daspire will connect to. This should be a hostname or an IP Address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SSH Connection Port is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is 22, so unless you have explicitly changed something, go with the default.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SSH Login Username is the username that Daspire should use when connection to the bastion server. This is NOT the MySQL username.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using Password Authentication, then SSH Login Username should be set to the password of the User from the previous step. If you are using SSH Key Authentication leave this blank. Again, this is not the MySQL password, but the password for the OS-user that Daspire is using to perform commands on the bastion.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using SSH Key Authentication, then SSH Private Key should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with -----BEGIN RSA PRIVATE KEY----- and ending with -----END RSA PRIVATE KEY-----."))))}m.isMDXComponent=!0}}]);
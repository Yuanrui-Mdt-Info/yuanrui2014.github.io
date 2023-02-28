"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[15],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,N=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(N,l(l({ref:t},s),{},{components:n})):a.createElement(N,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},l="MySQL",o={unversionedId:"setup-guide/sources/mysql",id:"setup-guide/sources/mysql",title:"MySQL",description:"This page contains the setup guide and reference information for MySQL.",source:"@site/docs/setup-guide/sources/mysql.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/mysql",permalink:"/setup-guide/sources/mysql",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eBay",permalink:"/setup-guide/sources/ebay"},next:{title:"NetSuite",permalink:"/setup-guide/sources/netsuite"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Features",id:"features",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Change Data Capture (CDC)",id:"change-data-capture-cdc",level:2},{value:"CDC Limitations",id:"cdc-limitations",level:3},{value:"1. Enable binary logging",id:"1-enable-binary-logging",level:4},{value:"2. Enable GTIDs (optional)",id:"2-enable-gtids-optional",level:4},{value:"Connection via SSH Tunnel",id:"connection-via-ssh-tunnel",level:2},{value:"Generating an SSH Key Pair",id:"generating-an-ssh-key-pair",level:3},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for MySQL."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL Server ",(0,r.kt)("inlineCode",{parentName:"li"},"8.0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"5.7"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"5.6"),"."),(0,r.kt)("li",{parentName:"ul"},"Create a dedicated read-only Daspire user with access to all tables needed for replication."),(0,r.kt)("li",{parentName:"ul"},"Host"),(0,r.kt)("li",{parentName:"ul"},"Port"),(0,r.kt)("li",{parentName:"ul"},"Database"),(0,r.kt)("li",{parentName:"ul"},"Username"),(0,r.kt)("li",{parentName:"ul"},"Password")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Replicate Incremental Deletes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CDC"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSL Support"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSH Tunnel Connection"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arrays"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Byte arrays are not supported yet")))),(0,r.kt)("p",null,"The MySQL source does not alter the schema present in your database. Depending on the destination connected to this source, however, the schema may be altered. See the destination's documentation for more details."),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Make sure your database is accessible from the machine running Daspire")),(0,r.kt)("p",null,"This is dependent on your networking setup. The easiest way to verify if Daspire is able to connect to your MySQL instance is via the check connection tool in the UI."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Create a dedicated read-only user with access to the relevant tables (recommended but optional)")),(0,r.kt)("p",null,"This step is optional but highly recommended to allow for better permission control and auditing. Alternatively, you can use Daspire with an existing user in your database."),(0,r.kt)("p",null,"To create a dedicated database user, run the following commands against your database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE USER 'daspire'@'%' IDENTIFIED BY 'your_password_here'; \n")),(0,r.kt)("p",null,"The right set of permissions differ between the ",(0,r.kt)("inlineCode",{parentName:"p"},"STANDARD")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CDC")," replication method. For ",(0,r.kt)("inlineCode",{parentName:"p"},"STANDARD")," replication method, only ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," permission is required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GRANT SELECT ON <database name>.* TO 'daspire'@'%';\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"CDC")," replication method, ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RELOAD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW DATABASES"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLICATION SLAVE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLICATION CLIENT")," permissions are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GRANT SELECT, RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'daspire'@'%'; \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Set up CDC")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"STANDARD")," replication method this is not applicable. If you select the ",(0,r.kt)("inlineCode",{parentName:"p"},"CDC")," replication method then only this is required. Please read the ",(0,r.kt)("a",{parentName:"p",href:"#change-data-capture-cdc"},"section on CDC")," below for more information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. That's it!")),(0,r.kt)("p",null,"Your database user should now be ready for use with Daspire."),(0,r.kt)("h2",{id:"change-data-capture-cdc"},"Change Data Capture (CDC)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you need a record of deletions and can accept the limitations posted below, you should be able to use CDC for MySQL.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your data set is small, and you just want snapshot of your table in the destination, consider using Full Refresh replication for your table instead of CDC.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the limitations prevent you from using CDC and your goal is to maintain a snapshot of your table in the destination, consider using non-CDC incremental and occasionally reset the data and re-sync.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your table has a primary key but doesn't have a reasonable cursor field for incremental syncing (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at"),"), CDC allows you to sync your table incrementally."))),(0,r.kt)("h3",{id:"cdc-limitations"},"CDC Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CDC incremental is only supported for tables with primary keys. A CDC source can still choose to replicate tables without primary keys as Full Refresh or a non-CDC source can be configured for the same database to replicate the tables without primary keys using standard incremental replication.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data must be in tables, not views.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The modifications you are trying to capture must be made using ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),". For example, changes made from ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUNCATE"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER")," won't appear in logs and therefore in your destination.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We do not support schema changes automatically for CDC sources. We recommend resetting and resyncing data if you make a schema change.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There are database-specific limitations. See the documentation pages for individual connectors for more information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The records produced by ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," statements only contain primary keys. All other data fields are unset.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Our CDC implementation uses at least once delivery for all change records."))),(0,r.kt)("h4",{id:"1-enable-binary-logging"},"1. Enable binary logging"),(0,r.kt)("p",null,"You must enable binary logging for MySQL replication. The binary logs record transaction updates for replication tools to propagate changes. You can configure your MySQL server configuration file with the following properties, which are described in below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server-id                  = 223344\nlog_bin                    = mysql-bin\nbinlog_format              = ROW\nbinlog_row_image           = FULL\nbinlog_expire_log_seconds  = 864000\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"server-id"),": The value for the server-id must be unique for each server and replication client in the MySQL cluster. The ",(0,r.kt)("inlineCode",{parentName:"p"},"server-id")," should be a non-zero value. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"server-id")," is already set to a non-zero value, you don't need to make any change. You can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"server-id")," to any value between 1 and 4294967295. For more information refer ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options.html#sysvar_server_id"},"MySQL doc"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"log_bin"),": The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"log_bin")," is the base name of the sequence of binlog files. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"log_bin")," is already set, you don't need to make any change. For more information refer ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#option_mysqld_log-bin"},"MySQL doc"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"binlog_format"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"binlog_format")," must be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"ROW"),". For more information refer ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_format"},"MySQL doc"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"binlog_row_image"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"binlog_row_image")," must be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"FULL"),". It determines how row images are written to the binary log. For more information refer ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_binlog_row_image"},"MySQL doc"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"binlog_expire_log_seconds"),": This is the number of seconds for automatic binlog file removal. We recommend 864000 seconds (10 days) so that in case of a failure in sync or if the sync is paused, we still have some bandwidth to start from the last point in incremental sync. We also recommend setting frequent syncs for CDC."))),(0,r.kt)("h4",{id:"2-enable-gtids-optional"},"2. Enable GTIDs (optional)"),(0,r.kt)("p",null,"Global transaction identifiers (GTIDs) uniquely identify transactions that occur on a server within a cluster. Though not required for Daspire MySQL setup, using GTIDs simplifies replication and enables you to more easily confirm if primary and replica servers are consistent. For more information refer ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-gtids.html#option_mysqld_gtid-mode"},"MySQL doc"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enable ",(0,r.kt)("inlineCode",{parentName:"p"},"gtid_mode"),": Boolean that specifies whether GTID mode of the MySQL server is enabled or not. Enable it via ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql> gtid_mode=ON"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enable ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce_gtid_consistency"),": Boolean that specifies whether the server enforces GTID consistency by allowing the execution of statements that can be logged in a transactionally safe manner. Required when using GTIDs. Enable it via ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql> enforce_gtid_consistency=ON")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",null,"When a sync runs for the first time using CDC, Daspire performs an initial consistent snapshot of your database. Daspire doesn't acquire any table locks (for tables defined with MyISAM engine, the tables would still be locked) while creating the snapshot to allow writes by other database clients. But in order for the sync to work without any error/unexpected behaviour, it is assumed that no schema changes are happening while the snapshot is running."),(0,r.kt)("h2",{id:"connection-via-ssh-tunnel"},"Connection via SSH Tunnel"),(0,r.kt)("p",null,"Daspire has the ability to connect to a MySQL instance via an SSH Tunnel. The reason you might want to do this because it is not possible (or against security policy) to connect to the database directly (e.g. it does not have a public IP address)."),(0,r.kt)("p",null,"When using an SSH tunnel, you are configuring Daspire to connect to an intermediate server (a.k.a. a bastion server) that does have direct access to the database. Daspire connects to the bastion and then asks the bastion to connect directly to the server."),(0,r.kt)("p",null,"Using this feature requires additional configuration, when creating the source. We will talk through what each piece of configuration means."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure all fields for the source as you normally would, except ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Tunnel Method"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SSH Tunnel Method")," defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"No Tunnel")," (meaning a direct connection). If you want to use an SSH Tunnel choose ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Key Authentication")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Password Authentication"),"."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Key Authentication")," if you will be using an RSA private key as your secret for establishing the SSH Tunnel (see below for more information on generating this key).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Password Authentication")," if you will be using a password as your secret for establishing the SSH Tunnel."))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SSH Tunnel Jump Server Host")," refers to the intermediate (bastion) server that Daspire will connect to. This should be a hostname or an IP Address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SSH Connection Port")," is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ",(0,r.kt)("inlineCode",{parentName:"p"},"22"),", so unless you have explicitly changed something, go with the default.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SSH Login Username")," is the username that Daspire should use when connection to the bastion server. This is NOT the MySQL username.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"Password Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Login Username")," should be set to the password of the User from the previous step. If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Key Authentication")," leave this blank. Again, this is not the MySQL password, but the password for the OS-user that Daspire is using to perform commands on the bastion.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Key Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Private Key")," should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"-----BEGIN RSA PRIVATE KEY-----")," and ending with ",(0,r.kt)("inlineCode",{parentName:"p"},"-----END RSA PRIVATE KEY-----"),"."))),(0,r.kt)("h3",{id:"generating-an-ssh-key-pair"},"Generating an SSH Key Pair"),(0,r.kt)("p",null,"The connector expects an RSA key in PEM format. To generate this key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh-keygen -t rsa -m PEM -f myuser_rsa\n")),(0,r.kt)("p",null,"This produces the private key in pem format, and the public key remains in the standard format used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file on your bastion host. The public key should be added to your bastion host to whichever user you want to use with Daspire. The private key is provided via copy-and-paste to the Daspire connection configuration screen, so it may log in to the bastion."),(0,r.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"MySQL Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Daspire Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bit(1)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bit(>1)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64 binary string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tinyint(1)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tinyint(>1)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"smallint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mediumint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bigint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"double")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"decimal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"binary")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blob")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"ISO 8601 date string. ZERO-DATE value will be converted to NULL. If column is mandatory, convert to EPOCH.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"datetime"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"ISO 8601 datetime string. ZERO-DATE value will be converted to NULL. If column is mandatory, convert to EPOCH.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"ISO 8601 time string. Values are in range between 00:00:00 and 23:59:59.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"year")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"year string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc/refman/8.0/en/year.html"},"Doc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"varchar")," with non-binary charset"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"varchar")," with binary charset"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64 binary string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tinyblob")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64 binary string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blob")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64 binary string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mediumblob")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64 binary string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"longblob")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64 binary string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"binary")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64 binary string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"varbinary")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64 binary string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tinytext")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mediumtext")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"longtext")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serialized json string")),(0,r.kt)("td",{parentName:"tr",align:null},'E.g. {"a": 10, "b": 15}')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enum")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"set")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"E.g. blue, green, yellow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geometry")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base64 binary string")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Note: If you do not see a type in this list, assume that it is coerced into a string."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"There may be problems with mapping values in MySQL's datetime field to other relational data stores. MySQL permits zero values for date/time instead of NULL which may not be accepted by other data stores. To work around this problem, you can pass the following key value pair in the JDBC connector of the source setting ",(0,r.kt)("inlineCode",{parentName:"p"},"zerodatetimebehavior=Converttonull"),"."),(0,r.kt)("p",null,"Some users reported that they could not connect to Amazon RDS MySQL or MariaDB. This can be diagnosed with the error message: ",(0,r.kt)("inlineCode",{parentName:"p"},"Cannot create a PoolableConnectionFactory"),". To solve this issue add ",(0,r.kt)("inlineCode",{parentName:"p"},"enabledTLSProtocols=TLSv1.2")," in the JDBC parameters."),(0,r.kt)("p",null,"Another error that users have reported when trying to connect to Amazon RDS MySQL is ",(0,r.kt)("inlineCode",{parentName:"p"},"Error: HikariPool-1 - Connection is not available, request timed out after 30001ms."),". Many times this can be due to the VPC not allowing public traffic. However, we recommend going through ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/rds-cannot-connect/"},"this AWS troubleshooting checklist")," to the correct permissions/settings have been granted to allow connection to your database."))}m.isMDXComponent=!0}}]);
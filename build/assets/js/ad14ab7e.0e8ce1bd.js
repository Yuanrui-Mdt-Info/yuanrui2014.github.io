"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7849],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=p(a),k=r,h=c["".concat(d,".").concat(k)]||c[k]||m[k]||i;return a?n.createElement(h,l(l({ref:e},s),{},{components:a})):n.createElement(h,l({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},89882:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l="Oracle DB",o={unversionedId:"integrations/sources/oracle",id:"integrations/sources/oracle",title:"Oracle DB",description:"Features",source:"@site/../docs/integrations/sources/oracle.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/oracle",permalink:"/integrations/sources/oracle",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/oracle.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Oracle Siebel CRM",permalink:"/integrations/sources/oracle-siebel-crm"},next:{title:"Orb",permalink:"/integrations/sources/orb"}},d={},p=[{value:"Features",id:"features",level:2},{value:"Getting Started (Airbyte Cloud)",id:"getting-started-airbyte-cloud",level:2},{value:"Getting Started (Airbyte Open-Source)",id:"getting-started-airbyte-open-source",level:2},{value:"Requirements",id:"requirements",level:4},{value:"1. Make sure your database is accessible from the machine running Airbyte",id:"1-make-sure-your-database-is-accessible-from-the-machine-running-airbyte",level:4},{value:"2. Create a dedicated read-only user with access to the relevant tables (Recommended but optional)",id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables-recommended-but-optional",level:4},{value:"3. Include the schemas Airbyte should look at when configuring the Airbyte Oracle Source.",id:"3-include-the-schemas-airbyte-should-look-at-when-configuring-the-airbyte-oracle-source",level:4},{value:"Connection via SSH Tunnel",id:"connection-via-ssh-tunnel",level:2},{value:"Generating an SSH Key Pair",id:"generating-an-ssh-key-pair",level:3},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Encryption Options",id:"encryption-options",level:2},{value:"Changelog",id:"changelog",level:2}],s={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oracle-db"},"Oracle DB"),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Logical Replication ","(","WAL",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL Support"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSH Tunnel Connection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LogMiner"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Flashback"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enabled by default")))),(0,r.kt)("p",null,"The Oracle source does not alter the schema present in your database. Depending on the destination connected to this source, however, the schema may be altered. See the destination's documentation for more details."),(0,r.kt)("h2",{id:"getting-started-airbyte-cloud"},"Getting Started ","(","Airbyte Cloud",")"),(0,r.kt)("p",null,"On Airbyte Cloud, only TLS connections to your Oracle instance are supported. Other than that, you can proceed with the open-source instructions below."),(0,r.kt)("h2",{id:"getting-started-airbyte-open-source"},"Getting Started ","(","Airbyte Open-Source",")"),(0,r.kt)("h4",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Oracle ",(0,r.kt)("inlineCode",{parentName:"li"},"11g")," or above"),(0,r.kt)("li",{parentName:"ol"},"Allow connections from Airbyte to your Oracle database ","(","if they exist in separate VPCs",")"),(0,r.kt)("li",{parentName:"ol"},"Create a dedicated read-only Airbyte user with access to all tables needed for replication")),(0,r.kt)("h4",{id:"1-make-sure-your-database-is-accessible-from-the-machine-running-airbyte"},"1. Make sure your database is accessible from the machine running Airbyte"),(0,r.kt)("p",null,"This is dependent on your networking setup. The easiest way to verify if Airbyte is able to connect to your Oracle instance is via the check connection tool in the UI."),(0,r.kt)("h4",{id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables-recommended-but-optional"},"2. Create a dedicated read-only user with access to the relevant tables ","(","Recommended but optional",")"),(0,r.kt)("p",null,"This step is optional but highly recommended to allow for better permission control and auditing. Alternatively, you can use Airbyte with an existing user in your database."),(0,r.kt)("p",null,"To create a dedicated database user, run the following commands against your database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER airbyte IDENTIFIED BY <your_password_here>;\nGRANT CREATE SESSION TO airbyte;\n")),(0,r.kt)("p",null,"Next, grant the user read-only access to the relevant tables. The simplest way is to grant read access to all tables in the schema as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ANY TABLE TO airbyte;\n")),(0,r.kt)("p",null,"Or you can be more granular:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'GRANT SELECT ON "<schema_a>"."<table_1>" TO airbyte;\nGRANT SELECT ON "<schema_b>"."<table_2>" TO airbyte;\n')),(0,r.kt)("p",null,"Your database user should now be ready for use with Airbyte."),(0,r.kt)("h4",{id:"3-include-the-schemas-airbyte-should-look-at-when-configuring-the-airbyte-oracle-source"},"3. Include the schemas Airbyte should look at when configuring the Airbyte Oracle Source."),(0,r.kt)("p",null,"Case sensitive. Defaults to the upper-cased user if empty. If the user does not have access to the configured schemas, no tables will be discovered."),(0,r.kt)("h2",{id:"connection-via-ssh-tunnel"},"Connection via SSH Tunnel"),(0,r.kt)("p",null,"Airbyte has the ability to connect to a Oracle instance via an SSH Tunnel. The reason you might want to do this because it is not possible ","(","or against security policy",")"," to connect to the database directly ","(","e.g. it does not have a public IP address",")","."),(0,r.kt)("p",null,"When using an SSH tunnel, you are configuring Airbyte to connect to an intermediate server ","(","a.k.a. a bastion sever",")"," that ",(0,r.kt)("em",{parentName:"p"},"does")," have direct access to the database. Airbyte connects to the bastion and then asks the bastion to connect directly to the server."),(0,r.kt)("p",null,"Using this feature requires additional configuration, when creating the source. We will talk through what each piece of configuration means."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure all fields for the source as you normally would, except ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method")," defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"No Tunnel")," ","(","meaning a direct connection",")",". If you want to use an SSH Tunnel choose ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication"),".",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Key Authentication")," if you will be using an RSA private key as your secret for establishing the SSH Tunnel ","(","see below for more information on generating this key",")","."),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication")," if you will be using a password as your secret for establishing the SSH Tunnel."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Jump Server Host")," refers to the intermediate ","(","bastion",")"," server that Airbyte will connect to. This should be a hostname or an IP Address."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Connection Port")," is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ",(0,r.kt)("inlineCode",{parentName:"li"},"22"),", so unless you have explicitly changed something, go with the default."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," is the username that Airbyte should use when connection to the bastion server. This is NOT the Oracle username."),(0,r.kt)("li",{parentName:"ol"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," should be set to the password of the User from the previous step. If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," leave this blank. Again, this is not the Oracle password, but the password for the OS-user that Airbyte is using to perform commands on the bastion."),(0,r.kt)("li",{parentName:"ol"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Private Key")," should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----BEGIN RSA PRIVATE KEY-----")," and ending with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----END RSA PRIVATE KEY-----"),".")),(0,r.kt)("h3",{id:"generating-an-ssh-key-pair"},"Generating an SSH Key Pair"),(0,r.kt)("p",null,"The connector expects an RSA key in PEM format. To generate this key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ssh-keygen -t rsa -m PEM -f myuser_rsa\n")),(0,r.kt)("p",null,"This produces the private key in pem format, and the public key remains in the standard format used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file on your bastion host. The public key should be added to your bastion host to whichever user you want to use with Airbyte. The private key is provided via copy-and-paste to the Airbyte connector configuration screen, so it may log in to the bastion."),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("p",null,"Oracle data types are mapped to the following data types when synchronizing data. You can check the test values examples ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-oracle/src/test-integration/java/io/airbyte/integrations/source/oracle/OracleSourceComprehensiveTest.java"},"here"),". If you can't find the data type you are looking for or have any problems feel free to add a new test!"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Oracle Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Resulting Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"binary_double")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"binary_float")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blob")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"char")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"char(3 char)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"clob")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"decimal")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"float(5)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interval year to month")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"long raw")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number(6, 2)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nvarchar(3)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"raw")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp with local time zone")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp with time zone")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"varchar2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"varchar2(256)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"xmltype")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"If you do not see a type in this list, assume that it is coerced into a string. We are happy to take feedback on preferred mappings."),(0,r.kt)("h2",{id:"encryption-options"},"Encryption Options"),(0,r.kt)("p",null,"Airbyte has the ability to connect to the Oracle source with 3 network connectivity options:"),(0,r.kt)("p",null,"1.",(0,r.kt)("inlineCode",{parentName:"p"},"Unencrypted")," the connection will be made using the TCP protocol. In this case, all data over the network will be transmitted in unencrypted form. 2.",(0,r.kt)("inlineCode",{parentName:"p"},"Native network encryption")," gives you the ability to encrypt database connections, without the configuration overhead of TCP / IP and SSL / TLS and without the need to open and listen on different ports. In this case, the ",(0,r.kt)("em",{parentName:"p"},"SQLNET.ENCRYPTION","_","CLIENT")," option will always be set as ",(0,r.kt)("em",{parentName:"p"},"REQUIRED")," by default: The client or server will only accept encrypted traffic, but the user has the opportunity to choose an ",(0,r.kt)("inlineCode",{parentName:"p"},"Encryption algorithm")," according to the security policies he needs. 3.",(0,r.kt)("inlineCode",{parentName:"p"},"TLS Encrypted")," ","(","verify certificate",")"," - if this option is selected, data transfer will be transfered using the TLS protocol, taking into account the handshake procedure and certificate verification. To use this option, insert the content of the certificate issued by the server into the ",(0,r.kt)("inlineCode",{parentName:"p"},"SSL PEM file")," field"),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16238"},"16238")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Emit state messages more frequently")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-08-18"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14356"},"14356")),(0,r.kt)("td",{parentName:"tr",align:"left"},"DB Sources: only show a table can sync incrementally if at least one column can be used as a cursor field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.19"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-08-03"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14953"},"14953")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use Service Name to connect to database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.18"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-14"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14574"},"14574")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Removed additionalProperties:false from JDBC source connectors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.17"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-24"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14092"},"14092")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Introduced a custom jdbc param field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-22"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13997"},"13997")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fixed tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.15"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-29"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12480"},"12480")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Query tables with adaptive fetch size to optimize JDBC memory consumption")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.14"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-21"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10242"},"10242")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fixed cursor for old connectors that use non-microsecond format. Now connectors work with both formats")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-18"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10242"},"10242")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Updated timestamp transformation with microseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,r.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-24"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8958"},"8958")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add support for JdbcType.ARRAY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8582"},"8582")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8371"},"8371")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Fixed incorrect handling "\\n" in ssh key')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-10-13"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7125"},"7125")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix incorrect handling of LONG RAW data type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-10-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6616"},"6616")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added network encryption options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-30"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6585"},"6585")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improved SSH Tunnel key generation steps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-22"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6356"},"6356")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added option to connect to DB via SSH.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6038"},"6038")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove automatic filtering of system schemas.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5779"},"5779")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ability to only discover certain schemas.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-08-13"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4699"},"4699")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added json config validator.")))))}m.isMDXComponent=!0}}]);
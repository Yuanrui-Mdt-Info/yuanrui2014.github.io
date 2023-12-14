"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Oracle DB",l={unversionedId:"setup-guide/sources/oracle-db",id:"setup-guide/sources/oracle-db",title:"Oracle DB",description:"This page contains the setup guide and reference information for Oracle DB.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/setup-guide/sources/oracle-db.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/oracle-db",permalink:"/zh/setup-guide/sources/oracle-db",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Notion",permalink:"/zh/setup-guide/sources/notion"},next:{title:"PayPal",permalink:"/zh/setup-guide/sources/paypal"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"1. Make sure your database is accessible from the machine running Daspire",id:"1-make-sure-your-database-is-accessible-from-the-machine-running-daspire",level:3},{value:"2. Create a dedicated read-only user with access to the relevant tables",id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables",level:3},{value:"3. Include the schemas Daspire should look at when configuring the Oracle source.",id:"3-include-the-schemas-daspire-should-look-at-when-configuring-the-oracle-source",level:3},{value:"Connection via SSH Tunnel",id:"connection-via-ssh-tunnel",level:2},{value:"Generating an SSH Key Pair",id:"generating-an-ssh-key-pair",level:3},{value:"Encryption options",id:"encryption-options",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oracle-db"},"Oracle DB"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for Oracle DB."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental Sync - Append"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSH Tunnel Connection"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes - Enabled by default")))),(0,r.kt)("p",null,"The Oracle source does not alter the schema present in your database. Depending on the destination connected to this source, however, the schema may be altered. See the destination's documentation for more details."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oracle ",(0,r.kt)("inlineCode",{parentName:"li"},"11g")," or above"),(0,r.kt)("li",{parentName:"ul"},"Allow connections from Daspire to your Oracle database (if they exist in separate VPCs)"),(0,r.kt)("li",{parentName:"ul"},"Create a dedicated read-only Daspire user with access to all tables needed for replication (Optional, recommended)")),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h3",{id:"1-make-sure-your-database-is-accessible-from-the-machine-running-daspire"},"1. Make sure your database is accessible from the machine running Daspire"),(0,r.kt)("p",null,"  This is dependent on your networking setup. The easiest way to verify if Daspire is able to connect to your Oracle instance is via the check connection tool in the UI."),(0,r.kt)("h3",{id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables"},"2. Create a dedicated read-only user with access to the relevant tables"),(0,r.kt)("p",null,"This step is optional but highly recommended to allow for better permission control and auditing. Alternatively, you can use Daspire with an existing user in your database."),(0,r.kt)("p",null,"To create a dedicated database user, run the following commands against your database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE USER airbyte IDENTIFIED BY <your_password_here>;\nGRANT CREATE SESSION TO daspire;\n")),(0,r.kt)("p",null,"Next, grant the user read-only access to the relevant tables. The simplest way is to grant read access to all tables in the schema as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GRANT SELECT ANY TABLE TO daspire;\n")),(0,r.kt)("p",null,"Or you can be more granular:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'GRANT SELECT ON "<schema_a>"."<table_1>" TO daspire;\nGRANT SELECT ON "<schema_b>"."<table_2>" TO daspire;\n')),(0,r.kt)("p",null,"Your database user should now be ready for use with Daspire."),(0,r.kt)("h3",{id:"3-include-the-schemas-daspire-should-look-at-when-configuring-the-oracle-source"},"3. Include the schemas Daspire should look at when configuring the Oracle source."),(0,r.kt)("p",null,"  Case sensitive. Defaults to the upper-cased user if empty. If the user does not have access to the configured schemas, no tables will be discovered."),(0,r.kt)("h2",{id:"connection-via-ssh-tunnel"},"Connection via SSH Tunnel"),(0,r.kt)("p",null,"Daspire has the ability to connect to a Oracle instance via an SSH Tunnel. The reason you might want to do this because it is not possible (or against security policy) to connect to the database directly (e.g. it does not have a public IP address)."),(0,r.kt)("p",null,"When using an SSH tunnel, you are configuring Daspire to connect to an intermediate server (a.k.a. a bastion sever) that does have direct access to the database. Daspire connects to the bastion and then asks the bastion to connect directly to the server."),(0,r.kt)("p",null,"Using this feature requires additional configuration, when creating the source. We will talk through what each piece of configuration means."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure all fields for the source as you normally would, except ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Tunnel Method"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SSH Tunnel Method")," defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"No Tunnel")," (meaning a direct connection). If you want to use an SSH Tunnel choose ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Key Authentication")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Password Authentication"),"."),(0,r.kt)("p",{parentName:"li"},"i. Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Key Authentication")," if you will be using an RSA private key as your secret for establishing the SSH Tunnel (see below for more information on generating this key)."),(0,r.kt)("p",{parentName:"li"},"ii. Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Password Authentication")," if you will be using a password as your secret for establishing the SSH Tunnel.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SSH Tunnel Jump Server Host")," refers to the intermediate (bastion) server that Daspire will connect to. This should be a hostname or an IP Address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SSH Connection Port")," is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ",(0,r.kt)("inlineCode",{parentName:"p"},"22"),", so unless you have explicitly changed something, go with the default.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SSH Login Username")," is the username that Daspire should use when connection to the bastion server. This is NOT the Oracle username.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"Password Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Login Username")," should be set to the password of the User from the previous step. If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Key Authentication")," leave this blank. Again, this is not the Oracle password, but the password for the OS-user that Daspire is using to perform commands on the bastion.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Key Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Private Key")," should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"-----BEGIN RSA PRIVATE KEY-----")," and ending with ",(0,r.kt)("inlineCode",{parentName:"p"},"-----END RSA PRIVATE KEY-----"),"."))),(0,r.kt)("h3",{id:"generating-an-ssh-key-pair"},"Generating an SSH Key Pair"),(0,r.kt)("p",null,"The connector expects an RSA key in PEM format. To generate this key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh-keygen -t rsa -m PEM -f myuser_rsa\n")),(0,r.kt)("p",null,"This produces the private key in pem format, and the public key remains in the standard format used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file on your bastion host. The public key should be added to your bastion host to whichever user you want to use with Daspire. The private key is provided via copy-and-paste to the Daspire connector configuration screen, so it may log in to the bastion."),(0,r.kt)("h2",{id:"encryption-options"},"Encryption options"),(0,r.kt)("p",null,"Daspire has the ability to connect to the Oracle source with 3 network connectivity options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Unencrypted")," the connection will be made using the TCP protocol. In this case, all data over the network will be transmitted in unencrypted form.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Native network encryption")," gives you the ability to encrypt database connections, without the configuration overhead of TCP / IP and SSL / TLS and without the need to open and listen on different ports. In this case, the ",(0,r.kt)("em",{parentName:"p"},"SQLNET.ENCRYPTION_CLIENT")," option will always be set as ",(0,r.kt)("em",{parentName:"p"},"REQUIRED")," by default: The client or server will only accept encrypted traffic, but the user has the opportunity to choose an ",(0,r.kt)("inlineCode",{parentName:"p"},"Encryption algorithm")," according to the security policies he needs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TLS Encrypted")," (verify certificate) - if this option is selected, data transfer will be transfered using the TLS protocol, taking into account the handshake procedure and certificate verification. To use this option, insert the content of the certificate issued by the server into the ",(0,r.kt)("inlineCode",{parentName:"p"},"SSL PEM file")," field"))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Oracle Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Daspire Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"binary_double")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"binary_float")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blob")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char(3 char)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clob")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"decimal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float(5)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"interval year to month")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long raw")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number(6, 2)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nvarchar")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"raw")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp with local time zone")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp with time zone")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"varchar2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"varchar2(256)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"xmltype")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("p",null,"NOTE: If you do not see a type in this list, assume that it is coerced into a string."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))}u.isMDXComponent=!0}}]);
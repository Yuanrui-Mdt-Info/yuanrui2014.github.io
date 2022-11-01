"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1069],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,k=u["".concat(i,".").concat(d)]||u[d]||h[d]||s;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const s={description:"Using Airbyte and Apache Superset"},r="Build a Slack Activity Dashboard",l={unversionedId:"archive/examples/build-a-slack-activity-dashboard",id:"archive/examples/build-a-slack-activity-dashboard",title:"Build a Slack Activity Dashboard",description:"Using Airbyte and Apache Superset",source:"@site/../docs/archive/examples/build-a-slack-activity-dashboard.md",sourceDirName:"archive/examples",slug:"/archive/examples/build-a-slack-activity-dashboard",permalink:"/archive/examples/build-a-slack-activity-dashboard",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/archive/examples/build-a-slack-activity-dashboard.md",tags:[],version:"current",frontMatter:{description:"Using Airbyte and Apache Superset"}},i={},p=[{value:"1. Replicating Data from Slack to Postgres with Airbyte",id:"1-replicating-data-from-slack-to-postgres-with-airbyte",level:2},{value:"a. Deploying Airbyte",id:"a-deploying-airbyte",level:3},{value:"b. Setting Up Airbyte\u2019s Slack Source Connector",id:"b-setting-up-airbytes-slack-source-connector",level:3},{value:"c. Setting Up Airbyte\u2019s Postgres Destination Connector",id:"c-setting-up-airbytes-postgres-destination-connector",level:3},{value:"d. Setting Up the Replication",id:"d-setting-up-the-replication",level:3},{value:"2. Setting Up Apache Superset for the Dashboards",id:"2-setting-up-apache-superset-for-the-dashboards",level:2},{value:"a. Installing Apache Superset",id:"a-installing-apache-superset",level:3},{value:"b. Setting Up a Postgres Database in Superset",id:"b-setting-up-a-postgres-database-in-superset",level:3},{value:"c. Importing our dataset",id:"c-importing-our-dataset",level:3},{value:"3. Creating Our Dashboards with Superset",id:"3-creating-our-dashboards-with-superset",level:2},{value:"a. Total number of members of a Slack workspace",id:"a-total-number-of-members-of-a-slack-workspace",level:3},{value:"b. Casting the ts column",id:"b-casting-the-ts-column",level:3},{value:"c. The evolution of the number of Slack workspace members",id:"c-the-evolution-of-the-number-of-slack-workspace-members",level:3},{value:"d. Evolution of weekly messages posted",id:"d-evolution-of-weekly-messages-posted",level:3},{value:"e. Evolution of weekly threads created",id:"e-evolution-of-weekly-threads-created",level:3},{value:"f. Evolution of messages per channel",id:"f-evolution-of-messages-per-channel",level:3},{value:"g. Members per time zone",id:"g-members-per-time-zone",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-a-slack-activity-dashboard"},"Build a Slack Activity Dashboard"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13817).Z,width:"2166",height:"1244"})),(0,o.kt)("p",null,"This article will show how to use ",(0,o.kt)("a",{parentName:"p",href:"http://airbyte.io"},"Airbyte")," - an open-source data integration platform - and ",(0,o.kt)("a",{parentName:"p",href:"https://superset.apache.org/"},"Apache Superset")," - an open-source data exploration platform - in order to build a Slack activity dashboard showing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Total number of members of a Slack workspace"),(0,o.kt)("li",{parentName:"ul"},"The evolution of the number of Slack workspace members"),(0,o.kt)("li",{parentName:"ul"},"Evolution of weekly messages"),(0,o.kt)("li",{parentName:"ul"},"Evolution of messages per channel"),(0,o.kt)("li",{parentName:"ul"},"Members per time zone")),(0,o.kt)("p",null,"Before we get started, let\u2019s take a high-level look at how we are going to achieve creating a Slack dashboard using Airbyte and Apache Superset."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We will use the Airbyte\u2019s Slack connector to get the data off a Slack workspace ","(","we will be using Airbyte\u2019s own Slack workspace for this tutorial",")","."),(0,o.kt)("li",{parentName:"ol"},"We will save the data onto a PostgreSQL database."),(0,o.kt)("li",{parentName:"ol"},"Finally, using Apache Superset, we will implement the various metrics we care about.")),(0,o.kt)("p",null,"Got it? Now let\u2019s get started."),(0,o.kt)("h2",{id:"1-replicating-data-from-slack-to-postgres-with-airbyte"},"1. Replicating Data from Slack to Postgres with Airbyte"),(0,o.kt)("h3",{id:"a-deploying-airbyte"},"a. Deploying Airbyte"),(0,o.kt)("p",null,"There are several easy ways to deploy Airbyte, as listed ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/"},"here"),". For this tutorial, I will just use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/deploying-airbyte/local-deployment"},"Docker Compose method")," from my workstation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"# In your workstation terminal\ngit clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,o.kt)("p",null,"The above command will make the Airbyte app available on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8000"),". Visit the URL on your favorite browser, and you should see Airbyte\u2019s dashboard ","(","if this is your first time, you will be prompted to enter your email to get started",")","."),(0,o.kt)("p",null,"If you haven\u2019t set Docker up, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/"},"instructions here")," to set it up on your machine."),(0,o.kt)("h3",{id:"b-setting-up-airbytes-slack-source-connector"},"b. Setting Up Airbyte\u2019s Slack Source Connector"),(0,o.kt)("p",null,"Airbyte\u2019s Slack connector will give us access to the data. So, we are going to kick things off by setting this connector to be our data source in Airbyte\u2019s web app. I am assuming you already have Airbyte and Docker set up on your local machine. We will be using Docker to create our PostgreSQL database container later on."),(0,o.kt)("p",null,"Now, let\u2019s proceed. If you already went through the onboarding, click on the \u201cnew source\u201d button at the top right of the Sources section. If you're going through the onboarding, then follow the instructions."),(0,o.kt)("p",null,"You will be requested to enter a name for the source you are about to create. You can call it \u201cslack-source\u201d. Then, in the Source Type combo box, look for \u201cSlack,\u201d and then select it. Airbyte will then present the configuration fields needed for the Slack connector. So you should be seeing something like this on the Airbyte App:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(98017).Z,width:"2778",height:"1782"})),(0,o.kt)("p",null,"The first thing you will notice is that this connector requires a Slack token. So, we have to obtain one. If you are not a workspace admin, you will need to ask for permission."),(0,o.kt)("p",null,"Let\u2019s walk through how we would get the Slack token we need."),(0,o.kt)("p",null,"Assuming you are a workspace admin, open the Slack workspace and navigate to ","[","Workspace Name","]"," ",">"," Administration ",">"," Customize ","[","Workspace Name","]",". In our case, it will be Airbyte ",">"," Administration ",">"," Customize Airbyte ","(","as shown below",")",":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(30744).Z,width:"2796",height:"1312"})),(0,o.kt)("p",null,"In the new page that opens up in your browser, you will then need to navigate to ",(0,o.kt)("strong",{parentName:"p"},"Configure apps"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(35244).Z,width:"2800",height:"1408"})),(0,o.kt)("p",null,"In the new window that opens up, click on ",(0,o.kt)("strong",{parentName:"p"},"Build")," in the top right corner."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(10650).Z,width:"2804",height:"632"})),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Create an App")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(19033).Z,width:"2810",height:"1096"})),(0,o.kt)("p",null,"In the modal form that follows, give your app a name - you can name it ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte_superset"),", then select your workspace from the Development Slack Workspace."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(43135).Z,width:"2242",height:"1812"})),(0,o.kt)("p",null,"Next, click on the ",(0,o.kt)("strong",{parentName:"p"},"Create App")," button. You will then be presented with a screen where we are going to set permissions for our ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte_superset")," app, by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"Permissions")," button on this page."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(99119).Z,width:"2056",height:"1516"})),(0,o.kt)("p",null,"In the next screen, navigate to the scope section. Then, click on the ",(0,o.kt)("strong",{parentName:"p"},"Add an OAuth Scope")," button. This will allow you to add permission scopes for your app. At a minimum, your app should have the following permission scopes:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(58931).Z,width:"1212",height:"1854"})),(0,o.kt)("p",null,"Then, we are going to add our created app to the workspace by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Install to Workspace")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(19674).Z,width:"1808",height:"688"})),(0,o.kt)("p",null,"Slack will prompt you that your app is requesting permission to access your workspace of choice. Click Allow."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(15126).Z,width:"1784",height:"674"})),(0,o.kt)("p",null,"After the app has been successfully installed, you will be navigated to Slack\u2019s dashboard, where you will see the Bot User OAuth Access Token."),(0,o.kt)("p",null,"This is the token you will provide back on the Airbyte page, where we dropped off to obtain this token. So make sure to copy it and keep it in a safe place."),(0,o.kt)("p",null,"Now that we are done with obtaining a Slack token, let\u2019s go back to the Airbyte page we dropped off and add the token in there."),(0,o.kt)("p",null,"We will also need to provide Airbyte with ",(0,o.kt)("inlineCode",{parentName:"p"},"start_date"),". This is the date from which we want Airbyte to start replicating data from the Slack API, and we define that in the format: ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDT00:00:00Z"),"."),(0,o.kt)("p",null,"We will specify ours as ",(0,o.kt)("inlineCode",{parentName:"p"},"2020-09-01T00:00:00Z"),". We will also tell Airbyte to exclude archived channels and not include private channels, and also to join public channels, so the latter part of the form should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(83102).Z,width:"1808",height:"588"})),(0,o.kt)("p",null,"Finally, click on the ",(0,o.kt)("strong",{parentName:"p"},"Set up source")," button for Airbyte to set the Slack source up."),(0,o.kt)("p",null,"If the source was set up correctly, you will be taken to the destination section of Airbyte\u2019s dashboard, where you will tell Airbyte where to store the replicated data."),(0,o.kt)("h3",{id:"c-setting-up-airbytes-postgres-destination-connector"},"c. Setting Up Airbyte\u2019s Postgres Destination Connector"),(0,o.kt)("p",null,"For our use case, we will be using PostgreSQL as the destination."),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"add destination")," button in the top right corner, then click on ",(0,o.kt)("strong",{parentName:"p"},"add a new destination"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(59771).Z,width:"1924",height:"546"})),(0,o.kt)("p",null,"In the next screen, Airbyte will validate the source, and then present you with a form to give your destination a name. We\u2019ll call this destination slack-destination. Then, we will select the Postgres destination type. Your screen should look like this now:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(37222).Z,width:"1924",height:"1106"})),(0,o.kt)("p",null,"Great! We have a form to enter Postgres connection credentials, but we haven\u2019t set up a Postgres database. Let\u2019s do that!"),(0,o.kt)("p",null,"Since we already have Docker installed, we can spin off a Postgres container with the following command in our terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"docker run --rm --name slack-db -e POSTGRES_PASSWORD=password -p 2000:5432 -d postgres\n")),(0,o.kt)("p",null,"(","Note that the Docker compose file for Superset ships with a Postgres database, as you can see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/blob/master/docker-compose.yml#L40"},"here"),")","."),(0,o.kt)("p",null,"The above command will do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create a Postgres container with the name slack-db,"),(0,o.kt)("li",{parentName:"ul"},"set the password to password,"),(0,o.kt)("li",{parentName:"ul"},"expose the container\u2019s port 5432, as our machine\u2019s port 2000. "),(0,o.kt)("li",{parentName:"ul"},"create a database and a user, both called postgres. ")),(0,o.kt)("p",null,"With this, we can go back to the Airbyte screen and supply the information needed. Your form should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(14286).Z,width:"1920",height:"1108"})),(0,o.kt)("p",null,"Then click on the ",(0,o.kt)("strong",{parentName:"p"},"Set up destination")," button."),(0,o.kt)("h3",{id:"d-setting-up-the-replication"},"d. Setting Up the Replication"),(0,o.kt)("p",null,"You should now see the following screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(53693).Z,width:"1926",height:"1106"})),(0,o.kt)("p",null,"Airbyte will then fetch the schema for the data coming from the Slack API for your workspace. You should leave all boxes checked and then choose the sync frequency - this is the interval in which Airbyte will sync the data coming from your workspace. Let\u2019s set the sync interval to every 24 hours."),(0,o.kt)("p",null,"Then click on the ",(0,o.kt)("strong",{parentName:"p"},"Set up connection")," button."),(0,o.kt)("p",null,"Airbyte will now take you to the destination dashboard, where you will see the destination you just set up. Click on it to see more details about this destination."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6677).Z,width:"1924",height:"1110"})),(0,o.kt)("p",null,"You will see Airbyte running the very first sync. Depending on the size of the data Airbyte is replicating, it might take a while before syncing is complete."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(46727).Z,width:"1928",height:"1106"})),(0,o.kt)("p",null,"When it\u2019s done, you will see the ",(0,o.kt)("strong",{parentName:"p"},"Running status")," change to ",(0,o.kt)("strong",{parentName:"p"},"Succeeded"),", and the size of the data Airbyte replicated as well as the number of records being stored on the Postgres database."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8573).Z,width:"1928",height:"348"})),(0,o.kt)("p",null,"To test if the sync worked, run the following in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'docker exec slack-source psql -U postgres -c "SELECT * FROM public.users;"\n')),(0,o.kt)("p",null,"This should output the rows in the users\u2019 table."),(0,o.kt)("p",null,"To get the count of the users\u2019 table as well, you can also run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'docker exec slack-db psql -U postgres -c "SELECT count(*) FROM public.users;"\n')),(0,o.kt)("p",null,"Now that we have the data from the Slack workspace in our Postgres destination, we will head on to creating the Slack dashboard with Apache Superset."),(0,o.kt)("h2",{id:"2-setting-up-apache-superset-for-the-dashboards"},"2. Setting Up Apache Superset for the Dashboards"),(0,o.kt)("h3",{id:"a-installing-apache-superset"},"a. Installing Apache Superset"),(0,o.kt)("p",null,"Apache Superset, or simply Superset, is a modern data exploration and visualization platform. To get started using it, we will be cloning the Superset repo. Navigate to a destination in your terminal where you want to clone the Superset repo to and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/apache/superset.git\n")),(0,o.kt)("p",null,"It\u2019s recommended to check out the latest branch of Superset, so run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"cd superset\n")),(0,o.kt)("p",null,"And then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"git checkout latest\n")),(0,o.kt)("p",null,"Superset needs you to install and build its frontend dependencies and assets. So, we will start by installing the frontend dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"npm install\n")),(0,o.kt)("p",null,"Note: The above command assumes you have both Node and NPM installed on your machine."),(0,o.kt)("p",null,"Finally, for the frontend, we will build the assets by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"npm run build\n")),(0,o.kt)("p",null,"After that, go back up one directory into the Superset directory by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"cd..\n")),(0,o.kt)("p",null,"Then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"docker-compose up\n")),(0,o.kt)("p",null,"This will download the Docker images Superset needs and build containers and start services Superset needs to run locally on your machine."),(0,o.kt)("p",null,"Once that\u2019s done, you should be able to access Superset on your browser by visiting ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8088"},(0,o.kt)("inlineCode",{parentName:"a"},"http://localhost:8088")),", and you should be presented with the Superset login screen."),(0,o.kt)("p",null,"Enter username: ",(0,o.kt)("strong",{parentName:"p"},"admin")," and Password: ",(0,o.kt)("strong",{parentName:"p"},"admin")," to be taken to your Superset dashboard."),(0,o.kt)("p",null,"Great! You\u2019ve got Superset set up. Now let\u2019s tell Superset about our Postgres Database holding the Slack data from Airbyte."),(0,o.kt)("h3",{id:"b-setting-up-a-postgres-database-in-superset"},"b. Setting Up a Postgres Database in Superset"),(0,o.kt)("p",null,"To do this, on the top menu in your Superset dashboard, hover on the Data dropdown and click on ",(0,o.kt)("strong",{parentName:"p"},"Databases"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(91825).Z,width:"2168",height:"1280"})),(0,o.kt)("p",null,"In the page that opens up, click on the ",(0,o.kt)("strong",{parentName:"p"},"+ Database")," button in the top right corner."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7703).Z,width:"2168",height:"1280"})),(0,o.kt)("p",null,"Then, you will be presented with a modal to add your Database Name and the connection URI."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(93565).Z,width:"2162",height:"1280"})),(0,o.kt)("p",null,"Let\u2019s call our Database ",(0,o.kt)("inlineCode",{parentName:"p"},"slack_db"),", and then add the following URI as the connection URI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"postgresql://postgres:password@docker.for.mac.localhost:2000/postgres\n")),(0,o.kt)("p",null,"If you are on a Windows Machine, yours will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"postgresql://postgres:password@docker.for.win.localhost:2000/postgres\n")),(0,o.kt)("p",null,"Note: We are using ",(0,o.kt)("inlineCode",{parentName:"p"},"docker.for.[mac|win].localhost")," in order to access the localhost of your machine, because using just localhost will point to the Docker container network and not your machine\u2019s network."),(0,o.kt)("p",null,"Your Superset UI should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(61648).Z,width:"2166",height:"1278"})),(0,o.kt)("p",null,"We will need to enable some settings on this connection. Click on the ",(0,o.kt)("strong",{parentName:"p"},"SQL LAB SETTINGS")," and check the following boxes:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(19017).Z,width:"2162",height:"1278"})),(0,o.kt)("p",null,"Afterwards, click on the ",(0,o.kt)("strong",{parentName:"p"},"ADD")," button, and you will see your database on the data page of Superset."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(56455).Z,width:"2160",height:"1280"})),(0,o.kt)("h3",{id:"c-importing-our-dataset"},"c. Importing our dataset"),(0,o.kt)("p",null,"Now that you\u2019ve added the database, you will need to hover over the data menu again; now click on ",(0,o.kt)("strong",{parentName:"p"},"Datasets"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(82323).Z,width:"2164",height:"1278"})),(0,o.kt)("p",null,"Then, you will be taken to the datasets page:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(87521).Z,width:"2164",height:"1282"})),(0,o.kt)("p",null,"We want to only see the datasets that are in our ",(0,o.kt)("inlineCode",{parentName:"p"},"slack_db")," database, so in the Database that is currently showing All, select ",(0,o.kt)("inlineCode",{parentName:"p"},"slack_db")," and you will see that we don\u2019t have any datasets at the moment."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(15806).Z,width:"2164",height:"1282"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(33415).Z,width:"2160",height:"1278"})),(0,o.kt)("p",null,"You can fix this by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"+ DATASET")," button and adding the following datasets."),(0,o.kt)("p",null,"Note: Make sure you select the public schema under the Schema dropdown."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(98940).Z,width:"2160",height:"1276"})),(0,o.kt)("p",null,"Now that we have set up Superset and given it our Slack data, let\u2019s proceed to creating the visualizations we need."),(0,o.kt)("p",null,"Still remember them? Here they are again:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Total number of members of a Slack workspace"),(0,o.kt)("li",{parentName:"ul"},"The evolution of the number of Slack workspace members"),(0,o.kt)("li",{parentName:"ul"},"Evolution of weekly messages"),(0,o.kt)("li",{parentName:"ul"},"Evolution of weekly threads created"),(0,o.kt)("li",{parentName:"ul"},"Evolution of messages per channel"),(0,o.kt)("li",{parentName:"ul"},"Members per time zone")),(0,o.kt)("h2",{id:"3-creating-our-dashboards-with-superset"},"3. Creating Our Dashboards with Superset"),(0,o.kt)("h3",{id:"a-total-number-of-members-of-a-slack-workspace"},"a. Total number of members of a Slack workspace"),(0,o.kt)("p",null,"To get this, we will first click on the users\u2019 dataset of our ",(0,o.kt)("inlineCode",{parentName:"p"},"slack_db")," on the Superset dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(422).Z,width:"2162",height:"1282"})),(0,o.kt)("p",null,"Next, change ",(0,o.kt)("strong",{parentName:"p"},"untitled")," at the top to ",(0,o.kt)("strong",{parentName:"p"},"Number of Members"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(85300).Z,width:"2158",height:"1276"})),(0,o.kt)("p",null,"Now change the ",(0,o.kt)("strong",{parentName:"p"},"Visualization Type")," to ",(0,o.kt)("strong",{parentName:"p"},"Big Number,")," remove the ",(0,o.kt)("strong",{parentName:"p"},"Time Range")," filter, and add a Subheader named \u201cSlack Members.\u201d So your UI should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(44127).Z,width:"2164",height:"1278"})),(0,o.kt)("p",null,"Then, click on the ",(0,o.kt)("strong",{parentName:"p"},"RUN QUERY")," button, and you should now see the total number of members."),(0,o.kt)("p",null,"Pretty cool, right? Now let\u2019s save this chart by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"SAVE")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(17901).Z,width:"2088",height:"304"})),(0,o.kt)("p",null,"Then, in the ",(0,o.kt)("strong",{parentName:"p"},"ADD TO DASHBOARD")," section, type in \u201cSlack Dashboard\u201d, click on the \u201cCreate Slack Dashboard\u201d button, and then click the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button."),(0,o.kt)("p",null,"Great! We have successfully created our first Chart, and we also created the Dashboard. Subsequently, we will be following this flow to add the other charts to the created Slack Dashboard."),(0,o.kt)("h3",{id:"b-casting-the-ts-column"},"b. Casting the ts column"),(0,o.kt)("p",null,"Before we proceed with the rest of the charts for our dashboard, if you inspect the ",(0,o.kt)("strong",{parentName:"p"},"ts")," column on either the ",(0,o.kt)("strong",{parentName:"p"},"messages")," table or the ",(0,o.kt)("strong",{parentName:"p"},"threads")," table, you will see it\u2019s of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR"),". We can\u2019t really use this for our charts, so we have to cast both the ",(0,o.kt)("strong",{parentName:"p"},"messages")," and ",(0,o.kt)("strong",{parentName:"p"},"threads"),"\u2019 ",(0,o.kt)("strong",{parentName:"p"},"ts")," column as ",(0,o.kt)("inlineCode",{parentName:"p"},"TIMESTAMP"),". Then, we can create our charts from the results of those queries. Let\u2019s do this."),(0,o.kt)("p",null,"First, navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Data")," menu, and click on the ",(0,o.kt)("strong",{parentName:"p"},"Datasets")," link. In the list of datasets, click the ",(0,o.kt)("strong",{parentName:"p"},"Edit")," button for the ",(0,o.kt)("strong",{parentName:"p"},"messages")," table."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(80785).Z,width:"2172",height:"920"})),(0,o.kt)("p",null,"You\u2019re now in the Edit Dataset view. Click the ",(0,o.kt)("strong",{parentName:"p"},"Lock")," button to enable editing of the dataset. Then, navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Columns")," tab, expand the ",(0,o.kt)("strong",{parentName:"p"},"ts")," dropdown, and then tick the ",(0,o.kt)("strong",{parentName:"p"},"Is Temporal")," box."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(39909).Z,width:"2162",height:"1624"})),(0,o.kt)("p",null,"Persist the changes by clicking the Save button."),(0,o.kt)("h3",{id:"c-the-evolution-of-the-number-of-slack-workspace-members"},"c. The evolution of the number of Slack workspace members"),(0,o.kt)("p",null,"In the exploration page, let\u2019s first get the chart showing the evolution of the number of Slack members. To do this, make your settings on this page match the screenshot below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(59668).Z,width:"2170",height:"1262"})),(0,o.kt)("p",null,"Save this chart onto the Slack Dashboard."),(0,o.kt)("h3",{id:"d-evolution-of-weekly-messages-posted"},"d. Evolution of weekly messages posted"),(0,o.kt)("p",null,"Now, we will look at the evolution of weekly messages posted. Let\u2019s configure the chart settings on the same page as the previous one."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(28676).Z,width:"2170",height:"1450"})),(0,o.kt)("p",null,"Remember, your visualization will differ based on the data you have."),(0,o.kt)("h3",{id:"e-evolution-of-weekly-threads-created"},"e. Evolution of weekly threads created"),(0,o.kt)("p",null,"Now, we are finished with creating the message chart. Let's go over to the thread chart. You will recall that we will need to cast the ",(0,o.kt)("strong",{parentName:"p"},"ts")," column as stated earlier. So, do that and get to the exploration page, and make it match the screenshot below to achieve the required visualization:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(60949).Z,width:"2166",height:"1452"})),(0,o.kt)("h3",{id:"f-evolution-of-messages-per-channel"},"f. Evolution of messages per channel"),(0,o.kt)("p",null,"For this visualization, we will need a more complex SQL query. Here\u2019s the query we used ","(","as you can see in the screenshot below",")",":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"SELECT CAST(m.ts as TIMESTAMP), c.name, m.text\nFROM public.messages m\nINNER JOIN public.channels c\nON m.channel_id = c_id\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1114).Z,width:"2166",height:"1606"})),(0,o.kt)("p",null,"Next, click on ",(0,o.kt)("strong",{parentName:"p"},"EXPLORE")," to be taken to the exploration page; make it match the screenshot below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(63957).Z,width:"2170",height:"1446"})),(0,o.kt)("p",null,"Save this chart to the dashboard."),(0,o.kt)("h3",{id:"g-members-per-time-zone"},"g. Members per time zone"),(0,o.kt)("p",null,"Finally, we will be visualizing members per time zone. To do this, instead of casting in the SQL lab as we\u2019ve previously done, we will explore another method to achieve casting by using Superset\u2019s Virtual calculated column feature. This feature allows us to write SQL queries that customize the appearance and behavior of a specific column."),(0,o.kt)("p",null,"For our use case, we will need the updated column of the users table to be a ",(0,o.kt)("inlineCode",{parentName:"p"},"TIMESTAMP"),", in order to perform the visualization we need for Members per time zone. Let\u2019s start on clicking the edit icon on the users table in Superset."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(33421).Z,width:"2164",height:"238"})),(0,o.kt)("p",null,"You will be presented with a modal like so:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(30375).Z,width:"2166",height:"1212"})),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"CALCULATED COLUMNS")," tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(84495).Z,width:"2166",height:"1210"})),(0,o.kt)("p",null,"Then, click on the ",(0,o.kt)("strong",{parentName:"p"},"+ ADD ITEM")," button, and make your settings match the screenshot below."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(50377).Z,width:"2166",height:"1206"})),(0,o.kt)("p",null,"Then, go to the ",(0,o.kt)("strong",{parentName:"p"},"exploration")," page and make it match the settings below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(41655).Z,width:"2170",height:"1208"})),(0,o.kt)("p",null,"Now save this last chart, and head over to your Slack Dashboard. It should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13817).Z,width:"2166",height:"1244"})),(0,o.kt)("p",null,"Of course, you can edit how the dashboard looks to fit what you want on it."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this article, we looked at using Airbyte\u2019s Slack connector to get the data from a Slack workspace into a Postgres database, and then used Apache Superset to craft a dashboard of visualizations.If you have any questions about Airbyte, don\u2019t hesitate to ask questions on our ",(0,o.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),"! If you have questions about Superset, you can join the ",(0,o.kt)("a",{parentName:"p",href:"https://superset.apache.org/community/"},"Superset Community Slack"),"!"))}h.isMDXComponent=!0},98017:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-e7f6716f2b2c12c6e74f51bb448bfbed.png"},15126:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/10-7a6286eb537c4ccd3e68a5c453b5876f.png"},83102:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/11-84743647712775e01356f63489cdaa62.png"},59771:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-fe87d48c195c19a7d02bb39eca0b5313.png"},37222:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/13-4173d466ceb6134b326cbf30daf16ff0.png"},14286:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/14-adaa8a8473c3ed649fe5aab5056577a2.png"},53693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/15-19262a471b9d94a9f5d007d1cd751579.png"},6677:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/16-36a0b7e960618068daace8e0fdf0b99c.png"},46727:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/17-d683aa8508d81043e40ede2aa2f9bef6.png"},8573:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/18-c4f1a9c7a3c8b092677293d470cc32ca.png"},91825:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/19-1a065fec1eb054362be9743d5e480f27.png"},30744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2-32c4f1383db959f2ac0b3abd3ed1c30a.png"},7703:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20-1331b3d60bb6754851887efe4a8d0e78.png"},93565:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/21-8904fa320cf652f9b22427f983be8444.png"},61648:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/22-4cee5870f4a8b29e2dac986fd7ee5890.png"},19017:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/23-e78f3e23f8b2cdd3d0af3d2ccb8206d3.png"},56455:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/24-6dd579afcba8d0ad08ff75c682d2d3e3.png"},82323:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/25-91e5fde5a0dfdca7827c54ceefc988fd.png"},87521:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/26-37734db404d01ae2a4380036d1eb8734.png"},15806:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/27-9a9ab1334cececbc3afd73c34b140299.png"},33415:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/28-e2d93d83f56eb83af8fdff59b586fbf7.png"},98940:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/29-422d5ed3fb9d0415ef751421e7b1f2e3.png"},35244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3-76b95f9a3221543358c2cc142fe781bb.png"},422:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/30-62c234daf6c22e5c1993dfb59a61c91e.png"},85300:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/31-d7d4701b83796f3fc14516d0e16ec14d.png"},44127:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/32-bd3f2471ef6feb45cc18503c8e4e3748.png"},17901:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/33-1837e207a1ffb89137638ca899388fd4.png"},80785:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/34-9da7cb38509d21d0e92f0a28795bc90b.png"},39909:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/35-f995bc825f7606cf70a37f36344a111e.png"},59668:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/36-86538a5eefd0648e5906ef0d06490978.png"},28676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/37-8a5e4c6c92efd43dc30709311a505187.png"},60949:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/38-64f8821ccfed0bc466f5927eae55f082.png"},1114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/39-2b8fbabfe0b417be780b58f5df1b165e.png"},10650:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4-bd316f34e4cf1d1eee7bc7641945c905.png"},63957:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/40-52417acf066f02dfd5b015e573a0f41d.png"},33421:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/41-6bc8a5431bf44e660132cf62a08c2935.png"},30375:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/42-aa4d2dbc7b927b5cf7dc522cddef1a5a.png"},84495:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/43-c0ce19574ddcf249cbc897996415b33d.png"},50377:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/44-7eda20c8823856d93359639c80a9c062.png"},41655:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/45-29603fff3e6b1914899da10040591f73.png"},13817:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/46-403db245d51348fd3fd3346bc84a0998.png"},19033:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/5-ad4adbe33f7984980ad929420190edd8.png"},43135:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/6-6b95dbf8c16c04e5ec6a47f3b34501e9.png"},99119:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/7-ece928592b148c4cce1e237e9c458941.png"},58931:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/8-d6d4b6c336cf2110f6657c0d21a3e6a4.png"},19674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/9-d6d74a8557b568af0b85f2f3701a7d43.png"}}]);
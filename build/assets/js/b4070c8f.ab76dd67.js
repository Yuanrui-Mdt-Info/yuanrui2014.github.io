"use strict";(self.webpackChunkdaspire_docs=self.webpackChunkdaspire_docs||[]).push([[615],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=i,d=c["".concat(l,".").concat(k)]||c[k]||u[k]||n;return a?r.createElement(d,s(s({ref:t},m),{},{components:a})):r.createElement(d,s({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={},s="GitHub",o={unversionedId:"setup-guide/sources/github",id:"setup-guide/sources/github",title:"GitHub",description:"This page contains the setup guide and reference information for GitHub.",source:"@site/docs/setup-guide/sources/github.md",sourceDirName:"setup-guide/sources",slug:"/setup-guide/sources/github",permalink:"/setup-guide/sources/github",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Sheets",permalink:"/setup-guide/sources/google-sheets"},next:{title:"HubSpot",permalink:"/setup-guide/sources/hubspot"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Features",id:"features",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Obtain GitHub personal access token",id:"step-1-obtain-github-personal-access-token",level:3},{value:"Step 2: Set up GitHub in Daspire",id:"step-2-set-up-github-in-daspire",level:3},{value:"Supported streams",id:"supported-streams",level:2},{value:"Notes",id:"notes",level:3},{value:"Performance consideration",id:"performance-consideration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github"},"GitHub"),(0,i.kt)("p",null,"This page contains the setup guide and reference information for GitHub."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"List of GitHub repositories"),(0,i.kt)("li",{parentName:"ul"},"GitHub personal access token")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature"),(0,i.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Full Refresh Overwrite"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Full Refresh Append"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Incremental Sync Append"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Incremental Sync Append + Deduped"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h3",{id:"step-1-obtain-github-personal-access-token"},"Step 1: Obtain GitHub personal access token"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sign in to your GitHub account.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to Settings -> Developer settings -> ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"Personal access tokens")," page.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Generate new token"),", select ",(0,i.kt)("strong",{parentName:"p"},"scopes")," which define the access for the token, and click ",(0,i.kt)("strong",{parentName:"p"},"Generate token"),".\n",(0,i.kt)("img",{alt:"GitHub personal access token",src:a(9802).Z,title:"GitHub personal access token",width:"1026",height:"329"})),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"NOTE: Your token should have at least the ",(0,i.kt)("inlineCode",{parentName:"p"},"repo")," scope. Depending on which streams you want to sync, the user generating the token needs more permissions:")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"For syncing Collaborators, the user which generates the personal access token must be a collaborator. To become a collaborator, they must be invited by an owner. If there are no collaborators, no records will be synced. Read more about access permissions ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/learning-about-github/access-permissions-on-github"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"For syncing ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams"},"Teams")," is only available to authenticated members of a team's organization. Personal user accounts and repositories belonging to them don't have access to Teams features. In this case no records will be synced."),(0,i.kt)("li",{parentName:"ul"},"For syncing Projects, the repository must have the Projects feature enabled.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save your access token for later use."))),(0,i.kt)("h3",{id:"step-2-set-up-github-in-daspire"},"Step 2: Set up GitHub in Daspire"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"GitHub")," from the Source list.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a ",(0,i.kt)("strong",{parentName:"p"},"Source Name"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Authenticate with ",(0,i.kt)("strong",{parentName:"p"},"Personal Access Token"),". To load balance your API quota consumption across multiple API tokens, input multiple tokens separated with ",(0,i.kt)("inlineCode",{parentName:"p"},","),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GitHub Repositories")," - Enter a list of GitHub organizations/repositories, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"daspirehq/daspire")," for single repository, ",(0,i.kt)("inlineCode",{parentName:"p"},"daspirehq/daspire")," ",(0,i.kt)("inlineCode",{parentName:"p"},"daspirehq/daspire2")," for multiple repositories. If you want to specify the organization to receive data from all its repositories, then you should specify it according to the following example: ",(0,i.kt)("inlineCode",{parentName:"p"},"daspirehq/*"),"."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"CAUTION: Repositories with the wrong name or repositories that do not exist or have the wrong name format will be skipped."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Start date (Optional)")," - The date from which you'd like to replicate data for streams. For streams which support this configuration, only data generated on or after the start date will be replicated."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"These streams will only sync records generated on or after the Start Date: ",(0,i.kt)("inlineCode",{parentName:"li"},"comments"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"commit_comment_reactions"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"commit_comments"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"commits"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"deployments"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"events"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issue_comment_reactions"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issue_events"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issue_milestones"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issue_reactions"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issues"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"project_cards"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"project_columns"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"projects"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pull_request_comment_reactions"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pull_requests"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pull_requeststats"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"releases"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"review_comments"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"reviews"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"stargazers"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"workflow_runs"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"workflows"),"."))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The Start Date does not apply to the streams below and all data will be synced for these streams: ",(0,i.kt)("inlineCode",{parentName:"li"},"assignees"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"branches"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"collaborators"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issue_labels"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"organizations"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pull_request_commits"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pull_request_stats"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"repositories"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tags"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"teams"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"users"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Branch (Optional)")," - List of GitHub repository branches to pull commits from, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"daspirehq/daspire/main"),". If no branches are specified for a repository, the default branch will be pulled.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Max requests per hour (Optional)")," - The GitHub API allows for a maximum of 5,000 requests per hour (15,000 for Github Enterprise). You can specify a lower value to limit your use of the API quota. Refer to GitHub article ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/overview/rate-limits-for-the-rest-api"},"Rate limits for the REST API"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save & Test"),"."))),(0,i.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,i.kt)("p",null,"This source outputs the following ",(0,i.kt)("strong",{parentName:"p"},"full refresh streams"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/issues/assignees?apiVersion=2022-11-28#list-assignees"},"Assignees")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/branches/branches?apiVersion=2022-11-28#list-branches"},"Branches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/metrics/statistics?apiVersion=2022-11-28#get-all-contributor-commit-activity"},"Contributor Activity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/collaborators/collaborators?apiVersion=2022-11-28#list-repository-collaborators"},"Collaborators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#list-labels-for-a-repository"},"Issue labels")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/orgs/orgs?apiVersion=2022-11-28#list-organizations"},"Organizations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-commits-on-a-pull-request"},"Pull request commits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repository-tags"},"Tags")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/teams/members?apiVersion=2022-11-28#list-team-members"},"TeamMembers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/teams/members?apiVersion=2022-11-28#get-team-membership-for-a-user"},"TeamMemberships")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/teams/teams?apiVersion=2022-11-28#list-teams"},"Teams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/orgs/members?apiVersion=2022-11-28#list-organization-members"},"Users")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/issues/timeline?apiVersion=2022-11-28#list-timeline-events-for-an-issue"},"Issue timeline events"))),(0,i.kt)("p",null,"This source outputs the following ",(0,i.kt)("strong",{parentName:"p"},"incremental streams"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28#list-issue-comments-for-a-repository"},"Comments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/reactions?apiVersion=2022-11-28#list-reactions-for-a-commit-comment"},"Commit comment reactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/commits/comments?apiVersion=2022-11-28#list-commit-comments-for-a-repository"},"Commit comments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28#list-commits"},"Commits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/deployments/deployments?apiVersion=2022-11-28#list-deployments"},"Deployments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/activity/events?apiVersion=2022-11-28#list-repository-events"},"Events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reactions/reactions?apiVersion=2022-11-28#list-reactions-for-an-issue-comment"},"Issue comment reactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/issues/events?apiVersion=2022-11-28#list-issue-events-for-a-repository"},"Issue events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/issues/milestones?apiVersion=2022-11-28#list-milestones"},"Issue milestones")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reactions/reactions?apiVersion=2022-11-28#list-reactions-for-an-issue"},"Issue reactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues"},"Issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/projects/cards?apiVersion=2022-11-28#list-project-cards"},"Project (Classic) cards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/projects/columns?apiVersion=2022-11-28#list-project-columns"},"Project (Classic) columns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/projects/projects?apiVersion=2022-11-28#list-repository-projects"},"Projects (Classic)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/graphql/reference/objects#projectv2"},"ProjectsV2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reactions/reactions?apiVersion=2022-11-28#list-reactions-for-a-pull-request-review-comment"},"Pull request comment reactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/graphql/reference/objects#pullrequest"},"Pull request stats")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-pull-requests"},"Pull requests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#list-releases"},"Releases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-organization-repositories"},"Repositories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/pulls/comments?apiVersion=2022-11-28#list-review-comments-in-a-repository"},"Review comments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/pulls/reviews?apiVersion=2022-11-28#list-reviews-for-a-pull-request"},"Reviews")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/activity/starring?apiVersion=2022-11-28#list-stargazers"},"Stargazers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/pt/rest/actions/workflow-jobs?apiVersion=2022-11-28#list-jobs-for-a-workflow-run"},"WorkflowJobs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28#list-workflow-runs-for-a-repository"},"WorkflowRuns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/actions/workflows?apiVersion=2022-11-28#list-repository-workflows"},"Workflows"))),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Only 4 streams (",(0,i.kt)("inlineCode",{parentName:"p"},"comments"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"commits"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"issues")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"review comments"),") from the listed above streams are pure incremental meaning that they:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"read only new records;"),(0,i.kt)("li",{parentName:"ul"},"output only new records.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Streams ",(0,i.kt)("inlineCode",{parentName:"p"},"workflow_runs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"worflow_jobs")," is almost pure incremental:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"read new records and some portion of old records (in past 30 days);"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"workflow_jobs")," depends on the ",(0,i.kt)("inlineCode",{parentName:"li"},"workflow_runs")," to read the data, so they both follow the same logic docs;"),(0,i.kt)("li",{parentName:"ul"},"output only new records.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Other 19 incremental streams are also incremental but with one difference, they:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"read all records;"),(0,i.kt)("li",{parentName:"ul"},"output only new records. Please, consider this behaviour when using those 19 incremental streams because it may affect you API call limits.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sometimes for large streams specifying very distant ",(0,i.kt)("inlineCode",{parentName:"p"},"start_date")," in the past may result in keep on getting error from GitHub instead of records. In this case Specifying more recent ",(0,i.kt)("inlineCode",{parentName:"p"},"start_date"),' may help. The "Start date" configuration option does not apply to the streams below, because the GitHub API does not include dates which can be used for filtering:'),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assignees")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"branches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collaborators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"issue_labels")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"organizations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pull_request_commits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pull_request_stats")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repositories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tags")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"teams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"users")))))),(0,i.kt)("h2",{id:"performance-consideration"},"Performance consideration"),(0,i.kt)("p",null,"The GitHub integration should not run into GitHub API limitations under normal usage. Refer to GitHub article ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/overview/rate-limits-for-the-rest-api"},"Rate limits for the REST API"),"."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached."))}u.isMDXComponent=!0},9802:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/github-generate-new-token-cc7c68215a4d2df01822d13659f78fea.jpg"}}]);
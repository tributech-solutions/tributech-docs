"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[4787],{43482:(e,t,n)=>{n.d(t,{Ay:()=>s});var a=n(58168),o=(n(96540),n(15680));const i={toc:[]},r="wrapper";function s(e){let{components:t,...s}=e;return(0,o.yg)(r,(0,a.A)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"We need to be able to connect to the API of the DSK Edge Agent to link & configure it with the Agent Companion.",(0,o.yg)("br",{parentName:"li"}),"Our recommended option is to open an SSH connection to the deployed virtual machine of the DSK Edge Agent with an SSH tunnel/port forwarding for the remote port of the API forwarding it to an local port on your localhost.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"ssh <vm-user>@<vm-ip> -L <local-port>:localhost:5000\n# e.g.\nssh tributech@20.86.158.183 -L 5000:localhost:5000\n")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"AgentCompanion - Connect 1",src:n(40377).A,width:"1965",height:"849"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"After the SSH connection with the tunnel/port forwarding is established we can connect to the DSK Edge Agent with the Agent-Companion.",(0,o.yg)("br",{parentName:"li"}),"(e.g. ",(0,o.yg)("inlineCode",{parentName:"li"},"http://localhost:5000"),")\n",(0,o.yg)("img",{alt:"AgentCompanion - Connect 2",src:n(75842).A,width:"2076",height:"1310"}))))}s.isMDXComponent=!0},7280:(e,t,n)=>{n.d(t,{Ay:()=>s});var a=n(58168),o=(n(96540),n(15680));const i={toc:[]},r="wrapper";function s(e){let{components:t,...n}=e;return(0,o.yg)(r,(0,a.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://tributechioapps.blob.core.windows.net/tributech-dsk-agent-companion/dist/packages/Tributech%20Agent%20Companion-1.10.0.dmg"},(0,o.yg)("strong",{parentName:"a"},"Download (macOS)"))))}s.isMDXComponent=!0},26357:(e,t,n)=>{n.d(t,{Ay:()=>s});var a=n(58168),o=(n(96540),n(15680));const i={toc:[]},r="wrapper";function s(e){let{components:t,...n}=e;return(0,o.yg)(r,(0,a.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://tributechioapps.blob.core.windows.net/tributech-dsk-agent-companion/dist/packages/Tributech%20Agent%20Companion%201.10.0.exe"},(0,o.yg)("strong",{parentName:"a"},"Download (Windows)"))))}s.isMDXComponent=!0},86730:(e,t,n)=>{n.d(t,{Ay:()=>s});var a=n(58168),o=(n(96540),n(15680));const i={toc:[]},r="wrapper";function s(e){let{components:t,...s}=e;return(0,o.yg)(r,(0,a.A)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"By linking the DSK Edge Agent all metadata for the agent is created on the DSK Node and we establish the trust between the parties.\nWe need to be logged in to the desired target Node and connected to the DSK Edge Agent (indicated by the green signs on the top right).\n",(0,o.yg)("img",{alt:"AgentCompanion - Link 1",src:n(38507).A,width:"2076",height:"1310"})),(0,o.yg)("li",{parentName:"ul"},"Click on Link/Relink Agent\n",(0,o.yg)("img",{alt:"AgentCompanion - Link 2",src:n(50864).A,width:"2076",height:"1310"})),(0,o.yg)("li",{parentName:"ul"},"The next step after linking is to configure the DSK Edge Agent\n",(0,o.yg)("img",{alt:"AgentCompanion - Link 3",src:n(57113).A,width:"2076",height:"1310"})),(0,o.yg)("li",{parentName:"ul"},"The DSK Edge Agent can now be configured based on twins with our twin builder.\n",(0,o.yg)("img",{alt:"AgentCompanion - Link 4",src:n(24070).A,width:"2205",height:"1365"}))))}s.isMDXComponent=!0},35205:(e,t,n)=>{n.d(t,{Ay:()=>s});var a=n(58168),o=(n(96540),n(15680));const i={toc:[]},r="wrapper";function s(e){let{components:t,...s}=e;return(0,o.yg)(r,(0,a.A)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Click Login (top right corner)."),(0,o.yg)("li",{parentName:"ul"},"Enter the name/domain of your DSK Hub and DSK Node and click Login (below).",(0,o.yg)("br",{parentName:"li"}),"(The provided information defines to which DSK Node an DSK Agent will be connected during the linking process.)\n",(0,o.yg)("img",{alt:"AgentCompanion - Login 1",src:n(13240).A,width:"1883",height:"1103"})),(0,o.yg)("li",{parentName:"ul"},"A window with the login page of the authentication server will pop-up where you can sign in with your personal user account of your DSK Node.\n",(0,o.yg)("img",{alt:"AgentCompanion - Login 2",src:n(87731).A,width:"2076",height:"1310"})),(0,o.yg)("li",{parentName:"ul"},"The window will be closed on successful login and the Agent Companion will be connected to the DSK Node (indicated by the green sign on top right at the DSK Node name).\n",(0,o.yg)("img",{alt:"AgentCompanion - Login 3",src:n(32522).A,width:"1883",height:"1103"}))))}s.isMDXComponent=!0},92507:(e,t,n)=>{n.d(t,{Ay:()=>s});var a=n(58168),o=(n(96540),n(15680));const i={toc:[]},r="wrapper";function s(e){let{components:t,...s}=e;return(0,o.yg)(r,(0,a.A)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The linked agent should be listed under ",(0,o.yg)("em",{parentName:"li"},"Agents"),".\n",(0,o.yg)("img",{alt:"DataSpace-Admin - Agent - Verify 1",src:n(7519).A,width:"2085",height:"1127"})),(0,o.yg)("li",{parentName:"ul"},"The streams should be available according to the twin configuration.\n",(0,o.yg)("img",{alt:"DataSpace-Admin - Agent - Verify 2",src:n(52868).A,width:"3840",height:"1994"})),(0,o.yg)("li",{parentName:"ul"},"Availability of (recent) data for streams can be verified.\n",(0,o.yg)("img",{alt:"DataSpace-Admin - Agent - Verify 3",src:n(92813).A,width:"3840",height:"1994"}),(0,o.yg)("img",{alt:"DataSpace-Admin - Agent - Verify 4",src:n(20306).A,width:"3840",height:"1994"}))))}s.isMDXComponent=!0},75618:(e,t,n)=>{n.d(t,{Ay:()=>s});var a=n(58168),o=(n(96540),n(15680));const i={toc:[]},r="wrapper";function s(e){let{components:t,...s}=e;return(0,o.yg)(r,(0,a.A)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A auto-generated dataset for the Agent should be present under ",(0,o.yg)("em",{parentName:"li"},"My Datasets"),(0,o.yg)("img",{alt:"DataSpace-Admin - Dataset - Verify 1",src:n(59290).A,width:"2085",height:"1127"})),(0,o.yg)("li",{parentName:"ul"},"With streams according to the twin configuration of the Agent.\n",(0,o.yg)("img",{alt:"DataSpace-Admin - Dataset - Verify 2",src:n(83953).A,width:"3840",height:"1994"})),(0,o.yg)("li",{parentName:"ul"},"Availability of (recent) data for streams can be verified.\n",(0,o.yg)("img",{alt:"DataSpace-Admin - Dataset - Verify 3",src:n(27656).A,width:"3840",height:"1994"}),(0,o.yg)("img",{alt:"DataSpace-Admin - Dataset - Verify 4",src:n(19175).A,width:"3840",height:"1994"}))))}s.isMDXComponent=!0},74329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>k,default:()=>O,frontMatter:()=>S,metadata:()=>C,toc:()=>K});var a=n(58168),o=n(96540),i=n(15680),r=n(63853),s=n(35205),l=n(43482),g=n(86730),c=n(92507),p=n(75618),d=n(26357),u=n(7280),m=n(20053),y=n(195),h=n(47422),f=n(65556),b=n(55236);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){const{lazy:t,block:n,defaultValue:i,values:r,groupId:s,className:l}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),c=r??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),p=(0,h.X)(c,((e,t)=>e.value===t.value));if(p.length>0)throw new Error(`Docusaurus error: Duplicate values "${p.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const d=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==d&&!c.some((e=>e.value===d)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${d}" but none of its children has the corresponding value. Available values are: ${c.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:u,setTabGroupChoices:y}=(0,f.x)(),[w,N]=(0,o.useState)(d),v=[],{blockElementScrollPositionUntilNextRender:D}=(0,b.a_)();if(null!=s){const e=u[s];null!=e&&e!==w&&c.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,n=v.indexOf(t),a=c[n].value;a!==w&&(D(t),N(a),null!=s&&y(s,String(a)))},k=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=v.indexOf(e.currentTarget)+1;t=v[n]??v[0];break}case"ArrowLeft":{const n=v.indexOf(e.currentTarget)-1;t=v[n]??v[v.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,m.A)("tabs-container",A.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("tabs",{"tabs--block":n},l)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.A)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>v.push(e),onKeyDown:k,onFocus:S,onClick:S},i,{className:(0,m.A)("tabs__item",A.tabItem,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,o.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function N(e){const t=(0,y.A)();return o.createElement(w,(0,a.A)({key:String(t)},e))}const v={tabItem:"tabItem_Ymn6"};function D(e){let{children:t,hidden:n,className:a}=e;return o.createElement("div",{role:"tabpanel",className:(0,m.A)(v.tabItem,a),hidden:n},t)}const S={title:"Setup Agent",sidebar_position:3},k=void 0,C={unversionedId:"quickstart/setup-agent",id:"version-1.10.0/quickstart/setup-agent",title:"Setup Agent",description:"In this step of our Quickstart Guide we will deploy a DSK Agent Edge with a DSK Edge Simulated Sensor/Source and link it to our Data Owner Node.",source:"@site/versioned_docs/version-1.10.0/quickstart/setup-agent.mdx",sourceDirName:"quickstart",slug:"/quickstart/setup-agent",permalink:"/1.10.0/quickstart/setup-agent",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-1.10.0/quickstart/setup-agent.mdx",tags:[],version:"1.10.0",sidebarPosition:3,frontMatter:{title:"Setup Agent",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup Owner Node",permalink:"/1.10.0/quickstart/install-owner-node"},next:{title:"Publish Dataset",permalink:"/1.10.0/quickstart/publish-dataset"}},T={},K=[{value:"Deploy DSK Agent Edge &amp; Simulated Sensor",id:"deploy-dsk-agent-edge--simulated-sensor",level:2},{value:"Link &amp; Configure with Agent Companion",id:"link--configure-with-agent-companion",level:2},{value:"Download &amp; Run",id:"download--run",level:3},{value:"Login to DSK Node",id:"login-to-dsk-node",level:3},{value:"Connect &amp; Link",id:"connect--link",level:3},{value:"Configure",id:"configure",level:3},{value:"Verify in DataSpace-Admin",id:"verify-in-dataspace-admin",level:2},{value:"Agent",id:"agent",level:3},{value:"Dataset",id:"setup-agent-verify-dataset",level:3}],E={toc:K},x="wrapper";function O(e){let{components:t,...o}=e;return(0,i.yg)(x,(0,a.A)({},E,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In this step of our Quickstart Guide we will deploy a DSK Agent Edge with a DSK Edge Simulated Sensor/Source and link it to our Data Owner Node."),(0,i.yg)("h2",{id:"deploy-dsk-agent-edge--simulated-sensor"},"Deploy DSK Agent Edge & Simulated Sensor"),(0,i.yg)(r.Ay,{mdxType:"DockerComposeAutomatedSetup"}),(0,i.yg)("h2",{id:"link--configure-with-agent-companion"},"Link & Configure with Agent Companion"),(0,i.yg)("p",null,"After the DSK Agent Edge is deployed and running we need to link it to our Node and configure it."),(0,i.yg)("h3",{id:"download--run"},"Download & Run"),(0,i.yg)(N,{defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,i.yg)(D,{value:"win",mdxType:"TabItem"},(0,i.yg)(d.Ay,{mdxType:"AgentCompanionDownloadWin"})),(0,i.yg)(D,{value:"mac",mdxType:"TabItem"},(0,i.yg)(u.Ay,{mdxType:"AgentCompanionDownloadMac"}))),(0,i.yg)("p",null,"More information on ",(0,i.yg)("a",{parentName:"p",href:"/1.10.0/setup/agent_companion"},(0,i.yg)("strong",{parentName:"a"},"Downloading & Running"))," the Agent Companion."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"AgentCompanion",src:n(45666).A,width:"2206",height:"1363"})),(0,i.yg)("h3",{id:"login-to-dsk-node"},"Login to DSK Node"),(0,i.yg)(s.Ay,{mdxType:"AgentCompanionLogin"}),(0,i.yg)("h3",{id:"connect--link"},"Connect & Link"),(0,i.yg)(l.Ay,{mdxType:"AgentCompanionConnect"}),(0,i.yg)(g.Ay,{mdxType:"AgentCompanionLink"}),(0,i.yg)("h3",{id:"configure"},"Configure"),(0,i.yg)("p",null,"We can now configure our DSK Agent Edge using a twin based configuration."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"As a simple starting point for our example scenario we can import the ",(0,i.yg)("em",{parentName:"li"},"Steel Factory Plant Line")," template.\n",(0,i.yg)("img",{alt:"AgentCompanion - Configure 1",src:n(81183).A,width:"2206",height:"1363"})),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("em",{parentName:"li"},"Steel Factory Plant Line")," template provides a full example twin configuration for the DSK Agent Edge and Simulated Sensor/Source which you can adapt to your desire.\n",(0,i.yg)("img",{alt:"AgentCompanion - Configure 2",src:n(44324).A,width:"2206",height:"1363"})),(0,i.yg)("li",{parentName:"ul"},"After we are finished with defining our twin configuration we need to ",(0,i.yg)("em",{parentName:"li"},"Upload To Device")," and verify it was ",(0,i.yg)("em",{parentName:"li"},"Successfully applied"),".\n",(0,i.yg)("img",{alt:"AgentCompanion - Configure 3",src:n(98221).A,width:"2206",height:"1363"}),"  ")),(0,i.yg)("h2",{id:"verify-in-dataspace-admin"},"Verify in DataSpace-Admin"),(0,i.yg)("p",null,"After our DSK Agent Edge and Simulated Sensor/Source was deployed, linked and configured, it will be present on the DSK Node as Agent including an auto-generated Dataset."),(0,i.yg)("h3",{id:"agent"},"Agent"),(0,i.yg)(c.Ay,{mdxType:"AgentCompanionVerifyAgent"}),(0,i.yg)("h3",{id:"setup-agent-verify-dataset"},"Dataset"),(0,i.yg)(p.Ay,{mdxType:"AgentCompanionVerifyDataset"}))}O.isMDXComponent=!0},63853:(e,t,n)=>{n.d(t,{Ay:()=>c});var a=n(58168),o=(n(96540),n(15680));const i={toc:[]},r="wrapper";function s(e){let{components:t,...s}=e;return(0,o.yg)(r,(0,a.A)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Login to the DataspaceAdmin"),(0,o.yg)("li",{parentName:"ul"},"Click on your account (top right) and than Administration\n",(0,o.yg)("img",{alt:"API Keys - 1",src:n(34007).A,width:"519",height:"382"})),(0,o.yg)("li",{parentName:"ul"},"Go to API Keys\n",(0,o.yg)("img",{alt:"API Keys - 2",src:n(75900).A,width:"2369",height:"1407"}))))}s.isMDXComponent=!0;const l={toc:[]},g="wrapper";function c(e){let{components:t,...i}=e;return(0,o.yg)(g,(0,a.A)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,'Use the "Deploy to Azure" button directly below to create a Linux virtual machine on Azure with everything pre-installed/configured and the Tributech DSK Edge services up and running.\nPreview the Azure resources that will be created with the "Visualize" button.',(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("a",{parentName:"p",href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-1.10.0%2Fdeployments%2Fdsk-agent%2Fazuredeploy.json/createUIDefinitionUri/https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-1.10.0%2Fdeployments%2Fdsk-agent%2FcreateUiDefinition.json"},(0,o.yg)("img",{parentName:"a",src:"https://aka.ms/deploytoazurebutton",alt:"Deploy to Azure"})),"\n",(0,o.yg)("a",{parentName:"p",href:"http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-1.10.0%2Fdeployments%2Fdsk-agent%2Fazuredeploy.json"},(0,o.yg)("img",{parentName:"a",src:"https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/visualizebutton.svg?sanitize=true",alt:"Visualize"}))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Select desired Azure Subscription/Resource Group/Region and define the name for the Agent related Azure resources (VM, Network security group,...). The Agent name must be unique within your Resource Group.\n",(0,o.yg)("img",{alt:"Agent deployment - Provide basic data",src:n(48858).A,width:"858",height:"655"}))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Define virtual machine Size and authentication related properties.",(0,o.yg)("br",{parentName:"p"}),"\n","The Size needs to meet our ",(0,o.yg)("a",{parentName:"p",href:"/1.10.0/setup/agent/overview#hardware-requirements"},(0,o.yg)("strong",{parentName:"a"},"Hardware Requirements")),". We recommend e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"Standard_B1ms")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"Standard_DS1_v2"),".",(0,o.yg)("br",{parentName:"p"}),"\n","SSH access allows to connect to the VM for ",(0,o.yg)("a",{parentName:"p",href:"/1.10.0/setup/agent/docker-compose#docker-compose-commands"},(0,o.yg)("strong",{parentName:"a"},"management purposes"))," and to support SSH tunneling/port forwarding used for connections to the DSK Agent from the Agent Companion (see ",(0,o.yg)("a",{parentName:"p",href:"/1.10.0/setup/agent_companion#connect-to-edge-agent"},(0,o.yg)("strong",{parentName:"a"},"Connect to Edge Agent")),").",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("img",{alt:"Agent deployment - Provide VM data",src:n(73521).A,width:"858",height:"698"}))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Provide DSK related configuration:"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"To access the client secrets and some other information required in the next steps:  ",(0,o.yg)(s,{mdxType:"ApiCredentials"})),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"DSK Agent id"),": globally unique identifier (UUID) for the Agent"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"DSK Hub name"),": The name of the DSK Hub to which your DSK Node is connected.",(0,o.yg)("br",{parentName:"li"}),"(e.g. ",(0,o.yg)("inlineCode",{parentName:"li"},"your-hub")," for ",(0,o.yg)("inlineCode",{parentName:"li"},"your-hub.dataspace-hub.com"),")",(0,o.yg)("admonition",{parentName:"li",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"On our ",(0,o.yg)("a",{parentName:"p",href:"https://tributech.io/playground"},(0,o.yg)("strong",{parentName:"a"},"Playground Ecosystem"))," this is ",(0,o.yg)("inlineCode",{parentName:"p"},"play")," for ",(0,o.yg)("inlineCode",{parentName:"p"},"play.dataspace-hub.com"),"."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"DSK Node name"),": The name of your DSK Node to which the DSK Agent will be linked.",(0,o.yg)("br",{parentName:"li"}),"(e.g. ",(0,o.yg)("inlineCode",{parentName:"li"},"your-node")," for ",(0,o.yg)("inlineCode",{parentName:"li"},"your-node.dataspace-node.com"),")"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Data-API client secret"),": The client secret for the authentication at the Data-API of the DSK Node."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Trust-API client secret"),": The client secret for the authentication at the Trust-API of the DSK Node."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Docker Registry Token (DSK Edge) name"),": The name of the token used for authentication at the private Docker Registry hosting the DSK Agent Docker images. Default: ",(0,o.yg)("inlineCode",{parentName:"li"},"tributech-io-dsk-edge"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Docker Registry Token (DSK Edge) secret"),": The access token for authentication at the private Docker Registry hosting the DSK Agent Docker images."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Docker Image Tag"),": The Docker Image tag defining the DSK Agent version to be deployed."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Additional DSK Edge services"),":",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"None"),": Only the main DSK Edge services (DSK Agent and mosquitto MQTT broker) will be deployed."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"DSK Edge Simulated Sensor"),": Additionally deploy the ",(0,o.yg)("a",{parentName:"li",href:"/1.10.0/setup/agent/sources/simulated"},(0,o.yg)("strong",{parentName:"a"},"DSK Edge Simulated Sensor"))," service."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"OPC UA Source and Server/Simulator"),": Additionally deploy the ",(0,o.yg)("a",{parentName:"li",href:"/1.10.0/setup/agent/sources/opc-ua"},(0,o.yg)("strong",{parentName:"a"},"OPC UA Source and Server/Simulator"))," service.")))),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"Agent deployment - Provide DSK data",src:n(17224).A,width:"858",height:"698"}))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Review terms and provided input and create the Azure resources.\n",(0,o.yg)("img",{alt:"Agent deployment - Review + Create",src:n(8743).A,width:"858",height:"698"}))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Successful deployment\ud83c\udf89.\n",(0,o.yg)("img",{alt:"Agent deployment - Successful deployment",src:n(21054).A,width:"858",height:"698"}))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Output of the deployment showing sample command to connect to the VM using SSH incl. port forwarding for access to the DSK Agent (e.g. for the Agent Companion).\n",(0,o.yg)("img",{alt:"Agent deployment - Deployment output",src:n(23157).A,width:"858",height:"655"}))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"You can now continue with ",(0,o.yg)("a",{parentName:"p",href:"/1.10.0/setup/agent_companion#agent-companion-connect"},(0,o.yg)("strong",{parentName:"a"},"connecting to, linking & configuring"))," the DSK Edge Agent."))))}c.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),g=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=g(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=g(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var g=2;g<i;g++)r[g]=n[g];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40377:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-connect-1-e70997740f3f046ed20641d78ff8506c.png"},75842:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-connect-2-33934b0c5e6a604535005585033d9104.png"},38507:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-link-1-fba89f8ecf427b4573951e2bb4d037fb.png"},50864:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-link-2-8dd63bb0111cebee25790d828dd12f30.png"},57113:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-link-3-c4707cfb78c6989ec951272d57c2c797.png"},24070:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-link-4-f2d1d772b08a86bf1e29c8ced89401a4.png"},13240:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-login-1-7414606146c3bb95cb15d7ac2e131375.png"},87731:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-login-2-15f7c62ef39903a88e12ff9445f25848.png"},32522:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-login-3-8448a6b45fbfe0829287b1f7f55df5a7.png"},59290:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-dataset-verify-1-b2a8113b733a57ecdfd7747d82e300a3.png"},83953:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-dataset-verify-2-8c4d7f31b5517edb57e1d54e12ddfd55.png"},27656:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-dataset-verify-3-7d7f2b7c943d9c5ea3712c7c106b5445.png"},19175:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-dataset-verify-4-f85c705680c3f7799f2ed56741775702.png"},7519:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-verify-1-8419dca1d7ccb70b3248d622466887d8.png"},52868:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-verify-2-3e71fb3f8a73ba0ff1e9cdb6771aa3a1.png"},92813:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-verify-3-5790b83ffaa268cb9449f4e857c970ef.png"},20306:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-verify-4-2e8a1cc12accb1a08e4e278c87480c4f.png"},34007:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/api-credentials-1-dac62fa56ea0e14ec6a197de98e44beb.png"},75900:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/api-credentials-2-f28de73988f3866d518213b0ea0d8475.png"},81183:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-configure-1-2bf3ca13b9bf0d7bb81e56706de21d27.png"},44324:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-configure-2-82e3d44f5d6ad30acbbfe96b986c7239.png"},98221:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-configure-3-d17acef91cc6db4485a8aba9abf5aafd.png"},45666:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-companion-f163e1b05992eedfb45a9b6922cf0974.png"},48858:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-docker-deploy-1-b5976f71dc1d2018aa8c21e94c40ea0b.png"},73521:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-docker-deploy-2-4790290fa5192b92a79bddd577b14e03.png"},17224:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-docker-deploy-3-493a240e211e281b6f26139d129f1ad3.png"},8743:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-docker-deploy-4-ac353dc1139f540b3fd2916f23303776.png"},21054:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-docker-deploy-5-b3cf76ab42fb2b9f378e3cf38ca0fe59.png"},23157:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent-docker-deploy-6-b4c32ebc979bf7beaedb47a8c655f414.png"}}]);
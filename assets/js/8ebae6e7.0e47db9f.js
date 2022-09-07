"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[7967],{1780:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Setup Owner Node",sidebar_position:2},s="Setup the Data Owner Node",c={unversionedId:"quickstart/install-owner-node",id:"version-1.10.0/quickstart/install-owner-node",title:"Setup Owner Node",description:"A demo of a Tributech DataSpace Node can be deployed with only a few clicks through the Azure Marketplace, as explained below.",source:"@site/versioned_docs/version-1.10.0/quickstart/install-owner-node.md",sourceDirName:"quickstart",slug:"/quickstart/install-owner-node",permalink:"/1.10.0/quickstart/install-owner-node",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-1.10.0/quickstart/install-owner-node.md",tags:[],version:"1.10.0",sidebarPosition:2,frontMatter:{title:"Setup Owner Node",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/1.10.0/quickstart/overview"},next:{title:"Setup Agent",permalink:"/1.10.0/quickstart/setup-agent"}},d={},p=[{value:"Go to the Azure Marketplace",id:"go-to-the-azure-marketplace",level:3},{value:"Fill in the Basic Information",id:"fill-in-the-basic-information",level:3},{value:"Enter User Information",id:"enter-user-information",level:3},{value:"Select VM Size",id:"select-vm-size",level:3},{value:"Review and Create",id:"review-and-create",level:3},{value:"Login to the DSK Node",id:"login-to-the-dsk-node",level:3}],u={toc:p};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-the-data-owner-node"},"Setup the Data Owner Node"),(0,o.kt)("p",null,"A demo of a Tributech DataSpace Node can be deployed with only a few clicks through the ",(0,o.kt)("a",{parentName:"p",href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/tributechsolutionsgmbh1582568815297.8aa9010b-3dd5-43e0-a4b6-53e2ea552e4a?tab=Overview"},(0,o.kt)("strong",{parentName:"a"},"Azure Marketplace")),", as explained below."),(0,o.kt)("h3",{id:"go-to-the-azure-marketplace"},"Go to the Azure Marketplace"),(0,o.kt)("p",null,'In the marketplace simply select the option "DataSpace Node - Select Hub" and click "Create".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Azure Marketplace",src:n(27713).Z,width:"1653",height:"1138"})),(0,o.kt)("h3",{id:"fill-in-the-basic-information"},"Fill in the Basic Information"),(0,o.kt)("p",null,"In the first step of the form fill in your desired Resource Group and Region and click next. It is a good idea to create a new Resource Group for this demo.\n",(0,o.kt)("img",{alt:"Step 1",src:n(62173).Z,width:"1161",height:"904"})),(0,o.kt)("h3",{id:"enter-user-information"},"Enter User Information"),(0,o.kt)("p",null,"Enter personal information for the user-account which will be created automatically on the node.",(0,o.kt)("br",null),'\nThen select a name for your node and enter it in the field "Deployment Name". Note that this name has to be unique! This name will be part of the URL of your node. After the deployment is finished, your node will be reachable under "',"[deployment-name]",'.dataspace-node.com". Take note of this URL for later steps.',(0,o.kt)("br",{parentName:"p"}),"\n","The DataSpace Hub Parameters define to which DSK ecosystem the DSK Node will be connected. For our ",(0,o.kt)("a",{parentName:"p",href:"https://tributech.io/playground"},(0,o.kt)("strong",{parentName:"a"},"Playground Ecosystem"))," the Hub URL is ",(0,o.kt)("inlineCode",{parentName:"p"},"play.dataspace-hub.com"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Hub Peer ID will currently be provided to you as part of the ",(0,o.kt)("strong",{parentName:"p"},"playground sign-up")," email. Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://tributech.io/playground"},(0,o.kt)("strong",{parentName:"a"},"Tributech.io/Playground"))," and sign-up if you're interested.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Email address must currently be unique within the whole DSK ecosystem! Please use an individual Email address for each node!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Step 2",src:n(8194).Z,width:"1137",height:"1173"})),(0,o.kt)("h3",{id:"select-vm-size"},"Select VM Size"),(0,o.kt)("p",null,"In the resource settings it is possible to select the VM Size. The default will work fine for most cases. Check out the ",(0,o.kt)("a",{parentName:"p",href:"/1.10.0/setup/node#node-requirements"},(0,o.kt)("strong",{parentName:"a"},"node requirements"))," for more information.\n",(0,o.kt)("img",{alt:"Step 3",src:n(16644).Z,width:"884",height:"386"})),(0,o.kt)("h3",{id:"review-and-create"},"Review and Create"),(0,o.kt)("p",null,'Finally, review the entered information and click "Create". Keep in mind that the deployment process takes some time to complete. Why not go and get a coffee now.\n',(0,o.kt)("img",{alt:"Step 4",src:n(17916).Z,width:"1119",height:"1477"})),(0,o.kt)("h3",{id:"login-to-the-dsk-node"},"Login to the DSK Node"),(0,o.kt)("p",null,'Once the deployment is complete you should be able to access the DataSpace Admin App through the newly created Node under "',"[deployment-name]",'.dataspace-node.com". You will be redirected to a login-page, enter the credentials that you specified in the setup process for the admin user.\n',(0,o.kt)("img",{alt:"DataSpace Admin - Login",src:n(49084).Z,width:"2586",height:"1500"})),(0,o.kt)("p",null,"After the successful login, you should have access to the DataSpace Admin App of your DataSpace Node and the Dashboard will be visible.\n",(0,o.kt)("img",{alt:"DataSpace Admin",src:n(5209).Z,width:"2586",height:"1500"})))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49084:function(e,t,n){t.Z=n.p+"assets/images/dataspace-admin-login-3383c500cd6d8da8bd62145b3add71b5.png"},5209:function(e,t,n){t.Z=n.p+"assets/images/dataspace-admin-f64a8313d519b58d145cca93e9bb64e0.png"},27713:function(e,t,n){t.Z=n.p+"assets/images/deploy-node-1-46f35f9b6bdcc08173f0b368a2187a65.png"},62173:function(e,t,n){t.Z=n.p+"assets/images/deploy-node-2-6a441e424fee70e414580928a2000e93.png"},8194:function(e,t,n){t.Z=n.p+"assets/images/deploy-node-3-183ca6217486c01009714eae0f5b4086.png"},16644:function(e,t,n){t.Z=n.p+"assets/images/deploy-node-4-17c8c66cda88e1fcf60af67c188482df.png"},17916:function(e,t,n){t.Z=n.p+"assets/images/deploy-node-5-8c8f5562014f5b01cace37355baa6bf4.png"}}]);
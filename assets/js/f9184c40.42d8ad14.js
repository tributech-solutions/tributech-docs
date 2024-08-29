"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[8496],{5141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const o={title:"Overview",sidebar_position:1},s="Setup Overview",i={unversionedId:"setup/overview",id:"version-1.10.0/setup/overview",title:"Overview",description:"This section of the documentation describes how to setup the individual components of the DataSpace Kit (DSK).",source:"@site/versioned_docs/version-1.10.0/setup/overview.md",sourceDirName:"setup",slug:"/setup/overview",permalink:"/1.10.0/setup/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-1.10.0/setup/overview.md",tags:[],version:"1.10.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Consume Data",permalink:"/1.10.0/quickstart/consume-data"},next:{title:"DSK Node",permalink:"/1.10.0/setup/node"}},l={},u=[{value:"DSK Ecoystem",id:"dsk-ecoystem",level:2},{value:"DSK Node",id:"dsk-node",level:2},{value:"DSK Agent",id:"dsk-agent",level:2},{value:"DSK Agent Edge",id:"dsk-agent-edge",level:3},{value:"DSK Agent Embedded",id:"dsk-agent-embedded",level:3},{value:"DSK Agent Integrated",id:"dsk-agent-integrated",level:3},{value:"DSK Agent Companion",id:"dsk-agent-companion",level:2}],d={toc:u},p="wrapper";function g(e){let{components:t,...o}=e;return(0,r.yg)(p,(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"setup-overview"},"Setup Overview"),(0,r.yg)("p",null,"This section of the documentation describes how to setup the individual components of the DataSpace Kit (DSK)."),(0,r.yg)("p",null,"The following table offers a quick overview of the components which are at the core of the Tributech DataSpace Kit.\n",(0,r.yg)("img",{alt:"Product Overview",src:n(84197).A,width:"2851",height:"2071"})),(0,r.yg)("p",null,"If it's your first time setting up the DSK we also suggest having a look at our ",(0,r.yg)("a",{parentName:"p",href:"/1.10.0/quickstart/overview"},(0,r.yg)("strong",{parentName:"a"},"Quick Start Guide")),"."),(0,r.yg)("h2",{id:"dsk-ecoystem"},"DSK Ecoystem"),(0,r.yg)("p",null,"The ecosystem consists of the DataSpace Hub and is managed & operated by Tributech. If you want to own an ecosystem, please reach out to us via our ",(0,r.yg)("a",{parentName:"p",href:"https://www.tributech.io/about-us/"},(0,r.yg)("strong",{parentName:"a"},"Contact Form")),"."),(0,r.yg)("h2",{id:"dsk-node"},"DSK Node"),(0,r.yg)("p",null,"The DataSpace Node serves as a platform and is most likely the part of the architecture that you'll want to setup first. It can either be managed or self-hosted.\nPlease refer to the ",(0,r.yg)("a",{parentName:"p",href:"/1.10.0/setup/node"},(0,r.yg)("strong",{parentName:"a"},"DSK Node setup"))," to learn about its setup and the available setup options."),(0,r.yg)("h2",{id:"dsk-agent"},"DSK Agent"),(0,r.yg)("p",null,"The device that is responsible for transmitting auditable data is the DSK Agent. This device can be an Embedded device or also an Edge device.\nThere are three variants of the DSK Agent available:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"DSK Agent Edge (software-based)"),(0,r.yg)("li",{parentName:"ul"},"DSK Agent Embedded (hardware-based)"),(0,r.yg)("li",{parentName:"ul"},"DSK Agent Integrated (running at the DSK Node)")),(0,r.yg)("h3",{id:"dsk-agent-edge"},"DSK Agent Edge"),(0,r.yg)("p",null,"The DSK Agent Edge is the most common Agent variant and is perfect for all software-based use-cases. Learn how to set it up in our ",(0,r.yg)("a",{parentName:"p",href:"/1.10.0/setup/agent/overview"},(0,r.yg)("strong",{parentName:"a"},"specific setup guide")),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"When to choose:"),(0,r.yg)("br",null),"\nThis option should be preferred if you have access to the controllers of the machines on the shop-floor but not to the sensors directly (e.g. Industrial IoT Gateway)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Data signing:"),(0,r.yg)("br",null),"\nData is signed on the shop-floor still close to the data-source (the closer to the data-source, the better for security)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Integration:"),(0,r.yg)("br",null),"\nYou can use your existing connectors, the Agent is integrated at the message bus layer."),(0,r.yg)("h3",{id:"dsk-agent-embedded"},"DSK Agent Embedded"),(0,r.yg)("p",null,"The DSK Agent Embedded reads data directly from sensors and uses a dedicated hardware security module for signing the data-streams. This is available as either a C implementation or as a dedicated hardware module in the form of our Sensor Security Module (SSM)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"When to choose:"),(0,r.yg)("br",null),"\nThis option should be preferred if you have access to your system on a sensor level."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Data signing:"),(0,r.yg)("br",null),"\nData is signed as close as possible to the data-source (the closer to the data-source, the better for security). This option offers the highest level of security."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Acquire:"),(0,r.yg)("br",null),"\n",(0,r.yg)("a",{parentName:"p",href:"https://www.tributech.io/about-us/"},(0,r.yg)("strong",{parentName:"a"},"Contact us"))," if you need more information or wish to acquire an SSM."),(0,r.yg)("h3",{id:"dsk-agent-integrated"},"DSK Agent Integrated"),(0,r.yg)("p",null,"The DataSpace Node comes with an integrated agent, there is no additional setup required for it."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"When to choose:"),(0,r.yg)("br",null),"\nThis option should be preferred if you are looking to use a software system (for example an ERP system) as a data-source."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Data signing:"),(0,r.yg)("br",null),"\nData is signed as soon as it reaches the node."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Integration:"),(0,r.yg)("br",null),"\nData can be sent to the integrated agent through the Trust-API - have a look at ",(0,r.yg)("a",{parentName:"p",href:"/1.10.0/provide_data/rest"},(0,r.yg)("strong",{parentName:"a"},"API integration")),". API Clients for C# can be found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/tributech-solutions/tributech-dsk-api-clients"},(0,r.yg)("strong",{parentName:"a"},"here")),"."),(0,r.yg)("h2",{id:"dsk-agent-companion"},"DSK Agent Companion"),(0,r.yg)("p",null,"The Tributech Agent Companion is an application for the management of the DSK Agent Edge & Sensor Securty Modules (SSM). Head over to ",(0,r.yg)("a",{parentName:"p",href:"/1.10.0/setup/agent_companion"},(0,r.yg)("strong",{parentName:"a"},"Agent Companion Setup"))," to find out more!"))}g.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,h=p["".concat(l,".").concat(c)]||p[c]||g[c]||o;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84197:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/productoverviewcomp-d476d5330048e5bffdcc20a946652924.svg"}}]);
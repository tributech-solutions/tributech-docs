"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[5543],{79469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Overview",sidebar_position:1},d="Setup Overview",l={unversionedId:"setup/overview",id:"version-2.0.0/setup/overview",title:"Overview",description:"This section of the documentation describes how to setup the individual components of the DataSpace Kit (DSK).",source:"@site/versioned_docs/version-2.0.0/setup/overview.md",sourceDirName:"setup",slug:"/setup/overview",permalink:"/docs/setup/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/setup/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Agent Architecture",permalink:"/docs/introduction/agent_architecture"},next:{title:"DSK Node",permalink:"/docs/setup/node"}},c={},u=[{value:"DSK Ecoystem",id:"dsk-ecoystem",level:2},{value:"DSK Node",id:"dsk-node",level:2},{value:"DSK Agent",id:"dsk-agent",level:2},{value:"DSK Agent Edge",id:"dsk-agent-edge",level:3},{value:"DSK Agent Embedded",id:"dsk-agent-embedded",level:3},{value:"DSK Agent Integrated",id:"dsk-agent-integrated",level:3},{value:"DSK Agent Companion",id:"dsk-agent-companion",level:2}],p={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-overview"},"Setup Overview"),(0,o.kt)("p",null,"This section of the documentation describes how to setup the individual components of the DataSpace Kit (DSK)."),(0,o.kt)("p",null,"The following table offers a quick overview of the components which are at the core of the Tributech DataSpace Kit.\n",(0,o.kt)("img",{alt:"Product Overview",src:n(11516).Z,width:"2851",height:"2071"})),(0,o.kt)("h2",{id:"dsk-ecoystem"},"DSK Ecoystem"),(0,o.kt)("p",null,"The ecosystem consists of the DataSpace Hub and is managed & operated by Tributech. If you want to own an ecosystem, please reach out to us via our ",(0,o.kt)("a",{parentName:"p",href:"https://www.tributech.io/about-us/"},(0,o.kt)("strong",{parentName:"a"},"Contact Form")),"."),(0,o.kt)("h2",{id:"dsk-node"},"DSK Node"),(0,o.kt)("p",null,"The DataSpace Node serves as the central platform and is the part of the system which should be deployed first since it allows you to participate in an ecosystem and connect your ",(0,o.kt)("a",{parentName:"p",href:"#dsk-agent"},(0,o.kt)("strong",{parentName:"a"},"DSK Agents")),".\nPlease refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup/node"},(0,o.kt)("strong",{parentName:"a"},"DSK Node setup"))," to learn more about the available hosting options."),(0,o.kt)("h2",{id:"dsk-agent"},"DSK Agent"),(0,o.kt)("p",null,"The device that is responsible for transmitting auditable data is the DSK Agent. This device can be an Embedded device or also an Edge device.\nThere are three variants of the DSK Agent available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DSK Agent Edge (software-based)"),(0,o.kt)("li",{parentName:"ul"},"DSK Agent Embedded (hardware-based)"),(0,o.kt)("li",{parentName:"ul"},"DSK Agent Integrated (running at the DSK Node)")),(0,o.kt)("h3",{id:"dsk-agent-edge"},"DSK Agent Edge"),(0,o.kt)("p",null,"The DSK Agent Edge is our containerized, software-based solution perfect for all devices/environments offering a ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup/agent/overview#software-requirements-software-requirements"},(0,o.kt)("strong",{parentName:"a"},"container runtime")),". Learn more in our ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup/agent/overview"},(0,o.kt)("strong",{parentName:"a"},"setup guide")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When to choose:"),(0,o.kt)("br",null),"\nThis option should be preferred if you have access to the controllers of the machines on the shop-floor but not to the sensors directly (e.g. Industrial IoT Gateway)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data signing:"),(0,o.kt)("br",null),"\nData is signed on the shop-floor still close to the data-source (the closer to the data-source, the better for security)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Integration:"),(0,o.kt)("br",null),"\nYou can use your existing connectors, the Agent is integrated at the message bus layer (e.g. ",(0,o.kt)("a",{parentName:"p",href:"/docs/provide_data/iot/mqtt"},(0,o.kt)("strong",{parentName:"a"},"MQTT")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/provide_data/iot/opc-ua"},(0,o.kt)("strong",{parentName:"a"},"OPC-UA")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/provide_data/iot/ads"},(0,o.kt)("strong",{parentName:"a"},"Beckhoff ADS")),",...)."),(0,o.kt)("h3",{id:"dsk-agent-embedded"},"DSK Agent Embedded"),(0,o.kt)("p",null,"The DSK Agent Embedded is our solution designed to read data directly from interfaces/sensors on the hardware level. It uses a dedicated hardware security module for signing the data-streams.\nThe DSK Agent Embedded is available as either a C implementation or as a dedicated hardware module."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tributech.io/blog/oem-module"},(0,o.kt)("strong",{parentName:"a"},"OEM Module")),(0,o.kt)("br",{parentName:"li"}),"We offer two variants, the OEM Module itself which can be directly integrated into your hardware design and an Arduino Shield for prototyping.\nThe shield can be used with all popular hardware development platforms like Arduino Uno, STM32 Nucelo, Infineon XMC Relax Kit and more.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"OEM Module",src:n(79720).Z,width:"1399",height:"500"}),(0,o.kt)("br",{parentName:"li"}),"An IoT device based on the OEM Module typically consists of three parts. Part 1: the Tributech OEM Module which takes care of connectivity, data management, configurations, updates and security. Part 2: the application-specific microcontroller which takes care of data pre-processing and business logic. Part 3: the sensors and interfaces needed for the application.\n",(0,o.kt)("img",{alt:"OEM Board",src:n(45109).Z,width:"2140",height:"918"}),(0,o.kt)("br",{parentName:"li"}),"On the device side, the OEM module provides a UART interface for exchanging configurations, providing telemetry data and performing updates. This allows developers to focus on firmware development for data pre-processing and sensor/interface integration, as all complexity is abstracted via an easy-to-use interface.",(0,o.kt)("br",null),(0,o.kt)("br",null),"\nOverview highlighting the role of the OEM module in the overall DSK:\n",(0,o.kt)("img",{alt:"OEM Board",src:n(44228).Z,width:"3857",height:"2117"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When to choose:"),(0,o.kt)("br",null),"\nThis option should be preferred if you have access to your system on a hardware interface/sensor level."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data signing:"),(0,o.kt)("br",null),"\nData is signed as close as possible to the data-source (the closer to the data-source, the better for security). This option offers the highest level of security."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Acquire:"),(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.tributech.io/about-us/"},(0,o.kt)("strong",{parentName:"a"},"Contact us"))," if you need more information or wish to acquire an SSM."),(0,o.kt)("h3",{id:"dsk-agent-integrated"},"DSK Agent Integrated"),(0,o.kt)("p",null,"The DataSpace Node comes with an integrated agent, there is no additional setup required for it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When to choose:"),(0,o.kt)("br",null),"\nThis option should be preferred if you are looking to use a software system (for example an ERP system) as a data-source."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data signing:"),(0,o.kt)("br",null),"\nData is signed as soon as it reaches the node."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Integration:"),(0,o.kt)("br",null),"\nData can be sent to the integrated agent through the Trust-API - have a look at ",(0,o.kt)("a",{parentName:"p",href:"/docs/provide_data/rest"},(0,o.kt)("strong",{parentName:"a"},"API integration")),". Generated API Clients for C# can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tributech-solutions/tributech-dsk-api-clients"},(0,o.kt)("strong",{parentName:"a"},"here")),"."),(0,o.kt)("h2",{id:"dsk-agent-companion"},"DSK Agent Companion"),(0,o.kt)("p",null,"The Tributech Agent Companion is an application for the management of the DSK Agent Edge & Embedded. Head over to ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion Setup"))," to find out more."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,g=p["".concat(d,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11516:function(e,t,n){t.Z=n.p+"assets/images/productoverviewcomp-d476d5330048e5bffdcc20a946652924.svg"},44228:function(e,t,n){t.Z=n.p+"assets/images/OEM_Architecture-b8c619a32ebd7fddb25b54e9e5350bc5.jpg"},45109:function(e,t,n){t.Z=n.p+"assets/images/OEM_Board-06e42dc5790d514533147f5ed210483a.jpg"},79720:function(e,t,n){t.Z=n.p+"assets/images/OEM_Module-0ce8c42f45987d5c8343d460e9036650.jpg"}}]);
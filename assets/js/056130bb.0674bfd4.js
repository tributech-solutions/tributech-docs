"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[5543],{79469:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={title:"Overview",sidebar_position:1},d="Setup Overview",u={unversionedId:"setup/overview",id:"version-2.0.0/setup/overview",title:"Overview",description:"This section of the documentation describes how to setup the individual resources offered by Tributech.",source:"@site/versioned_docs/version-2.0.0/setup/overview.md",sourceDirName:"setup",slug:"/setup/overview",permalink:"/setup/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/setup/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Agent Architecture",permalink:"/introduction/agent_architecture"},next:{title:"Tributech Node",permalink:"/setup/node"}},l={},c=[{value:"Tributech Node",id:"tributech-node",level:2},{value:"Tributech Agent",id:"dsk-agent",level:2},{value:"Tributech Agent Edge",id:"dsk-agent-edge",level:3},{value:"Tributech Agent Embedded",id:"dsk-agent-embedded",level:3},{value:"Tributech Agent Integrated",id:"dsk-agent-integrated",level:3}],p={toc:c};function h(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-overview"},"Setup Overview"),(0,o.kt)("p",null,"This section of the documentation describes how to setup the individual resources offered by Tributech."),(0,o.kt)("p",null,"The following table offers a quick overview covering our core components.\n",(0,o.kt)("img",{alt:"Product Overview",src:r(41487).Z,width:"1712",height:"633"})),(0,o.kt)("h2",{id:"tributech-node"},"Tributech Node"),(0,o.kt)("p",null,"The Node serves as central platform and is the part of the system which should be deployed first, since it allows you to ",(0,o.kt)("a",{parentName:"p",href:"#dsk-agent"},(0,o.kt)("strong",{parentName:"a"},"connect Tributech Agents")),".\nPlease refer to the ",(0,o.kt)("a",{parentName:"p",href:"/setup/node"},(0,o.kt)("strong",{parentName:"a"},"Node setup"))," to learn more about the available hosting options."),(0,o.kt)("h2",{id:"dsk-agent"},"Tributech Agent"),(0,o.kt)("p",null,"The device that is responsible for transmitting auditable data is the Tributech Agent. This device can be an Embedded device or also an Edge device.\nThere are three variants of the Agent available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Agent Edge (software-based)"),(0,o.kt)("li",{parentName:"ul"},"Agent Embedded (hardware-based)"),(0,o.kt)("li",{parentName:"ul"},"Agent Integrated (running at the Tributech Node)")),(0,o.kt)("h3",{id:"dsk-agent-edge"},"Tributech Agent Edge"),(0,o.kt)("p",null,"The Agent Edge is our containerized, software-based solution perfect for all devices/environments offering a ",(0,o.kt)("a",{parentName:"p",href:"/setup/agent/overview#software-requirements-software-requirements"},(0,o.kt)("strong",{parentName:"a"},"container runtime")),". Learn more in our ",(0,o.kt)("a",{parentName:"p",href:"/setup/agent/overview"},(0,o.kt)("strong",{parentName:"a"},"setup guide")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When to choose:"),(0,o.kt)("br",null),"\nThis option should be preferred if you have access to the controllers of the machines on the shop-floor but not to the sensors directly (e.g. Industrial IoT Gateway)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data signing:"),(0,o.kt)("br",null),"\nData is signed on the shop-floor still close to the data-source (the closer to the data-source, the better for security)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Integration:"),(0,o.kt)("br",null),"\nYou can use your existing connectors, the Agent is integrated at the message bus layer (e.g. ",(0,o.kt)("a",{parentName:"p",href:"/provide_data/iot/mqtt"},(0,o.kt)("strong",{parentName:"a"},"MQTT")),", ",(0,o.kt)("a",{parentName:"p",href:"/provide_data/iot/opc-ua"},(0,o.kt)("strong",{parentName:"a"},"OPC-UA")),", ",(0,o.kt)("a",{parentName:"p",href:"/provide_data/iot/ads"},(0,o.kt)("strong",{parentName:"a"},"Beckhoff ADS")),",...)."),(0,o.kt)("h3",{id:"dsk-agent-embedded"},"Tributech Agent Embedded"),(0,o.kt)("p",null,"The Agent Embedded is our solution designed to read data directly from interfaces/sensors on the hardware level. It uses a dedicated hardware security module for signing the data-streams.\nThe Agent Embedded is available as either a C implementation or as a dedicated hardware module."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tributech.io/blog/oem-module"},(0,o.kt)("strong",{parentName:"a"},"OEM Module")),(0,o.kt)("br",{parentName:"li"}),"We offer two variants, the OEM Module itself which can be directly integrated into your hardware design and an Arduino Shield for prototyping.\nThe shield can be used with all popular hardware development platforms like Arduino Uno, STM32 Nucelo, Infineon XMC Relax Kit and more.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"OEM Module",src:r(79720).Z,width:"1399",height:"500"}),(0,o.kt)("br",{parentName:"li"}),"An IoT device based on the OEM Module typically consists of three parts. Part 1: the Tributech OEM Module which takes care of connectivity, data management, configurations, updates and security. Part 2: the application-specific microcontroller which takes care of data pre-processing and business logic. Part 3: the sensors and interfaces needed for the application.\n",(0,o.kt)("img",{alt:"OEM Board",src:r(45109).Z,width:"2140",height:"918"}),(0,o.kt)("br",{parentName:"li"}),"On the device side, the OEM module provides a UART interface for exchanging configurations, providing telemetry data and performing updates. This allows developers to focus on firmware development for data pre-processing and sensor/interface integration, as all complexity is abstracted via an easy-to-use interface.",(0,o.kt)("br",null),(0,o.kt)("br",null),"\nOverview highlighting the role of the OEM module:\n",(0,o.kt)("img",{alt:"OEM Board",src:r(44228).Z,width:"3857",height:"2117"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When to choose:"),(0,o.kt)("br",null),"\nThis option should be preferred if you have access to your system on a hardware interface/sensor level."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data signing:"),(0,o.kt)("br",null),"\nData is signed as close as possible to the data-source (the closer to the data-source, the better for security). This option offers the highest level of security."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Acquire:"),(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.tributech.io/about-us/"},(0,o.kt)("strong",{parentName:"a"},"Contact us"))," if you need more information or wish to acquire one of our embedded devices."),(0,o.kt)("h3",{id:"dsk-agent-integrated"},"Tributech Agent Integrated"),(0,o.kt)("p",null,"The Tributech Node comes with an integrated agent, there is no additional setup required for it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When to choose:"),(0,o.kt)("br",null),"\nThis option should be preferred if you are looking to use a software system (for example an ERP system) as a data-source."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data signing:"),(0,o.kt)("br",null),"\nData is signed as soon as it reaches the node."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Integration:"),(0,o.kt)("br",null),"\nData can be sent to the integrated agent through the Trust-API - have a look at ",(0,o.kt)("a",{parentName:"p",href:"/provide_data/rest"},(0,o.kt)("strong",{parentName:"a"},"API integration")),". Generated API Clients for C# can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tributech-solutions/tributech-dsk-api-clients"},(0,o.kt)("strong",{parentName:"a"},"here")),"."))}h.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,g=p["".concat(d,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44228:function(e,t,r){t.Z=r.p+"assets/images/OEM_Architecture-b8c619a32ebd7fddb25b54e9e5350bc5.jpg"},45109:function(e,t,r){t.Z=r.p+"assets/images/OEM_Board-06e42dc5790d514533147f5ed210483a.jpg"},79720:function(e,t,r){t.Z=r.p+"assets/images/OEM_Module-0ce8c42f45987d5c8343d460e9036650.jpg"},41487:function(e,t,r){t.Z=r.p+"assets/images/setupproductoverview-aea3a0de985a457402f04b0635d813d3.png"}}]);
"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[9708],{80047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(58168),a=(r(96540),r(15680));const o={title:"Overview",sidebar_position:1},i="DSK Agent Edge Setup",s={unversionedId:"setup/agent/overview",id:"version-1.10.0/setup/agent/overview",title:"Overview",description:"The DSK Agent Edge setup consists of the main DSK Agent service (dsk-agent) and (optional) services like the MQTT broker (eclipse-mosquitto, for the communication on the edge) and/or for connecting external data sources e.g. OPC UA Source (opcua-source), Simulated Sensor/Source (simulated-sensor),...",source:"@site/versioned_docs/version-1.10.0/setup/agent/overview.md",sourceDirName:"setup/agent",slug:"/setup/agent/overview",permalink:"/1.10.0/setup/agent/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-1.10.0/setup/agent/overview.md",tags:[],version:"1.10.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DSK Node",permalink:"/1.10.0/setup/node"},next:{title:"Docker Compose Setup",permalink:"/1.10.0/setup/agent/docker-compose"}},u={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Runtime",id:"runtime",level:3},{value:"Docker / Docker Compose",id:"docker-runtime",level:4},{value:"Azure IoT Edge Runtime",id:"azure-iot-edge-runtime",level:4}],p={toc:m},g="wrapper";function l(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"dsk-agent-edge-setup"},"DSK Agent Edge Setup"),(0,a.yg)("p",null,"The DSK Agent Edge setup consists of the main DSK Agent service (",(0,a.yg)("inlineCode",{parentName:"p"},"dsk-agent"),") and (optional) services like the MQTT broker (",(0,a.yg)("inlineCode",{parentName:"p"},"eclipse-mosquitto"),", for the communication on the edge) and/or for connecting external data sources e.g. ",(0,a.yg)("a",{parentName:"p",href:"./sources/opc-ua"},(0,a.yg)("strong",{parentName:"a"},"OPC UA Source"))," (",(0,a.yg)("inlineCode",{parentName:"p"},"opcua-source"),"), ",(0,a.yg)("a",{parentName:"p",href:"./sources/simulated"},(0,a.yg)("strong",{parentName:"a"},"Simulated Sensor/Source"))," (",(0,a.yg)("inlineCode",{parentName:"p"},"simulated-sensor"),"),...",(0,a.yg)("br",{parentName:"p"}),"\n","The services are containerized and require a Linux based host system on the edge device with an according container runtime."),(0,a.yg)("h2",{id:"requirements"},"Requirements"),(0,a.yg)("p",null,"The edge device must meet the following hardware and software requirements."),(0,a.yg)("h3",{id:"hardware-requirements"},"Hardware Requirements"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Minimum Requirement"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Recommend Requirement"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"CPU"),(0,a.yg)("td",{parentName:"tr",align:"left"},"1 Core (x86-64 / ARM32 )"),(0,a.yg)("td",{parentName:"tr",align:"left"},"2 Cores")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"RAM"),(0,a.yg)("td",{parentName:"tr",align:"left"},"1 GB Ram"),(0,a.yg)("td",{parentName:"tr",align:"left"},"2 GB Ram")))),(0,a.yg)("p",null,"The DSK Agent Edge itself does not actually consume that much RAM these are the requirements for the whole system. Keep in mind that these requirements strongly depend on the overall setup and the actual load of the agent. These are minimum requirements for rather small to medium amounts of data. If high volumes of data have to be processed the requirements are higher."),(0,a.yg)("p",null,"If you have any questions regarding infrastructure requirements, please talk to your contact person at Tributech or send an email to our ",(0,a.yg)("a",{parentName:"p",href:"mailto:customer-advisory@tributech.io"},(0,a.yg)("strong",{parentName:"a"},"Customer Advisory Team")),"."),(0,a.yg)("h3",{id:"software-requirements"},"Software Requirements"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Preferred"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"OS"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Any current Linux Distribution"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Ubuntu 18.04 LTS or later")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Runtime"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Docker Engine (\u226520) + Docker-Compose (\u22651.26)",(0,a.yg)("br",null),"or",(0,a.yg)("br",null),"Azure IoT Edge runtime with Moby container engine (\u22651.1)"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Docker Engine + Docker-Compose")))),(0,a.yg)("h3",{id:"runtime"},"Runtime"),(0,a.yg)("h4",{id:"docker-runtime"},"Docker / Docker Compose"),(0,a.yg)("p",null,"The DSK Agent Edge services can be run using ",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/"},(0,a.yg)("strong",{parentName:"a"},"Docker Engine"))," as a container runtime. We use ",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},(0,a.yg)("strong",{parentName:"a"},"Docker Compose"))," for management/orchestration of the Docker services and provide according ",(0,a.yg)("a",{parentName:"p",href:"./docker-compose#agent-manual-setup"},(0,a.yg)("strong",{parentName:"a"},"samples"))," and ",(0,a.yg)("a",{parentName:"p",href:"./docker-compose#agent-automated-setup"},(0,a.yg)("strong",{parentName:"a"},"automated deployments")),"."),(0,a.yg)("p",null,"If you want to use any other container runtime (e.g. containerd) please talk to your contact person at Tributech or send an email to our ",(0,a.yg)("a",{parentName:"p",href:"https://www.tributech.io/about-us/"},(0,a.yg)("strong",{parentName:"a"},"Customer Advisory Team")),"."),(0,a.yg)("h4",{id:"azure-iot-edge-runtime"},"Azure IoT Edge Runtime"),(0,a.yg)("p",null,"The DSK Agent Edge services can be deployed as ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/iot-edge/iot-edge-modules"},(0,a.yg)("strong",{parentName:"a"},"IoT Edge modules"))," on the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/iot-edge/about-iot-edge"},(0,a.yg)("strong",{parentName:"a"},"Azure IoT Edge Runtime"))," using ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/iot-edge/support?view=iotedge-2020-11#container-engines"},(0,a.yg)("strong",{parentName:"a"},"Moby container engine")),". For the message based communication within the device and with the cloud we use the infrastructure provided by the Azure IoT Edge Runtime."),(0,a.yg)("p",null,"For deployment on the Azure IoT Edge Runtime please talk to your contact person at Tributech or send an email to our ",(0,a.yg)("a",{parentName:"p",href:"https://www.tributech.io/about-us/"},(0,a.yg)("strong",{parentName:"a"},"Customer Advisory Team")),"."))}l.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},g="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=m(r),c=a,d=g["".concat(u,".").concat(c)]||g[c]||l[c]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);
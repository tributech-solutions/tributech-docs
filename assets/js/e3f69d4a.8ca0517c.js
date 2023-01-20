"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[4858],{73251:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={title:"Overview",sidebar_position:1},s="DSK Agent Edge Setup",u={unversionedId:"setup/agent/overview",id:"setup/agent/overview",title:"Overview",description:"The DSK Agent Edge setup consists of the main DSK Agent service (dsk-agent) and (optional) services like the MQTT broker (eclipse-mosquitto, for the communication on the edge) and/or for connecting external data sources e.g. OPC UA Source (opcua-source), Simulated Sensor/Source (simulated-sensor),...",source:"@site/docs/setup/agent/overview.md",sourceDirName:"setup/agent",slug:"/setup/agent/overview",permalink:"/next/setup/agent/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/setup/agent/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tributech Node",permalink:"/next/setup/node"},next:{title:"Docker Compose Setup",permalink:"/next/setup/agent/docker-compose"}},p={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dsk-agent-edge-setup"},"DSK Agent Edge Setup"),(0,i.kt)("p",null,"The DSK Agent Edge setup consists of the main DSK Agent service (",(0,i.kt)("inlineCode",{parentName:"p"},"dsk-agent"),") and (optional) services like the MQTT broker (",(0,i.kt)("inlineCode",{parentName:"p"},"eclipse-mosquitto"),", for the communication on the edge) and/or for connecting external data sources e.g. ",(0,i.kt)("a",{parentName:"p",href:"./sources/opc-ua"},(0,i.kt)("strong",{parentName:"a"},"OPC UA Source"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"opcua-source"),"), ",(0,i.kt)("a",{parentName:"p",href:"./sources/simulated"},(0,i.kt)("strong",{parentName:"a"},"Simulated Sensor/Source"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"simulated-sensor"),"),...",(0,i.kt)("br",{parentName:"p"}),"\n","The services are containerized and require a Linux based host system on the edge device with an according container runtime."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
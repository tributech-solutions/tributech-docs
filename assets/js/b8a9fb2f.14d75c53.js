"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[2162],{91559:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={title:"Overview",sidebar_position:1},d="Overview",c={unversionedId:"oem_module/overview",id:"version-2.0.0/oem_module/overview",title:"Overview",description:"This documentation provides the hardware and software specifications of the Tributech OEM Module for embedded IoT devices.",source:"@site/versioned_docs/version-2.0.0/oem_module/overview.md",sourceDirName:"oem_module",slug:"/oem_module/overview",permalink:"/docs/oem_module/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/oem_module/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/verify_data/api"},next:{title:"Hardware Options",permalink:"/docs/oem_module/hardware_options"}},l={},u=[{value:"Hardware Modules",id:"hardware-modules",level:2},{value:"Software Stack",id:"software-stack",level:2},{value:"Connectivity",id:"connectivity",level:2}],p={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This documentation provides the hardware and software specifications of the Tributech OEM Module for embedded IoT devices.\nThe miniaturized 32 x 22 x 3 mm IoT module is packaged as a system-on-module (SoM) that includes Nordic Semiconductors\u2019 low-power nRF9160 SiP with integrated LTE-M/NB IoT modem, a GPS sensor, eSIM and Infineon Technologies high-end OPTIGA\u2122 Trust M hardware security module. Together with Tributech\u2019s IoT and data platform middleware, it provides all core functionalities of an IoT device like managing telemetry data, configurations, updates, provisioning, and security. Beside these core functionalities, the platform includes unique features like blockchain-based data verification, digital twin-based configuration and data management as well as built-in data sharing.\nThis allows builders to design embedded IoT devices that are perfectly optimized (in terms of interfaces, form factor and costs) for their use cases without the need to take care of all the complexity of a connectivity and data management platform. "),(0,a.kt)("h2",{id:"hardware-modules"},"Hardware Modules"),(0,a.kt)("p",null,"For the development of embedded IoT devices we offer two hardware variants. The Tributech OEM Module itself, which can be directly integrated into the PCB hardware design as a SoM and an Arduino Shield for prototyping. The shield can be used with all popular hardware development platforms like Arduino Uno, STM32 Nucelo, Infineon XMC Relax Kit and more.  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hardware Options",src:r(54069).Z,width:"1920",height:"1090"})),(0,a.kt)("h2",{id:"software-stack"},"Software Stack"),(0,a.kt)("p",null,"The software stack consists of the OEM Module firmware and an middleware that includes connectivity services, device management, IoT data management, digital twin workspace, data verification services and more.\nOn the device side, the OEM module provides a UART interface for exchanging configurations, providing telemetry data and performing updates. This allows developers to focus on firmware development for data pre-processing and sensor/interface integration, as all complexity is abstracted via an easy-to-use interface.\nOn the middleware / backend side, the captured data can be consumed via APIs, a message broker or stream explorer. The configuration- and device-management is available through the web portal and APIs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:r(42243).Z,width:"1500",height:"1090"})),(0,a.kt)("h2",{id:"connectivity"},"Connectivity"),(0,a.kt)("p",null,"The Tributech OEM module includes a multimode LTE-M/NB-IoT modem with GNSS and is certified for global operation. The availability of these connectivity standards has already reached global scale. The current status of the network rollout can be checked via GSMA's Mobile IoT Deployment Map."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.gsma.com/iot/deployment-map/"},"https://www.gsma.com/iot/deployment-map/")," "),(0,a.kt)("p",null,"LTE-M and NB-IoT were designed for IoT applications that use low to medium data rates, need to be low cost, operate in hard-to-reach places, or require long battery life. With these properties, they are suitable for many sensing and monitoring applications in the mobile sector, but also for many stationary applications in the area of smart building, smart infrastructure, or smart factory. The following graphic provides an overview about the differences between the cellular connectivity standards."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connectivity",src:r(391).Z,width:"1920",height:"700"})))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},42243:function(e,t,r){t.Z=r.p+"assets/images/Architecture-f91bd051a616bb5a565934f9dfd1ccd5.jpg"},391:function(e,t,r){t.Z=r.p+"assets/images/Connectivity-11fbe04711de1d867d9769b48fd877ba.jpg"},54069:function(e,t,r){t.Z=r.p+"assets/images/Hardware_Options-c294a075c397a70f2b6bc6235783a487.jpg"}}]);
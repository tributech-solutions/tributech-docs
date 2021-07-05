(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[179],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=p(r),m=o,h=l["".concat(u,".").concat(m)]||l[m]||d[m]||i;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=l;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9424:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),s=["components"],a={},u="Setup Options",p={unversionedId:"setup/node/setup-options",id:"setup/node/setup-options",isDocsHomePage:!1,title:"Setup Options",description:"This page explains the setup options for a DSK node and its prerequisites.",source:"@site/docs/setup/node/setup-options.md",sourceDirName:"setup/node",slug:"/setup/node/setup-options",permalink:"/docs/setup/node/setup-options",editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/setup/node/setup-options.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup instructions Tributech DataSpace Node",permalink:"/docs/setup/node/setup-guide"},next:{title:"DSK IoT Hub Bridge",permalink:"/docs/setup/iot-hub-bridge/iot-hub-bridge"}},c=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Ecosystem",id:"ecosystem",children:[]}]},{value:"DSK Node on Azure",id:"dsk-node-on-azure",children:[]},{value:"DSK Node On Premise or other Cloud Providers",id:"dsk-node-on-premise-or-other-cloud-providers",children:[]}],d={toc:c};function l(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup-options"},"Setup Options"),(0,i.kt)("p",null,"This page explains the setup options for a DSK node and its prerequisites."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h3",{id:"ecosystem"},"Ecosystem"),(0,i.kt)("p",null,"Your new DSK Node has to join a DataSpace Ecosystem. In general, there are no limitations on how you can structure a DataSpace Ecosystem. We recommend a segmentation in 2 categories:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Private DataSpace Ecosystems")," for the data exchange in your value chain with for example your customers, suppliers and partners."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Open DataSpace Ecosystems")," for the data exchange with businesses, researchers and communities outside your value chain to drive innovation, try new use-cases and services or monetize data."),(0,i.kt)("h2",{id:"dsk-node-on-azure"},"DSK Node on Azure"),(0,i.kt)("p",null,"Although other setup options are also available, the easiest way to setup the DSK Node is through the Azure Marketplace.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"/docs/quickstart/install-owner-node"},"quick start guide")," on how to setup a node on Azure in the public Dataspace Ecosystem."),(0,i.kt)("h2",{id:"dsk-node-on-premise-or-other-cloud-providers"},"DSK Node On Premise or other Cloud Providers"),(0,i.kt)("p",null,"The DSK Node can also be deployed on premise or in a virtual machine on any of the major public cloud providers. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup/node/node-requirements"},"requirements")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.tributech.io/about-us/"},"contact us"),"."))}l.isMDXComponent=!0}}]);
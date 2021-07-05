(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[219],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=n,m=h["".concat(u,".").concat(p)]||h[p]||d[p]||i;return a?r.createElement(m,o(o({ref:t},l),{},{components:a})):r.createElement(m,o({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5455:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o=["components"],s={title:"Overview",sidebar_position:1},u="Quickstart Guide",c={unversionedId:"quickstart/overview",id:"quickstart/overview",isDocsHomePage:!1,title:"Overview",description:"This guide describes how to quickly get up and running with the Tributech DataSpace Kit (DSK). The easiest way to get started with only a few clicks is in the Azure Cloud. While the Azure Cloud is the quickest and easiest way to get started, other options for deployment, including on premise systems, are also available. Check out our Setup Guide for detail information..",source:"@site/docs/quickstart/overview.md",sourceDirName:"quickstart",slug:"/quickstart/overview",permalink:"/docs/quickstart/overview",editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/quickstart/overview.md",version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Auditable Data",permalink:"/docs/introduction/auditable-data"},next:{title:"Setup Owner Node",permalink:"/docs/quickstart/install-owner-node"}},l=[{value:"Demonstrated Use-Case",id:"demonstrated-use-case",children:[]},{value:"Features",id:"features",children:[]},{value:"This Guide Covers",id:"this-guide-covers",children:[]}],d={toc:l};function h(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart-guide"},"Quickstart Guide"),(0,i.kt)("p",null,"This guide describes how to quickly get up and running with the Tributech DataSpace Kit (DSK). The easiest way to get started with only a few clicks is in the Azure Cloud. While the Azure Cloud is the quickest and easiest way to get started, other options for deployment, including on premise systems, are also available. Check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup/overview"},"Setup Guide")," for detail information.."),(0,i.kt)("h2",{id:"demonstrated-use-case"},"Demonstrated Use-Case"),(0,i.kt)("p",null,"This quickstart guide demonstrates how the DataSpace Kit can be used to share data between two parties. This could for example enable you to share sensor data from production systems securely with a provider of machine learning services to enable predictive maintenance. The guide shows a Hello-World example that covers all the important features of the DataSpace Kit. It includes a simulated edge device which continuously generates several streams of simulated sensor-data. This dataset is then shared with a Data-Consumer node. If the demo environment works for you, we can upgrade it into a full production ready system. Feel free to ",(0,i.kt)("a",{parentName:"p",href:"https://www.tributech.io/about-us/"},"contact us"),"."),(0,i.kt)("p",null,"In the image below you can see the data flow that will be established through this guide: From data source to data owner, which shares selected streams with the data consumer. The data consumer can then verify data integrity and data authenticity through a specific data auditing service."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Data-Owner Data-Consumer usecase overview",src:a(3359).Z})),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data never leaves your system unless explicitly shared"),(0,i.kt)("li",{parentName:"ul"},"Data is collected and signed on the Edge to make it auditable"),(0,i.kt)("li",{parentName:"ul"},"The Data Consumer can request access to a shared dataset"),(0,i.kt)("li",{parentName:"ul"},"Once access is granted the generated data is continuously shared with the consumer (but could be revoked at any time)"),(0,i.kt)("li",{parentName:"ul"},"The consumer of the auditable data stream can now access the data for example to use it for machine learning"),(0,i.kt)("li",{parentName:"ul"},"The consumer can cryptographically verify the data authenticity and data integrity")),(0,i.kt)("h2",{id:"this-guide-covers"},"This Guide Covers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How to ",(0,i.kt)("a",{parentName:"li",href:"./install-owner-node"},"setup")," the Data-Owner-Node in a few clicks"),(0,i.kt)("li",{parentName:"ul"},"How to create the first ",(0,i.kt)("a",{parentName:"li",href:"./create-dataset"},"dataset")),(0,i.kt)("li",{parentName:"ul"},"How to ",(0,i.kt)("a",{parentName:"li",href:"./install-bridge"},"link")," the Azure IoT Hub to the Data-Owner-Node"),(0,i.kt)("li",{parentName:"ul"},"How to ",(0,i.kt)("a",{parentName:"li",href:"./setup-device"},"deploy")," a simulated edge device as a data-source using the Azure IoT Hub"),(0,i.kt)("li",{parentName:"ul"},"How to ",(0,i.kt)("a",{parentName:"li",href:"./publish-dataset"},"share")," the dataset containing the values from the simulated sensor"),(0,i.kt)("li",{parentName:"ul"},"How to ",(0,i.kt)("a",{parentName:"li",href:"./install-consumer-node"},"setup")," another node as data-consumer to simulate a partner company"),(0,i.kt)("li",{parentName:"ul"},"How to ",(0,i.kt)("a",{parentName:"li",href:"./subscribe-dataset"},"subscribe")," to a shared dataset of the data-owner")))}h.isMDXComponent=!0},3359:function(e,t,a){"use strict";t.Z=a.p+"assets/images/usecase-overview-452637fb138bf681918777a6a69eb980.jpg"}}]);
"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[8822],{89437:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),i=["components"],d={title:"Overview",sidebar_position:1},c="Provide Data Overview",p={unversionedId:"provide_data/overview",id:"version-1.10.0/provide_data/overview",title:"Overview",description:"Data for Tributech DataSpace Kit can be provided in many ways, for which an overview is given here.",source:"@site/versioned_docs/version-1.10.0/provide_data/overview.md",sourceDirName:"provide_data",slug:"/provide_data/overview",permalink:"/docs/1.10.0/provide_data/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-1.10.0/provide_data/overview.md",tags:[],version:"1.10.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DSK Agent Companion",permalink:"/docs/1.10.0/setup/agent_companion"},next:{title:"Create and Publish Datasets",permalink:"/docs/1.10.0/provide_data/create_datasets"}},s={},u=[{value:"Create and publish a Dataset",id:"create-and-publish-a-dataset",level:2},{value:"API Integration",id:"api-integration",level:2},{value:"IoT Integration",id:"iot-integration",level:2}],l={toc:u};function v(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"provide-data-overview"},"Provide Data Overview"),(0,o.kt)("p",null,"Data for Tributech DataSpace Kit can be provided in many ways, for which an overview is given here."),(0,o.kt)("h2",{id:"create-and-publish-a-dataset"},"Create and publish a Dataset"),(0,o.kt)("p",null,"Datasets are used to share data with other participants in the Dataspace. Click ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.10.0/provide_data/create_datasets"},(0,o.kt)("strong",{parentName:"a"},"here"))," to find out how to create and publish a shared Dataset."),(0,o.kt)("h2",{id:"api-integration"},"API Integration"),(0,o.kt)("p",null,"The DSK Node offers a set of REST APIs to provide data. Learn more about how to use them in our ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.10.0/provide_data/rest"},(0,o.kt)("strong",{parentName:"a"},"API Integration Guide")),"."),(0,o.kt)("h2",{id:"iot-integration"},"IoT Integration"),(0,o.kt)("p",null,'IoT devices can provide data with the DSK Edge Agent. This service offers several "Sources" to interface with.'),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Source"),(0,o.kt)("th",{parentName:"tr",align:null},"Guide"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MQTT"),(0,o.kt)("td",{parentName:"tr",align:null},"To provide data through an MQTT message bus, follow the ",(0,o.kt)("a",{parentName:"td",href:"/docs/1.10.0/provide_data/iot/mqtt"},(0,o.kt)("strong",{parentName:"a"},"MQTT Source Guide")),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OPC-UA"),(0,o.kt)("td",{parentName:"tr",align:null},"For an OPC-UA conform interface, check out the ",(0,o.kt)("a",{parentName:"td",href:"/docs/1.10.0/provide_data/iot/opc-ua"},(0,o.kt)("strong",{parentName:"a"},"OPC-UA Source Guide")),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Simulated"),(0,o.kt)("td",{parentName:"tr",align:null},"To provide generated test data, a ",(0,o.kt)("a",{parentName:"td",href:"/docs/1.10.0/provide_data/iot/simulated"},(0,o.kt)("strong",{parentName:"a"},"Simulated Source"))," can be used.")))))}v.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=p(r),v=n,f=l["".concat(c,".").concat(v)]||l[v]||u[v]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=l;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);
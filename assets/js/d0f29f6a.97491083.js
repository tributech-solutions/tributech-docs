"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[3295],{92524:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),o=["components"],l={title:"Stream Explorer",sidebar_position:2},s="Stream Explorer",p={unversionedId:"consume_data/streamexplorer",id:"consume_data/streamexplorer",title:"Stream Explorer",description:"The Stream Explorer can be accessed via our Node's web portal and provides a more detailed view of a selected stream, including an automatically updating visualization of the stored datapoints.",source:"@site/docs/consume_data/streamexplorer.md",sourceDirName:"consume_data",slug:"/consume_data/streamexplorer",permalink:"/next/consume_data/streamexplorer",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/consume_data/streamexplorer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Stream Explorer",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/next/consume_data/overview"},next:{title:"API",permalink:"/next/consume_data/api"}},u={},c=[{value:"Explore Data",id:"explore-data",level:2},{value:"Graph View",id:"graph-view",level:3},{value:"Table View",id:"table-view",level:3},{value:"Stream Options",id:"stream-options",level:2},{value:"Persistence",id:"persistence",level:3},{value:"Publish",id:"publish",level:3},{value:"Value Change",id:"value-change",level:3}],d={toc:c};function m(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stream-explorer"},"Stream Explorer"),(0,i.kt)("p",null,"The Stream Explorer can be accessed via our Node's web portal and provides a more detailed view of a selected stream, including an automatically updating visualization of the stored datapoints."),(0,i.kt)("h2",{id:"explore-data"},"Explore Data"),(0,i.kt)("p",null,"You can use the stream explorer to quickly validate the latest datapoints of a stream and display them via either graph (depending on data type) or table view. The following data types are supported as list, graph or both views."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ByteArray"),(0,i.kt)("li",{parentName:"ul"},"String Base64"),(0,i.kt)("li",{parentName:"ul"},"String UTF8"),(0,i.kt)("li",{parentName:"ul"},"Double"),(0,i.kt)("li",{parentName:"ul"},"Float"),(0,i.kt)("li",{parentName:"ul"},"Int"),(0,i.kt)("li",{parentName:"ul"},"Long")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File Types")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CSV (enabled when unit field is named CSV)"),(0,i.kt)("li",{parentName:"ul"},"PDF (enabled when unit field is named PDF)"),(0,i.kt)("li",{parentName:"ul"},"JSON (enabled when unit field is named JSON)")),(0,i.kt)("p",null,"Usually the datatype will be set automatically based on the metadata of the stream. If you don't see any data you might want to select byte array to see the raw data that was inserted."),(0,i.kt)("h3",{id:"graph-view"},"Graph View"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stream Explorer Graph",src:r(71736).Z,width:"3413",height:"1642"})),(0,i.kt)("h3",{id:"table-view"},"Table View"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stream Explorer Table",src:r(29313).Z,width:"3413",height:"1642"})),(0,i.kt)("h2",{id:"stream-options"},"Stream Options"),(0,i.kt)("p",null,"The stream explorer also offers the possibility to adapt the various options of a stream."),(0,i.kt)("h3",{id:"persistence"},"Persistence"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Persistence Options",src:r(10638).Z,width:"1979",height:"562"})),(0,i.kt)("h3",{id:"publish"},"Publish"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Publish Options",src:r(40483).Z,width:"1985",height:"574"})),(0,i.kt)("h3",{id:"value-change"},"Value Change"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Value Change Options",src:r(70800).Z,width:"1980",height:"569"})))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10638:function(e,t,r){t.Z=r.p+"assets/images/persistence_options-6378b5ab257def1be63e86df0e7412e4.png"},40483:function(e,t,r){t.Z=r.p+"assets/images/publish_options-bad6bfaeab3167dd5576a316a7f5d3c2.png"},71736:function(e,t,r){t.Z=r.p+"assets/images/streamexplorer-5a1821b3e30eac4e7b4975d093de95c0.png"},29313:function(e,t,r){t.Z=r.p+"assets/images/streamexplorertable-2b136378408867570cd859ae26d2977b.png"},70800:function(e,t,r){t.Z=r.p+"assets/images/value_change_options-07459035d5d03eea2d7ff2c97b2fe73c.png"}}]);
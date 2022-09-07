"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[5346],{38344:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),i=["components"],s={title:"Overview",sidebar_position:1},c="Consume Data Overview",u={unversionedId:"consume_data/overview",id:"version-2.0.0/consume_data/overview",title:"Overview",description:"Tributech offers data consumption on many levels, for which an overview is given here.",source:"@site/versioned_docs/version-2.0.0/consume_data/overview.md",sourceDirName:"consume_data",slug:"/consume_data/overview",permalink:"/consume_data/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/consume_data/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Publish Dataset",permalink:"/provide_data/sharedata/publish"},next:{title:"Stream Explorer",permalink:"/consume_data/streamexplorer"}},l={},p=[{value:"Stream Explorer",id:"stream-explorer",level:2},{value:"API",id:"api",level:2},{value:"Grafana",id:"grafana",level:2},{value:"Consume Shared Data",id:"consume-shared-data",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consume-data-overview"},"Consume Data Overview"),(0,o.kt)("p",null,"Tributech offers data consumption on many levels, for which an overview is given here."),(0,o.kt)("h2",{id:"stream-explorer"},"Stream Explorer"),(0,o.kt)("p",null,"Data visualization via the Tributech Node's web portal. The ",(0,o.kt)("a",{parentName:"p",href:"/consume_data/streamexplorer"},(0,o.kt)("strong",{parentName:"a"},"Stream Explorer"))," provides a detailed look of a stream's time series data including auto refresh."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"The Tributech Node provides a set of REST APIs to access data as well as verify data authenticity and data integrity. Learn more about how to use them in our ",(0,o.kt)("a",{parentName:"p",href:"/consume_data/api"},(0,o.kt)("strong",{parentName:"a"},"REST API guide")),"."),(0,o.kt)("h2",{id:"grafana"},"Grafana"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/"},(0,o.kt)("strong",{parentName:"a"},"Grafana"))," is an open source project which allows you to create dashboards and charts, directly from your data sets. How to set up a Grafana dashboard is explained ",(0,o.kt)("a",{parentName:"p",href:"/consume_data/grafana"},(0,o.kt)("strong",{parentName:"a"},"here")),"."),(0,o.kt)("h2",{id:"consume-shared-data"},"Consume Shared Data"),(0,o.kt)("p",null,"Datasets are used to share data with other participants. Follow the ",(0,o.kt)("a",{parentName:"p",href:"/consume_data/shared_data"},(0,o.kt)("strong",{parentName:"a"},"link to Shared Data"))," to find out how to subscribe to a shared Dataset and access the data once it was succesfully synced."))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
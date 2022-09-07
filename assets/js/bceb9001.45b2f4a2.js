"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[4876],{43940:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],s={title:"Overview",sidebar_position:1},d=void 0,l={unversionedId:"provide_data/sharedata/overview",id:"provide_data/sharedata/overview",title:"Overview",description:"Datasets are a collection of data streams, tags and descriptions which can be published in order to selectively share all or parts of the dataset and its content with other users and connected Tributech Nodes.",source:"@site/docs/provide_data/sharedata/overview.md",sourceDirName:"provide_data/sharedata",slug:"/provide_data/sharedata/overview",permalink:"/next/provide_data/sharedata/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/provide_data/sharedata/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Simulated Source",permalink:"/next/provide_data/iot/simulated"},next:{title:"Manual Dataset",permalink:"/next/provide_data/sharedata/manual_datasets"}},c={},u=[{value:"Kinds of Datasets",id:"kinds-of-datasets",level:2},{value:"Synced Dataset",id:"synced-dataset",level:3},{value:"Manual Dataset",id:"manual-dataset",level:3},{value:"Publish a Dataset",id:"publish-a-dataset",level:2}],p={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Datasets are a collection of data streams, tags and descriptions which can be published in order to selectively share all or parts of the dataset and its content with other users and connected Tributech Nodes."),(0,i.kt)("h2",{id:"kinds-of-datasets"},"Kinds of Datasets"),(0,i.kt)("p",null,"We differentiate between two kinds of datasets, when linking and configuring a device an ",(0,i.kt)("em",{parentName:"p"},"automatically generated dataset")," will be created. When data is inserted manually using our API integration we also have the possibility to explicitly create a dataset."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Autogenerated/Synced")," Datasets will be updated whenever the configuration of a Agent changes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Manually")," created Datasets need to be adapted whenever changes are necessary")),(0,i.kt)("h3",{id:"synced-dataset"},"Synced Dataset"),(0,i.kt)("p",null,"To create a synced Dataset please follow our ",(0,i.kt)("a",{parentName:"p",href:"/next/setup/agent_configuration"},(0,i.kt)("strong",{parentName:"a"},"Agent Configuration Guide")),'. After applying the configuration to the device the dataset can be found within the "My Datasets" section of the Node\'s webinterface.'),(0,i.kt)("h3",{id:"manual-dataset"},"Manual Dataset"),(0,i.kt)("p",null,"To manually create a dataset please follow the ",(0,i.kt)("a",{parentName:"p",href:"/next/provide_data/sharedata/manual_datasets"},(0,i.kt)("strong",{parentName:"a"},"Manual Dataset")),' Guide. Once you are done the Dataset should now be visible in "My Datasets".\n',(0,i.kt)("img",{alt:"My Datasets",src:a(52421).Z,width:"2551",height:"1203"})),(0,i.kt)("h2",{id:"publish-a-dataset"},"Publish a Dataset"),(0,i.kt)("p",null,"Publishing a Dataset makes a certain timeframe of the data available for selected data consumers.",(0,i.kt)("br",{parentName:"p"}),"\n",'In order to publish the Dataset, head once again to "My Datasets", select the Dataset you want to share and hit the "Add Publication" button. An in-depth explanation can be found in ',(0,i.kt)("a",{parentName:"p",href:"/next/provide_data/sharedata/publish"},(0,i.kt)("strong",{parentName:"a"},"Publish Dataset")),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My Datasets",src:a(42429).Z,width:"2560",height:"1289"})))}h.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=r,f=p["".concat(d,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},42429:function(e,t,a){t.Z=a.p+"assets/images/dataset_publish_1-bd7bdd404880ba8ccd10840978dc6028.png"},52421:function(e,t,a){t.Z=a.p+"assets/images/my_datasets-10132fd26de0964a5f21747238a63bfd.png"}}]);
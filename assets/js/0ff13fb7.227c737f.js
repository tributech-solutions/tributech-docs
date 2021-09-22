(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[946],{8182:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=a(2122),n=a(9756),s=(a(7294),a(3905)),i=["components"],o={title:"Create and Publish Datasets",sidebar_position:2},c=void 0,d={unversionedId:"provide_data/create_datasets",id:"provide_data/create_datasets",isDocsHomePage:!1,title:"Create and Publish Datasets",description:"Datasets are a collection of data streams, tags and descriptions which can be published in order to share the dataset and its content with other users of the Dataspace.",source:"@site/docs/provide_data/create_datasets.md",sourceDirName:"provide_data",slug:"/provide_data/create_datasets",permalink:"/docs/provide_data/create_datasets",editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/provide_data/create_datasets.md",version:"current",sidebarPosition:2,frontMatter:{title:"Create and Publish Datasets",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/provide_data/overview"},next:{title:"REST",permalink:"/docs/provide_data/api/rest"}},u=[{value:"Create a Dataset",id:"create-a-dataset",children:[]},{value:"Publish a Dataset",id:"publish-a-dataset",children:[]}],l={toc:u};function p(e){var t=e.components,o=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Datasets are a collection of data streams, tags and descriptions which can be published in order to share the dataset and its content with other users of the Dataspace."),(0,s.kt)("h2",{id:"create-a-dataset"},"Create a Dataset"),(0,s.kt)("p",null,'To create a Dataset, connect to your node, click the "+" symbol and select "New Dataset".\n',(0,s.kt)("img",{alt:"Create new Dataset",src:a(5409).Z})),(0,s.kt)("p",null,"Fill in the required information and add tags, which will be shown to data consumers during the subscription process.\n",(0,s.kt)("img",{alt:"Fill in Dataset information",src:a(6816).Z})),(0,s.kt)("p",null,"Add however many data sources and streams/events are needed for the use case. The IDs are required to publish data so write them down or come back to the Dataset whenever they are needed.\n",(0,s.kt)("img",{alt:"Add sources and streams",src:a(9692).Z})),(0,s.kt)("p",null,'Once you are done, hit "Generate Dataset" to finish the creation process. The Dataset should now be visible in "My Datasets".\n',(0,s.kt)("img",{alt:"My Datasets",src:a(8010).Z})),(0,s.kt)("h2",{id:"publish-a-dataset"},"Publish a Dataset"),(0,s.kt)("p",null,"Publishing a Dataset makes a certain timeframe of the data available for selected data consumers in the Dataspace.",(0,s.kt)("br",{parentName:"p"}),"\n",'In order to publish the Dataset, head once again to "My Datasets", select the Dataset and hit the "Add Publication" button.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Datasets",src:a(1051).Z})),(0,s.kt)("p",null,"Follow the instructions of the publication dialog and confirm your choices to make the Dataset available to data consumers in the Dataspace."))}p.isMDXComponent=!0},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),f=n,h=p["".concat(c,".").concat(f)]||p[f]||l[f]||s;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6816:function(e,t,a){"use strict";t.Z=a.p+"assets/images/dataset_info-f72636ec8556cbd1985c5214ea07208d.png"},8010:function(e,t,a){"use strict";t.Z=a.p+"assets/images/dataset_mydatasets-9495bdd9d3b141855f3ce7e9372f5c31.png"},5409:function(e,t,a){"use strict";t.Z=a.p+"assets/images/dataset_new-a3e87d45fc663bc4a081eb90260088fb.png"},1051:function(e,t,a){"use strict";t.Z=a.p+"assets/images/dataset_publish-ef09b18d543e25b5568ac254fa0eadc0.png"},9692:function(e,t,a){"use strict";t.Z=a.p+"assets/images/dataset_streams-a53e43befbc6d32fc52a87f9a3402122.png"}}]);
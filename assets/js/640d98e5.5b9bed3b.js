"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[6843],{31290:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=r(83117),i=r(80102),n=(r(67294),r(3905)),o=["components"],s={title:"Overview",sidebar_position:1},l="Verify Data Overview",u={unversionedId:"verify_data/overview",id:"version-2.0.0/verify_data/overview",title:"Overview",description:"The possibility to verify data is at the core of the DSK, as each data stream can be verified independently. To do this we create something comparable to fingerprints for each data stream. These fingerprints are stored on a secure and independent layer and can also be verified by other parties when data gets shared.",source:"@site/versioned_docs/version-2.0.0/verify_data/overview.md",sourceDirName:"verify_data",slug:"/verify_data/overview",permalink:"/docs/verify_data/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/verify_data/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Grafana",permalink:"/docs/consume_data/grafana"},next:{title:"Audit Results",permalink:"/docs/verify_data/audit_results"}},c={},d=[{value:"Audit Results",id:"audit-results",level:2},{value:"Manually Verify A Stream",id:"manually-verify-a-stream",level:2},{value:"Automatically Verify Streams",id:"automatically-verify-streams",level:2},{value:"Verify via API",id:"verify-via-api",level:2}],f={toc:d};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"verify-data-overview"},"Verify Data Overview"),(0,n.kt)("p",null,"The possibility to verify data is at the core of the DSK, as each data stream can be verified independently. To do this we create something comparable to fingerprints for each data stream. These fingerprints are stored on a secure and independent layer and can also be verified by other parties when data gets shared."),(0,n.kt)("p",null,"There are multiple options to verify data in your DSK node. Depending on your needs you can choose between the multiple options."),(0,n.kt)("h2",{id:"audit-results"},"Audit Results"),(0,n.kt)("p",null,"The quickest method to verify your data is to verify specific fingerprints. Head over to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/verify_data/audit_results"},(0,n.kt)("strong",{parentName:"a"},"Audit Results section"))," to learn how to use it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Audit Results",src:r(57470).Z,width:"1985",height:"204"})),(0,n.kt)("h2",{id:"manually-verify-a-stream"},"Manually Verify A Stream"),(0,n.kt)("p",null,"To learn how you can verify a bigger timeframe of a stream please follow the ",(0,n.kt)("a",{parentName:"p",href:"/docs/verify_data/manual_audit"},(0,n.kt)("strong",{parentName:"a"},"Manual Audit section"))," to learn how to use it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Audit Results",src:r(49362).Z,width:"1993",height:"409"})),(0,n.kt)("h2",{id:"automatically-verify-streams"},"Automatically Verify Streams"),(0,n.kt)("p",null,"The DSK also offers an experimental opt-in method that allows to continually verify incoming proofs. Please contact us, if you want this feature to be enabled on your DSK node."),(0,n.kt)("h2",{id:"verify-via-api"},"Verify via API"),(0,n.kt)("p",null,"It is also possible to integrate the verification in your existing applications by utilizing our Trust-API, for details and examples please visit the ",(0,n.kt)("a",{parentName:"p",href:"/docs/verify_data/api"},(0,n.kt)("strong",{parentName:"a"},"API section")),"."))}p.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),p=i,v=f["".concat(l,".").concat(p)]||f[p]||d[p]||n;return r?a.createElement(v,o(o({ref:t},c),{},{components:r})):a.createElement(v,o({ref:t},c))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},57470:function(e,t,r){t.Z=r.p+"assets/images/data_audit_3-c14c4edc902498147741d5dfcdc50086.png"},49362:function(e,t,r){t.Z=r.p+"assets/images/data_audit_4-0298ab0a7d09d0661ac8d38c0bf1e2b6.png"}}]);
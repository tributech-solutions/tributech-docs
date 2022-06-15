"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[9967],{396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Simulated Source",sidebar_position:5},u=void 0,c={unversionedId:"provide_data/iot/simulated",id:"version-2.0.0/provide_data/iot/simulated",title:"Simulated Source",description:"The DSK Simulated Sensor/Source allows to simulate a data source on the edge side for testing purposes. The generated data for the streams is transmitted to the DSK Edge Agent service (dsk-agent) via our MQTT broker.",source:"@site/versioned_docs/version-2.0.0/provide_data/iot/simulated.md",sourceDirName:"provide_data/iot",slug:"/provide_data/iot/simulated",permalink:"/docs/provide_data/iot/simulated",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/provide_data/iot/simulated.md",tags:[],version:"2.0.0",sidebarPosition:5,frontMatter:{title:"Simulated Source",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ADS Source",permalink:"/docs/provide_data/iot/ads"},next:{title:"Overview",permalink:"/docs/consume_data/overview"}},d={},p=[],l={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The DSK Simulated Sensor/Source allows to simulate a data source on the edge side for testing purposes. The generated data for the streams is transmitted to the DSK Edge Agent service (",(0,o.kt)("inlineCode",{parentName:"p"},"dsk-agent"),") via our MQTT broker.",(0,o.kt)("br",{parentName:"p"}),"\n","If the ",(0,o.kt)("a",{parentName:"p",href:"../../setup/agent/sources/simulated"},(0,o.kt)("strong",{parentName:"a"},"DSK Simulated Sensor/Source (",(0,o.kt)("inlineCode",{parentName:"strong"},"simulated-sensor"),")"))," is deployed along with our DSK Edge Agent services it can be configured based on twins with our ",(0,o.kt)("a",{parentName:"p",href:"../../setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion"))," as described in the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion")),", ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-login"},(0,o.kt)("strong",{parentName:"a"},"login"))," to the DSK Node and ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-connect"},(0,o.kt)("strong",{parentName:"a"},"connect"))," with the DKS Edge Agent"),(0,o.kt)("li",{parentName:"ul"},"Add Simulated Source\n",(0,o.kt)("img",{alt:"Simulated Sensor/Source 0",src:n(93803).Z,width:"1920",height:"937"}),(0,o.kt)("img",{alt:"Simulated Sensor/Source 1",src:n(36078).Z,width:"1916",height:"868"})),(0,o.kt)("li",{parentName:"ul"},"Add Simulated Stream(s)",(0,o.kt)("br",{parentName:"li"}),"Various parameters for the simulated stream can be adapted but important are the ",(0,o.kt)("em",{parentName:"li"},"Type")," which defines the actual generated value type and the ",(0,o.kt)("em",{parentName:"li"},"Frequency")," which the amount of generated data.\n",(0,o.kt)("img",{alt:"Simulated Sensor/Source 2",src:n(69803).Z,width:"1906",height:"872"})),(0,o.kt)("li",{parentName:"ul"},"Apply Configuration"),(0,o.kt)("li",{parentName:"ul"},"(Optional) TODO Verify configured streams in DataSpace-Admin TODO at Streams of Agent\n",(0,o.kt)("img",{alt:"Simulated Sensor/Source 3",src:n(80911).Z,width:"1902",height:"887"}))))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(n),m=a,f=l["".concat(u,".").concat(m)]||l[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},93803:function(e,t,n){t.Z=n.p+"assets/images/simulated-sensor-0-3416cf821f251accc97d96e1fa2a1c13.png"},36078:function(e,t,n){t.Z=n.p+"assets/images/simulated-sensor-1-aa844fa80d3912fa999ef646f82545ef.png"},69803:function(e,t,n){t.Z=n.p+"assets/images/simulated-sensor-2-00b0aa7fd05fd121ef8ca4e548185456.png"},80911:function(e,t,n){t.Z=n.p+"assets/images/simulated-sensor-3-1e992acbca994b39aa59358e88814b18.png"}}]);
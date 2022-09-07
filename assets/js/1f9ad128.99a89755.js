"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[2456],{91801:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],s={title:"Grafana",sidebar_position:4},u="Consume Data via Grafana Dashboards",l={unversionedId:"consume_data/grafana",id:"consume_data/grafana",title:"Grafana",description:"In this guide you will learn how you can consume Datasets via the built in Grafana dashboards of your Tributech Node.",source:"@site/docs/consume_data/grafana.md",sourceDirName:"consume_data",slug:"/consume_data/grafana",permalink:"/next/consume_data/grafana",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/consume_data/grafana.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Grafana",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/next/consume_data/api"},next:{title:"Shared Data",permalink:"/next/consume_data/shared_data"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Node Dashboard Basics",id:"node-dashboard-basics",level:3},{value:"Visualize your data",id:"visualize-your-data",level:2},{value:"Visualize InfluxDB data",id:"visualize-influxdb-data",level:2},{value:"Basic query",id:"basic-query",level:3},{value:"Query and rename result column (option 1)",id:"query-and-rename-result-column-option-1",level:3},{value:"Query and rename result column (option 2)",id:"query-and-rename-result-column-option-2",level:3},{value:"Rename result column with overrides (option 3)",id:"rename-result-column-with-overrides-option-3",level:3}],p={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consume-data-via-grafana-dashboards"},"Consume Data via Grafana Dashboards"),(0,o.kt)("p",null,"In this guide you will learn how you can consume Datasets via the built in Grafana dashboards of your Tributech Node."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The prerequisits for consuming data via the integrated Dashboards are, that a Dataset must be available at your node. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"This could be in one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are ",(0,o.kt)("strong",{parentName:"li"},"Data Provider"),": You own some Datasets and have your own data on your node (Provider DB)"),(0,o.kt)("li",{parentName:"ul"},"You are ",(0,o.kt)("strong",{parentName:"li"},"Data Consumer"),": You have been granted a Subscription to a Dataset and the data is already synchronised to your node (Consumer DB)")),(0,o.kt)("h3",{id:"node-dashboard-basics"},"Node Dashboard Basics"),(0,o.kt)("p",null,'You can easily navigate to your node dashboard by clicking the "Grafana" menu entry in the side menu of your Tributech Node interface.\nFor authentication, use the same username and password that you use for authentication when accessing your Node.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Navigate to Grafana",src:a(22892).Z,width:"1787",height:"1160"})),(0,o.kt)("p",null,"The dashboarding system is built on the open source technology ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/"},(0,o.kt)("strong",{parentName:"a"},"Grafana")),". It comes with pre-configured data sources for the in your Tributech Node integrated Postgre SQL databases."),(0,o.kt)("p",null,"The structure of dashboards is based on the same logic as in the interface of your Tributech Node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dashboards: My Datasets")," / Provider DB - contains owned Datasets that are connected to your Tributech Node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dashboards: Subscriptions")," / Consumer DB - contains subscriptions to Datasets from other members of your Ecosystem.")),(0,o.kt)("h2",{id:"visualize-your-data"},"Visualize your data"),(0,o.kt)("p",null,'The following steps will let you set up a panel for a "double" typed data set. This will require the UUID (ValueMetadataId) of your selected data stream.',(0,o.kt)("br",{parentName:"p"}),"\n",'If you just want to see an example in action, head to "Dashboards->Manage" and select "MY DATASETS->Test Dataset".\n',(0,o.kt)("img",{alt:"Example Dashboard",src:a(13356).Z,width:"1757",height:"505"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Add a new Dashboard -"),' Click the "+" button and click on the "Dashboard" menu item to create a new Dashboard. Then click on the settings symbol to get to the Dashboard settings of the just created Dashboard, as shown below:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Dashboard",src:a(49981).Z,width:"2978",height:"1440"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'2. Add a new panel by clicking the "Add panel" button -'),' Select "Add an empty panel" to create a new panel on the dashboard.\n',(0,o.kt)("img",{alt:"Add Panel",src:a(29219).Z,width:"1908",height:"402"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Select a data source for the panel -")," Depending on what data set should be used, select"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"DataApi.MasterDB" if you are the provider of the data set'),(0,o.kt)("li",{parentName:"ul"},'"DataApi.SlaveDB" if you are the consumer of the data set')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Data Source",src:a(12704).Z,width:"1899",height:"822"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Query the data source -"),' Switch to the raw SQL editor by clicking the "Edit SQL" button.\n',(0,o.kt)("img",{alt:"Edit SQL",src:a(66049).Z,width:"1510",height:"348"})),(0,o.kt)("p",null,'Copy the following SQL code and replace the placeholder of "ValueMetadataId" with the UUID of your stream:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},'SELECT\n  "Timestamp" AS "time",\n  get_bytea_to_double("Values", 0) AS "double" -- for double values\n  -- get_bytea_to_single("Values", 0) AS "float" -- for float values\nFROM "Value"\nWHERE\n  $__timeFilter("Timestamp") AND\n  "ValueMetadataId" = \'replace_with_your_own\'\nORDER BY 1\n')),(0,o.kt)("p",null,"Optionally, you can now rename the rows / panels to your liking or just play around with your brand new dashboard!"),(0,o.kt)("h2",{id:"visualize-influxdb-data"},"Visualize InfluxDB data"),(0,o.kt)("p",null,"First, similar to SQL queries, the data source (InfluxDB) has to be selected.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"Select Data Source",src:a(61678).Z,width:"3223",height:"1609"})),(0,o.kt)("p",null,"Afterwards, a query for the data has to be supplied. Check out the examples below or go to the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.2/query-data/get-started/"},"influx documentation")," to find out more."),(0,o.kt)("h3",{id:"basic-query"},"Basic query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'from(bucket: "infinite")\n  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)\n  |> filter(fn: (r) =>\n    r._measurement == "53f5d6a2-fae7-4649-a9d2-be130733572a" and\n    r._field == "value"\n)\n')),(0,o.kt)("h3",{id:"query-and-rename-result-column-option-1"},"Query and rename result column (option 1)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'from(bucket: "infinite")\n  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)\n  |> filter(fn: (r) =>\n    r._measurement == "53f5d6a2-fae7-4649-a9d2-be130733572a" and\n    r._field == "value")\n  |> keep(columns: ["_time", "_value"])\n  |> rename(columns: {_value: "test1"})\n')),(0,o.kt)("h3",{id:"query-and-rename-result-column-option-2"},"Query and rename result column (option 2)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'from(bucket: "infinite")\n  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)\n  |> filter(fn: (r) =>\n    r._measurement == "53f5d6a2-fae7-4649-a9d2-be130733572a" and\n    r._field == "value")\n  |> map(fn: (r) => ({ test1: r._value, time: r._time }))\n')),(0,o.kt)("h3",{id:"rename-result-column-with-overrides-option-3"},"Rename result column with overrides (option 3)"),(0,o.kt)("p",null,'Another method to rename a column is to click on "Overrides" on the righthand side of the screen and set the name(s) there.\n',(0,o.kt)("img",{alt:"Select Data Source",src:a(23716).Z,width:"3798",height:"1894"})))}m.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},49981:function(e,t,a){t.Z=a.p+"assets/images/dashboards-create-dashboard-52e17e318d7417dd627caa2c3d7ab715.png"},29219:function(e,t,a){t.Z=a.p+"assets/images/grafana_add_panel-d1a054262684ac7505253e899e4f35f6.png"},12704:function(e,t,a){t.Z=a.p+"assets/images/grafana_data_source_selection-aa538c68c0f587fc2f806df8dac87e65.png"},66049:function(e,t,a){t.Z=a.p+"assets/images/grafana_edit_sql-4eaf30e9fa4b1d81f22da6cde0948fce.png"},13356:function(e,t,a){t.Z=a.p+"assets/images/grafana_example_dashboard-28c566e74406c54a5ae7f0872fac7d89.png"},61678:function(e,t,a){t.Z=a.p+"assets/images/grafana_influxdb_data_source-949b624deacc41b5f148326ae28c82ea.png"},23716:function(e,t,a){t.Z=a.p+"assets/images/grafana_influxdb_rename-8fd48f5e4c5401ec079acf0ce200e484.png"},22892:function(e,t,a){t.Z=a.p+"assets/images/grafana_sidebar-29a5dfbccf217ae8e1e79d085bf38c27.png"}}]);
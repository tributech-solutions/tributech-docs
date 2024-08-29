"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[3115],{52764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var o=a(58168),n=(a(96540),a(15680)),r=a(21386);const s='version: "3.3"\n\nservices:\n  # DSK OPC-UA Source - Connects to the OPC-UA Server and publishes the values via MQTT to the DSK agent\n  opcua-source:  \n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}opcua-source:${TAG:-latest}\n    depends_on:\n      - mosquitto-server\n      - opcua-server\n      - dsk-agent      \n    environment:\n      Logging__LogLevel__Default: Information\n      MqttOptions__MQTTHost: mosquitto-server\n      OPCUASourceOptions__OPCUAServerUrl: opc.tcp://opcua-server:4840/va_tt_demo\n      # use fixed hostname (instead of hostname based on Docker container id) to avoid changing application client certitifcate\n      OPCUASourceOptions__OverrideHostName: localhost\n    networks:\n      - edge-net\n    # samples for mapping folders with certificates (see also https://github.com/OPCFoundation/UA-.NETStandard/blob/master/Docs/Certificates.md#certificate-stores)\n    # e.g. to have permanent application client certitifcate and/or to trust OPC-UA server certificate\n    volumes:\n      - ./volumes/opcua-source/own/private/:/app/certs/OPC Foundation/CertificateStores/MachineDefault/private # ApplicationCertificate (with private keys)\n      - ./volumes/opcua-source/own/certs/:/app/certs/OPC Foundation/CertificateStores/MachineDefault/certs/ # ApplicationCertificate\n      - ./volumes/opcua-source/trusted/certs/:/app/certs/OPC Foundation/CertificateStores/UA Applications/certs/ # TrustedPeerCertificates\n      - ./volumes/opcua-source/issuer/certs/:/app/certs/OPC Foundation/CertificateStores/UA Certificate Authorities/certs/ # TrustedIssuerCertificates\n      - ./volumes/opcua-source/rejected/certs/:/app/certs/OPC Foundation/CertificateStores/RejectedCertificates/certs/ # RejectedCertificateStore\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"      \n\n  # OPC-UA server/simulated data generator\n  opcua-server:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}va_tt_srv_1.0:latest\n    networks:\n      - edge-net\n    # Expose ports for development and testing purposes\n    #ports:\n    #  - "4840:4840"\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n',i={title:"OPC UA Source",sidebar_position:2},c=void 0,p={unversionedId:"setup/agent/sources/opc-ua",id:"version-1.10.0/setup/agent/sources/opc-ua",title:"OPC UA Source",description:"The DSK OPC UA Source allows to connect to OPC Unified Architecture (UA) based servers for data integration. The OPC UA Source act's as a OPC UA client and forwards the received data for a stream to the DSK Agent via our MQTT broker.",source:"@site/versioned_docs/version-1.10.0/setup/agent/sources/opc-ua.mdx",sourceDirName:"setup/agent/sources",slug:"/setup/agent/sources/opc-ua",permalink:"/1.10.0/setup/agent/sources/opc-ua",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-1.10.0/setup/agent/sources/opc-ua.mdx",tags:[],version:"1.10.0",sidebarPosition:2,frontMatter:{title:"OPC UA Source",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Docker Compose Setup",permalink:"/1.10.0/setup/agent/docker-compose"},next:{title:"Simulated Source",permalink:"/1.10.0/setup/agent/sources/simulated"}},u={},d=[{value:"Automated setup",id:"automated-setup",level:2},{value:"Manual setup",id:"manual-setup",level:2}],l={toc:d},g="wrapper";function m(e){let{components:t,...i}=e;return(0,n.yg)(g,(0,o.A)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The DSK OPC UA Source allows to connect to ",(0,n.yg)("a",{parentName:"p",href:"https://opcfoundation.org/about/opc-technologies/opc-ua/"},(0,n.yg)("strong",{parentName:"a"},"OPC Unified Architecture (UA)"))," based servers for data integration. The OPC UA Source act's as a OPC UA client and forwards the received data for a stream to the DSK Agent via our MQTT broker."),(0,n.yg)("h2",{id:"automated-setup"},"Automated setup"),(0,n.yg)("p",null,"During the ",(0,n.yg)("a",{parentName:"p",href:"../docker-compose#agent-automated-setup"},(0,n.yg)("strong",{parentName:"a"},"automated setup"))," of the DSK Agent you can select to additionally deploy the DSK OPC UA Source and OPC UA server/simulator for demonstration of such an integration."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Deploy OPC UA source",src:a(40987).A,width:"858",height:"698"})),(0,n.yg)("p",null,"Afterwards you can continue with ",(0,n.yg)("a",{parentName:"p",href:"/1.10.0/setup/agent_companion#agent-companion-connect"},(0,n.yg)("strong",{parentName:"a"},"connecting to, linking & configuring"))," the DSK Edge Agent and the ",(0,n.yg)("a",{parentName:"p",href:"/1.10.0/provide_data/iot/opc-ua"},(0,n.yg)("strong",{parentName:"a"},"OPC UA Source")),"."),(0,n.yg)("h2",{id:"manual-setup"},"Manual setup"),(0,n.yg)("p",null,"For the manual setup of the DSK OPC UA Source (",(0,n.yg)("inlineCode",{parentName:"p"},"opcua-source"),") and an OPC UA server/simulator (",(0,n.yg)("inlineCode",{parentName:"p"},"opcua-server"),") we need the main ",(0,n.yg)("a",{parentName:"p",href:"../docker-compose#agent-manual-setup"},(0,n.yg)("strong",{parentName:"a"},"DSK Edge services"))," as a basis."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Copy the ",(0,n.yg)("a",{target:"_blank",href:a(63127).A},(0,n.yg)("code",null,"docker-compose.override.yml"))," file.\n(see also ",(0,n.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/extends/#understanding-multiple-compose-files"},(0,n.yg)("strong",{parentName:"a"},"Docker doc - Understanding multiple Compose files")),")"),(0,n.yg)(r.A,{className:"language-yml",title:"docker-compose.override.yml",mdxType:"CodeBlock"},s)),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Startup all DSK Edge and OPC UA services (will automatically retrieve the Docker images)."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can now continue with ",(0,n.yg)("a",{parentName:"p",href:"/1.10.0/setup/agent_companion#agent-companion-connect"},(0,n.yg)("strong",{parentName:"a"},"connecting to, linking & configuring"))," the DSK Edge Agent and the ",(0,n.yg)("a",{parentName:"p",href:"/1.10.0/provide_data/iot/opc-ua"},(0,n.yg)("strong",{parentName:"a"},"OPC UA Source")),"."))))}m.isMDXComponent=!0},63127:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/files/docker-compose.override-51861f0e13f29e927d2a50b50a5823c9.yml"},40987:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/deploy-opcua-3b98dd90ec6f7bae04b53c35e1ed739e.png"}}]);
"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[6655],{99017:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return g},metadata:function(){return h},toc:function(){return N}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=n(36110),s=["components"],p={toc:[]};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login to the DataspaceAdmin"),(0,r.kt)("li",{parentName:"ul"},"Click on your account (top right) and than Administration\n",(0,r.kt)("img",{alt:"API Keys - 1",src:n(96351).Z,width:"519",height:"382"})),(0,r.kt)("li",{parentName:"ul"},"Go to API Keys\n",(0,r.kt)("img",{alt:"API Keys - 2",src:n(47388).Z,width:"3834",height:"1710"}))))}m.isMDXComponent=!0;var c=["components"],l={toc:[]};function d(e){var t=e.components,i=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Use the "Deploy to Azure" button directly below to create a Linux virtual machine on Azure with everything pre-installed/configured and the Tributech DSK Edge services up and running.\nPreview the Azure resources that will be created with the "Visualize" button.',(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-2.0.0%2Fdeployments%2Fdsk-agent%2Fazuredeploy.json/createUIDefinitionUri/https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-2.0.0%2Fdeployments%2Fdsk-agent%2FcreateUiDefinition.json"},(0,r.kt)("img",{parentName:"a",src:"https://aka.ms/deploytoazurebutton",alt:"Deploy to Azure"})),"\n",(0,r.kt)("a",{parentName:"p",href:"http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-2.0.0%2Fdeployments%2Fdsk-agent%2Fazuredeploy.json"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/visualizebutton.svg?sanitize=true",alt:"Visualize"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select desired Azure Subscription/Resource Group/Region and define the name for the Agent related Azure resources (VM, Network security group,...). The Agent name must be unique within your Resource Group.\n",(0,r.kt)("img",{alt:"Agent deployment - Provide basic data",src:n(14487).Z,width:"1270",height:"1018"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Define virtual machine Size and authentication related properties.",(0,r.kt)("br",{parentName:"p"}),"\n","The Size needs to meet our ",(0,r.kt)("a",{parentName:"p",href:"/next/setup/agent/overview#hardware-requirements"},(0,r.kt)("strong",{parentName:"a"},"Hardware Requirements")),". We recommend e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Standard_B1ms")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Standard_DS1_v2"),".",(0,r.kt)("br",{parentName:"p"}),"\n","SSH access allows to connect to the VM for ",(0,r.kt)("a",{parentName:"p",href:"/next/setup/agent/docker-compose#docker-compose-commands"},(0,r.kt)("strong",{parentName:"a"},"management purposes"))," and to support SSH tunneling/port forwarding used for connections to the DSK Agent from the Agent Companion (see ",(0,r.kt)("a",{parentName:"p",href:"/next/setup/agent_companion#connect-to-edge-agent"},(0,r.kt)("strong",{parentName:"a"},"Connect to Edge Agent")),").",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Agent deployment - Provide VM data",src:n(56768).Z,width:"1345",height:"1011"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provide DSK related configuration:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To access the client secrets and some other information required in the next steps:  ",(0,r.kt)(m,{mdxType:"ApiCredentials"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DSK Agent id"),": globally unique identifier (UUID) for the Agent"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DSK Hub name"),": The name of the DSK Hub to which your DSK Node is connected.",(0,r.kt)("br",{parentName:"li"}),"(e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"your-hub")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"your-hub.dataspace-hub.com"),")",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"On our ",(0,r.kt)("a",{parentName:"p",href:"https://tributech.io/playground"},(0,r.kt)("strong",{parentName:"a"},"Playground Ecosystem"))," this is ",(0,r.kt)("inlineCode",{parentName:"p"},"play")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"play.dataspace-hub.com"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DSK Node name"),": The name of your DSK Node to which the DSK Agent will be linked.",(0,r.kt)("br",{parentName:"li"}),"(e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"your-node")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"your-node.dataspace-node.com"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Promtail (Loki push API) password"),': The client secret for the authentication at Promtail (Loki push API) from "API Keys".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Docker Registry Token (DSK Edge) name"),': The name of the token used for authentication at the private Docker Registry hosting the DSK Agent Docker images from "API Keys". Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"tributech-io-dsk-edge"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Docker Registry Token (DSK Edge) secret"),': The access token for authentication at the private Docker Registry hosting the DSK Agent Docker images from "API Keys".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DSK Agent Docker Image Tag"),": The Docker Image tag defining the DSK Agent version to be deployed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Additional DSK Edge Source services"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"None"),": Only the main DSK Edge services (DSK Agent and mosquitto MQTT broker) will be deployed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DSK Edge Simulated Sensor"),": Additionally deploy the ",(0,r.kt)("a",{parentName:"li",href:"/next/setup/agent/sources/simulated"},(0,r.kt)("strong",{parentName:"a"},"DSK Edge Simulated Sensor"))," service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"OPC UA Source and Server/Simulator"),": Additionally deploy the ",(0,r.kt)("a",{parentName:"li",href:"/next/setup/agent/sources/opc-ua"},(0,r.kt)("strong",{parentName:"a"},"OPC UA Source and Server/Simulator"))," service."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DSK Source Docker Image Tag"),": The Docker Image tag defining the DSK Edge Source version to be deployed.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Agent deployment - Provide DSK data",src:n(69146).Z,width:"1311",height:"1024"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Review terms and provided input and create the Azure resources.\n",(0,r.kt)("img",{alt:"Agent deployment - Review + Create",src:n(9295).Z,width:"1243",height:"1021"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Successful deployment\ud83c\udf89.\n",(0,r.kt)("img",{alt:"Agent deployment - Successful deployment",src:n(81752).Z,width:"1258",height:"743"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Output of the deployment showing sample command to connect to the VM using SSH incl. port forwarding for access to the DSK Agent (e.g. for the Agent Companion).\n",(0,r.kt)("img",{alt:"Agent deployment - Deployment output",src:n(75166).Z,width:"1258",height:"743"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can now continue with ",(0,r.kt)("a",{parentName:"p",href:"/next/setup/agent_companion#agent-companion-connect"},(0,r.kt)("strong",{parentName:"a"},"connecting to, linking & configuring"))," the DSK Edge Agent."))))}d.isMDXComponent=!0;var u=["components"],g={title:"Docker Compose Setup",sidebar_position:2},k=void 0,h={unversionedId:"setup/agent/docker-compose",id:"setup/agent/docker-compose",title:"Docker Compose Setup",description:"To simply get started with the Tributech Edge Agent services running on Docker / Docker Compose runtime we provide a fully automated option which deploys a Linux virtual machine on Azure with everything pre-installed/configured and the Tributech DSK Edge services up and running.",source:"@site/docs/setup/agent/docker-compose.mdx",sourceDirName:"setup/agent",slug:"/setup/agent/docker-compose",permalink:"/next/setup/agent/docker-compose",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/setup/agent/docker-compose.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Docker Compose Setup",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/next/setup/agent/overview"},next:{title:"Requirements",permalink:"/next/setup/agent/requirements"}},f={},N=[{value:"Automated setup",id:"agent-automated-setup",level:2},{value:"Manual setup",id:"agent-manual-setup",level:2},{value:"Docker Compose management commands",id:"docker-compose-commands",level:2}],v={toc:N};function b(e){var t=e.components,s=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To simply get started with the Tributech Edge Agent services running on ",(0,r.kt)("a",{parentName:"p",href:"/next/setup/agent/overview#docker-runtime"},(0,r.kt)("strong",{parentName:"a"},"Docker / Docker Compose"))," runtime we provide a ",(0,r.kt)("a",{parentName:"p",href:"#agent-automated-setup"},(0,r.kt)("strong",{parentName:"a"},"fully automated"))," option which deploys a Linux virtual machine on Azure with everything pre-installed/configured and the Tributech DSK Edge services up and running.\nFor the ",(0,r.kt)("a",{parentName:"p",href:"#agent-manual-setup"},(0,r.kt)("strong",{parentName:"a"},"manual setup"))," on your device with the Docker runtime we provide according instructions and sample files."),(0,r.kt)("p",null,"To manage and handle Docker services of the Tributech Edge Agent (e.g. start/stop services, check logs of service) we provide some ",(0,r.kt)("a",{parentName:"p",href:"#docker-compose-commands"},(0,r.kt)("strong",{parentName:"a"},"sample Docker Compose commands")),"."),(0,r.kt)("h2",{id:"agent-automated-setup"},"Automated setup"),(0,r.kt)(d,{mdxType:"DockerComposeAutomatedSetup"}),(0,r.kt)("h2",{id:"agent-manual-setup"},"Manual setup"),(0,r.kt)("p",null,"The following steps describe the tasks required to get the main Edge services (",(0,r.kt)("inlineCode",{parentName:"p"},"Tributech-agent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mosquitto-server"),") up and running on a system."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Prerequisite: Recent Linux based system meeting our ",(0,r.kt)("a",{parentName:"p",href:"#requirements"},(0,r.kt)("strong",{parentName:"a"},"requirements")),".\nOur ",(0,r.kt)("a",{parentName:"p",href:"#agent-automated-setup"},(0,r.kt)("strong",{parentName:"a"},"automated setup"))," creates e.g. a Ubuntu 20.04 based Linux virtual machine on Azure.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},(0,r.kt)("strong",{parentName:"a"},"Install Docker"))," based on the desired option from the official documentation.\ne.g. for Ubuntu using the Official Docker Repository ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.docker.com/engine/install/ubuntu/"},"https://docs.docker.com/engine/install/ubuntu/"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get update\nsudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho \\\n"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},(0,r.kt)("strong",{parentName:"a"},"Install docker-compose")),"\nWe recommend the installation via package manager (e.g. Ubuntu ",(0,r.kt)("inlineCode",{parentName:"p"},"apt-get"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install docker-compose\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Optional) Allow to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"},(0,r.kt)("strong",{parentName:"a"},"manage Docker as non-root user")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Login to the private Docker registry to allow retrieval of Tributech Edge Docker images."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo <access-token> | docker login --username <token-name> --password-stdin tributech.azurecr.io\n")),(0,r.kt)("p",{parentName:"li"},'Get "Docker Registry Token (DSK Edge)" from DataSpace-Admin API Keys area:'),(0,r.kt)(m,{mdxType:"ApiCredentials"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy and adapt the ",(0,r.kt)("a",{target:"_blank",href:n(12150).Z},(0,r.kt)("inlineCode",{parentName:"p"},".env"))," environment configuration file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#agent-automated-setup"},(0,r.kt)("strong",{parentName:"a"},"automated setup"))," for detailed parameter description and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/environment-variables/#the-env-file"},(0,r.kt)("strong",{parentName:"a"},"Docker doc - The \u201c.env\u201d file"))," for general information about the ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),' file.\nThe "Promtail (Loki push API)" password can be retrieved in the DataSpace-Admin API Keys area (see previous step).'),(0,r.kt)(i.Z,{className:"language-plain",title:".env",mdxType:"CodeBlock"},"AGENT_TAG=2.1.1\nSOURCE_TAG=2.1.0\nAGENT_ID=305ed1ad-46e0-4b1b-85c4-aa0268e612db\nAGENT_NAME=dev-agent-a1\nNODE_NAME=dev-node-a\nHUB_NAME=dev\nLOKI_PROMTAIL_PW=<YourSecurePassword123!>\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("a",{target:"_blank",href:n(29715).Z},(0,r.kt)("code",null,"docker-compose.yml"))," file."),(0,r.kt)(i.Z,{className:"language-yml",title:"docker-compose.yml",mdxType:"CodeBlock"},'version: "3.3"\n\nservices:\n  # DSK agent\n  dsk-agent:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}dsk-agent:${AGENT_TAG:-latest}\n    depends_on:\n      - mosquitto-server\n    environment:\n      - Logging__LogLevel__Default=Information\n      - MqttOptions__MQTTHost=mosquitto-server\n      # general DSK edge agent configuration\n      - EdgeDeviceOptions__AgentID=${AGENT_ID:?"The variable AGENT_ID needs to be configured in the .env file."}\n      - EdgeDeviceOptions__ValueSink=Cloud\n      # push logs to Loki at server via promtail\n      - TelemetryOptions__LokiUrl=https://promtail-push.${NODE_NAME:?"The variable NODE_NAME needs to be configured in the .env file."}.dataspace-node.com\n      - TelemetryOptions__LokiUser=tributech\n      - TelemetryOptions__LokiPassword=${LOKI_PROMTAIL_PW:?"The variable LOKI_PROMTAIL_PW needs to be configured in the .env file."}\n      - TelemetryOptions__ServiceName=${AGENT_NAME:?"The variable AGENT_NAME needs to be configured in the .env file."}\n      - TelemetryOptions__ServiceId=${AGENT_ID:?"The variable AGENT_ID needs to be configured in the .env file."}\n    networks:\n      - edge-net\n    ports:\n      - "5000:80" # enable access to agent REST-API (e.g. for configuration with Agent-Companion)\n    volumes:\n      - ./volumes/dsk-agent/:/app/data # volume mapping for permanent storage of keys and datatwin file\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n\n  # MQTT broker/server\n  mosquitto-server:\n    image: eclipse-mosquitto:1.6\n    networks:\n      - edge-net\n    # Expose ports for development and testing purposes\n    #ports:\n    # - "127.0.0.1:1883:1883" # MQTT\n    # - "127.0.0.1:9001:9001" # web-socket\n    volumes:\n      - mosquitto_config:/mosquitto/config\n      - mosquitto_data:/mosquitto/data\n      - mosquitto_log:/mosquitto/log\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n\nnetworks:\n  edge-net:\n\nvolumes:\n  mosquitto_config:\n  mosquitto_data:\n  mosquitto_log:\n')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Startup the Tributech Edge services (will automatically retrieve the Docker images)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can now continue with ",(0,r.kt)("a",{parentName:"p",href:"/next/setup/agent_companion#agent-companion-connect"},(0,r.kt)("strong",{parentName:"a"},"connecting to, linking & configuring"))," the Tributech Edge Agent."))),(0,r.kt)("h2",{id:"docker-compose-commands"},"Docker Compose management commands"),(0,r.kt)("p",null,"In the following we show some of the basic Docker Compose commands for the management of the Docker services of the Tributech Edge Agent.\nCheck the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/reference/"},(0,r.kt)("strong",{parentName:"a"},"docker-compose CLI"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/cli/"},(0,r.kt)("strong",{parentName:"a"},"Docker CLI"))," documentation for a full overview of the commands."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://asciinema.org/a/7rIgnD7Rqafi15Smdj1MVEKXj"},(0,r.kt)("img",{parentName:"a",src:"https://asciinema.org/a/7rIgnD7Rqafi15Smdj1MVEKXj.svg",alt:"asciicast"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# pull docker images for all services\ndocker-compose pull\n\n# create & start all services\ndocker-compose up -d\n\n# check service status\ndocker-compose ps\n\n# check logs of specific service (-f for following log output)\ndocker-compose logs -f -t --tail=500 dsk-agent\n\n# stop all services\ndocker-compose stop\n# stop single service\ndocker-compose stop dsk-agent\n# restart single service\ndocker-compose restart dsk-agent\n# start all services\ndocker-compose start\n# start single service\ndocker-compose start dsk-agent\n\n# remove services\ndocker-compose down\n")),(0,r.kt)("p",null,"Depending on your environment the commands might need to be run as root using ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo"),"."))}b.isMDXComponent=!0},12150:function(e,t,n){t.Z=n.p+"2b3e15924d55ed5e981ddf1b1024a4bf.env"},29715:function(e,t,n){t.Z=n.p+"assets/files/docker-compose-62d5d842db45659e7a78574f5068aa24.yml"},96351:function(e,t,n){t.Z=n.p+"assets/images/api-credentials-1-dac62fa56ea0e14ec6a197de98e44beb.png"},47388:function(e,t,n){t.Z=n.p+"assets/images/api-credentials-2-e14e5df7247ba58c0d4636653d8d0b93.png"},14487:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-1-6dc32625346703e55abfe6f0b9a7ede5.png"},56768:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-2-694712ef295ce336bf41527ba7acf8f6.png"},69146:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-3-b5ef35cec47c743dcbdb35d04f621aaa.png"},9295:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-4-f8fc83e90f5d3627e0791af812ac9351.png"},81752:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-5-bf835d404ca9107cb78a580871d5fb8f.png"},75166:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-6-a7139ac52558635b1bd6691ddd6b72be.png"}}]);
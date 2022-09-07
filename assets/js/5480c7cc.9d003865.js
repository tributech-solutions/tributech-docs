"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[873],{35342:function(e,t,n){n.d(t,{ZP:function(){return m}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],s={toc:[]};function p(e){var t=e.components,p=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login to the DataspaceAdmin"),(0,r.kt)("li",{parentName:"ul"},"Click on your account (top right) and than Administration\n",(0,r.kt)("img",{alt:"API Keys - 1",src:n(33239).Z,width:"519",height:"382"})),(0,r.kt)("li",{parentName:"ul"},"Go to API Keys\n",(0,r.kt)("img",{alt:"API Keys - 2",src:n(31854).Z,width:"2369",height:"1407"}))))}p.isMDXComponent=!0;var c=["components"],l={toc:[]};function m(e){var t=e.components,i=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Use the "Deploy to Azure" button directly below to create a Linux virtual machine on Azure with everything pre-installed/configured and the Tributech DSK Edge services up and running.\nPreview the Azure resources that will be created with the "Visualize" button.',(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-1.10.0%2Fdeployments%2Fdsk-agent%2Fazuredeploy.json/createUIDefinitionUri/https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-1.10.0%2Fdeployments%2Fdsk-agent%2FcreateUiDefinition.json"},(0,r.kt)("img",{parentName:"a",src:"https://aka.ms/deploytoazurebutton",alt:"Deploy to Azure"})),"\n",(0,r.kt)("a",{parentName:"p",href:"http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-1.10.0%2Fdeployments%2Fdsk-agent%2Fazuredeploy.json"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/visualizebutton.svg?sanitize=true",alt:"Visualize"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select desired Azure Subscription/Resource Group/Region and define the name for the Agent related Azure resources (VM, Network security group,...). The Agent name must be unique within your Resource Group.\n",(0,r.kt)("img",{alt:"Agent deployment - Provide basic data",src:n(94051).Z,width:"858",height:"655"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Define virtual machine Size and authentication related properties.",(0,r.kt)("br",{parentName:"p"}),"\n","The Size needs to meet our ",(0,r.kt)("a",{parentName:"p",href:"/1.10.0/setup/agent/overview#hardware-requirements"},(0,r.kt)("strong",{parentName:"a"},"Hardware Requirements")),". We recommend e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Standard_B1ms")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Standard_DS1_v2"),".",(0,r.kt)("br",{parentName:"p"}),"\n","SSH access allows to connect to the VM for ",(0,r.kt)("a",{parentName:"p",href:"/1.10.0/setup/agent/docker-compose#docker-compose-commands"},(0,r.kt)("strong",{parentName:"a"},"management purposes"))," and to support SSH tunneling/port forwarding used for connections to the DSK Agent from the Agent Companion (see ",(0,r.kt)("a",{parentName:"p",href:"/1.10.0/setup/agent_companion#connect-to-edge-agent"},(0,r.kt)("strong",{parentName:"a"},"Connect to Edge Agent")),").",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Agent deployment - Provide VM data",src:n(40191).Z,width:"858",height:"698"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provide DSK related configuration:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To access the client secrets and some other information required in the next steps:  ",(0,r.kt)(p,{mdxType:"ApiCredentials"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DSK Agent id"),": globally unique identifier (UUID) for the Agent"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DSK Hub name"),": The name of the DSK Hub to which your DSK Node is connected.",(0,r.kt)("br",{parentName:"li"}),"(e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"your-hub")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"your-hub.dataspace-hub.com"),")",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"On our ",(0,r.kt)("a",{parentName:"p",href:"https://tributech.io/playground"},(0,r.kt)("strong",{parentName:"a"},"Playground Ecosystem"))," this is ",(0,r.kt)("inlineCode",{parentName:"p"},"play")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"play.dataspace-hub.com"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DSK Node name"),": The name of your DSK Node to which the DSK Agent will be linked.",(0,r.kt)("br",{parentName:"li"}),"(e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"your-node")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"your-node.dataspace-node.com"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Data-API client secret"),": The client secret for the authentication at the Data-API of the DSK Node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Trust-API client secret"),": The client secret for the authentication at the Trust-API of the DSK Node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Docker Registry Token (DSK Edge) name"),": The name of the token used for authentication at the private Docker Registry hosting the DSK Agent Docker images. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"tributech-io-dsk-edge"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Docker Registry Token (DSK Edge) secret"),": The access token for authentication at the private Docker Registry hosting the DSK Agent Docker images."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Docker Image Tag"),": The Docker Image tag defining the DSK Agent version to be deployed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Additional DSK Edge services"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"None"),": Only the main DSK Edge services (DSK Agent and mosquitto MQTT broker) will be deployed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DSK Edge Simulated Sensor"),": Additionally deploy the ",(0,r.kt)("a",{parentName:"li",href:"/1.10.0/setup/agent/sources/simulated"},(0,r.kt)("strong",{parentName:"a"},"DSK Edge Simulated Sensor"))," service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"OPC UA Source and Server/Simulator"),": Additionally deploy the ",(0,r.kt)("a",{parentName:"li",href:"/1.10.0/setup/agent/sources/opc-ua"},(0,r.kt)("strong",{parentName:"a"},"OPC UA Source and Server/Simulator"))," service.")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Agent deployment - Provide DSK data",src:n(10736).Z,width:"858",height:"698"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Review terms and provided input and create the Azure resources.\n",(0,r.kt)("img",{alt:"Agent deployment - Review + Create",src:n(98072).Z,width:"858",height:"698"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Successful deployment\ud83c\udf89.\n",(0,r.kt)("img",{alt:"Agent deployment - Successful deployment",src:n(39200).Z,width:"858",height:"698"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Output of the deployment showing sample command to connect to the VM using SSH incl. port forwarding for access to the DSK Agent (e.g. for the Agent Companion).\n",(0,r.kt)("img",{alt:"Agent deployment - Deployment output",src:n(11793).Z,width:"858",height:"655"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can now continue with ",(0,r.kt)("a",{parentName:"p",href:"/1.10.0/setup/agent_companion#agent-companion-connect"},(0,r.kt)("strong",{parentName:"a"},"connecting to, linking & configuring"))," the DSK Edge Agent."))))}m.isMDXComponent=!0},15460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=n(36110),s=n(35342),p=["components"],c={title:"Docker Compose Setup",sidebar_position:2},l=void 0,m={unversionedId:"setup/agent/docker-compose",id:"version-1.10.0/setup/agent/docker-compose",title:"Docker Compose Setup",description:"The simply get started with the DSK Edge Agent services using the Docker / Docker Compose runtime we provide a fully automated option which deploys a Linux virtual machine on Azure with everything pre-installed/configured and the Tributech DSK Edge services up and running.",source:"@site/versioned_docs/version-1.10.0/setup/agent/docker-compose.mdx",sourceDirName:"setup/agent",slug:"/setup/agent/docker-compose",permalink:"/1.10.0/setup/agent/docker-compose",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-1.10.0/setup/agent/docker-compose.mdx",tags:[],version:"1.10.0",sidebarPosition:2,frontMatter:{title:"Docker Compose Setup",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/1.10.0/setup/agent/overview"},next:{title:"OPC UA Source",permalink:"/1.10.0/setup/agent/sources/opc-ua"}},d={},u=[{value:"Automated setup",id:"agent-automated-setup",level:2},{value:"Manual setup",id:"agent-manual-setup",level:2},{value:"Docker Compose management commands",id:"docker-compose-commands",level:2}],g={toc:u};function k(e){var t=e.components,c=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The simply get started with the DSK Edge Agent services using the ",(0,r.kt)("a",{parentName:"p",href:"/1.10.0/setup/agent/overview#docker-runtime"},(0,r.kt)("strong",{parentName:"a"},"Docker / Docker Compose"))," runtime we provide a ",(0,r.kt)("a",{parentName:"p",href:"#agent-automated-setup"},(0,r.kt)("strong",{parentName:"a"},"fully automated"))," option which deploys a Linux virtual machine on Azure with everything pre-installed/configured and the Tributech DSK Edge services up and running.\nFor the ",(0,r.kt)("a",{parentName:"p",href:"#agent-manual-setup"},(0,r.kt)("strong",{parentName:"a"},"manual setup"))," on your device and Docker runtime we provide according instructions and sample files."),(0,r.kt)("p",null,"To manage and handle Docker services of the DSK Edge Agent (e.g. start/stop services, check logs of service) we provide some ",(0,r.kt)("a",{parentName:"p",href:"#docker-compose-commands"},(0,r.kt)("strong",{parentName:"a"},"sample Docker Compose commands")),"."),(0,r.kt)("h2",{id:"agent-automated-setup"},"Automated setup"),(0,r.kt)(s.ZP,{mdxType:"DockerComposeAutomatedSetup"}),(0,r.kt)("h2",{id:"agent-manual-setup"},"Manual setup"),(0,r.kt)("p",null,"The following steps describe the tasks required to get the main DSK Edge services (",(0,r.kt)("inlineCode",{parentName:"p"},"dsk-agent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mosquitto-server"),") up and running on a system."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Prerequisite: Recent Linux based system meeting our ",(0,r.kt)("a",{parentName:"p",href:"#requirements"},(0,r.kt)("strong",{parentName:"a"},"requirements")),".\nOur ",(0,r.kt)("a",{parentName:"p",href:"#agent-automated-setup"},(0,r.kt)("strong",{parentName:"a"},"automated setup"))," creates e.g. a Ubuntu 20.04 based Linux virtual machine on Azure.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},(0,r.kt)("strong",{parentName:"a"},"Install Docker"))," based on the desired option from the official documentation.\ne.g. for Ubuntu using the Official Docker Repository ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.docker.com/engine/install/ubuntu/"},"https://docs.docker.com/engine/install/ubuntu/"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get update\nsudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho \\\n"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},(0,r.kt)("strong",{parentName:"a"},"Install docker-compose")),"\nWe recommend the installation via package manager (e.g. Ubuntu ",(0,r.kt)("inlineCode",{parentName:"p"},"apt-get"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install docker-compose\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Optional) Allow to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"},(0,r.kt)("strong",{parentName:"a"},"manage Docker as non-root user")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Login to the private Docker registry to allow retrieval of DSK Edge Docker images. (TODO credentials)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo <access-token> | docker login --username <token-name> --password-stdin tributech.azurecr.io\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy and adapt the ",(0,r.kt)("a",{target:"_blank",href:n(36132).Z},(0,r.kt)("inlineCode",{parentName:"p"},".env"))," environment configuration file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#agent-automated-setup"},(0,r.kt)("strong",{parentName:"a"},"automated setup"))," for detailed parameter description and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/environment-variables/#the-env-file"},(0,r.kt)("strong",{parentName:"a"},"Docker doc - The \u201c.env\u201d file"))," for general information about the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)(i.Z,{className:"language-plain",title:".env",mdxType:"CodeBlock"},"TAG=1.10.1\nAGENT_ID=305ed1ad-46e0-4b1b-85c4-aa0268e612db\nNODE_NAME=dev-node-a\nHUB_NAME=dev\nDATA_API_SECRET=<YourSecurePassword123!>\nTRUST_API_SECRET=<YourSecurePassword123!>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("a",{target:"_blank",href:n(66291).Z},(0,r.kt)("code",null,"docker-compose.yml"))," file."),(0,r.kt)(i.Z,{className:"language-yml",title:"docker-compose.yml",mdxType:"CodeBlock"},'version: "3.3"\n\nservices:\n  # DSK agent\n  dsk-agent:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}dsk-agent:${TAG:-latest}\n    depends_on:\n      - mosquitto-server     \n    environment:\n      - Logging__LogLevel__Default=Information\n      - MqttOptions__MQTTHost=mosquitto-server\n      # general DSK edge agent configuration  \n      - EdgeDeviceOptions__AgentID=${AGENT_ID:?"The variable AGENT_ID needs to be configured in the .env file."}\n      - EdgeDeviceOptions__ValueSink=HttpValueSink\n      # configure DSK Data-API for value storage\n      - DataApiValueSinkOptions__DataAPIBaseUrl=https://data-api.${NODE_NAME:?"The variable NODE_NAME needs to be configured in the .env file."}.dataspace-node.com/\n      - DataApiValueSinkOptions__AuthUrl=https://auth.${HUB_NAME:?"The variable HUB_NAME needs to be configured in the .env file."}.dataspace-hub.com/auth/realms/${NODE_NAME:?"The variable NODE_NAME needs to be configured in the .env file."}/protocol/openid-connect/token\n      - DataApiValueSinkOptions__ClientSecret=${DATA_API_SECRET:?"The variable DATA_API_SECRET needs to be configured in the .env file."}\n      # configure DSK Trust-API for proof storage\n      - ProofSinkOptions__TrustAPIBaseUrl=https://trust-api.${NODE_NAME:?"The variable NODE_NAME needs to be configured in the .env file."}.dataspace-node.com/\n      - ProofSinkOptions__AuthUrl=https://auth.${HUB_NAME:?"The variable HUB_NAME needs to be configured in the .env file."}.dataspace-hub.com/auth/realms/${NODE_NAME:?"The variable NODE_NAME needs to be configured in the .env file."}/protocol/openid-connect/token\n      - ProofSinkOptions__ClientSecret=${TRUST_API_SECRET:?"The variable TRUST_API_SECRET needs to be configured in the .env file."}\n    networks:\n      - edge-net      \n    ports:\n      - "5000:80" # enable access to agent REST-API (e.g. for configuration with Agent-Companion)\n    volumes:\n      - ./volumes/dsk-agent/:/app/data # volume mapping for permanent storage of keys and datatwin file\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"        \n\n  # MQTT broker/server\n  mosquitto-server:\n    image: eclipse-mosquitto:1.6\n    networks:\n      - edge-net\n    # Expose ports for development and testing purposes\n    #ports:\n    # - "127.0.0.1:1883:1883" # MQTT\n    # - "127.0.0.1:9001:9001" # web-socket\n    volumes:\n      - mosquitto_config:/mosquitto/config\n      - mosquitto_data:/mosquitto/data\n      - mosquitto_log:/mosquitto/log\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n\nnetworks:\n  edge-net:\n\nvolumes:\n  mosquitto_config:\n  mosquitto_data:\n  mosquitto_log:\n')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Startup the DSK Edge services (will automatically retrieve the Docker images)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can now continue with ",(0,r.kt)("a",{parentName:"p",href:"/1.10.0/setup/agent_companion#agent-companion-connect"},(0,r.kt)("strong",{parentName:"a"},"connecting to, linking & configuring"))," the DSK Edge Agent."))),(0,r.kt)("h2",{id:"docker-compose-commands"},"Docker Compose management commands"),(0,r.kt)("p",null,"In the following we show some of the basic Docker Compose commands for the management of the Docker services of the DSK Edge Agent.\nCheck the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/reference/"},(0,r.kt)("strong",{parentName:"a"},"docker-compose CLI"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/cli/"},(0,r.kt)("strong",{parentName:"a"},"Docker CLI"))," documentation for a full overview of the commands."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://asciinema.org/a/ySB0YG0BMgrwO9MM124rsaL5w"},(0,r.kt)("img",{parentName:"a",src:"https://asciinema.org/a/ySB0YG0BMgrwO9MM124rsaL5w.svg",alt:"asciicast"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# pull docker images for all services\ndocker-compose pull\n\n# create & start all services\ndocker-compose up -d\n\n# check service status\ndocker-compose ps\n\n# check logs of specific service (-f for following log output)\ndocker-compose logs -f -t --tail=500 dsk-agent\n\n# stop all services\ndocker-compose stop\n# stop single service\ndocker-compose stop dsk-agent\n# restart single service\ndocker-compose restart dsk-agent\n# start all services\ndocker-compose start\n# start single service\ndocker-compose start dsk-agent\n\n# remove services\ndocker-compose down\n")),(0,r.kt)("p",null,"Depending on your environment the commands might need to be run as root using ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo"),"."))}k.isMDXComponent=!0},36132:function(e,t,n){t.Z=n.p+"416b59ac5ee5c3cb8cc04c9b5e63f6ed.env"},66291:function(e,t,n){t.Z=n.p+"assets/files/docker-compose-a4408315fd8e299570d1951128bac7ef.yml"},33239:function(e,t,n){t.Z=n.p+"assets/images/api-credentials-1-dac62fa56ea0e14ec6a197de98e44beb.png"},31854:function(e,t,n){t.Z=n.p+"assets/images/api-credentials-2-f28de73988f3866d518213b0ea0d8475.png"},94051:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-1-b5976f71dc1d2018aa8c21e94c40ea0b.png"},40191:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-2-4790290fa5192b92a79bddd577b14e03.png"},10736:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-3-493a240e211e281b6f26139d129f1ad3.png"},98072:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-4-ac353dc1139f540b3fd2916f23303776.png"},39200:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-5-b3cf76ab42fb2b9f378e3cf38ca0fe59.png"},11793:function(e,t,n){t.Z=n.p+"assets/images/agent-docker-deploy-6-b4c32ebc979bf7beaedb47a8c655f414.png"}}]);
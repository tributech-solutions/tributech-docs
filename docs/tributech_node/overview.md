---
title: Overview
sidebar_position: 1
---

# Tributech Node 
The Tributech Node is the central layer of our Tributech Platform where every data will be collected, verified from our Tributech Agents. Additionally it will provide functionality to configure and execute commands to the given Tributech Agents.

It also serves as middleware Layer for external apps which might read the available data to provide customized user experience. 

## Overview 
![Tributech Node - Overview](./img/NodeOverview.png)

### Agents

The Agents are connected to our node via an MQTT broker which is secured by TLS, this provides us the possibility to have an near real time communication to receive data from our agents. Also it will enable us the execute given commands to our agent. With this channel we provide the data from our Agent Sources and also the Proofs which secures your Data against malicious attacks.  

___
*** NOTE ***  
This leads to the requirement that the Tributech EDGE Agent needs an outgoing port **1883**. Further Information can be found in the [Tributech Agent documentation](../tributech_agent/agent_integration.md). 

This requirement is only for the ***EDGE Agent*** because the ***OEM has an built in LTE Modem*** which handles the connectivity of the device.
___

### REST API

The Node is build with the ***API-first approach*** in mind so every functionality is available via our REST API. This also enables external actors to act with our functionality like:

- Fetching the data provided by the agents 
- Trigger the validation of their data 
- Fetching the Validation results of their data
- Executing commands which will be handled by our agents
- Configure the given Sources and Agents
- Manage the available DTDL Models within your Node

[Authorization](./API_usage.md) will be further explained in another page. But it follows the [OAuth 2.0](https://oauth.net/2/) specification and will support the [client credential flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow) and the [authorization code flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow-with-proof-key-for-code-exchange-pkce). Currently we don't support any user/group permissions and will only handle authorization against our rest api.   

### Webhooks
We also provide a push based notification system via Webhooks. External actors are able to subscribe to given events and add an url where the events should be sent to. Additionally we attach an HMAC signature to our events within the HTTP Headers to prevent spoofing attacks. 

The list of events and subscription can be handled within our rest api. This enables external parties to implement a push based system within their application to decrease the reaction time to certain events in our node. 

***For further Information visit the [API Integration Page](./API_integration.md)***


### DTDL
To configure our Tributech Agents we currently use the [Digital Twins Definition Language Version 2](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/DTDL.v2.md) which is an open standard to describe real world applications or things. This enables us the have an semantic description and configuration of our agents.  

There is also the possibility that external actors can upload their own customized models *(via our rest api)* to create a context between the ingested data and their application to unlock analytics or machine learning capabilities.  

To check our current Models visit our [public page on Github](https://github.com/tributech-solutions/data-asset-twin-v2).

___

# Deployment

Our Tributech node is using [Kubernetes](https://kubernetes.io/) as orchestration platform where we provide several components to enable the full functionality of our Tributech Node. 

We provide an [HELM Chart](https://helm.sh/) to ease the setup of our configuration. It is not public available so please contact our support team for further Information.  
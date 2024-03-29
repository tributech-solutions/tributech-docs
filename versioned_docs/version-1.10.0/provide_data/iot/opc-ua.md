---
title: OPC-UA Source
sidebar_position: 3
---

The OPC UA Source allows to connect to [**OPC Unified Architecture (UA)**](https://opcfoundation.org/about/opc-technologies/opc-ua/) based servers for data integration. The DSK OPC UA Source act's as a OPC UA client and forwards the received data for a stream to the main DSK Edge Agent service (`dsk-agent`) via our MQTT broker.  
If the [**DSK OPC UA Source service (`opcua-source`)**](../../setup/agent/sources/opc-ua) is deployed along with our DSK Edge Agent services it can be configured based on twins with our [**Agent Companion**](../../setup/agent_companion) as described in the following:

- Open the [**Agent Companion**](../../setup/agent_companion), [**login**](../../setup/agent_companion#agent-companion-login) to the DSK Node and [**connect**](../../setup/agent_companion#agent-companion-connect) with the DKS Edge Agent
- Add OPC UA Source and configure _OPC UA Connection string_
  ![OPC UA Source - AgentCompanion - Configure 1](./img/agent-companion-configure-opcua-1.png)
- Add OPC UA Stream(s) and configure _OPC UA identifier_ (which defines the endpoint to which the stream will be connected)
  ![OPC UA Source - AgentCompanion - Configure 2](./img/agent-companion-configure-opcua-2.png)
- Full example (incl. persistence and publish options for the streams)
  ![OPC UA Source - AgentCompanion - Configure 3](./img/agent-companion-configure-opcua-3.png)
- Upload To Device
- (Optional) [Verify configured streams in DataSpace-Admin](../../quickstart/setup-agent.mdx#verify-in-dataspace-admin) at Streams of Agent
  ![OPC UA Source - AgentCompanion - Configure 4](./img/agent-companion-configure-opcua-4.png)


## OPC UA debugging

The following sample commands demonstrate how you can debug an OPC UA server using a Docker container of the [**opcua-commander**](https://github.com/node-opcua/opcua-commander) tool.

```bash
# connect to host network and OPC UA server accessible on localhost port 4840
sudo docker run --rm -it --network host barta/opcua-commander opcua-commander -e opc.tcp://localhost:4840
# connect to docker bridge `edge-net` and access `opcua-server` service on port 4840
sudo docker run --rm -it --network tributech_edge-net barta/opcua-commander opcua-commander -e opc.tcp://opcua-server:4840
```

![OPC UA commander](./img/opcua-commander.png)

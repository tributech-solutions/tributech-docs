---
title: Overview
sidebar_position: 1
---

# DSK Agent Edge Setup

The DSK Agent Edge setup consists of the main DSK Agent service (`dsk-agent`) and (optional) services like the MQTT broker (`eclipse-mosquitto`, for the communication on the edge) and/or for connecting external data sources e.g. [**OPC UA Source**](./sources/opc-ua) (`opcua-source`), [**Simulated Sensor/Source**](./sources/simulated) (`simulated-sensor`),...  
The services are containerized and require a Linux based host system on the edge device with an according container runtime.


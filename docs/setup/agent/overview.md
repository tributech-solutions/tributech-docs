---
title: Overview
sidebar_position: 1
---

# DSK Agent Edge Setup

The DSK Edge Agent setup consists of the main DSK Agent service (`dsk-agent`) and (optional) services like the MQTT broker (`eclipse-mosquitto`, for the communication on the edge) and/or for connecting external data sources e.g. [OPC UA Source](./sources/opc-ua) (`opcua-source`), [Simulated Sensor/Source](./sources/simulated) (`simulated-sensor`),...  
The services are containerized and require a Linux based host system on the edge device with an according container runtime.

## Requirements {#requirements}

The edge device must meet the following hardware and software requirements.

### Hardware Requirements {#hardware-requirements}

| Type | Minimum Requirement      | Recommend Requirement |
| :--- | :----------------------- | :-------------------- |
| CPU  | 1 Core (x86-64 / ARM32 ) | 2 Cores               |
| RAM  | 1 GB Ram                 | 2 GB Ram              |

The DSK Agent Edge itself does not actually consume that much RAM these are the requirements for the whole system. Keep in mind that these requirements strongly depend on the overall setup and the actual load of the agent. These are minimum requirements for rather small to medium amounts of data. If high volumes of data have to be processed the requirements are higher.

If you have any questions regarding infrastructure requirements, please talk to your contact person at Tributech or send an email to our [Customer Advisory Team](mailto:customer-advisory@tributech.io).

### Software Requirements {#software-requirements}

| Type    | Required                                                                                                         | Preferred                      |
| :------ | :--------------------------------------------------------------------------------------------------------------- | :----------------------------- |
| OS      | Any current Linux Distribution                                                                                   | Ubuntu 18.04 LTS or later      |
| Runtime | Docker Engine (≥20) + Docker-Compose (≥1.26)<br/>or<br/>Azure IoT Edge runtime with Moby container engine (≥1.1) | Docker Engine + Docker-Compose |


### Runtime

#### Docker / Docker Compose {#docker-runtime}

The DSK Edge Agent services can be run using [Docker Engine](https://docs.docker.com/engine/) as a container runtime. We use [Docker Compose](https://docs.docker.com/compose/) for management/orchestration of the Docker services and provide according [samples](./docker-compose#agent-manual-setup) and [automated deployments](./docker-compose#agent-automated-setup).  

If you want to use any other container runtime (e.g. containerd) please talk to your contact person at Tributech or send an email to our [Customer Advisory Team](https://www.tributech.io/about-us/).

#### Azure IoT Edge Runtime {#azure-iot-edge-runtime}

The DSK Edge Agent services can be deployed as [IoT Edge modules](https://docs.microsoft.com/en-us/azure/iot-edge/iot-edge-modules) on the [Azure IoT Edge Runtime](https://docs.microsoft.com/en-us/azure/iot-edge/about-iot-edge) using [Moby container engine](https://docs.microsoft.com/en-us/azure/iot-edge/support?view=iotedge-2020-11#container-engines). For the message based communication within the device and with the cloud we use the infrastructure provided by the Azure IoT Edge Runtime.

For deployment on the Azure IoT Edge Runtime please talk to your contact person at Tributech or send an email to our [Customer Advisory Team](https://www.tributech.io/about-us/).

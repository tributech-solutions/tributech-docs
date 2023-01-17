---
title: Overview
sidebar_position: 1
---

# Setup Overview

This section of the documentation describes how to setup the individual resources offered by Tributech.

The following table offers a quick overview covering our core components.
![Product Overview](./img/setupproductoverview.png)


## Tributech Node

The Node serves as central platform and is the part of the system which should be deployed first, since it allows you to [**connect Tributech Agents**](#dsk-agent).
Please refer to the [**Node setup**](./node.md) to learn more about the available hosting options.

## Tributech Agent {#dsk-agent}

The device that is responsible for transmitting auditable data is the Tributech Agent. This device can be an Embedded device or also an Edge device.
There are three variants of the Agent available:

- Agent Edge (software-based)
- Agent Embedded (hardware-based)
- Agent Integrated (running at the Tributech Node)

### Tributech Agent Edge {#dsk-agent-edge}

The Agent Edge is our containerized, software-based solution perfect for all devices/environments offering a [**container runtime**](./agent/requirements.md#software-requirements). Learn more in our [**setup guide**](./agent/overview.md).

**When to choose:**<br />
This option should be preferred if you have access to the controllers of the machines on the shop-floor but not to the sensors directly (e.g. Industrial IoT Gateway).

**Data signing:**<br />
Data is signed on the shop-floor still close to the data-source (the closer to the data-source, the better for security).

**Integration:**<br />
You can use your existing connectors, the Agent is integrated at the message bus layer (e.g. [**MQTT**](../provide_data/iot/mqtt.md), [**OPC-UA**](../provide_data/iot/opc-ua.md), [**Beckhoff ADS**](../provide_data/iot/ads.md),...).

### Tributech Agent Embedded {#dsk-agent-embedded}

The Agent Embedded is our solution designed to read data directly from interfaces/sensors on the hardware level. It uses a dedicated hardware security module for signing the data-streams. 
The Agent Embedded is available as either a C implementation or as a dedicated hardware module.

* [**OEM Module**](https://tributech.io/blog/oem-module)  
We offer two variants, the OEM Module itself which can be directly integrated into your hardware design and an Arduino Shield for prototyping.
The shield can be used with all popular hardware development platforms like Arduino Uno, STM32 Nucelo, Infineon XMC Relax Kit and more.  
![OEM Module](./img/OEM_Module.jpg)  
An IoT device based on the OEM Module typically consists of three parts. Part 1: the Tributech OEM Module which takes care of connectivity, data management, configurations, updates and security. Part 2: the application-specific microcontroller which takes care of data pre-processing and business logic. Part 3: the sensors and interfaces needed for the application. 
![OEM Board](./img/OEM_Board.jpg)  
On the device side, the OEM module provides a UART interface for exchanging configurations, providing telemetry data and performing updates. This allows developers to focus on firmware development for data pre-processing and sensor/interface integration, as all complexity is abstracted via an easy-to-use interface.<br/><br/>
Overview highlighting the role of the OEM module:
![OEM Board](./img/OEM_Architecture.jpg)

**When to choose:**<br />
This option should be preferred if you have access to your system on a hardware interface/sensor level.

**Data signing:**<br />
Data is signed as close as possible to the data-source (the closer to the data-source, the better for security). This option offers the highest level of security.

**Acquire:**<br />
[**Contact us**](https://www.tributech.io/about-us/) if you need more information or wish to acquire one of our embedded devices.

### Tributech Agent Integrated {#dsk-agent-integrated}

The Tributech Node comes with an integrated agent, there is no additional setup required for it.

**When to choose:**<br />
This option should be preferred if you are looking to use a software system (for example an ERP system) as a data-source.

**Data signing:**<br />
Data is signed as soon as it reaches the node.

**Integration:**<br />
Data can be sent to the integrated agent through the Trust-API - have a look at [**API integration**](../provide_data/rest.md). Generated API Clients for C# can be found [**here**](https://github.com/tributech-solutions/tributech-dsk-api-clients).
---
title: Overview
sidebar_position: 1
---

# Provide Data Overview

Data for a Tributech Node can be provided in many ways, for which an overview is given here.

## API Integration

Our Node offers a set of REST APIs to provide data. Learn more about how to use them in our [**API Integration Guide**](rest.md).

## IoT Integration

IoT devices can provide data with the Tributech Agent Edge. This service offers several "Sources" to interface with.

| Source    | Guide                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------  |
| MQTT      | To provide data through an MQTT message bus, follow the [**MQTT Source Guide**](iot/mqtt.md).  |
| OPC-UA    | For an OPC-UA conform interface, check out the [**OPC-UA Source Guide**](iot/opc-ua.md).       |
| Beckhoff ADS | To provide data through an Beckhoff ADS PLC Server, check out the [**ADS Source Guide**](iot/ads.md).    |
| Simulated Sensor | To provide generated test data, a [**Simulated Source**](iot/simulated.md) can be used.        |


## Create and publish a Dataset

Datasets are used to selectively share data with other users and connected Tributech Nodes. Click [**here**](dataset/overview.md) to find out how to create and publish a shared Dataset.

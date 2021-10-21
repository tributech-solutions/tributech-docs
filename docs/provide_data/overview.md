---
title: Overview
sidebar_position: 1
---

# Provide Data Overview
Data for Tributech DataSpace Kit can be provided in many ways, for which an overview is given here.

## Create and publish a Dataset
Datasets are used to share data with other participants in the Dataspace. Click [**here**](create_datasets.md) to find out how to create and publish a shared Dataset.

## API Integration
The DSK Node offers a set of REST APIs to provide data. Learn more about how to use them in our [**API Integration Guide**](rest.md).

## IoT Integration
IoT devices can provide data with the DSK Edge Agent. This service offers several "Sources" to interface with.

| Source    | Guide                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------  |
| MQTT      | To provide data through an MQTT message bus, follow the [**MQTT Source Guide**](iot/mqtt.md).  |
| OPC-UA    | For an OPC-UA conform interface, check out the [**OPC-UA Source Guide**](iot/opc-ua.md).       |
| Simulated | To provide generated test data, a [**Simulated Source**](iot/simulated.md) can be used.        |
# Quickstart Guide

This guide describes how to quickly get up and running with the Tributech Data Space Kit. The easiest way to get startet with only a few clicks is in the Azuer Cloud. While the Azure Cloud is the quickest and easiest way to get started, other options for deployment, including on premise systems, are also available. Feel free to [contact us](https://www.tributech.io/about-us/).

## Demonstrated Use-Case

This quickstart guide demonstrates how the Data Space Kit can be used to share data between two parties. This could for example enable you to share sensor data from production systems securely with a provider of machine learning services to enable predictive maintenance. The guide shows a Hello-World example that covers all the important features of the Data Space Kit. It includes a simulated edge device which continuously generates several streams of simulated sensor-data. This dataset is then sahred with a Data-Consumer node. If the demo environment works for you, we can upgrade it into a full production ready system. Feel free to [contact us](https://www.tributech.io/about-us/).

![Data-Owner Data-Consumer usecase overview](img/usecase-overview.jpg)

## Features

- Data never leaves your System unless explicitly shared
- Data is collected and signed on the Edge to make it tamperproof
- The Data Consumer can request access to a shared dataset
- Once access is granted the generated data is continuously shared with the consumer
- The consumer of the data can now access the data for example to use it for predictions
- The consumer can cryptographically verify that the data in fact has not been tampered with

## This Guide Covers

- How to [setup](../install-owner-node) the Data-Owner-Node in a few clicks
- How to create the first [dataset](../create-dataset)
- How to [link](../install-bridge) the Azure IoT Hub to the Data-Owner-Node
- How to [deploy](../setup-iot-device) a simulated edge device as a datasource using the Azure IoT Hub
- How to [share](../publish-dataset) the dataset containing the values from the simulated sensor
- How to [setup](../install-consumer-node) another node as data-consumer to simulate a partner-company
- How to [subscribe](../subscribe-dataset) to shared dataset of the data-owner

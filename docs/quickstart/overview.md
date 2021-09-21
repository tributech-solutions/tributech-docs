---
title: Overview
sidebar_position: 1
---

# Quickstart Guide

This guide describes how to quickly get up and running with the Tributech DataSpace Kit (DSK). The easiest way to get started with only a few clicks is in the Azure Cloud. While the Azure Cloud is the quickest and easiest way to get started, other options for deployment, including on premise systems, are also available. Check out our [**Setup Guide**](../setup/overview.md) for detail information..

## Demonstrated Use-Case

This quickstart guide demonstrates how the DataSpace Kit can be used to share data between two parties. This could for example enable you to share sensor data from production systems securely with a provider of machine learning services to enable predictive maintenance. The guide shows a Hello-World example that covers all the important features of the DataSpace Kit. It includes a simulated edge device which continuously generates several streams of simulated sensor-data. This dataset is then shared with a Data-Consumer node. If the demo environment works for you, we can upgrade it into a full production ready system. Feel free to [**contact us**](https://www.tributech.io/about-us/).

In the image below you can see the data flow that will be established through this guide: From data source to data owner, which shares selected streams with the data consumer. The data consumer can then verify data integrity and data authenticity through a specific data auditing service.

![Data-Owner Data-Consumer usecase overview](/img/quickstart/usecase-overview.jpg)

## Features

- Data never leaves your system unless explicitly shared
- Data is collected and signed on the Edge to make it auditable
- The Data Consumer can request access to a shared dataset
- Once access is granted the generated data is continuously shared with the consumer (but could be revoked at any time)
- The consumer of the auditable data stream can now access the data for example to use it for machine learning
- The consumer can cryptographically verify the data authenticity and data integrity

## This Guide Covers


- How to [**setup**](./install-owner-node) the Data-Owner-Node in a few clicks
- How to [**deploy**](./setup-agent) a DSK Edge Agent and Simulated Sensor/Source
- How to [**share**](./publish-dataset) the dataset containing the values from the simulated sensor
- How to [**setup**](./install-consumer-node) another node as data-consumer to simulate a partner company
- How to [**subscribe**](./subscribe-dataset) to a shared dataset of the data-owner
- How to [**consume**](./consume-data) data from a shared dataset


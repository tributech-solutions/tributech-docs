---
title: Data via apis guide
summary: Description of how to consume data via integrated apis.
authors:
    - Patrick Lamplmair
---

# Overview

In this guide you will learn how you can consume your own Datasets and Subscriptions via the built in APIs of your DataSpace Node.

## Prerequisites

The prerequisits for consuming data from a Subscription via the integrated APIs are the following:

- A granted Subscription to a Dataset (you are also able to visualize your own Datasets)
- Data exists on owner side within the selected timeframe (Owner DB)
- Data is already synchronised on the consumer side (Consumer DB)

## Trust API

The Trust API provides the interface to consume/store signed hashes of DataSpace Agents and/or to consume/store values by using the Trust API's built in Agent (the recommended way to integrate server-side data sources). Every method requires the **UUID** of a data stream.

Navigate to the Trust API via the "Tools" section of your DataSpace Node or you can follow this link to our demonstrator instance: <a href="https://trust-api.azuretrial-node-a.dataspace-node.com/" target="_blank">Trust API</a>

## Data API

The Data API provides the interface to consume/store values according to an **UUID** of an data stream.

Navigate to the Data API via the "Tools" section of your DataSpace Node or you can follow this link to our demonstrator instance: <a href="https://data-api.azuretrial-node-a.dataspace-node.com/" target="_blank">Data API</a>

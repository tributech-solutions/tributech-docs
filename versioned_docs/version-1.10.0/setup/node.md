---
title: DSK Node
sidebar_position: 2
---

This page explains the setup options for a DSK node and its prerequisites.
## Prerequisites

### Ecosystem

Your new DSK Node has to join a DSK Ecosystem. In general, there are no limitations on how you can structure a DSK Ecosystem. We recommend a segmentation in 2 categories:

**Private DSK Ecosystems** for the data exchange in your value chain with for example your customers, suppliers and partners.

**Open DSK Ecosystems** for the data exchange with businesses, researchers and communities outside your value chain to drive innovation, try new use-cases and services or monetize data.

## Requirements {#node-requirements}

The requirements to install a DSK Node depend significantly on the amount of data being processed. As a standard infrastructure setup, we recommend that you meet the following requirements:

### Software Requirements

- Any up-to-date Linux distribution
  - Recommended: Ubuntu 18.04 LTS or later
- Docker Engine (≥20) + Docker-Compose (≥1.26)

### Hardware Requirements

| Type           | Minimum Requirement   | Recommend Requirement |
| :------------- | :-------------------- | :-------------------- |
| CPU            | 2 Cores               | 4 Cores               |
| RAM            | 8 GB RAM              | 16 GB RAM             |
| Storage System | 10 GB                 | 15 GB                 |
| Storage Data   | depending on use-case | n/a                   |

If you have any questions regarding infrastructure requirements, please talk to your contact person at Tributech or send an email to our [**Customer Advisory Team**](mailto:customer-advisory@tributech.io).

## Setup

### Select a DSK Ecosystem

If you want to join a DSK ecosystem, please select one of the following options:

- New Ecosystem: Please contact our [**Customer Advisory Team**](mailto:customer-advisory@tributech.io).
- Tributech Playground - Please first sign up at [**Tributech.io/Playground**](https://tributech.io/playground), you can follow the steps of our [**Quickstart Guide**](../quickstart/overview.md) once you've received the required credentials.
- Existing Ecosystem - Please contact the operator of the DSK Ecosystem.

### Deploy a DSK Node on Azure

A DSK Node can be deployed on Azure using the <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/tributechsolutionsgmbh1582568815297.8aa9010b-3dd5-43e0-a4b6-53e2ea552e4a?tab=Overview" target="_blank">**Azure Marketplace offer**</a>. Take a look at our [**Quickstart Guide**](../quickstart/install-owner-node.md) for more details on how to deploy a DSK Node (showcase for deployment to Tributech Playground).

### Deploy DSK Node on-premises or at other cloud providers

The DSK Node can also be deployed on-premises or in a virtual machine on any of the major public cloud providers.
Self-installation is currently not supported for a setup of a DSK Node outside of Azure, please talk to your contact person at Tributech or send an email to our [**Customer Advisory Team**](mailto:customer-advisory@tributech.io).

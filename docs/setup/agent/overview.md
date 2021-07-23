---
title: Overview
sidebar_position: 1
---

# DSK Agent Edge Setup

## Requirements

The required resources to install a DSK Agent Edge are negligible in comparison to the resources required for data processing. For installation, an edge device must meet the following requirements:

### Software Requirements

| Type    | Required                       | Preferred                 |
| :------ | :----------------------------- | :------------------------ |
| OS      | Any current Linux Distribution | Ubuntu 18.04 LTS or later |
| Runtime | Docker CE + Docker-Compose     | Azure IoT Edge Runtime    |

### Hardware Requirements

| Type | Minimum Requirement | Recommend Requirement |
| :--- | :------------------ | :-------------------- |
| CPU  | 1 Core              | 2 Cores               |
| RAM  | 1 GB Ram            | 2 GB Ram              |

The DSK Agent Edge itself does not actually consume this much RAM; this are the requirements for the whole system. Keep in mind that these requirements strongly depend on the actual load of the agent. These are minimum requirements for rather small to medium amounts of data. If high volumes of data have to be processed the requirements are higher.

If you have any questions regarding infrastructure requirements, please talk to your contact person at Tributech or send an email to our [Customer Advisory Team](mailto:customer-advisory@tributech.io).

## Installation

### Install DSK Agent Edge on Azure IoT Edge Runtime

The DSK Agent Edge can be installed on the Azure IoT Edge Runtime easiest through the <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/tributechsolutionsgmbh1582568815297.57601ccd-62c3-4842-9f73-3dadd3de5b74?tab=Overview" target="_blank">Azure Marketplace offer</a>.<br />
Have a look at our [quick start guide](../../quickstart/overview.md) to learn how to install the Agent Edge in the Azure IoT Edge Runtime.

### Install DSK Agent Edge on other platforms

The Agent can be installed on any platform that supports running docker-containers. A pre-built docker-compose is ready for use - contact our [Customer Advisory Team](https://www.tributech.io/about-us/) for details.

Note that self-installation is currently not supported. If you want to deploy a DataSpace Agent on other platforms, please talk to your contact person at Tributech or send an email to our [Customer Advisory Team](https://www.tributech.io/about-us/).

## Next steps

- Check out the [integration](../../provide_data/agent/integration.md) options of the Agent.

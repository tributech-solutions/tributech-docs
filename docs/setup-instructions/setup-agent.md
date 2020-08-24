---
title: Setup instructions DataSpace Agent
summary: Description of how to setup a DataSpace Agent.
authors:
    - Patrick Lamplmair
---

# Setup instructions Tributech DataSpace Agent

The following topics are coverd by this page:

- [Levels of integration](/setup-instructions/setup-agent/#levels-of-integration)
- [Infrastructure requirements](/setup-instructions/setup-agent/#infrastructure-requirements)
- [Install a DataSpace Agent](/setup-instructions/setup-agent/#install-a-dataspace-agent)

## Levels of integration

Since the term "data source" allows a lot of room for interpretation, here is our definition for the different levels where you can integrate the DataSpace Agent to secure your data sources:

**1. Integration on Server-Level**

To integrate the DataSpace Agent on server-side data sources like e.g. ERP Systems or MES you have to options:

- Integrate the containerized Agent into your application/service
- Use the into the Trust API integrated Agent of your DataSpace Node

**2. Integration on Edge-Level**

To integrate the DataSpace Agent on edge devices like e.g. IoT gateways or local servers you can integrate the DataSpace Agent as containerized service into your data sources. To simplify the configuration, deployment and life-cycle management it is recommond to use a managed edge runtime (e.g. Azure IoT Edge) for the device management.

**3. Integration on Sensor-Level**

In order to integrate the agent where data is generated, as close as possible to the sensor, we are currently working on a separate version. This release will also include hardware-based security support to full fill the security requirements for high sensitive industrial applications.

*More information is commoing soon.*

## Infrastructure requirements

The required resources to install a DataSpace Agent on edge devices are negligible compared to resources required for data processing. For installation, an edge device must meet the following requirements:

| Type          | Minimum Requirement | Recommend Requirement |
| :---          |    :----            |    :----              |
| OS            |Ubunto 18.04 LTS or higher|n/a               |
| Containerization           |Docker CE              |Managed edge runtime (e.g. Azure IoT Edge)                |

If you have any questions regarding infrastructure requirements, please talk to your contact person at Tributech our send an email to our [Customer Advisory Team](mailto:customer-advisory@tributech.io).

## Install a DataSpace Agent

Self-installation is currently not supported if you want to deploy a DataSpace Agent, please talk to your contact person at Tributech our send an email to our [Customer Advisory Team](mailto:customer-advisory@tributech.io).

---
title: Overview
sidebar_position: 1
---

# Introduction to the DSK

The Tributech DataSpace Kit enables companies to share [**auditable data**](./auditable-data.md) cross-company or cross-process in a selective way while maintaining data sovereignty. This data could be sensor-, process- or business data: data sources can be upgraded with data verification capabilities that guarantee the traceability and auditability of consumed and delivered data.

In other words, the Tributech DataSpace Kit is a containerized software-tool-kit that covers the whole data transfer between DataSpace Nodes (which usually represents a company's cloud or server infrastructure) and it covers the transfer of cryptographic proofs of the DataSpace Agents which enable data auditability.

Based on the containerized and modular architecture, the technology **can be integrated into any kind of platform**, cloud or on-premise system to support the technology stack of all participating stakeholders. Check out our [Integration guide](../provide_data/overview.md) for details.

If you want to learn more about use-cases for your business, visit our [website](https://www.tributech.io/use-cases/), visit our [blog](https://www.tributech.io/blog/) or contact our [Customer Advisory Team](mailto:customer-advisory@tributech.io) that helps you to get started.

## Tributech DataSpace Ecosystem

The Tributech DataSpace Kit consists of three building blocks that allow you to create your own DataSpace Ecosystem or to join an existing one.
An Ecosystem can represent, for example, a value chain in which customers, suppliers and manufacturers use the DataSpace Kit in order to exchange different kinds of auditable data streams to optimize their supply chain processes.

As shown below in Fig.1, these building blocks are:

- **DataSpace Hub**
- **DataSpace Node**
- **DataSpace Agent**

Every ecosystem consists of **one single DataSpace Hub**, a **DataSpace Node for each participating stakeholder** integrated in his infrastructure (cloud, hybrid or on-premise) and **multiple DataSpace Agents** integrated into each data-source/device that requires the data auditability capabilities.
The Hub holds metadata information and manages identity, required for secure auditable data sharing in the ecosystem - but is not part of the data sharing channels themselves. Actual data is shared only between nodes. The Agents feed auditable data to the nodes.

![DataSpace Kit - Building Blocks](/img/architecture.png)
_Fig.1: DataSpace Kit Building Blocks & Schema_

The distributed **components of the DataSpace Kit are connected via channels** to exchange the different kinds of data within an ecosystem. **APIs provide an interface** for the data integration within the infrastructure of each connected stakeholder.

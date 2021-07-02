---
title: DataSpace Node
sidebar_position: 3
---

# DataSpace Node

A DataSpace Node is acting as a gateway/broker that is required to participate in a DataSpace Ecosystem. It contains all services needed for the data exchange and data verification capabilities with other nodes inside a DataSpace Ecosystem. Each DataSpace Node is controlled by a person or organization.

The DataSpace Node comes with an integrated Trust Layer, which ensures data auditability and guarantees the tamperproof storage of the proofs thorugh a distributed systems technology which shares the proofs across all nodes in the ecosystem.

The Dataspace Node comes with a web UI application called DataSpace Admin which allows for easy maintaining of the node and interacting with other members of the ecosystem.
The interface of the app can be seen in Fig.1.

![DataSpace Admin App](/img/introduction/dataspace-admin.jpg)
_Fig.1: DataSpace Admin App_

With a DataSpace Node you can:

**Connect data** sources via APIs and combine selected data to datasets. The integrated web UI application DataSpace Admin provides an interface to generate the required metadata that defines a dataset. For each stream (not limited to a data format or type) a unique ID is generated which is used as a reference for the data source integration via the APIs of the Dataspace Node. Through the unique IDs from data streams of a dataset, other participants inside a ecosystem can request and consume data.

**Share data** streams with your customers, suppliers and partners. The DataSpace Node allows every user to create individual and automated synchronization processes to exchange data, without the need to care about networking, data processing, authentication and encryption between the connected systems. The integrated web application covers the data sharing process for datasets via publish, request and grant workflows.

**Audit data** by checking the origin and integrity before you start using it. Data can be audited through the integrated Audit tool of the DataSpace Admin app or through the available API. Ready more about how Tributech guarantees the security for your auditable data [here](../auditable-data.md).

**Track & trace conditions** at your data source via a comparable history of configuration changes. Insights from tracked changes provide viable information for e.g. AI/ML applications in order to match anomalies in data with historic configuration changes.

**Visualize data** through the integrated Node dashboards based on the well-known and well-established Open Source technology <a href="https://grafana.com/" target="_blank">Grafana</a>.

---
title: DataSpace Agent
sidebar_position: 4
---

# DataSpace Agent

The DataSpace Agent is designed for an integration into the data source for providing cross-system data security for any type of device/source like e.g. sensors, IoT-devices, IoT-gateways, SCADA-systems, PPS-systems, ERP-systems and more. A scalable process for generating cryptographic proofs and a secure connection to the trust layer guarantees the raw data’s authenticity and integrity for an entire ecosystem of DataSpace Nodes.

![Trust Layer Schema](/img/introduction/dataspace-agent-schema.png)
_Fig.1: DataSpace Agent Schema_

The DataSpace Agent enriches a data source in terms of security and reliability. In addition to the existing data telemetry, hashes and signatures are created for each data point/packet/portion and these proofs are transmitted via a dedicated authenticated and encrypted communication channel to the trust layer.

The DataSpace Kit has a distributed system topology in order to provide secure peer-to-peer connections for the data sharing process and an immutable system for the data verification capabilities.

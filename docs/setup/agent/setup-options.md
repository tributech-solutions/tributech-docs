# Setup Options

There are three variants of the DSK Agent available:

- DSK Agent Edge (software-based)
- DSK Agent Embedded (hardware-based)
- DSK Agent Integrated (running at the DSK Node)

## DSK Agent Edge

The DSK Agent Edge is the most common Agent variant and is perfect for all software-based use-cases. It is available on the Azure Marketplace for straight-forward installation or also in the form of a ready-to-use docker-compose file. Learn how to set it up in our [specific setup guide](./edge-setup.md).

**When to choose:**<br />
This option should be preferred if you have access to the controllers of the machines on the shop-floor but not to the sensors directly (e.g. Industrial IoT Gateway).

**Data signing:**<br />
Data is signed on the shop-floor still close to the data-source (the closer to the data-source, the better for security).

**Integration:**<br />
You can use your existing connectors, the Agent is integrated at the message bus layer.

## DSK Agent Embedded

The DSK Agent Embedded reads data directly from sensors and uses a dedicated hardware security module for signing the data-streams. This is available as either a C implementation or as a dedicated hardware module in the form of our Sensor Security Module (SSM).

**When to choose:**<br />
This option should be preferred if you have access to your system on a sensor level.

**Data signing:**<br />
Data is signed as close as possible to the data-source (the closer to the data-source, the better for security). This option offers the highest level of security.

**Acquire:**<br />
[Contact us](https://www.tributech.io/about-us/) if you need more information or wish to acquire an SSM.

## DSK Agent Integrated

The DataSpace Node comes with an integrated agent, there is no additional setup required for it.

**When to choose:**<br />
This option should be preferred if you are looking to use a software system (for example an ERP system) as a data-source.

**Data signing:**<br />
Data is signed as soon as it reaches the node.

**Integration:**<br />
Data can be sent to the integrated agent through the Trust-API - have a look at [node integration](../../integration/node/overview.md). API Clients for C# can be found [here](https://github.com/tributech-solutions/tributech-dsk-api-clients).

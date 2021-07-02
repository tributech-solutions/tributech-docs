# Consume data via APIs

In this guide you will learn how you can consume your own Datasets and Subscriptions via the built in APIs of your DataSpace Node.

### Prerequisites

The prerequisits for consuming data from a Subscription via the integrated APIs are, that a Dataset must be available at your node. <br />
If you followed the Quick Start guide, then those prerequisites should be fulfilled.

This could be in one of two ways:

- You are **Data Owner**: You own some Datasets and have your own data on your node (Owner DB)
- You are **Data Consumer**: You have been granted a Subscription to a Dataset and the data is already synchronised to your node (Consumer DB)

### General info

Navigate to the Data API / Trust API of your node and Authorize yourself by following our [Swagger UI Authorization Guide](../../integration/node/swagger-ui-authorization.md).

You can retrieve the `valueMetadataId` which is a unique id for a data stream by copying it in the DataSpace Admin App [as described here](../../create-dataset/#successful-creation-of-the-dataset).

### Retrieving values through the Data API

You can retrieve values for one of your data streams through the `/values/{valueMetadataId}` endpoint.

Click "Try it out", paste the valueMetadataId, scroll down and click "Execute".

![Retrieve values](./img/retrieve-values.png)

### Other endpoints

You can access all other endpoints the same way. Note that for a lot of endpoints you will also need a timestamp. A ValueMetadataId and a Timestamp together uniquely identify a certain value.

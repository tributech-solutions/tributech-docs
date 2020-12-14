# DSK Node Integration Overview

The DSK Node offers two APIs which are used for integration: the Data API (values) and the Trust API (proofs).
All of the available endpoints usually work with the **UUID** of a data stream (ValueMetadataId + Timestamp).
Both of them can be easily integrated through our ready-to-use solutions explained [here](./integration-examples.md).

## Trust API

The Trust API provides the interface to consume/store proofs used for data auditability. This API is offered for Agents to submit their proofs.<br />
The Trust API also comes with an integrated Agent which can be used to store values and create the according proofs - the DSK Agent Integrated.<br />
Furthermore the Trust API also contains endpoints to validate the auditability of data.<br />

## Data API

The Data Api is used to consume/store the actual values of a data stream.

## Swagger UI

Both the Trust API and the Data API come with a Swagger UI. Please follow [our guide for accessing the instance of your node](./swagger-ui-authorization.md) or alternatively if you just want to quickly check out the available endpoints then you can have a look at our public demo instances here:

- <a href="https://trust-api.azuretrial-node-a.dataspace-node.com/" target="_blank">Trust API</a>
- <a href="https://data-api.azuretrial-node-a.dataspace-node.com/" target="_blank">Data API</a>

## Next steps

- Check out our [Integration Examples](./integration-examples.md)
- Learn about [Agent Edge Integration](../agent/edge/integration.md)

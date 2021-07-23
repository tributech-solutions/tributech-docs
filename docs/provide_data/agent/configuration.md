---
title: OLD Edge Configuration
sidebar_position: 1
---

# DSK Agent Edge Configuration Options

This page gives an overview of the available Configuration Options for the DSK Agent Edge.

### Common Options

| Config Option                | Expected Value                        | Sample value |
| :--------------------------- | :------------------------------------ | :----------- |
| `Logging__LogLevel__Default` | Log level of the complete application | LogLevel     |

### MQTT Options

| Config Option                    | Expected Value                | Sample value |
| :------------------------------- | :---------------------------- | :----------- |
| `MqttOptions__MQTTHost`          | MQTT server adress            | localhost    |
| `MqttOptions__MQTTPort`          | MQTT server port              | 1883         |
| `MqttOptions__MQTTUser`          | MQTT username                 | user         |
| `MqttOptions__MQTTPassword`      | MQTT password                 | password     |
| `MqttOptions__ConnectionTimeout` | MQTT connection timeout in ms | 30000        |

### Agent Options

| Config Option                                                                 | Expected Value                                                                                    | Sample value                                                                                                    |
| :---------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| `SignerOptions__PrivateKeyFilePath`                                           | Private key file path                                                                             | `/path/to/private-key.pem`                                                                                      |
| `SignerOptions__PublicKeyFilePath`                                            | Public key file path                                                                              | `/path/to/public-key.pem`                                                                                       |
| `EdgeDeviceOptions__AgentID`                                                  | ID Should be uniqe for each agent                                                                 | 51319195                                                                                                        |
| `EdgeDeviceOptions__DefaultMaxMerkleTreeDepth`                                | Default maximal merkle tree depth. This value is overridden by stream-specific coptions.          | 12                                                                                                              |
| `EdgeDeviceOptions__DefaultMaxMerkleTreeAge`                                  | Default maximal merkle-tree age in seconds. This value is overridden by stream-specific coptions. | 600                                                                                                             |
| `EdgeDeviceOptions__DataStreamOptions__<ValueMetadataID>__MaxMerkleTreeDepth` | Stream specific maximal merkle-tree depth.                                                        | `EdgeDeviceOptions__DataStreamOptions__ea6eb3e0-1280-4b36-a807-94133cd7c775__MaxMerkleTreeDepth=24`             |
| `EdgeDeviceOptions__DataStreamOptions__<ValueMetadataID>__MaxMerkleTreeAge`   | Stream specific maximal merkle-tree age.                                                          | `EdgeDeviceOptions__DataStreamOptions__ea6eb3e0-1280-4b36-a807-94133cd7c775__MaxMerkleTreeDepth=900`            |
| `DataStreamID__<ValueMetadataID>`                                             | `<ValueSourceType>__<ValueSourceID>__<SensorID>`                                                  | `DataStreamID__ea6eb3e0-1280-4b36-a807-94133cd7c775=OpcuaSource__opc.tcp://127.0.0.1:4840/va_tt_demo__ns=2;i=3` |

### Azure IoT Hub ValueSink Options

| Config Option                           | Expected Value                                                                      | Sample value                                                                                                                       |
| :-------------------------------------- | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `AzureIoTHubOptions__ConnectionString`  | Connection string for the IoT Hub Edge Device (Important: Not Edge Runtime Device!) | `HostName=your-iot-hub.azure-devices.net;DeviceId=MyDotnetTestDevice;SharedAccessKey=IfBQvqDPKffysR0e0Do85uw6aaY/w3IFTnxNK3BoGGk=` |
| `IoTHubValueSinkOptions__MaxBatchSize`  | Maximum number of values that are batched together and sent to the IoT Hub          | 500                                                                                                                                |
| `IoTHubValueSinkOptions__FlushInterval` | Maximum timer-interval of a single batch of values that is sent to the IoT Hub      | 00:00:01.000                                                                                                                       |

### Proof Sink Options

| Config Option                                | Expected Value                                                                                | Sample value                                          |
| :------------------------------------------- | :-------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| `ProofSinkOptions__TrustAPIBaseUrl`          | Url of the Trust API                                                                          | `https://trust-api.your-node.dataspace-node.com/`     |
| `ProofSinkOptions__AuthUrl`                  | Url of the identity-server                                                                    | `https://id.your-hub.dataspace-hub.com/connect/token` |
| `ProofSinkOptions__AuthScope`                | OAuth scope                                                                                   | trust-api-endpoint data-api-endpoint                  |
| `ProofSinkOptions__ClientID`                 | OAuth client-id                                                                               | 7f89e8f9-4ecc-434e-a674-bfe48912aa56                  |
| `ProofSinkOptions__ClientSecret`             | OAuth client-secret                                                                           | some-client-secret123                                 |
| `ProofSinkOptions__MaxBatchSize`             | Maximum number of proofs that are batched together                                            | 20                                                    |
| `ProofSinkOptions__FlushInterval`            | Maximum time-interval of a single batch of proofs                                             | 00:00:01.000                                          |
| `ProofSinkOptions__TrustApiMaxRetries`       | Maximum number of retries if Trust API cannot be reached                                      | 3                                                     |
| `ProofSinkOptions__TrustApiMaxRetryInterval` | Maximum interval betwenn retries. Retries use exponential backoff with this maximal interval. | 00:05:00.000                                          |

# DSK IoT Hub Bridge

The DSK IoT Hub Bridge is the part that connects the DSK Node to the Azure IoT Hub. The IoT Hub is used for device-management and communication. The IoT Hub is also used to deploy the [Edge Agent](TODO) onto an Edge Device. The Edge Agent receives data from one or more data-sources and forwards it to the IoT Hub. The DSK IoT Hub Bridge forwards the data to the DSK Node.

## Setup

In Azure the IoT Hub Bridge can easily be set up using an [ARM Template](https://github.com/tributech-solutions/tributech-dsk-docs/blob/master/docs/assets/iot-hub-arm-template/iotHubAndBridgeTemplate.json). This template deploys a new instance of the Azure IoT Hub in combination with the DSK IoT Hub Bridge. The required steps are described in the [quick-start-guide](../../quickstart/install-bridge.md).

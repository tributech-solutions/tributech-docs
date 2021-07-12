---
title: Setup IoT Device
sidebar_position: 5
---

# Setup IoT Device

Now that we have the IoT hub set up, we can create the Edge Device for the IoT Hub. <br />
We will then deploy a VM as a simulated IoT Edge Runtime and deploy the Edge Runtime Modules which provide the simulation data.

## Create Edge Device in IoT Hub

We start with creating the Edge Device in the IoT Hub. In the just deployed resources from the previous step of installing the DSK IoT Bridge you should find the IoT Hub resource. Open this resource in the Azure Portal.

As shown in the screenshow below, next, navigate through the side menu to "IoT Edge". In the overview click on "Add an IoT Edge device".

![step 1](/img/quickstart/iot-hub-0.png)

Give your device a name and click "Save". Your device will be created.

![step 2](/img/quickstart/iot-hub-1.png)

When the device is created, open the device details by clicking it. Leave this tab open, we will need the primary connetion string in just a second.

![step 3](/img/quickstart/iot-hub-2.png)

---

## Create simulated IoT Edge Runtime VM

We will now deploy a Linux Ubuntu virtual machine with a simulated IoT Edge Runtime and connect it as our IoT edge device.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Farm-templates%2Ftributech-simulated-agent-vm-1-2.json)
[![Visualize](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/visualizebutton.svg?sanitize=true)](http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Farm-templates%2Ftributech-simulated-agent-vm-1-2.json)

This deployment template creates a Linux Ubuntu virtual machine, automatically [installs the Azure IoT Edge Runtime](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-install-iot-edge) and [provisions the device with its cloud identity](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-install-iot-edge?view=iotedge-2020-11#option-1-authenticate-with-symmetric-keys).

![Create simulated IoT Edge Runtime VM - Step 1](../img/quickstart/edge-runtime-0.png)
Please choose a expressive unique name for the agent and its related resources. The Size `Standard_B1s` should be fine for the purpose of this guide. If you are planning on processing large amounts of data consider using a more powerful instance (e.g. `Standard_DS1_v2`). For more details see [Sizes for virtual machines in Azure
](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes).

Configure and enable SSH access so that you can log into the VM after it has been created, e.g. through setting a password.

Create the VM by following the "Review + create" steps.

![Create simulated IoT Edge Runtime VM - Step 2](../img/quickstart/edge-runtime-1.png)

![Create simulated IoT Edge Runtime VM - Step 3](../img/quickstart/edge-runtime-2.png)

![Create simulated IoT Edge Runtime VM - Step 4](../img/quickstart/edge-runtime-3.png)

If the VM has been created with password based SSH access you can log into the VM with a terminal of your choice by running the following commands.  
`ssh <username>@<your-vm-ip-address>`<br />
(e.g `ssh tributech@20.101.44.246`)<br />

If you later want to configure the agent with the Agent-Companion you can use SSH port-forwarding to enable remote connections to the agent by supplying additional paramateres at the command.  
`ssh <username>@<your-vm-ip-address> -L <local-port>:localhost:5000` (agent available at `http://localhost:<local-port>`)<br />
(e.g `ssh tributech@20.101.44.246 -L 5000:localhost:5000` (agent available at `http://localhost:5000`)<br />

![Create simulated IoT Edge Runtime VM - SSH](../img/quickstart/edge-runtime-ssh.png)
Note that you can find the ip-address of your vm by navigating to the created VM in the Azure portal.
![Create simulated IoT Edge Runtime VM - Public IP](../img/quickstart/edge-runtime-ip.png)

## Deploy Edge Runtime Modules

You will need two Azure Edge Runtime modules. A simulated source of sensor values and the DSK Agent Edge. The job of the data-source is to create simulated values. The Agent is responsible for signing the data and sending the data as well as the signatures (proofs) to the DSK Node.

### Add Simulated Temperature Sensor Module

The Simulated Temperature Sensor is provided by Azure IoT and can be found in the <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azure-iot.simulated-temperature-sensor?tab=Overview" target="_blank">Marketplace</a>.

Create a new Simulated Temperature Sensor by clicking "Create" in the Azure Marketplace listing:

![Step 1](/img/quickstart/simulated-temp-sensor-1.png)

Select your IoT Hub and Edge Device as Target devices for the module and click "Create":

![Step 2](/img/quickstart/simulated-temp-sensor-2.png)

### Configure the Simulated Temperature Sensor Module

After the Simulated Temperature Sensor Module has been created, click on the new module to open its settings:

![Step 3](/img/quickstart/simulated-temp-sensor-3.png)

In the settings, in the tab "Environment Variables", set up the variable "MessageCount" and give it a value of -1. This will allow for an infinite number of sensor readings. After that click on "Update":

![Step 4](/img/quickstart/simulated-temp-sensor-4.png)

Finalize the setup of the Simulated Temperature Sensor Module by following the "Review + create" steps:

![Step 5](/img/quickstart/simulated-temp-sensor-5.png)

### Add DSK Agent Edge Module

The DSK Agent Edge can also be found in the [Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/tributechsolutionsgmbh1582568815297.57601ccd-62c3-4842-9f73-3dadd3de5b74?tab=Overview).

Proceed the same way as previously for the Simulated Temperature Sensor Module: Click "Create" in the Azure Marketplace listing and select your IoT Hub and the Edge device and click "Create", shown in the screenshots below.

![Step 1](/img/quickstart/agent-1.png)

![Step 2](/img/quickstart/agent-2.png)

### Configure the DSK Agent Edge Module

Some environment variables must be configured for the agent.

To be able to create signatures, the Agent needs to be connected to the Trust-API of the DSK Node which requires API-Credentials. The credentials for the Trust-API can be obtained [the same way as the credentials for the Data-API have been obtained when installing the DSK IoT Bridge](./install-bridge/#node-specific-parameters).

Open the module by clicking it in the list of IoT Edge Modules and navigate to the tab "Environment Variables".
There you will have a number of variables, which are explained below the screenshot.

![Step 3](/img/quickstart/agent-3.png)

| Variable name                                           | Value                                                                                                                                                                                                    | Sample                                                          |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **EdgeDeviceOptions\_\_AgentID**                        | Choose a unique string -> you can easily [generate a GUID online](https://www.guidgenerator.com/online-guid-generator.aspx)                                                                              | `840c1996-2761-4d90-b390-3ecbd8879015`                          |
| **ProofSinkOptions\_\_TrustAPIBaseUrl**                 | Trust API Url. Replace `<your-node-name>` of the sample with the name of your node.                                                                                                                      | `https://trust-api.<your-node-name>.dataspace-node.com`         |
| **ProofSinkOptions\_\_AuthUrl**                         | Auth Url from Trust API Swagger UI authorization dialog. You can simply replace `<your-hub-name>` of the sample with the name of your hub. The default hub name `azuretrial` should work for most cases. | `https://id.<your-hub-name>.dataspace-hub.com/connect/token`    |
| **ProofSinkOptions\_\_AuthScope**                       | Auth Scope from Trust API Swagger UI authorization dialog. The sample value should work for most cases.                                                                                                  | `data-api-endpoint trust-api-endpoint`                          |
| **ProofSinkOptions\_\_ClientID**                        | Client ID from the DataSpace Admin                                                                                                                                                                       | `9ee39d88-2961-4296-a94e-a1841e454076`                          |
| **ProofSinkOptions\_\_ClientSecret**                    | Client Secret from the DataSpace Admin                                                                                                                                                                   | `ed2a4425-81ad-4a00-8300-affa01d79b46`                          |
| **EdgeDeviceOptions\_\_DataStreamID\_\_[DataStreamID]** | Replace `[DataStreamID]` from the variable name with the DataStream ID generated in the step [Create a Dataset](./create-dataset#successful-creation-of-the-dataset)                                     | `SimulatedTemperatureSensorValueSource__0__Machine_Temperature` |

As for the last variable, the **EdgeDeviceOptions\_\_DataStreamID\_\_[DataStreamID]**, you will have to set up 4 variables for it:

- Name: `EdgeDeviceOptions__DataStreamID__[DataStreamID]` Value: `SimulatedTemperatureSensorValueSource__0__Machine_Temperature`
- Name: `EdgeDeviceOptions__DataStreamID__[DataStreamID]` Value: `SimulatedTemperatureSensorValueSource__0__Machine_Pressure`
- Name: `EdgeDeviceOptions__DataStreamID__[DataStreamID]` Value: `SimulatedTemperatureSensorValueSource__0__Ambient_Temperature`
- Name: `EdgeDeviceOptions__DataStreamID__[DataStreamID]` Value: `SimulatedTemperatureSensorValueSource__0__Ambient_Humidity`

Note that you can easily copy the DataStreamID by clicking the copy button in the column ID as explained in the step [Create a Dataset](./create-dataset#successful-creation-of-the-dataset).

**Finally, double check your variables and click "Update". Then follow the "Review + Create" process.**

![Step 5](/img/quickstart/agent-4.png)

### Configure Routes

All that's left now is the configuration of the routes, so that the simulated data actually ends up where it should.

#### Navigate to the routes configuration

First, open the IoT Hub in the Azure portal and select the device:

![Step 1](/img/quickstart/routes-1.png)

Then, click on "Set Modules" and navigate to the routes by clicking "Next: Routes":

![Step 2](/img/quickstart/routes-2.png)

![Step 3](/img/quickstart/routes-3.png)

#### Set the routes

Lastly, set the following two routes:

| Name                      | Route                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SimulatedSensorToDSKAgent | FROM /messages/modules/SimulatedTemperatureSensor/outputs/temperatureOutput INTO BrokeredEndpoint("/modules/TributechDataSpaceAgent/inputs/AzureSimulatedSensorValue") |
| DSKEdgeAgentValuesToCloud | FROM /messages/modules/TributechDataSpaceAgent/outputs/ValueSink INTO $upstream                                                                                        |

Two routes are required, one for sending the simulated sensor data to the DSK Agent and one for transmission of the DSK Agent Edge to the IoT Hub.

Finish the process by clicking "Review + create" and following the process.

![Step 4](/img/quickstart/routes-4.png)

## Verify that messages arrive at IoT Hub

You can verify that everything works as expected by checking the Overview dashboard of your IoT Hub in the Azure Portal:

![Overview dashboard IoT Hub](/img/quickstart/iot-hub-messages-overview.jpg)

You can also already create your first dashboard and have the simulated data presented visually. Just follow the [guide for consuming data via Dashboards](./data-consuming/data-via-dashboards.md). Note that for this case you would be in the position of data owner.

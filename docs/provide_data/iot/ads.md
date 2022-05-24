---
title: ADS Source
sidebar_position: 4
---


## Intro

The DSK ADS Source allows to connect to an Beckhoff ADS Server which can be used to receive or write Values to it.  
It acts like an ADS Client in a Docker Setup and enables the forwarding of the Data to an DSK Stream via our DSK Edge Agent Service (`dsk-agent`).  

All Values will be forwarded to an MQTT Broker which is connected to our ADS Source and our Edge Agent. Furthermore the Client can give Control over the single Symbol Paths:
- Which kind of Datatype will be received from the Symbol
- How and when to receive a Value from the Symbol
- Which Symbol Path to receive
- (Optional) When it will be written to it.  
  
The Write Function (**Parameter**) is designed like an endless Loop which will write the Value when the Configuration has been received and will do it every X Seconds (see ADS Setup).

Read Function has two Main Functions : 
- **Cyclic Read**   
  - Client will poll every X Seconds (see Polling) for a new Value
- **On Change**
  - ADS Server will notify the Client when a Value has changed (needs to be configured at Server Side too)

## ADS Setup 
- Open the [**Agent Companion**](../../setup/agent_companion), [**login**](../../setup/agent_companion#agent-companion-login) to the DSK Node and [**connect**](../../setup/agent_companion#agent-companion-connect) with the DKS Edge Agent
- Add Beckhoff ADS Source to your Agent
  ![ADS Source - Data Space Admin - Inital Setup](./img/ads-source-firstsetup.png)
- **Configure following Values**: 
  - Server AMS Net Id
    - AMS Net Id of the PLC ADS Server
  - ADS Port
    - Port of the PLC ADS Server
  - ADS Server IP Address
    - IP Address of the PLC ADS Server (needed for [**White List**](../../setup/agent/sources/ads#ManualSetup))
  - Client AMS Net Id
    - AMS Net Id of the ADS Source
  - InProcess Port
    - Should always be **48898**, only needs to be changed when the Network Configuration changes
  - Read Cycle Default Interval
    - Default Read Interval Value for all Cyclic Streams, will only be overruled when defined in the Stream itself
  - Configuration writing Cycle
    - Write Function Cycle Time to write Values to the Server. Can not be overruled and is used for every Parameter




  ![ADS Source - Data Space Admin - Setup Connection Info](./img/ads-source-setup.png)

## ADS Stream Setup
- Add ADS Stream to the ADS Source 
  ![ADS Source - Data Space Admin - Inital Setup](./img/ads-stream-setup.png)

### On Change
- To change an ADS Stream to an OnChange Mode: Toggle the ReadMode to **On Change**
- Symbol Path should point to the wanted Symbol
- ADS Datatype should match with the underlying Datatype
  ![ADS Source - Data Space Admin - On Change Stream Setup](./img/ads-onchange-setup.png)

- Value:
  - As displayed here, the Value has not changed and will only display the Initial Value at subscribe.
  ![ADS Source - DAta Space Admin - On Change Value](./img/ads-onchange-value.png)

### Polling (Cyclic Read)
- To change an ADS Stream to an OnChange Mode: Toggle the ReadMode to **Cyclic Reading**
- Symbol Path should point to the wanted Symbol
- ADS Datatype should match with the underlying Datatype
  ![ADS Source - Data Space Admin - Cyclic Read Setup](./img/ads-poll-setup.png)

- Values:
  - Configuration was set to 1 Second Interval, so every 1 Second there will be a Value submitted
  ![ADS Source - Data Space Admin - Cyclic Read Value](./img/ads-poll-value.png)

### On Change Options
- On Change Options should give you Control how and when a Data will be submitted. It keeps the Last Value which was received and compares them with the newly received Value.  
  Below you see the Description of the Option Values and which Impact they will have.
  There is only one Limitation, the Change Options will only work on **Numeric Values**.
- Can be used on every Type of ADS Stream
  ![ADS Source - Data Space Admin - On Change Options Setup](./img/ads-changeoptions-setup.png)

- **Description of the Option Fields**
  - Minimum Period (PMIN)
    - Sets the minimum Frequency of a Stream. It declares how much Time has to pass between the last submitted Value and the newest Value.
  - Maximum Period (PMAX)
    - Sets the maximum Frequency of a Stream. Declares the Maximum Time from the last submitted Value. If it exceeds a manual Read will be triggered and the Value will be forwarded.
  - Step (Delta)
    - Maximum Difference between two Data Points. If the Delta between the Value is equal or exceeds the configured Option, the Value will be submitted.
  ![ADS Source - Data Space Admin - On Change Options Values](./img/ads-changeoptions-config.png)

## ADS Parameter Setup
- To write Values to the Server add the ADS Parameter to the ADS Source
  ![ADS Source - Data Space Admin - Parameter Setup](./img/ads-parameter-setup.png)

- Configure following Values:
  - Symbol Path to write to
  - Value which should be written
  - ADS Datatype to support the underlying ADS Server Datatype which should be written to
  ![ADS Source - Data Space Admin - Parameter Configuration](./img/ads-parameter-config.png)

- In this Example we write to the exact same Stream which is configured to be polled.  
  We can see that the Graph will be rested every 30 Seconds to the Value 1. (Server will increase the Value by it self)
  
  ![ADS Source - Data Space Admin - Parameter Values](./img/ads-parameter-value.png)

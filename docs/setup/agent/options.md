# Setup Options

There are three different variations of the Agent. You can choose to set up which one fits your usecase the best.

## Hardware Based Agent

The SSM (Sensor Security Module) is our hardware based agent. It reads data directly from sensors and uses a dedicated hardware security module for signing the data-streams.

- This option offers the highest level of security.
- Data is signed as close as possible to the data-source.
- This option should be preferred if you have access to your system on a sensor level.

[Contact us](https://www.tributech.io/about-us/) if you need more information or wish to aquire an SSM.

## Software Based Agent

The DSK Edge Agent is a software-alternative to the Sensor Security Module. Read more about the [setup](./setup.md).

- Data is signed on the shop-floor still close to the data-source.
- This option should be preferred if you have access to the controllers of the machines on the shop-floor but not to the sensors directly.
- A popular integration option is via [OPC-UA](https://en.wikipedia.org/wiki/OPC_Unified_Architecture).

## Integrated Agent

The DataSpace Node also comes with an integrated agent. It signs data as soon as it reaches the node. Read more about the [setup](./setup.md).

- No additonal setup required.
- Data is signed as soon as it reaches the node.
- This option should be preferred if you are looking to use a software system (for example an ERP system) as a data-source.

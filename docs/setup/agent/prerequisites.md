# Prerequisites

The required resources to install a DSK Edge Agent are negligible compared to resources required for data processing. For installation, an edge device must meet the following requirements.

## Software Requirements

| Type          | Required | Preferred |
| :---          |    :----            |    :----              |
| OS | Any current Linux Distribution | Ubuntu 18.04 LTS or later |
| Runtime           | Docker CE + Docker-Compose | Azure IoT Edge Runtime |

## Hardware Requirements

| Type          | Minimum Requirement | Recommend Requirement |
| :---          |    :----            |    :----              |
| CPU           | 1 Core              | 2 Cores               |
| RAM           | 1 GB Ram            | 2 GB Ram              |

The DSK Edge Agent itself does not actually consume this much RAM, this are requirements for the whole system. Keep in mind that these requirements are strongly dependent on the actual load of the agent. These are minimum requirents for rather small to medium amounts of data. If high volumes of data have to be processed the requirements are higher.

If you have any questions regarding infrastructure requirements, please talk to your contact person at Tributech or send an email to our [Customer Advisory Team](mailto:customer-advisory@tributech.io).
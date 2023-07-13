---
title: Agent Integration
sidebar_position: 3
---

In the following section we describe in detail how to setup and link an Tributech Agent with an existing Tributech node and validate the setup. 

## Deployments
In this section we describe how to create an environment that supports the execution of an Tributech Agent.

### Requirements
The edge device must meet the following hardware and software requirements.

### Hardware Requirements 

| Type | Minimum Requirement      | Recommend Requirement |
| :--- | :----------------------- | :-------------------- |
| CPU  | 1 Core (x86-64 / ARM32 ) | 2 Cores               |
| RAM  | 1 GB Ram                 | 2 GB Ram              |

The Tributech Agent itself does not actually consume that much RAM these are the requirements for the whole system. Keep in mind that these requirements strongly depend on the overall setup and the actual work load of the Tributech Agent. The defined Hardware Requirements are minimum requirements for small to medium work loads. If high volumes of data have to be processed the requirements are higher.

If you have any questions regarding infrastructure requirements, please talk to your contact person at Tributech or send an email to our [**Customer Advisory Team**](mailto:customer-advisory@tributech.io).

### Software Requirements

| Type    | Required                                                                                                         | Preferred                      |
| :------ | :--------------------------------------------------------------------------------------------------------------- | :----------------------------- |
| OS      | Any current Linux Distribution                                                                                   | Ubuntu 18.04 LTS or later      |
| Runtime | Docker Engine (≥20) + Docker-Compose (≥1.26) | Docker Engine + Docker-Compose |

If you want to use any other container runtime (e.g. containerd) please talk to your contact person at Tributech or send an email to our [**Customer Advisory Team**](https://www.tributech.io/about-us/).

### Docker-Compose Setup
The Tributech Agent Edge services can be run using [**Docker Engine**](https://docs.docker.com/engine/) as a container runtime. We use [**Docker Compose**](https://docs.docker.com/compose/) for management/orchestration of the Docker services.

```bash
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo apt-get install docker-compose
```

Additionally if the docker commands should be available to [non-root users](https://docs.docker.com/engine/install/linux-postinstall/).

## Configurations

### Authentication 
In order to gain access to the Tributech Agent docker image we need to access the private Tributech Docker Registry. The authentication information can be found in the Secrets section of the Tributech Node.

![**"Tributech Node Secrets area**](./img/secrets-docker-registry.png)

The following command provides docker with the required permissions to access the private Tributech Docker Registry.
For more information on docker authentication visit [docker login](https://docs.docker.com/engine/reference/commandline/login/).


```bash
echo <Client Secret> | docker login --username <Client ID> --password-stdin <Endpoint>
```

### Docker-Compose environment
We have a [docker-compose.yml](./examples/agent/docker-compose.yml) prepared for an quick and easy setup with a [Tributech Simulated Source](sources/simulated_source.mdx). The docker-compose.yml can be used without changes, however we need to create a `.env` file which contains the configuration details for our docker-compose environment. The content of the file needs to contain all relavant information about the docker image tags and the AGENT_ID. The ***AGENT_ID*** is a GUID that can be me freely choosen to recognize the Tributech Agent during the linking process with the Tributech Node. We will use the AGENT_ID ***00000000-0000-0000-0000-000000000007*** in our example:

```yml
AGENT_TAG=3.2.0
MQTT_TAG=1.6
AGENT_ID=00000000-0000-0000-0000-000000000007
SOURCE_TAG=3.5.0-rc.176
```

We can now ***Startup*** the environment by running the following command in the terminal:
```bash
#!/bin/bash

docker-compose up -d
```

To ***Validate*** that all containers are running
```bash
#!/bin/bash

docker-compose ps
```

If you encounter problems with starting the containers please consult the official docker documentation [docker login](https://docs.docker.com/engine/reference/commandline/login/) and [docker compose CLI](https://docs.docker.com/compose/reference/).

## Link Agent
After successfully starting the docker compose setup in the previous step we can now link the agent with the Tributech Node.
After starting the Tributech Agent we need to link the Agent to a Tributech Node in order to receive data. In the agent overview we can click ***Link new agent*** to initialize this process.

![***Agent Linking***](./img/node-agent-linking.png)

Our prepared [docker-compose.yml](./examples/agent/docker-compose.yml) from the previous set exposes the port `5000` of the Agent to interact with the Tributech Node.

![***Agent Connect***](img/node-agent-linking-connect.png)

After pressing connect we can see the AGENT_ID ***00000000-0000-0000-0000-000000000007*** we previously defined in the `.env` file of the docker environment. 

![***Connect link***](img/node-agent-linking-connect-link.png)

Now we can finish the linking process by clicking ***Link/Relink Agent***

![***Connect link***](img/node-agent-linking-connect-link-2.png)

After the successly completed linking process we can configure the Agent to support the desired [Tributech Agent Source](source_integration.md).

![***Connect link***](img/node-agent-linking-connect-link-configure.png)

## Verify
In order to detect [data tampering](https://www.tributech.io/blog/cybersecurity-threat-data-tampering) we provide the possibility to audit each stream individually. To quickly find the failed validations we provide the possibility to either view the results in a graph or in a table. 

### Validation Graph
The Validation Graph can simply be displayed by clicking ***Display Audit Result*** and contains three different colors:

- ***gray*** - validation is pending
- ***green*** - validation was successful
- ***red*** - validation was not successful

![***Audit Graph***](img/node-source-audit-graph.png)

### Validation Table
In Order to view every created proof with its validation history we can use the ***Audit results*** overview to inspect each validation result and filter those result based on our needs. We want to highlight some features to quickly get started with the audit:

- Overview - Display all created proofs in timespan sorted by Proof Timestamp
    ![***Select audit***](img/node-source-select-audit.png)


    ![***Audit overview***](img/node-source-audit-overview.png)

- Filter - Limit the displayed audit results based on the validation result
    ![Alt text](img/node-source-audit-overview-filter.png)

    ![Alt text](img/node-source-audit-overview-filter-details.png)

- Retrigger - Validation can be triggered manually and the table view will always display the latest validation result for any proof.
    
    ![***Audit retrigger***](img/node-source-audit-retrigger.png)

    The history for every proof can be viewed in the audits results overview by clicking on any entry. The Proof Timestamp in the overview table will always be the same and the list of validations can be viewed in the history for a given proof.

    ![***Audit retrigger history***](img/node-source-audit-retrigger-history.png)
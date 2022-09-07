"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[5485],{60629:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"2.0.0","label":"2.0.0","banner":null,"badge":true,"noIndex":false,"className":"docs-version-2.0.0","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/","docId":"introduction/overview"},{"type":"link","label":"Node Architecture","href":"/introduction/node_architecture","docId":"introduction/node_architecture"},{"type":"link","label":"Agent Architecture","href":"/introduction/agent_architecture","docId":"introduction/agent_architecture"}]},{"type":"category","label":"Setup","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/setup/overview","docId":"setup/overview"},{"type":"link","label":"Tributech Node","href":"/setup/node","docId":"setup/node"},{"type":"category","label":"Tributech Agent Edge","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/setup/agent/overview","docId":"setup/agent/overview"},{"type":"link","label":"Docker Compose Setup","href":"/setup/agent/docker-compose","docId":"setup/agent/docker-compose"},{"type":"category","label":"Sources","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"OPC UA Source","href":"/setup/agent/sources/opc-ua","docId":"setup/agent/sources/opc-ua"},{"type":"link","label":"ADS Source","href":"/setup/agent/sources/ads","docId":"setup/agent/sources/ads"},{"type":"link","label":"Simulated Source","href":"/setup/agent/sources/simulated","docId":"setup/agent/sources/simulated"},{"type":"link","label":"MQTT Source","href":"/setup/agent/sources/mqtt","docId":"setup/agent/sources/mqtt"}]}]},{"type":"link","label":"Tributech Agent Companion","href":"/setup/agent_companion","docId":"setup/agent_companion"},{"type":"link","label":"Tributech Agent Configuration","href":"/setup/agent_configuration","docId":"setup/agent_configuration"}]},{"type":"category","label":"Provide Data","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/provide_data/overview","docId":"provide_data/overview"},{"type":"link","label":"API Integration","href":"/provide_data/rest","docId":"provide_data/rest"},{"type":"category","label":"IoT Integration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/provide_data/iot/overview","docId":"provide_data/iot/overview"},{"type":"link","label":"MQTT Source","href":"/provide_data/iot/mqtt","docId":"provide_data/iot/mqtt"},{"type":"link","label":"OPC-UA Source","href":"/provide_data/iot/opc-ua","docId":"provide_data/iot/opc-ua"},{"type":"link","label":"ADS Source","href":"/provide_data/iot/ads","docId":"provide_data/iot/ads"},{"type":"link","label":"Simulated Source","href":"/provide_data/iot/simulated","docId":"provide_data/iot/simulated"}]},{"type":"category","label":"Share Data","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/provide_data/sharedata/overview","docId":"provide_data/sharedata/overview"},{"type":"link","label":"Manual Dataset","href":"/provide_data/sharedata/manual_datasets","docId":"provide_data/sharedata/manual_datasets"},{"type":"link","label":"Publish Dataset","href":"/provide_data/sharedata/publish","docId":"provide_data/sharedata/publish"}]}]},{"type":"category","label":"Consume Data","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/consume_data/overview","docId":"consume_data/overview"},{"type":"link","label":"Stream Explorer","href":"/consume_data/streamexplorer","docId":"consume_data/streamexplorer"},{"type":"link","label":"API","href":"/consume_data/api","docId":"consume_data/api"},{"type":"link","label":"Grafana","href":"/consume_data/grafana","docId":"consume_data/grafana"},{"type":"link","label":"Shared Data","href":"/consume_data/shared_data","docId":"consume_data/shared_data"}]},{"type":"category","label":"Verify Data","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/verify_data/overview","docId":"verify_data/overview"},{"type":"link","label":"Audit Results","href":"/verify_data/audit_results","docId":"verify_data/audit_results"},{"type":"link","label":"Manual Audit","href":"/verify_data/manual_audit","docId":"verify_data/manual_audit"},{"type":"link","label":"API","href":"/verify_data/api","docId":"verify_data/api"}]},{"type":"category","label":"OEM Module","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/oem_module/overview","docId":"oem_module/overview"},{"type":"link","label":"Hardware Options","href":"/oem_module/hardware_options","docId":"oem_module/hardware_options"},{"type":"link","label":"Development Setup","href":"/oem_module/development_setup","docId":"oem_module/development_setup"},{"type":"link","label":"UART Interface Specification","href":"/oem_module/uart_interface_specification","docId":"oem_module/uart_interface_specification"},{"type":"link","label":"Hardware Design Guideline","href":"/oem_module/hardware_design_guideline","docId":"oem_module/hardware_design_guideline"},{"type":"link","label":"Additional Resources","href":"/oem_module/additional_resources","docId":"oem_module/additional_resources"}]}]},"docs":{"consume_data/api":{"id":"consume_data/api","title":"API","description":"Tributech provides two REST APIs:","sidebar":"tutorialSidebar"},"consume_data/grafana":{"id":"consume_data/grafana","title":"Grafana","description":"In this guide you will learn how you can consume Datasets via the built in Grafana dashboards of your Tributech Node.","sidebar":"tutorialSidebar"},"consume_data/overview":{"id":"consume_data/overview","title":"Overview","description":"Tributech offers data consumption on many levels, for which an overview is given here.","sidebar":"tutorialSidebar"},"consume_data/shared_data":{"id":"consume_data/shared_data","title":"Shared Data","description":"After a Dataset has been published, it can be subscribed to by others in order to synchronize and access the available datapoints.","sidebar":"tutorialSidebar"},"consume_data/streamexplorer":{"id":"consume_data/streamexplorer","title":"Stream Explorer","description":"The Stream Explorer can be accessed via our Node\'s web portal and provides a more detailed view of a selected stream, including an automatically updating visualization of the stored datapoints.","sidebar":"tutorialSidebar"},"introduction/agent_architecture":{"id":"introduction/agent_architecture","title":"Agent Architecture","description":"In this section, we will have a more detailed look at our Agent\'s architecture and services. There are two different versions of Tributech Agents for edge (docker) and embedded (C library/hardware module) IoT devices. On this page, we use the docker-based version for edge devices as an example and outline the core concepts applying to both implementations.","sidebar":"tutorialSidebar"},"introduction/node_architecture":{"id":"introduction/node_architecture","title":"Node Architecture","description":"In this section, we go into more detail covering Tributech\'s Node architecture and services to provide you with a better understanding of the system and the concepts behind it.","sidebar":"tutorialSidebar"},"introduction/overview":{"id":"introduction/overview","title":"Overview","description":"Welcome to our official documentation page!","sidebar":"tutorialSidebar"},"oem_module/additional_resources":{"id":"oem_module/additional_resources","title":"Additional Resources","description":"Technical resources and documentation references:","sidebar":"tutorialSidebar"},"oem_module/development_setup":{"id":"oem_module/development_setup","title":"Development Setup","description":"Prerequisites","sidebar":"tutorialSidebar"},"oem_module/hardware_design_guideline":{"id":"oem_module/hardware_design_guideline","title":"Hardware Design Guideline","description":"This document should help users and manufacturers to implement the system on a chip (SOC) \u201cTributech OEM module\u201d. The given information is tailored to allow an easy incorporation of the module on manufacturer printed circuit boards. The document includes a recommended footprint, mechanical dimensions, placement and soldering guidelines. For further information or ambiguities please contact us at Tributech.","sidebar":"tutorialSidebar"},"oem_module/hardware_options":{"id":"oem_module/hardware_options","title":"Hardware Options","description":"For the development of embedded IoT devices we offer two hardware variants. The Tributech OEM Module itself, which can be directly integrated into the PCB hardware design as a SoM and an Arduino Shield for prototyping. The shield can be used with all popular hardware development platforms like Arduino Uno, STM32 Nucelo, Infineon XMC Relax Kit and more.","sidebar":"tutorialSidebar"},"oem_module/overview":{"id":"oem_module/overview","title":"Overview","description":"This documentation provides the hardware and software specifications of the Tributech OEM Module for embedded IoT devices.","sidebar":"tutorialSidebar"},"oem_module/uart_interface_specification":{"id":"oem_module/uart_interface_specification","title":"UART Interface Specification","description":"Prerequisites","sidebar":"tutorialSidebar"},"provide_data/iot/ads":{"id":"provide_data/iot/ads","title":"ADS Source","description":"Intro","sidebar":"tutorialSidebar"},"provide_data/iot/mqtt":{"id":"provide_data/iot/mqtt","title":"MQTT Source","description":"The Tributech Edge Agent service supports integration of external data sources using the MQTT messaging protocol.","sidebar":"tutorialSidebar"},"provide_data/iot/opc-ua":{"id":"provide_data/iot/opc-ua","title":"OPC-UA Source","description":"The OPC UA Source allows to connect to OPC Unified Architecture (UA) based servers for data integration. The Tributech OPC UA Source act\'s as a OPC UA client and forwards the received data for a stream to the main Tributech Edge Agent service (dsk-agent) via our MQTT broker.","sidebar":"tutorialSidebar"},"provide_data/iot/overview":{"id":"provide_data/iot/overview","title":"Overview","description":"The Tributech Agent Edge supports direct integration using the MQTT based message bus or by using one of our additional Edge Source services on the edge:","sidebar":"tutorialSidebar"},"provide_data/iot/simulated":{"id":"provide_data/iot/simulated","title":"Simulated Source","description":"The Tributech Simulated Sensor/Source allows to simulate a data source on the edge side for testing purposes. The generated data for the streams is transmitted to the Tributech Edge Agent service (dsk-agent) via our MQTT broker.","sidebar":"tutorialSidebar"},"provide_data/overview":{"id":"provide_data/overview","title":"Overview","description":"Data for a Tributech Node can be provided in many ways, for which an overview is given here.","sidebar":"tutorialSidebar"},"provide_data/rest":{"id":"provide_data/rest","title":"API Integration","description":"Tributech provides two REST APIs:","sidebar":"tutorialSidebar"},"provide_data/sharedata/manual_datasets":{"id":"provide_data/sharedata/manual_datasets","title":"Manual Dataset","description":"Manual Datasets are used to create an unsynced Dataset to manually insert data into, e.g. via our API integration.","sidebar":"tutorialSidebar"},"provide_data/sharedata/overview":{"id":"provide_data/sharedata/overview","title":"Overview","description":"Datasets are a collection of data streams, tags and descriptions which can be published in order to selectively share all or parts of the dataset and its content with other users and connected Tributech Nodes.","sidebar":"tutorialSidebar"},"provide_data/sharedata/publish":{"id":"provide_data/sharedata/publish","title":"Publish Dataset","description":"Publishing a Dataset makes a certain timeframe of the data available for selected data consumers.","sidebar":"tutorialSidebar"},"setup/agent_companion":{"id":"setup/agent_companion","title":"Tributech Agent Companion","description":"The Tributech Agent Companion is an application for the management of the Tributech Agent Edge & OEM.","sidebar":"tutorialSidebar"},"setup/agent_configuration":{"id":"setup/agent_configuration","title":"Tributech Agent Configuration","description":"After successfully linking an Agent using the Agent Companion it can be configured.","sidebar":"tutorialSidebar"},"setup/agent/docker-compose":{"id":"setup/agent/docker-compose","title":"Docker Compose Setup","description":"To simply get started with the Tributech Edge Agent services running on Docker / Docker Compose runtime we provide a fully automated option which deploys a Linux virtual machine on Azure with everything pre-installed/configured and the Tributech DSK Edge services up and running.","sidebar":"tutorialSidebar"},"setup/agent/overview":{"id":"setup/agent/overview","title":"Overview","description":"The DSK Agent Edge setup consists of the main DSK Agent service (dsk-agent) and (optional) services like the MQTT broker (eclipse-mosquitto, for the communication on the edge) and/or for connecting external data sources e.g. OPC UA Source (opcua-source), Simulated Sensor/Source (simulated-sensor),...","sidebar":"tutorialSidebar"},"setup/agent/sources/ads":{"id":"setup/agent/sources/ads","title":"ADS Source","description":"The Tributech ADS Source allows to connect to an Beckhoff ADS Server which can be used to ingest or write data.","sidebar":"tutorialSidebar"},"setup/agent/sources/mqtt":{"id":"setup/agent/sources/mqtt","title":"MQTT Source","description":"The MQTT Source allows you to publish to a custom MQTT Topic which will be forwarded to a Stream via our Edge Agent.","sidebar":"tutorialSidebar"},"setup/agent/sources/opc-ua":{"id":"setup/agent/sources/opc-ua","title":"OPC UA Source","description":"The Tributech OPC UA Source allows to connect to OPC Unified Architecture (UA) based servers for data integration. The OPC UA Source act\'s as a OPC UA client and forwards the received data for a stream to the Tributech Agent via our MQTT broker.","sidebar":"tutorialSidebar"},"setup/agent/sources/simulated":{"id":"setup/agent/sources/simulated","title":"Simulated Source","description":"The Tributech Edge Simulated Sensor allows to simulate a data source on the edge side for testing purposes. The generated data for the streams is transmitted to the Tributech Agent via our MQTT broker.","sidebar":"tutorialSidebar"},"setup/node":{"id":"setup/node","title":"Tributech Node","description":"This page outlines the available setup options for a Tributech Node, you can choose between our PaaS and SaaS offerings.","sidebar":"tutorialSidebar"},"setup/overview":{"id":"setup/overview","title":"Overview","description":"This section of the documentation describes how to setup the individual resources offered by Tributech.","sidebar":"tutorialSidebar"},"verify_data/api":{"id":"verify_data/api","title":"API","description":"To verify data in your applications you can use our Trust-API, as showcased in the following picture.","sidebar":"tutorialSidebar"},"verify_data/audit_results":{"id":"verify_data/audit_results","title":"Audit Results","description":"To display the audit results of a specific stream you need to first navigate to the details of the stream. Afterwards press the \\"Data Audit\\" button in the top right corner.","sidebar":"tutorialSidebar"},"verify_data/manual_audit":{"id":"verify_data/manual_audit","title":"Manual Audit","description":"For streams that continuously produce data it would be quite hard to manually re-trigger validation for all proofs, so for this use-case we can utilize the \\"Manual Audit\\" section. You can navigate to it by using the tab control in the Data audit section.","sidebar":"tutorialSidebar"},"verify_data/overview":{"id":"verify_data/overview","title":"Overview","description":"The possibility to verify data is at the core of the DSK, as each data stream can be verified independently. To do this we create something comparable to fingerprints for each data stream. These fingerprints are stored on a secure and independent layer and can also be verified by other parties when data gets shared.","sidebar":"tutorialSidebar"}}}')}}]);
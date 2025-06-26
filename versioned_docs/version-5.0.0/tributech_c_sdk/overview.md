---
title: Overview
sidebar_position: 1
---

# Overview

The **Tributech C SDK** is a portable, modular software development kit for building secure, scalable, and interoperable IoT solutions on resource-constrained embedded devices.  
It is RTOS-agnostic and easily portable across different microcontrollers and real-time operating systems.

## Background

As IoT adoption grows across industries, developers face increasing complexity in building secure and interoperable embedded systems. Tributech’s experience with partners and platforms like Infineon, Nordic, STMicroelectronics, and Analog Devices has shaped the SDK’s design, focusing on verifiable data and secure-by-design principles.

## Why Use the Tributech C SDK?

Developing secure and scalable IoT solutions for embedded devices is challenging due to:
- Fragmented hardware/software landscape
- Lack of built-in security and certificate management
- Diverse connectivity requirements (NB-IoT, LTE-M, Wi-Fi, LoRa, etc.)
- Limited memory and processing power
- Missing standardized frameworks for embedded environments
- Interoperability gaps and vendor lock-in
- Increasing regulatory demands (e.g., **EU Cyber Resilience Act (CRA)**)

The Tributech C SDK addresses these challenges by providing:
- Portability across platforms
- Built-in security and certificate management
- Tamper-evident, notarized data
- Flexible connectivity and digital twin support

## Key Features

- **Hardware and RTOS Abstraction:**  
  Plugin system isolates platform-specific code, enabling reuse across microcontrollers and RTOSes.

- **Secure Device Identity & Onboarding:**  
  Devices use unique X.509 certificates for secure enrollment and communication.

- **Automated Certificate Management:**  
  Handles provisioning, renewal, and replacement over MQTTS/TLS.

- **Data Notarization:**  
  Cryptographically signs data at the source, ensuring tamper-evidence and verifiability.

- **Digital Twin Integration:**  
  Supports Digital Twin Definition Language (DTDL) for clear data mapping and easy integration.

- **Remote Command Support:**  
  Enables secure remote maintenance and dynamic configuration.

- **Flexible Data Communication:**  
  Simple API for sending data over MQTTS, compatible with Tributech middleware and other platforms.

## Security and Compliance

The SDK is designed with **secure-by-design principles** to help organizations meet modern security standards and regulations, including the EU CRA.

**Security Highlights:**
- X.509-based device identities
- Tamper-evident, notarized data
- Automated certificate lifecycle management
- Secure MQTTS/TLS communication
- Secure remote command execution

## Plugin System Architecture

The SDK uses plugins to abstract system services:
- **Heap Plugin:** Dynamic memory management
- **FlashFS Plugin:** File storage and access
- **RTC Plugin:** Real-time clock/timestamping
- **Socket Plugin:** TCP/IP communication

Developers provide platform-specific implementations for these plugins.  
See the [Integration](integration.md) page for technical details.

**Architecture Diagram:**
```plaintext
+-----------------------+
|     Application       |
+-----------------------+
|   Tributech SDK Core  |
+-----------------------+
|        Plugins        |
|  - Heap               |
|  - FlashFS            |
|  - RTC                |
|  - Socket             |
+-----------------------+
|   System/RTOS Layer   |
+-----------------------+

```
## Who Should Use the SDK?
- Embedded software developers for resource-constrained IoT devices
- Project teams deploying secure, scalable, interoperable IoT systems
- Solution architects integrating secure devices into IoT platforms
- Organizations preparing for regulations like the EU CRA

**Use Cases:**

- Smart factories & industrial automation
- Energy systems & smart grids
- Connected vehicles
- Smart buildings & infrastructure monitoring

---
title: Integration
sidebar_position: 2
---

# Integration Guide

This guide provides a high-level technical overview for integrating the Tributech C SDK into embedded and IoT systems. It explains the SDK’s plugin architecture, describes each required plugin, and outlines integration considerations for various platforms.


## Plugin System Overview

The Tributech C SDK is designed for **portability** and **hardware abstraction**. All platform-specific functionality is encapsulated in a set of plugins. Each plugin implements a well-defined interface, allowing the SDK core to remain platform-agnostic.

**Key Points:**
- Plugins are required for all platform-dependent features.
- Each plugin is a C struct with function pointers for its operations.
- The SDK will not function without all mandatory plugins.


## Mandatory Plugins

| Plugin   | Purpose                                                        |
|----------|----------------------------------------------------------------|
| Heap     | Dynamic memory allocation and deallocation                     |
| FlashFS  | Persistent file storage (simple file system abstraction)       |
| Crypt    | Cryptographic operations (key management, signing, RNG, etc.)  |
| Socket   | TCP/IP networking (DNS, connect, send/recv, timeout)           |
| RTC      | Real-time clock access                                         |
| RTOS     | Task/thread creation, sleep, mutexes                           |
| Logging  | Logging and diagnostic output                                  |

> **Note:** All plugins must be implemented for your target platform.  
> The SDK will not operate if any plugin is missing or incomplete.


## Plugin Interface Pattern

Each plugin follows a similar interface pattern:

- A `name` string for identification.
- An optional `init` function for setup.
- Function pointers for the plugin’s core operations.
- A `context` pointer for plugin-specific state.


## Plugin Descriptions

### Heap Plugin

- **Purpose:** Dynamic memory allocation and deallocation.
- **Key Functions:** `alloc`, `free`

### FlashFS Plugin

- **Purpose:** Simple persistent file storage for configuration, keys, etc.
- **Key Functions:** `fileRead`, `fileWrite`, `fileDelete`, `getSize`

### Crypt Plugin

- **Purpose:** Cryptographic operations, key management, signing, random number generation.
- **Key Functions:** `getRand`, `hashSHA256`, `sign`, `keyCreate`, `keyInfo`, `supports`
- **Note:** For production, use a hardware security module (HSM) or secure element for the crypt plugin.

### Socket Plugin

- **Purpose:** TCP/IP networking, DNS resolution, data transmission.
- **Key Functions:** `resolve`, `create`, `close`, `send`, `recv`, `setTimeout`

### RTC Plugin

- **Purpose:** Access to real-time clock for timestamps and certificate validation.
- **Key Functions:** `get`

### RTOS Plugin

- **Purpose:** Task/thread creation, sleep, mutexes.
- **Key Functions:** `taskCreate`, `sleepUsec`, `getTicks`, `mutexCreate`, `mutexLock`, `mutexUnlock`, `mutexDestroy`

### Logging Plugin

- **Purpose:** Logging and diagnostic output.
- **Key Functions:** `log`


## Example: Minimal Logging Plugin (Zephyr)

This example demonstrates the typical structure of a logging plugin implementation for Zephyr, using the Zephyr logging subsystem.

```c
#include <zephyr/logging/log.h>
#include <tt_sdk/plugins/logging.h>

LOG_MODULE_REGISTER(ttsdk);

static void zephyrLog(void*, TtLogLevel level, const char* msg);

const TtLogging ttPluginLogging = {
    .context = NULL,
    .name = "zephyr",
    .init = NULL,
    .log = &zephyrLog,
};

static void zephyrLog(void*, TtLogLevel level, const char* msg)
{
    switch (level) {
    case TT_LL_ERROR:
        LOG_ERR("%s", msg);
        break;
    case TT_LL_WARN:
        LOG_WRN("%s", msg);
        break;
    case TT_LL_INFO:
        LOG_INF("%s", msg);
        break;
    case TT_LL_DEBUG:
        LOG_DBG("%s", msg);
        break;
    }
}
```

**Logging plugin interface (from `tt_sdk/plugins/logging.h`):**

```c
typedef enum {
    TT_LL_ERROR,
    TT_LL_WARN,
    TT_LL_INFO,
    TT_LL_DEBUG,
    TT_LL__COUNT,
} TtLogLevel;

typedef struct
{
    void* context;
    const char* name;
    TtError (*init)(void* ctx);
    void (*log)(void* ctx, TtLogLevel level, const char* msg);
} TtLogging;
```


## Integration Steps

1. **Implement all mandatory plugins** for your platform, following the provided interface.
2. **Test each plugin independently** to ensure correct operation.
3. **Link your plugin implementations** with the Tributech C SDK core.
4. **Initialize the SDK** and verify correct operation on your hardware.


**Questions?**  
For integration support, contact the Tributech team under hello@tributech.io.

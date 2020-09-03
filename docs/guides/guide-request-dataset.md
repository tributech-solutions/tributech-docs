---
title: Send a request guide
summary: Description of how to send a request for a dataset.
authors:
    - Patrick Lamplmair
---

# Request a dataset guide

In this guide you will learn how-to send a request via the admin web-interface of your DataSpace Node. This guide covers the following topics:

- [Prerequisites](/guides/guide-request-dataset/#prerequisites)
- [Data preview](/guides/guide-request-dataset/#data-preview)
- [Configure a request](/guides/guide-request-dataset/#configure-a-request)
    - [Select sources and streams](/guides/guide-request-dataset/#select-sources-and-streams)
    - [Select a time-frame](/guides/guide-request-dataset/#select-a-time-frame)
    - [Accept terms and conditions](/guides/guide-request-dataset/#accept-terms-and-conditions)
    - [Send a request](/guides/guide-request-dataset/#send-a-request)
- [The state of your subscription](/guides/guide-request-dataset/#the-state-of-your-subscription)
- [Next step: consume a data stream](/guides/guide-request-dataset/#next-step-consume-a-data-stream)

## Prerequisites

The only prerequisite for sending a request is that a dataset from another member/company must be published to your DataSpace Ecosystem.

## Data preview

In the data preview you can browse through the list of available data sources and streams and view their metadata.

![Data Preview](img/request-dataset-data-preview.png)

## Configure a request

### Select sources and streams

Select the sources and stream you want to consume.

![Select](img/request-dataset-select.png)

### Select a time-frame

Select the time-frame in which you want to subscribe and consume the selected data streams. The dates for **"Available from"** and **"Available to"** of each data stream is also visible via the request form.

![Time-Frame](img/request-dataset-time-frame.png)

### Accept terms and conditions

If the owner of the dataset has defined terms and conditions of use, you have to agree on before you can send a request to the owner.

### Send a request

Once you have selected the data sources and streams of your choice, set the time-frame and agreed to the terms and conditions of use, you can send a request to the owner of the selected dataset.

![Review](img/request-dataset-review.png)

## The state of your subscription

After the request is sent, a new entry appears in the "Subscriptions" sections of your DataSpace Node. The initial state of this subscription is "pending" until the owner of the dataset grant or denies your request.

![Pending](img/request-dataset-pending.png)

Once your request is granted by the owner, the state changes to **granted** and the synchronisation process starts - depending on the selcted time-frame and available data on the owner side.

![Granted](img/request-dataset-granted.png)

However, if the owner denies your request the state of your subscription changes to "Revoked by Owner".

![Revoked] (img/request-dataset-revoked)

## Next step: consume a data stream

In this guide, you have learned how to set up an request for a dataset. To learn more about options of how you can use data of your subscription, continue with the guide [Data via APIs](/guides/guide-data-via-apis) or [Data via Dashboards](/guides/guide-data-via-dashboards).

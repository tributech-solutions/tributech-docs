---
title: Publish a Dataset Guide
summary: Description of how to publish a dataset.
authors:
    - Patrick Lamplmair
---

# Publish a dataset guide

In this guide you will learn how-to publish a dataset via the admin web-interface of your DataSpace Node. This guide covers the following topics:

- [Prerequisites](/guides/guide-publish-dataset/#prerequisites)
- [Publishing options](/guides/guide-publish-dataset/#publishing-options)
    - [Publication](/guides/guide-publish-dataset/#publication)
    - [Invite](/guides/guide-publish-dataset/#invite)
- [Create a publication](/guides/guide-publish-dataset/#create-a-publication)
    - [Select sources and streams](/guides/guide-publish-dataset/#select-sources-and-streams)
    - [Select a time-frame](/guides/guide-publish-dataset/#select-a-time-frame)
    - [Select a contract](/guides/guide-publish-dataset/#select-a-contract)
    - [Publish your dataset](/guides/guide-publish-dataset/#publish-your-dataset)
- [Edit an existing publication](/guides/guide-publish-dataset/#edit-an-existing-publication)
- [Remove an existing publication](/guides/guide-publish-dataset/#remove-an-existing-publication)
- [Next step: send a request](/guides/guide-publish-dataset/#next-step-send-a-request)

## Prerequisites

The prerequisits for publisching a dataset are:

- Metadata for a dataset existst according to the instructions of the [Create a Dataset](/guides/guide-integrate-data-source/#prerequisits) guide
- Data sources are connected according to the instructions of the [Integrate a Data Source](/guides/guide-integrate-data-source/#prerequisits) guide

## Publishing Options

Publishing a dataset means that you make the descriptive metadata for other members of your DataSpace Ecosystem visible, so they further can request and subscribe if you grant the access to them. If you want to publish a dataset you have to different options:

- **Create an publication**
- **Create an invite**

![Publish Datset](img/publish-dataset-select.png)

### Publication

If you create a **publication** the descriptive metadata of the selected streams and sources are visible for all members of your DataSpace Ecosystem.

### Invite

If you create a **invite** the descriptive metadata of the selected streams and sources are only visible for the invited member of your DataSpace Ecosystem.

## Create a publication

**1 Login -** Go to the admin interface of your DataSpace Node  "https://your-dataspace-node-ip-or-url"

![Enter URL](img/create-dataset-url.png)

**2 Navigate -** Navigate to "My Datasets"

![Navigate](img/create-dataset-navigate.png)

**3 Add Publication -** Click on "Add Publication" of your dataset

![Publish Datset](img/publish-dataset-select.png)

**4 Select -** Select "Public" (visible for all mebmers) or "Invite" (for a selected member)

![Select](img/publish-dataset-public-or-invite.png)

### Select sources and streams

Select a time-frame to define the availability for potential subscribers of data streams inside your publication or invite. This time-frame sets the period for possible subscribers that they can request. The real consumable time-frame depends on the availability of each stream. The available date for each stream is defined by the metadata field "Available from" that is set at the initial metadata generation - for more information go to the [Create Dataset Guide](/guides/guide-create-dataset/#streams).

![Select Streams](img/publish-dataset-select-streams.png)

### Select a time-frame

Select a time-frame for your publication or invite. This time-frame sets the period for possible subscribers that they can request. The real consumable time-frame depends on the availability of each stream. The available date for each stream is defined by the metadata field "Available from" that is set at the initial metadata generation.

![Select Streams](img/publish-dataset-time-frame.png)

### Select a contract

If you also want to include some governance, you have the option of uploading a contract that contains the terms of use that must be agreed upon as part of the request process. Select the checkbox and upload a PDF file containing your terms of service.

![Governace](img/publish-dataset-governace.png)

### Publish your dataset

Before completing the publishing process, please review your selection. After you publish a dataset, it will be visible to other members (depending on the published publishing option) in your DataSpace ecosystem. After submission, other members can send a request if they want to consume your data.

![Review & Finisch](img/publish-dataset-finish.png)

## Next step: send a request

In this guide, you have learned the difference between publications and invites, how to publish a dataset and how to modify existing entires. To learn more about requesting a dataset, continue to the guide [request a dataset](/guides/guide-request-dataset).

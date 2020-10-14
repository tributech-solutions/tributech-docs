---
title: Quickstart Guide
summary: Quickstart Guide
authors:
    - Patrick Lamplmair
---

- Make your first steps with the [quickstart](guides/quickstart.md) guide
- [Quickstart Guide](quickstart.md)

# Quickstart Guide

Deploy a pre-configured Tributech DataSpace Node, join our sandbox DataSpace and get started just in a few minutes!

>Note: In this quickstart guide we don't care about setting up a DataSpace Hub or  Agent because we are using the Tributech's sandbox system which already includes a DataSpace Hub, Agent and Datasets to get started.

## Deploy your Dataspace Node

Download the installer for your DataSpace Node **here**.

Deploy our pre-configured image on a virtual machine with linux and docker

## Request a Dataset

- Go to your admin interface of your DataSpace Node under <host ip>:3000 and log-in with user:name and password:1234
- Navigate to "Data Space" in the menu at the left side
- Go to Dataset "Dataset 1" and click "preview"
- Click the button "Request"
- Fill the Request form and submit your Request
- Your Request will be automaticaly granted by Tributech

## Get started with your first Subscription

If you followed the steps above you should have your first Subscription and the synchronisation process has started. The consumed data streams are now available through your DataSpace Node's APIs, go to the API [documentation](DataSpace-node-apis.md) and make your first query!

## View your consumed data in a dashboard

Through the integrated grafana dashboards you can view your consumed Datasets. Navigate to menu on the left side an navigate to /tools/grafana in the admin interface of your DataSpace Node.

## Verify a data stream

To check the data's integrity and authenticity of your consumed data streams you can use our [template](XXXXX.md) to implement the verification process. For a manual test you can simply check the verification process through the integrated [DataSpace Layer API](DataSpace-node-apis.md). To verify a portion of raw data values, simply click on the proofs link in the grafana dashboard and copy the content into the Trust API function and execute it. In the response you will see if the verification process of your consumed data was successfully.

---
title: Subscribe to a Dataset
sidebar_position: 2
---

After a Dataset has been published in the Dataspace, it can be subscribed to in order to consume its content.

## Send subscription request

Head over to the node dashboard and select "Dataspace Hub" on the sidebar. Find the publication and then hit "Subscribe".
![Subscribe to Dataset](assets/dataset_subscribe.png)

Select the data streams and the timeframe of interest. Optionally, a comment for the publisher of the Dataset, who needs to approve the request, can be added.

## Subscription status

Under "Subscriptions" the request should now be visible with the status "Pending".  
After confirmation of the Dataset publisher the status will change to "Granted" and the Node will start to sync the Dataset content to be consumed by the applications.
![Subscription status](assets/dataset_subscribe_status.png)

## Dataset content

Clicking on the subscription opens up the details. Click the "Actions" menu and select "Copy Stream ID" to make applications able to consume the data of the selected data stream.  
This section also allows to "Unsubscribe" from the Dataset.
![Subscription details](assets/dataset_subscription_details.png)

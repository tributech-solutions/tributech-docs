# Subscribe to a Dataset

After the setup of the consumer node is complete, the consumer node can subscribe to the dataset that was created before with the owner node.
Execute the following steps by accessing the DataSpace Admin App of the consumer node, e.g. in a new private browser window.

## Create the Request for a Subscription

You can see all available data streams by navigating to "DataSpace Hub" in the left side menu of the DataSpace Admin App.
In this data preview you can browse through the list of available data sources and streams and view their metadata.

![Data Preview](img/request-dataset-data-preview.png)

To create a Request to Subscribe to a data stream, click on the "Subscribe to Data" button.

This will open up a dialog similar to the one shown in the screenshot below. Select the data streams for which you would like to send the Subscription request for and click "Next Step".

> Note: You can selectively choose data streams out of one dataset. You don't have to subscribe to all data streams of a dataset.

![Select](img/request-dataset-select.png)

Next, you can select the timeframe for which you want to subscribe and consume the selected data streams. The dates for when the stream is generally available ("Available from" and "Available to") of each data stream are also shown.

![timeframe](img/request-dataset-time-frame.png)

In the next step, you might have to agree to terms and conditions of use, if the data owner has defined such a document.
Finally, once you have selected the data sources and streams of your choice, set the timeframe and agreed to the terms and conditions of use, you can send a Request to the owner of the selected dataset by clicking "Send Request to Subscribe".

> Note: You also have the possibility to add a comment for the data owner to your Request.

![Review](img/request-dataset-review.png)

## Your Dataset Subscription

After the Request has been sent, a new entry appears in the "Subscriptions" sections of your DataSpace Node (again reachable through the left side menu). The initial state of this Subscription is "pending" until the owner of the dataset grants or denies your Request.

You can switch back to the DataSpace Admin App of the Data Owner Node and grant the request.

![Pending](img/request-dataset-pending.png)

Once your Request is granted by the owner, the state changes to **granted** and the synchronisation process starts - depending on the selected timeframe and available data on the owner side.

![Granted](img/request-dataset-granted.png)

> Note: Of course the data owner also has the possibility to revoke access to the shared data stream at all times.

## [Next: Consuming data via Dashboards](./data-consuming/data-via-dashboards.md)

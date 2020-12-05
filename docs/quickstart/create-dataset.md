# Create a Dataset

Once the deployment is complete you should be able to access the DataSpace Admin App through the newly created Node under "[deployment-name].dataspace-node.com". You will be redirected to a login-page, enter the credentials that you specified in the setup process for the admin user. After the successful login, the Dataspace Admin App of the DataSpace Node should be visible.

Follow the steps below in order to create the Dataset through usage of the DataSpace Admin App.

### Open the create Dataset dialog

To create a new dataset click "Add" in the top right and then "New Dataset".

![Node landing page](img/node-landing-page.png)

### Describe your Dataset

Enter some descriptive metadata for the new dataset in the fields Name, Description and Category. You can also choose some tags for your Dataset.

![Create dataset - fill in metadata](img/create-dataset-1.png)

### Add the data source and the data streams

Add a new data-source and give the device a name of your choosing. Now create the data streams for "Machine Temperature", "Machine Pressure", "Ambient Temperature" and "Ambient Humidity". The data for these streams will later be provided by the simulated Edge Device.

![Create dataset - enter stream data](img/create-dataset-2.png)

### Successful creation of the Dataset

Once the dataset is created, it will look somwhat like in the screenshot shown below. Each of the data streams inside of the dataset now has been automatically assigned a uniqe ID. This ID can be copied to the clipboard using the button next to each stream in the column "ID". These Data Stream IDs will later be relevant when setting up the simulated Edge Device.

![Dataset overview](img/dataset.png)

---

## [Next: Install the DSK IoT Bridge](./install-bridge.md)

# Create a Dataset

Once the deployment is complete you should be able to access the newly created Node under "[deployment-name].dataspace-node.com". You will be redirected to a login-page, enter the credentials specified in the setup process. After a successfull login, the Dataspace Admin App of the DataSpace Node should be visible.

## Add - New Dataset

To create a new dataset click "Add" and then "New Dataset"

![Node landing page](img/node-landing-page.png)

## Enter title and description

Enter some descriptive metadata for the new dataset

![Create dataset - fill in metadata](img/create-dataset-1.png)

## Add new Data Source

Add a new Data Source. Create streams for "Machine Temperature", "Machine Pressure", "Ambient Temperature" and "Ambient Humidity". Data for these streams will later be provided by the simulated Edge Device.

![Create dataset - enter stream data](img/create-dataset-2.png)

## Data Stream IDs

Once the dataset is created it will look somwhat like this. Each of the data streams inside of the dataset now has a uniqe ID. This ID can be copied to the clipboard using the button next to each stream in the column "ID". These DataStreamIDs will later be relevant when setting up the simulated Edge Device.

![Dataset overview](img/dataset.png)

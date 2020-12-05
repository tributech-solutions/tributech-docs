# Installing the data owner node

A demo of a Tributech DataSpace Node can be deployed with only a few clicks through the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/tributech.tributech_dataspace_kit?tab=Overview), as explained below.

### Go to the Azure Marketplace

In the maketplace simply select the option "Trial Hub" and click "Create".
![Azure Marketplace](img/marketplace.png)

### Fill in the basic information

In the first step of the form fill in your desired Resource Group and Region and click next. It is a good idea to create a new Resource Group for this demo.
![Step 1](img/step1.png)

### Enter user information

Enter personal information for the user-account which will be created automatically on the node.<br/>
Then select a name for your node and enter it in the field "Deployment Name". Note that this name has to be uniqe. This name will be part of the URL of your node. After the deployment is finished, your node will be reachable under "[deployment-name].dataspace-node.com". Take note of this URL for later steps.
![Step 2](img/step2.png)

### Select VM Size

In the resource settings it is possible to select the VM Size. The default will work fine for most cases. Check out the [node requirements](../setup/node/node-requirements.md) for more information.
![Step 3](img/step3.png)

### Review and Create

Finally, review the entered information and click "Create". Keep in mind that the deployment process takes some time to complete. Why not go and get a coffee now.
![Step 4](img/step4.png)

---

## [Next: Create a Dataset](./create-dataset.md)
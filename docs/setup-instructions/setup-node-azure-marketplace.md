# Setup Node via the Azure Marketplace

**1. Go to Azure Marketplace -** Follow this link: <a href="https://portal.azure.com/#blade/Microsoft_Azure_Marketplace/MarketplaceOffersBlade/selectedMenuItemId/home/searchQuery/Tributech" target="_blank">Azure Marketplace</a>.

**2.Click on Tributech Dataspace Node** 

Now your screen should look as follows: 

![Startingscreen](img/setup-node-azure-startingscreen.png)

**3. Choose a Hub -** Now you can select between the **DataSpace Node - Trial Hub** and **DataSpace Node - Custom Hub**. After selecting a Hub click on **create**.
Currently you can only choose the Custom Hub.

![Trial-and-custom](img/setup-node-azure-trial-and-custom-hub.png)

**4. Fill in basics** 

First you need to fill out the project details. There you have to choose a subscription. In most cases you will select the **Pay-As-You-Go** subscription.
You also have to choose a resource group. You can either choose one of your existing resource groups or create a new one.
Secondly, you need to fill out the instance details. Regarding the region please select **West Europe**. If you look at the manged application name you can see that there is already a previously generated name filled out (dsknode....). The reason for that is that the managed application name needs to be unique. You can also change the name as long as it's unique.
Thirdly, you need to enter a name for your managed resource group. Here you can freely choose a name. For organisational reasons it may be good to develop a naming schema. 

**5. DataSpace App Settings**

First, you need to fill out the user details according to your name and company name. 
More important is the DataSpace Node name, as it determines the name of the app url. In this case the app url would be demo-docs.dataspace-node.com.
Lastly, you need to enter the email adress of the DataSpace Node Admin user and create a password.

![DataSpace-app-settings](img/setup-node-azure-dataspace-app-settings.png)

**6. Virtual machine size**

Here you need to determine the size of the virtual machine on which the DataSpace Node will be running. You can choose between 4 predesigned virtual machine sizes. 

![VM-size](img/setup-node-azure-vm-size.png)

After choosing the size of the virtual machine you can click **Review + create**
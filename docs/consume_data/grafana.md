---
title: Grafana
sidebar_position: 4
---

# Consume data via Grafana dashboards

In this guide you will learn how you can consume Datasets via the built in Grafana dashboards of your DataSpace Node.

### Prerequisites

The prerequisits for consuming data via the integrated Dashboards are, that a Dataset must be available at your node. <br />

This could be in one of two ways:

- You are **Data Provider**: You own some Datasets and have your own data on your node (Provider DB)
- You are **Data Consumer**: You have been granted a Subscription to a Dataset and the data is already synchronised to your node (Consumer DB)

### Node Dashboard Basics

You can easily navigate to your node dashboard by clicking the "Grafana" menu entry in the side menu of your DataSpace Admin App.
For authentication, use the same username and password that you use for authentication when accessing the DataSpace Admin App.

![Navigate to Grafana](assets/navigate-to-grafana.png)

The dashboarding system is built on the open source technology <a href="https://grafana.com/" target="_blank">Grafana</a>. It comes with pre-configured data sources for the in your DataSpace Node integrated Postgre SQL databases.

The structure of dashboards is based on the same logic as in the interface of your DataSpace Node:

- **Dashboards: My Datasets** / Provider DB - contains owned Datasets that are connected to your DataSpace Node.
- **Dashboards: Subscriptions** / Consumer DB - contains subscriptions to Datasets from other members of your Ecosystem.

## Create a Dashboard

To visualize your data via the dashboarding system the only thing you have to do is to duplicate the pre-configured template, paste a code snippet and paste the UUID (ValueMetadataId) of your selected data stream.

**1. Add a new Dashboard -** Click the "+" button and click on the "Dashboard" menu item to create a new Dashboard. Then click on the settings symbol to get to the Dashboard settings of the just created Dashboard, as shown below:

![Create Dashboard](assets/dashboards-create-dashboard.png)

**2. Add a new panel by clicking the "Add panel" button -** Select "Add an empty panel" to create a new panel on the dashboard.
![Add Panel](assets/grafana_add_panel.png)

**2. Select a data source for the panel -** Depending on what data set should be used, select 
 - "DataApi.MasterDB" if you are the provider of the data set
 - "DataApi.SlaveDB" if you are the consumer of the data set  

![Select Data Source](assets/grafana_data_source_selection.png)


**3. Query the data source -** Switch to the raw SQL editor by clicking the "Edit SQL" button.
![Edit SQL](assets/grafana_edit_sql.png)

```
SELECT
  "Timestamp" AS "time",
  get_bytea_to_double("Values", 0) as "double"
FROM "Value"
WHERE
  $__timeFilter("Timestamp") and
  "ValueMetadataId" = 'replace_with your own'
ORDER BY 1
```

**2. Copy and paste the JSON Model template -** First, prepare the JSON template and adjust to your unique stream ids.

- If you are Owner, then copy the json of <a href="https://github.com/tributech-solutions/tributech-dsk-docs/blob/master/docs/assets/dashboard-templates/owner-db-template.json" target="_blank">the Owner DB JSON template</a>
- If you are Consumer, then copy the json of <a href="https://github.com/tributech-solutions/tributech-dsk-docs/blob/master/docs/assets/dashboard-templates/consumer-db-template.json" target="_blank">the Consumer DB JSON template</a>

Copy the contents to a editor of your choice. In the editor, paste the template JSON and search for "ReplaceWith".
There should be 4 times where you must replace the `<ReplaceWith...>` strings with the IDs of your data streams, which you can find [as described here](../create-dataset/#successful-creation-of-the-dataset).

Finally, copy this adjusted template JSON, paste into the settings tab "JSON Model" of your new dashboard and click "Save Changes".

![Dashboard JSON Model](assets/dashboard-json-model.png)

Optionally, you can now rename the rows / panels to your liking or just play around with your brand new dashboard!
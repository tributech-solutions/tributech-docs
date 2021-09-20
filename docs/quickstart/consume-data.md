This example shows the usage of the Data-API and its [OpenAPi interface](https://swagger.io/specification/), which can be used to create a client that works with your programming language/framework.  
We provide generated client software for C#/.NET applications on our [Github Page](https://github.com/tributech-solutions/tributech-dsk-api-clients).

## Where to find stream IDs
In order to consume the content of a Dataset a stream ID is required.  
For this example a stream with the value type "double" is chosen.

Head over to "My Dataset", find the Dataset you are subscribed to and copy the stream ID.
![Find the stream ID](assets/consume_find_stream_id.png) 

## Where to find API keys
On your node dashboard: Access your profile on the top right and head to "Administration->API Keys" to find your Data-API client secret. Copy it.  
![image](assets/administration.png)

## Authorize Data-API access
Head to the Data-API specification page.  
![image](assets/data_api_tab_small.png)    
Click the "Authorize" button and paste the Data-API client secret.  
![image](assets/authorize.png)  
![image](assets/authorize_secret.png)

## Get stream values
Scroll down and select the "GET/values/double/{valueMetadataId}" endpoint.  
![image](assets/data_api_get_double.png)
Click "Try it out" and replace the ValueMetadataId parameter with your stream ID.  
![image](assets/data_api_enter_id.png)
In the response message, you should now be able to find the double value.  
![image](assets/server_response_success.png)
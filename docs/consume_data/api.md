---
title: API
sidebar_position: 2
---

### Step-by-step example: **Get a double value with its ValueMetadataId**

1. On your node dashboard: Access your profile on the top right and head to "Administration->API Keys" to find your Data-API client secret. Copy it.  
![image](assets/administration.png) 
2. Head to the Data-API specification page.  
![image](assets/data_api_tab_small.png)    
3. Click the "Authorize" button and paste the Data-API client secret.  
![image](assets/authorize.png)  
![image](assets/authorize_secret.png)
4. Scroll down and select the "GET/values/double/{valueMetadataId}" endpoint.  
![image](assets/data_api_get_double.png)
5. Click "Try it out" and replace the ValueMetadataId parameter with your own.  
![image](assets/data_api_enter_id.png)
6. In the response message, you should now be able to find the double value.  
![image](assets/server_response_success.png)
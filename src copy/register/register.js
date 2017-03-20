import {HttpClient, json}  from 'aurelia-fetch-client'

export class register {
    
    addUser() {
        let client = new HttpClient();
        
        let userData = {
            "firstName": "MyName",
            "lastName": "MyLastName",
            "numOfPets": 11  
        
        }

        client.fetch('http://localhost:8080/users/add', {'method': "POST",'body': json(userData)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Server saatis" + data.firstName);
    });
        
        
        
        console.log("Method Executed")
    }
    
    
}
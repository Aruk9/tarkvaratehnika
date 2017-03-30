import {HttpClient, json}  from 'aurelia-fetch-client'
import environment from '../environment'

export class register {
    
    addUser() {
        
        let client = new HttpClient();
        
        let userData = {
            "firstname": "MyName",
        }
        
        client.fetch( environment.serverurl + '/users/add', {
            'method': "POST",
            'body': json(userData)
        })
        
        
        console.log("Method executed!")
        
        
    }   
}
import {HttpClient, json}  from 'aurelia-fetch-client'
import environment from '../environment'

export class register {
    
    myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    
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
import {HttpClient, json} from 'aurelia-fetch-client';

export class myclients {
    
    myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    
    function() {
        var div = document.getElementById('newpost');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'block';
            }
        }

	clientData = {}
	clientList = []
   
    //Sorteerimiseks vajalik - asendasin activate() funktsiooni
	users = [];
    bind(){
        let client = new HttpClient();
        return client.fetch('http://localhost:8080/client')
            .then(response => response.json())
            .then(users => this.users = users);
    }
    //sorteerimiseks vajaliku lõpp

    //filtreerimiseks vajalik
    filters = [
        {value: '', keys: ['clientName' , 'clientMail']},
     
    ];
    //filtreerimiseks vajaliku lõpp

    constructor() {
		this.appName = "SalesTrack"
		this.count = 0
	}

	

	addClient() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/client/add', {
			'method': "POST",
			'body': json(this.clientData)
		})
			.then(response => response.json())
	}   
}
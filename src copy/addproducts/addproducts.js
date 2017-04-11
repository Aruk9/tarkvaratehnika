import {HttpClient, json} from 'aurelia-fetch-client';


export class addproducts {
    
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

	userData = {}
	userList = []
    
    constructor() {
		this.appName = "SalesTrack"
		this.count = 0
	}

	activate() {
		let client = new HttpClient();
	    client.fetch('http://localhost:8080/users')
			.then(response => response.json())
			.then(users => this.userList = users);
	}

	addProduct() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/users/add', {
			'method': "POST",
			'body': json(this.userData)
		})
			.then(response => response.json())			
	}
}
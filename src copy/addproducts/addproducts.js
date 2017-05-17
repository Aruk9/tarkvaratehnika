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
	userList = [];

	//Sorteerimiseks vajalik - asendasin activate() funktsiooni
	users = [];
    bind(){
        let client = new HttpClient();
        return client.fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(users => this.users = users);
    }
    //sorteerimiseks vajaliku lõpp

    //filtreerimiseks vajalik
    filters = [
        {value: '', keys: ['productName' , 'description' , 'productPrice']},
     
    ];
    //filtreerimiseks vajaliku lõpp

    constructor() {
		this.appName = "SalesTrack"
		this.count = 0
	}

	addProduct() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/users/add', {
			'method': "POST",
			'body': json(this.userData)
		})
			.then(response => response.json())			
	}
	deleteProduct(id) {
    	console.log(id);
		let client = new HttpClient();
		let result = this.grep(id);
			if (typeof result == 'undefined') {
			  console.log("objekti ei leitud")
			} else {
			console.log("objekt on olemas")
			  client.fetch('http://localhost:8080/users/delete/{id}', {
			'method': "DELETE",
			

		})
			console.log(id)			
			} 
	}

	grep(id){
			for (var i = 0, len = this.users.length; i < len; i++) 
		{
	    if (this.users[i].id === id)
	    {
	        return this.users[i]; // Return as soon as the object is found
	    }
			}
		}
}
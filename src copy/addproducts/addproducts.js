import {HttpClient, json} from 'aurelia-fetch-client';


export class addproducts {

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
			.then(data => {
				console.log("Server saatis " + data.productPrice);
		});

		console.log("Method executed!")
	}
}
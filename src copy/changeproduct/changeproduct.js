import {HttpClient, json} from 'aurelia-fetch-client';
export class changeproduct { 
   
    myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    
    users = [];
    bind(){
        let client = new HttpClient();
        return client.fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(users => this.users = users);
    }
    filters = [
        {value: '', keys: ['productName' , 'description' , 'productPrice']},
     
    ];

    changeProduct(id) {
    	console.log(id);
		let client = new HttpClient();
		let result = this.grep(id);
			if (typeof result == 'undefined') {
			  console.log("objekti ei leitud")
			} else {
				console.log("objekt on olemas")
			  client.fetch('http://localhost:8080/users/add', {
			'method': "POST",
			'body': json(result)
		})
			.then(response => response.json())			
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
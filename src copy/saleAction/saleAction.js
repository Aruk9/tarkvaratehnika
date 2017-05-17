import {HttpClient, json} from 'aurelia-fetch-client';
var summa=0;
export class saleAction {
    
    myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    clientData = {}
    users = []


    bind(){
    	
        let client = new HttpClient();
        return client.fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(users => this.users = users);
        
    }
	
 	

    filters = [
        {value: '', keys: ['productName' , 'description' , 'productPrice']},
     
    ];

   	
    addClient() {
		let client = new HttpClient();
		//send mail
		var email = document.getElementsByName("clientMail")[0].value;
		var subject = "SalesTrack arve";
		var date = new Date();
		//var body2 = document.getElementById("table").innerHTML;
		var body = document.getElementById("summa").innerHTML;
		// var body =
		window.location.href = "mailto:" + email + "?subject=" + subject + " " + date + "&body=Siin on Teie arve. \n Summa kokku on: " + body + "€ \n Külastage meid jälle! PS:" /*+ body2*/;
		client.fetch('http://localhost:8080/client/add', {
			'method': "POST",
			'body': json(this.clientData)
		})
			.then(response => response.json())
	}   
   

    addToCart(id, quantity, productName, productPrice, description) {
    	console.log(id);
		let client = new HttpClient();
		let result = this.grep(id);
			if (typeof result == 'undefined') {
			  console.log("objekti ei leitud")
			} else {
				//Tabel lehe allosas - kilplase töö - lisamine tabelisse nupule vajutamisega
					var x=document.getElementById('table').insertRow();
					var y = x.insertCell(0);
					var z = x.insertCell(1);
					var a = x.insertCell(2);
					var b = x.insertCell(3);	
					y.innerHTML=productName;
					z.innerHTML=productPrice;
					a.innerHTML="1";
					b.innerHTML=description;
					summa=summa+parseInt(productPrice);
					console.log(productPrice);
					document.getElementById('summa').innerHTML=summa;

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
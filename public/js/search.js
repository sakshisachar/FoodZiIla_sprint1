/*var mongoose =require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
	
	//alert("hello");
	MongoClient.connect(url, function(err, db) {
		console.log("entered");
	  if (err) throw err;
	  db.createCollection("restaurants", function(err, res) {
	    if (err) throw err;
	    console.log("Collection created!");
//	    db.close();
	  });
});

var express = require('express');  
var logger = require('morgan');  
var bodyParser = require('body-parser');  
var app = express();  
app.use(logger('dev'));  
app.use(bodyParser.json());  

var mongoose = require('mongoose');  
//mongoose.connect('mongodb://localhost:27017/mydb');  

var db = mongoose.connect('mongodb://localhost/mydb', {
  useMongoClient: true,
  /* other options 
});


//var result=db.collection('restaurants').find({location:"rajapark"});


var Schema = mongoose.Schema;  
   
// todos  
var restSchema = new Schema({  
    name: {  
        type: String,  
        required: true  
    },  
    loaction: {  
        type: String,
	required:true  
    }  
});  

   
var Restaurants = mongoose.model('restaurants', restSchema);  
console.log(result);
//Restaurants.find({location:"rajapark"}).forEach( function(myDoc){
//	console.log(myDoc.name);	
//});
//console.log(result);

db.close();
*/

function getRestaurantData(){

//	console.log("hello");
//	alert("search.js");

//	var mongo =require('mongodb');
//	var MongoClient = require('mongodb').MongoClient;
//	var url = "mongodb://localhost:27017/mydb";
	
//	alert("hello");
	//MongoClient.connect(url, function(err, db) {
	//	alert("entered");
	 // if (err) throw err;
	  /*db.createCollection("restaurants", function(err, res) {
	    if (err) throw err;
	    console.log("Collection created!");
	    db.close();
	  });*/

	
		//alert("search.js");
		/*var result=db.collection('restaurants').find({location:"rajapark"});
	
		$result.forEach(function (s) {
	  	  if (location === "rajapark") {
	      //		filteredShapes.push(s);
			console.log(s);
	    		}
	  	});*/

		alert("file");
	
		var json = [    
				{
					name:"otr",
					loaction:"jaipur"
             			},

				{
					name:"ptr",
					loaction:"delhi"
             			},

				{
					name:"ctr",
					loaction:"lucknow"
             			},

				{
					name:"nibbs",
					loaction:"jaipur"
             			}

			];

			
		
		var inputElement = document.getElementById('odd');
	        var value = inputElement.value;
		alert(value);

		var finalHTML='';
		//alert(json[1].name);

//		db.collection('restaurants').find({location:$value}).forEach( function(myDoc) {
		json.forEach( function(myDoc) {		
		//for(var i=0;i<json.length;i++){	
		//	alert(json[i].name);
		//	alert(json[i].location);

			var myDoc;
			finalHTML += 
	  `
			    <div class="col s3 m3">    
			      <div class="teal lighten-3 card medium">
				/*<div class="card-image waves-effect waves-block waves-light">
				  <img class="activator" src="${item.recipe.image}">
				</div>*/
				<div class="card-content">
				  <span class="card-title activator white-text text-darken-4">${myDoc.name}<i class="material-icons right">more_vert</i></span>
				  
				</div>
				<div class="card-content">
				  <span class="card-title activator white-text text-darken-4">${myDoc.location}<i class="material-icons right">more_vert</i></span>
				  
				</div>
		
	/*		        <div class="card-reveal">
				  <span class="card-title grey-text text-darken-4">${myDoc.location}<i class="material-icons right">close</i></span>
				  <p>${item.recipe.ingredientLines}</p>
				</div>
		   
				<div class="card-action">
				  <a class = "white-text" href="${item.recipe.url}" target = "_blank">See More</a>
				</div>*/
			      </div>
			    </div>	`
//			 console.log( "name: " + myDoc.name ); } );
	
	
//	});

	var resultDiv = document.getElementById('result')
		resultDiv.innerHTML = finalHTML
}


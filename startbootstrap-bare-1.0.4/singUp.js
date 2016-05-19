var usernameArray = [];
var eamilArray = [];
var passwordArray = [];


var inputUsername = function() {
	var username = document.getElementById("uname").value;
	nameArray.push(username);
}

var inputPassword = function() {
	var password = document.getElementById("pword").value;
	nameArray.push(password);
}

var inputEmail = function() {
	var email = document.getElementById("email").value;
	nameArray.push(email);
}




var submitForm = function() {

	var urlbase = "https://docs.google.com/a/greenwichschools.org/forms/d/1yxe6FD1af1w7vjLYJ6P-gDjYz2qLlUNmRFV2c2M4dkE/formResponse";
	$.ajax({
		url: urlbase,
		data: {"entry.2108918708": usernameArray[0], "entry.67456769": eamilArray[0], "entry.832203000": passwordArray[0],  },
		type: "POST",
		dataType: "xml",
		success: function(data) {

		}
	});
}


            var bed=[];
            var bathroom=[];
            var sqft=[];
            var email=[];
            var fileText = "";
            var commaTrack = 1;
            var keepTrack = "";
        //ARRAYS!!!//
        
        
   
            
        
    function projectMaker(fileName){
        var reader = new FileReader();
    reader.readAsText(fileName); 
    reader.onload = function() { 
    fileText = reader.result;
    console.log(fileText);
   //Displaying the data//
        
        
        
            
            
            for( i = 0; i < fileText.length; i ++){ 
                if (fileText[i] == ","|| fileText[i] == "\n"){
                    console.log("Found a comma!!!")
                    if(commaTrack == 1){bed.push(keepTrack)
                        commaTrack++;
                    }
               else if (commaTrack == 2){bathroom.push(keepTrack)
                        commaTrack++;
                    }
                      else if (commaTrack == 3){sqft.push(keepTrack)
                        commaTrack++;
                    }
                      else if (commaTrack == 4){email.push(keepTrack)
                        commaTrack = 1; }
                        keepTrack = "";
                    }
                else{ keepTrack += fileText[i];}
                    }
                 console.log(bed.length);
                 console.log(bed);//loging the amount of bedrooms in the data file//
                  console.log(bathroom);//loging the amount of bathrooms in the data file//
                   console.log(sqft);//loging the square footage of the house in the data file//
                    console.log(email);//loging the email in the data file//
                   }
                  
                   } 
            






                   var pressCount = 0;


                  function createHouse(){
              
                    var place = document.getElementById("rawr")
                    place.innerHTML = ""; //Place is the same as document.GetElementById, it is just the variable I called it, instead of saying document.getElementByID.inner HTML, each time.// 
                    for(i = 0; i < bed.length; i++){
                    	pressCount++;
                        place.innerHTML += "Bedrooms:";
                        place.innerHTML += bed[i];
                        place.innerHTML += "<br>";
                        place.innerHTML += "Bathrooms:"
                          place.innerHTML += bathroom[i];
                           place.innerHTML += "<br>";
                           place.innerHTML += "Square footage:"
                           place.innerHTML += sqft[i];
                           place.innerHTML += "<br>";
                           place.innerHTML += email[i];
                             place.innerHTML += "<br>";
                             place.innerHTML += "<br>";
                             $( "#rawr" ).wrap( "<div class='thumbnail'></div>");
                             $( ".tnail" ).wrap( "<div class='col-sm-6 col-md-4'></div>");
                    }
                  }

                  function addUser(){
                    bed.push(prompt("How many bedrooms does your house have?"));
                    bathroom.push(prompt("How many bathrooms does your house have?"));
                    sqft.push(prompt("what is the sqft of the house?"));
                    email.push(prompt("What is your email adress?"));
                  }
                //Adding prompts, asking the user to input information//












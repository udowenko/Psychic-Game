


	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var wins = 0;
	var losses = 0;
	var guessesLeft= 5;
	var userAlpha =[];
// random number generator

  	var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
  	console.log(randomAlphabet);
 
 //get on key from user 	
	document.onkeyup = function(event){
	var userInput = event.key;
	console.log(userInput);
  	userAlpha.push(userInput);

  	guessesLeft--;
  	console.log(guessesLeft);

			
  	

		if (userInput === randomAlphabet){

			alert("You guessed correctly!! You Win!");
			wins++;
			
			document.getElementById("wins").innerHTML= wins;

			var playagain= prompt("Do you want to play again? Press 'y' ");
			if (playagain === "y")
			rewriteStats();
		}
		else if (userInput !== randomAlphabet && guessesLeft !==-1){

		alert("You guessed incorrectly. Try another key.");
			losses++;
			 document.getElementById("losses").innerHTML=losses;
			
	 		 document.getElementById("gleft").innerHTML=guessesLeft;
	 		 document.getElementById("userguesses").innerHTML=userAlpha
			
	}
		else {

		 alert("Game Over");
		 var playagain= prompt("Do you want to play again? Press 'y' ");
			if (playagain === "y")
					rewriteStats();
		}	

		function rewriteStats(){
			guessesLeft= 5;
			userAlpha =[];	
			wins=0;
			losses=0;
			randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
			document.getElementById("losses").innerHTML=losses;
			document.getElementById("wins").innerHTML= wins;
	 		document.getElementById("gleft").innerHTML=guessesLeft;
	 		document.getElementById("userguesses").innerHTML=userAlpha
  			console.log(randomAlphabet);}

	}		
					

	



// generate random letter

// var emptyString = "";
// var alphabet = "abcdefghijklmnopqrstuvwxyz";

// while (emptyString.length < 6) {
//   emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(emptyString);





//comparison 
 // number of times the user guessed correctly
 // number of times the user guessed incorrectly after 5 guesses
 // when player wins, increase wins counter and start game over without refreshing page
 // loss counter same counter and refesh page


// display to html

// var html= wins;
// document.querySelector("#wins").innerHTML = wins;

// document.getElementById("guessesLeftHeader").innerHTML = guessesLeft + " Guesses Left.";

// var alphabet:Array = ("abcdefghijklmnopqrstuvwxyz").split("");
// trace("this is the letter b...", alphabet[1]);
// trace(alphabet);


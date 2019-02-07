function start(){
	let userInput = document.getElementById('userSelect').value;
	console.log(`you entered ${userInput}`)

	
	function comInput(){
		let rand = Math.floor(Math.random()*3);
		if(rand == 0){
			console.log("scissors");
		}else if(rand == 1){
			console.log("rock");
		}else{
			console.log("paper");
		}
	} 

	/*function compare(){
		let comp = comInput();

		if ( userInput == comp){
			document.getElementById('result').innerHTML = 'This is a Tie!'
		}
		if(userChoice === 'paper'){
		    if(comChoice === 'rock'){
		      return 'you won!';
		    }else{
		      return 'computer won';
		    }
	  	}
	    if(userChoice === 'scissors'){
		    if(comChoice === 'paper'){
		      return 'you won!';
		    }else{
		      return 'Computer won!';
		    }
		}
	  	if(userChoice === 'rock'){
		    if(comChoice === 'scissors'){
		      return 'You won';
		    }else{
		      return 'Computer won';
		    }
		}
	}
	document.getElementById('result').innerHTML = `${compare()}`*/
}
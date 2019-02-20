function start(){
	function user(){
		let userInput = document.getElementById('userSelect').value;
		if (userInput == 'paper'||userInput=='rock'||userInput=='scissors'){
			return userInput;
		}else{return "Enter a valid option";}
	}
	
	function comInput(){
		let rand = Math.floor(Math.random()*3);
		if(rand == 0){
			return "scissors";
		}else if(rand == 1){
			return "rock";
		}else{
			return"paper";
		}
	} 
	let userInput = user();
	let comp = comInput();
	console.log(`you entered ${userInput}`)
	console.log(`computer enters ${comp}`)
// function to compare
	function compare(){
		if(userInput === 'paper'){
		    if(comp === 'rock'){
		      return 'You Won!';
		    }else{
		      return 'Computer Won!';
		    }
	  	}
	    if(userInput === 'scissors'){
		    if(comp === 'paper'){
		      return 'You Won!';
		    }else{
		      return 'Computer Won!';
		    }
		}
	  	if(userInput === 'rock'){
		    if(comp === 'scissors'){
		      return 'You Won!';
		    }else{
		      return 'Computer Won!';
		    }
		}
	}
	if(userInput == 'rock' || 'scissors' || 'paper'){
	if ( userInput == comp){
			document.getElementById('result').innerHTML = `This is a Tie!`;
		}else{
	document.getElementById('result').innerHTML = `${compare()}`}
	}else{
		document.getElementById('result').innerHTML = `Please enter a valid option`;
	}
}

function start(){
	let userInput = document.getElementById('userSelect').value;
	userInput = userInput.toLowerCase();
	console.log(`you entered ${userInput}`)

	
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
	let comp = comInput();
	console.log(`computer enters ${comp}`)

	function compare(){
		
		if(userInput === 'paper'){
		    if(comp === 'rock'){
		      return 'You Won!';
		    }else{
		      return 'Computer Won';
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
	if ( userInput == comp){
			document.getElementById('result').innerHTML = `This is a Tie!`;
		}else{
	document.getElementById('result').innerHTML = `${compare()}`}
}
function start(){
	let userInput = document.getElementById('userSelect').value;
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
		
		if ( userInput === comp){
			document.getElementById('result').innerHTML = 'This is a Tie!'
		}
		if(userInput === 'paper'){
		    if(comp === 'rock'){
		      return 'you won!';
		    }else{
		      return 'computer won';
		    }
	  	}
	    if(userInput === 'scissors'){
		    if(comp === 'paper'){
		      return 'you won!';
		    }else{
		      return 'Computer won!';
		    }
		}
	  	if(userInput === 'rock'){
		    if(comp === 'scissors'){
		      return 'You won';
		    }else{
		      return 'Computer won';
		    }
		}
	}
	document.getElementById('result').innerHTML = `${compare()}`
}
function start(){
	let userInput = document.getElementById('userSelect').value;
	let rand = Math.floor(Math.random()*3);

	function comInput(){
		if(rand == 0){
			return "scissors";
		}else if(rand == 1){
			return "rock";
		}else{
			return "paper";
		}
	} 

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
	    
}
	//Declare variables
	let wins = 1;
	let losses = 1;
	let correctNumber;
	let purpleValue;
	let clearValue;
	let greenValue;
	let yellowValue;
	
	
	//random number generator
	function randomNumber(min, max){
		
		return Math.floor(Math.random() * max + min);
	}
	
	//random number generator that outputs a number between 19-120
	//chaning the "correct number" to a number you have to guess to win
	function randomGeneratedNumber(){
	    correctNumber = 0;
		correctNumber = randomNumber(19, 120);
		$('#generatedNumber').html(correctNumber);
	}
	//call the function so when the page loads it appears 
	randomGeneratedNumber();

	
	//give each indiviual crystals a random value between 1-12
	//I did this rather then placing them all in one function so i can return seperatly
	//each image id is getting their correct corresponding value
	function cValue(){
		clearValue = randomNumber(1,12);
		return $('#clear').val(clearValue);
	}

	function pValue(){
		purpleValue = randomNumber(1,12);
		return $('#purple').val(purpleValue);
	}

	function gValue(){
		greenValue = randomNumber(1,12);
		return $('#green').val(greenValue);
	}
	function yValue(){
		yellowValue = randomNumber(1,12);
		return $('#yellow').val(yellowValue);
	}


	//call the functions so on load they work
	cValue();
	pValue();
	gValue();
	yValue();
	

	//create a reset function that creates a new random number to guess and
	//gives the crystals a new value after win or lose
	function reset(){
		randomGeneratedNumber();
		cValue();
		pValue();
		gValue();
		yValue();
		totalScore = 0;
		$('#totalScore').html(totalScore);
	}

	function winPopup(){
		$('#popup').show();
		setTimeout($('#popup').fadeOut(2600),5000);
	}
	function losePopup(){
		$('#popup2').show();
		setTimeout($('#popup2').fadeOut(2600),5000);
	}



	let totalScore = 0;

	
	//when the img class button is clicked it will make the total score whichever value
	//that crystal is plus the current totalValue by we are selecting it using this
	//as it is assigned a random value with the previous function created
	//then if the score equals correctNumber wins go up and vice versa if you pass the correctNumber
	//as well as all the correct values/numbers being reset
	$('.button').on('click', function(){
		totalScore = totalScore + parseInt($(this).val());
		$('#totalScore').html(totalScore);

		 if (totalScore === correctNumber){
		$('#winsNumber').html(wins++)
		winPopup();
		reset();

		}
	 	else if (totalScore > correctNumber) {
		$('#lossesNumber').html(losses++)
		losePopup();
		reset();
		}

		

	})

	function newGame(){
		randomGeneratedNumber();
		cValue();
		pValue();
		gValue();
		yValue();
		totalScore = 0;
		wins = 1;
		losses = 1;
		$('#totalScore').html(totalScore);
		$('#winsNumber').html("");
		$('#lossesNumber').html("");
	}

	$('#newGame').on('click', function(){
		newGame();
	})	




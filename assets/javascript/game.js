	
	let wins = 1;
	let losses = 1;
	let correctNumber;
	let purpleValue;
	let clearValue;
	let greenValue;
	let yellowValue;
	
	

	function randomNumber(min, max){
		
		return Math.floor(Math.random() * max + min);
	}
	

	function randomGeneratedNumber(){
	    correctNumber = 0;
		correctNumber = randomNumber(19, 120);
		$('#generatedNumber').html(correctNumber);
	}

	randomGeneratedNumber();

	


	function randomCrystalValue(){
	 purpleValue = Math.floor((Math.random() * 12) + 1);
	 // clearValue = randomNumber(1,12);
	 // greenValue = randomNumber(1,12);
	 // yellowValue = randomNumber(1,12);


	 return $('#purple').val(purpleValue);
	 console.log(purpleValue);
	 // $('#clear').val(clearValue);
	 // console.log(clearValue);
	 // $('#green').val(greenValue);
	 // console.log(greenValue);
	 // $('#yellow').val(yellowValue);
	 // console.log(yellowValue);


	}

	console.log(randomCrystalValue());



	let totalScore = 0;

	// $('#totalScore').html(totalScore);

	$('.button').on('click', function(){
		console.log(this);
		totalScore = totalScore + parseInt($(this).val());
		$('#totalScore').html(totalScore);

		 if (totalScore === correctNumber){
		$('#winsNumber').html(wins++)

		}
	 	else if (totalScore > correctNumber) {
		$('#lossesNumber').html(losses++)}
		

	})

			// newGame();




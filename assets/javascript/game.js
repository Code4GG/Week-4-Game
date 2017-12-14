	
	let wins = 1;
	let losses = 1;
	let correctNumber = randomNumber(19,120);
	let purpleValue = randomNumber(1,12);
	let clearValue = randomNumber(1,12);
	let greenValue = randomNumber(1,12);
	let yellowValue = randomNumber(1,12);
	let totalScore;



	//Random Number generator allows a plugin for number to match as well as crystals points
	//through the parameters when it is called
	function randomNumber(min, max){
		
		return Math.floor(Math.random() * max + min);
	}

	function clear(){
		$('#generatedNumber').empty();
		$('#totalScore').empty();
	}

	function newGame(){
		$('#generatedNumber').empty();
		$('#winsNumber').empty();
		$('#lossesNumber').empty();
		$('#totalScore').empty(totalScore);

	}



	function startGame(){
		// let correctNumber = randomNumber(19,120);
		let totalScore = 0;

	// 	function clear(){
	// 	$('#generatedNumber').empty();
	// 	$('#totalScore').empty();
	// }

	$('#generatedNumber').html(correctNumber);

	//crystals value generated between 1 - 12
	//number trying to guess is between 19-120


	$('#purple').on('click', function(){
		totalScore = totalScore + purpleValue;
		console.log(totalScore);
		$('#totalScore').html(" " + totalScore);

		if (totalScore === correctNumber){
		$('#winsNumber').html(wins++)
		$('#generatedNumber').html(correctNumber);
		// correctNumber = ???

	}

	 else if (totalScore > correctNumber) {
		$('#lossesNumber').html(losses++)}
		$('#generatedNumber').html(correctNumber);
		// correctNumber = ???
		
	})

	
	$('#clear').on('click', function(){
		totalScore =  totalScore + clearValue;
		console.log(totalScore);
		$('#totalScore').html(" " + totalScore);

		if (totalScore === correctNumber){
		$('#winsNumber').html(wins++)
	}
	 else if (totalScore > correctNumber) {
		$('#lossesNumber').html(losses++)}
	
	})

	
	$('#green').on('click', function(){
		totalScore = totalScore + greenValue
		console.log(totalScore);
		$('#totalScore').html(" " + totalScore);

		if (totalScore === correctNumber){
		$('#winsNumber').html(wins++)
	}
	 else if (totalScore > correctNumber) {
		$('#lossesNumber').html(losses++)}

	})

	
	$('#yellow').on('click', function(){
		totalScore = totalScore + yellowValue;
		console.log(totalScore);
		$('#totalScore').html(" " + totalScore);

		if (totalScore === correctNumber){
		$('#winsNumber').html(wins++)
	}
	 else if (totalScore > correctNumber) {
		$('#lossesNumber').html(losses++)}
	
	})



	}

	startGame();
		// newGame();




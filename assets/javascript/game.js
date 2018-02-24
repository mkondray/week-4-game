$(document).ready(function() {

	// Stores the random number
	var gameNumber;
	// Stores the number of wins and sets it to zero at start
	var winCount = 0;
	$("#winCounter").text(winCount);
	// Stores the number of losses and sets it to zero at the start
	var lossCount = 0;
	$("#lossCounter").text(lossCount);
	// Total score accumulated from guesses
	var totalScore = 0;
	// Sets a value to each "crystal"
	var coin = 0;
	var crystal = 0;
	var gem = 0;
	var token = 0;

	// Start game function
	function startGame() {
		// GameNumber between 19 and 120 is chosen
		gameNumber = Math.floor(Math.random() * (1 + 120 - 19) ) + 19;
		console.log(gameNumber);

		// Initiate Total Score at each new round
		totalScore = 0;

		// Give randoms numbers a new value each game
		var arr = [];
		for (var i = 0, l = 4; i < l; i++) {
			arr.push(Math.floor(Math.random() * (1 + 12 - 1) ) + 1)
			coin = arr[0]
			crystal = arr[1]
			gem = arr[2]
			token = arr[3]
		}
		console.log(arr)

		// update the html with game info
		$("#gameNumber").text(gameNumber);
		$("#totalScore").text(totalScore);
	}

	// Win/loss and counter function
	function update(){
		if (gameNumber === totalScore){
			winCount++;
			$("#winCounter").text(winCount);
			console.log(winCount)
			startGame()	
		} else if (totalScore > gameNumber) {
			lossCount++
			$("#lossCounter").text(lossCount);
			console.log(lossCount)
			startGame()
		}
	}

		// Writes a score after each button is clicked  	
		$("#coin").on("click", function() {
			totalScore = ((totalScore)+(coin))
			$("#totalScore").text(totalScore);
			console.log(totalScore);
			update()
		});
		$("#crystal").on("click", function() {
			totalScore = ((totalScore)+(crystal))
			$("#totalScore").text(totalScore);
			console.log(totalScore);
			update()
		});
		$("#gem").on("click", function() {
			totalScore = ((totalScore)+(gem))
			$("#totalScore").text(totalScore);
			console.log(totalScore);
			update()
		});
		$("#token").on("click", function() {
			totalScore = ((totalScore)+(token))
			$("#totalScore").text(totalScore);
			console.log(totalScore);
			update()
		});

		startGame();
});

		window.onload = function() {
			$('#start').on('click',startGame());
		
	}

	var questionBank = [
	{	question: "What is Romeo's last name?",
		answerChoices: ["Demiterious","Montague","Camelot","Capulet"],
		correctAnswer: 1},
	
	{	question: "What is the capital of Texas?",
		answerChoices: ["Dallas","Houston","Austin","San Antonio"],
		correctAnswer: 2},
	
	{	question: "What year did Columbus discover America?",
		answerChoices: ["1492", "1503","1855","1962"],
		correctAnswer: 0
	}
	];



	var index = 0;					//tracks position in object array
	var userResponses = [];			//score counter
	var correct = 0;
	

	

//confirm connection between html and js files
	console.log("We see each other!");
	

//Load a question into the html <p> with class 'questions'

 	function loadQuestion() {

	 	//Check that there is another question to answer, if not, quit game
	 	if (index > questionBank.length-1) {
	 		gameOver();
	 		return;
	 	}

	 	//Load next question and its answers as tracked by var 'index'
	  	$('.questionSpot').html(questionBank[index].question);

	  	for (var i=0; i<questionBank[index].answerChoices.length; i++) {
			var newDiv = $('<div>');
			newDiv.html(questionBank[index].answerChoices[index]);
			$('.answerSpot').append(newDiv);
			//Set click listener to capture user's answer
			$('.answerSpot').on('click',checkAnswer(i));

			}
		
  	}



//Check if answer clicked is same as correct,  Check if this is the last question.  If true, empty
//the answerSpot and alert that game is done

	function checkAnswer (i) {

		index++;

		return function () {
			var givenAnswer = i;
			correctAnswer = questionBank[index].correctAnswer

			if(givenAnswer === correctAnswer) {
				correct++;

				$('.answerSpot').html("Correct!");
			} else {
				$('.answerSpot').empty();
				$('.answerSpot').html("Ooops.  Incorrect!");
			}

			timer.stop;
			timer.reset;
			timer.start;
			loadQuestion();

		}

	}



//Stop game and offer button choice to play again

	function gameOver() {
		$('.timer').empty();
		timer.reset;
		$('.questionSpot').empty();
		$('.answerSpot').empty();
		$('.answerSpot').html("Game Over<br>");
		$('#start').show();
	}

//Start game is option to play again when start button clicked
	function startGame() {
		index = 0;
		userResponses = null;
		correct = 0;
		loadQuestion();
		$('.countDown').html(timer.runTimer);
		$('#start').hide();
		
		
	}

//timer function starts with available seconds and counts down
//creating an object to handle timer

var timer = {

	time: 11,
	reset: function () {
		timer.time =11;
		$('.timer').html('00:11');
	},
	runTimer: function() {
		counter = setInterval(timer.decrement, 1000);
	},
	decrement: function () {
		//decrease seconds available by one
		timer.time--;

		//Get curretn time, pass into timeConverter function and save the result in var
		var converted = timer.timeConverter(timer.time);

		//Use the variable to display in html
		$('.timer').html(converted);

		if (timer.time <= 0) {
			timer.stop();
			timer.reset();
			index++;
			$('.timer').html("Time's Up!");
		}
		
	},
	timeConverter: function(t){
		var minutes = Math.floor(t/60);
		var seconds = t - (minutes*60);
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		if (minutes === 0) {
			minutes = "00";
		} else if (minutes < 10) {
			minutes= "0" + minutes;
		}
		return minutes + ":"+seconds;
	},
	stop: function () {
		clearInterval(counter);
	}

};





	


	






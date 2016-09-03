
	window.onload = function() {
		$('#start').on('click',timer.runTimer);
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



	var index = 0;			//tracks position in array
	

//confirm connection between html and js files
	console.log("We see each other!");

//Load a question into the html <p> with class 'questions'

 

  	$('.questionSpot').html(questionBank[index].question);



//Load the answer choices into html with div class=answerSpot

	for (var i=0; i<questionBank[index].answerChoices.length; i++) {
		var newDiv = $('<div>');
		newDiv.html(questionBank[index].answerChoices[i]);
		$('.answerSpot').append(newDiv);
	}



//Check if answer clicked is same as correct,  Check if this is the last question.  If true, empty
//the answerSpot and alert that game is done



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

		if (timer.time === 0) {
			timer.stop();
			$('.timer').html("Time's Up!");
			timer.reset();
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


	


	






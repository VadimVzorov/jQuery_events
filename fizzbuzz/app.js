function fizzBuzz(userNum) {
	var fizzBuzzArray = [];
	for(i=0; i<=userNum; i++){
		if (i%3 === 0 && i%5 === 0) {
			fizzBuzzArray.push('fizzbuzz');
		} else if (i%3 === 0) {
			fizzBuzzArray.push('fizz');
		} else if (i%5 === 0) {
			fizzBuzzArray.push('buzz');
		} else {
			fizzBuzzArray.push(i);
		};
	}
	return fizzBuzzArray;
}



function createHTML(array){
	array.forEach(function (x){
		var html = $('<div class="fizz-buzz-item"><span>'+x+'</span></div>'); 
		if (x === 'fizzbuzz' || x === 'fizz' || x === 'buzz'){
			html.addClass(x)
		};
		$('.js-results').append(html);
	})
}



	$("#btn").click(function(event) {
		var userNumber = $("#number-choice").val();
		event.preventDefault();
		createHTML(fizzBuzz(userNumber));
	})
	

/*

$("#number-chooser").submit(function(event) {
	var userNum = $("#number-choice").val();
	console.log(userNum);
	event.preventDefault();
	
	var fizzBuzzArray = [];

	for(i=0; i<=userNum; i++){
		if (i%3 === 0 && i%5 === 0) {
			fizzBuzzArray.push ('fizzbuzz');
		} else if (i%3 === 0) {
			fizzBuzzArray.push ('fizz');
		} else if (i%5 === 0) {
			fizzBuzzArray.push ('buzz');
		} else {
			fizzBuzzArray.push  (i);
		};
	}
	function createHTML(array){
		array.forEach(function makeHTML(x){
			var html = $('<div class="fizz-buzz-item"><span>'+x+'</span></div>'); 
			if (x === 'fizzbuzz' || x === 'fizz' || x === 'buzz'){
				html.addClass(x);
			};
			$('.js-results').append(html);
		})
	};
	createHTML(fizzBuzzArray);
})
*/

















/*

PUT CLASS BASED ON TEXT

	function appendClass() {
		var $parent = $(".parent");
		$parent.children().each(function(){
			var text = $(this).text();
			$(this).addClass(text);
		});
	




$('.js-results').append(
				
			);

'<div class="fizz-buzz-item"><span>'+i+'</span></div>'*/
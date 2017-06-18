$(function(){

	$('#risky-button').on('click', function(){

		var randIndex = Math.ceil(Math.random()*10000);
		

		
		var timeoutID = window.setTimeout(slowAlert, randIndex);
		


		//var cat = $('<img src="https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg">');

		//$('#cat-picture').append($(cat)).delay(8000000000);

	})

	function slowAlert() {
		var cat = $('<img src="https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg">');
	  	$('#cat-picture').append($(cat));
 	} 

})
window.onload = function(){



	var btn = document.getElementById("button");

	btn.onclick = function(event){
		event.preventDefault();
	 	
	 	var myNode = document.getElementById("outputFuzz");
		myNode.innerHTML = '';

		var fizzInput = document.getElementById("new-thing").value;
		

		for(i=1; i<=fizzInput; i++){
			var listElement = document.getElementById("outputFuzz");
			var newLi = document.createElement("li");

			var fizzBuzzPrint = document.createTextNode("FizzBuzz");
			var fizzPrint = document.createTextNode("Fizz");
			var buzzPrint = document.createTextNode("Buzz");
			var otherNumber =document.createTextNode(i);
			if(i%3==0 && i%5==0){
			  	listElement.appendChild(newLi);
				newLi.appendChild(fizzBuzzPrint);
			}else if(i%3==0){
				listElement.appendChild(newLi);
				newLi.appendChild(fizzPrint);
			}else if (i%5==0) {
				listElement.appendChild(newLi);
				newLi.appendChild(buzzPrint);
			}else {
				listElement.appendChild(newLi);
				newLi.appendChild(otherNumber);
			}
			
		}



	}

}
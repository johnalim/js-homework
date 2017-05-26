/*Given an array with these elements in it:

var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];
Write a function that returns the largest element in an array.

*/

//Question 1: Write a function that returns the largest element in an array.


var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];


function largestNumber(arr){
	var arrNumber = 0;
	
	for(var i = 0; i <=arr.length; i++){
			

			if(arr[i] > arrNumber){

				arrNumber = arr[i];
			}


	}


return arrNumber;

}

console.log(largestNumber(numberList));


//Question 2: Write a function that checks whether an element occurs in an array.



function present(checkEle, theArr){

for(var i = 0; i <=theArr.length; i++){
	if(theArr[i]===checkEle){

		return true;
	}
	}
		return false
}

console.log(present(100000 ,numberList));









//Question 3: Write a function that returns the elements on odd positions in an array. For the list given above, it would print 5, 20, 90



function odd (arrOdd){

	var newArray =[];
for (var i = 0; i < arrOdd.length; i++) {
    if(i % 2 !== 0) { 
        newArray.push(arrOdd[i]);
    }
}
return newArray;
};

console.log(odd(numberList));



//Question 4: Write a function that computes the running total of an array. (IE: What is the sum of all of the values in an array)




function runningTotal (run){
var runTotal =0;
for (var i = 0; i < run.length; i++) {

	runTotal+=run[i];



}
return runTotal;
}



console.log(runningTotal(numberList));




//Question 5: Write a function that tests whether a string is a palindrome. For example "racecar" would return true, but "cat" would not.



function checkPalindrome(strng) {
    var len = strng.length; 
    for ( var i = 0; i < len/2; i++ ) {
        if (strng[i] !== strng[len - 1 - i] ) {
            return false;
        }
    }
    return true;
}




console.log(checkPalindrome('11122111'));
console.log(checkPalindrome('corgis'));






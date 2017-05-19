
//question 1

for (i=99; i>=0;i--){

	if (i>2) {

		console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
	} else if(i==2){

		console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i-1 )+ " bottle of beer on the wall.");


	}else if (i==1) {

		console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around," + " no more bottles of beer on the wall.");


	}else{
		console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");


	};





	Math.floor(Math.random() * 99999) + 1


};



//question 2
var streetAddress = ["Paper St. Wilmington, Delaware 19886", "Ottery St Catchpole, Devon, England", "Rainey Street, Arlen, TX 73301", "Mammon Lane, Springfield, Idaho 83212"];
var x = Math.floor(Math.random() * 99999) + 11111;
var c = Math.floor(Math.random() * 100) + 1;
var random = streetAddress[Math.floor(Math.random() * streetAddress.length)];


if(x> Math.floor(Math.random() * 99999) + 11111){

console.log(x + " " + random+ ", apt" + c);

}else{

console.log(x + " " + random);

};


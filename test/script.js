//Write a function "getLength" that will count a length of any given array
function getLength(arr){
	return arr.length;
}
//Write a function "getArgsLength" that will get any number of arguments, and return a length of all arguments
function getArgsLength(){
	return arguments.length;
}
//Write a function "removeEmptyElements" that will delete all empty elements in array given to it, also check inside of it that the argument is an array
 function removeEmptyElements(arr){
 	var narr = [];
 	for (var i = 0; i < arr.length; i++) {
 		if(Array.isArray(arr[i])){
 			arr[i] = removeEmptyElements(arr[i]);
 		}else if(arr[i] === undefined){
 			narr = arr.slice(0, i).concat(arr.slice(i+1));
 			arr = narr;
 		}
 	}
 	return arr;
}

//alert(removeEmptyElements([33,[8, undefined, 3,["in", undefined]]]));

//Write a function "sortReverse" that will sort an array elements in revers order
function sortReverse(arr){
	return arr.sort(function(a,c){return c - a;});
}

//Create a function that will get a date as an argument (also check if it's a date), and return an object: { day: your_value, month: your_value, year: your_value }
function dateToObject(date){
	if(!(date instanceof Date)) return "It's not a date";
	var obj = {};
	obj.day = date.getDate();
	obj.month = date.getMonth() + 1;
	obj.year = date.getFullYear();

	return JSON.stringify(obj);;
}
// var d = new Date();
// alert(dateToObject(d));

//Write a function, that counts a number of object properties, and alerts the result number after 1 minute (also should works for arrays)
function objProps(obj){
	var num = 0;
	if(Array.isArray(obj)) num = obj.length;
	else{
		for (var key in obj) {
			num += 1;
		}
	}	
	var timer = setTimeout(function(){
		alert(num);
	}, 6000);
}
//Write a function that every 2 seconds will ask user for his name, and will stops only if he will enter your name, else will ask for a name again
function getUser(){	
	var name;
	var timer = setInterval(function(){
		name = prompt(name, "");
		if(name !== "") clearInterval(timer);
	}, 2000);		
}
//getUser();
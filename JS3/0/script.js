//1
function f1() {
	var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
	arr = arr.filter(function(n){
		return (typeof n == "string");
	});
	arr.reverse();
	return arr.join("");
}
console.log("//1");
console.log(f1());
//2
function isPal(string){
	var middle = Math.floor(string.length/2);
	string = string.toLowerCase();
	string = string.replace(/\s/g, "");
	for (var i = 0; i < middle; i++) {
		if(string[i] != string[string.length-i-1]) return false;
	}
	return true;
}
console.log("//2");
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
//3
function anClean(arr){

}
console.log("//3");
//4
function f4(){
	var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
	arr = arr.map(function(s){
		return s.split("").reverse().join("");
	})
	arr.reverse();
	return arr.join("");
}
console.log("//4");
console.log(f4());
//5
function sumInt(){
	var sum = 0;
	for (var i = 1; i < 101; i++) {
		sum += i;
	}
	return sum;
}
function sumEven(){
	var sum = 0;
	for (var i = 1; i < 101; i++) {
		if(i % 2 == 0){
			sum += i;
		}		
	}
	return sum;
}
console.log("//5");
console.log("sumInt: "+sumInt());
console.log("sumEven: "+sumEven());
//6
console.log("//6");
function callMe(num1, num2, num3){
	if(typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number"){
		console.error("Wrong arguments");
		return null;
	}
	var sum = num1+num2+num3;
	console.log("sum: "+sum);
	return sum;
}
callMe(5, 5, 10);
callMe(1, "2", 6);
//7
function callMeAgain(arr){
	arr = arr.sort(function(a, c){
		return a > c;
	});
	return arr;
}
console.log("//7");
console.log(callMeAgain(["e", "z", "a", "c", "n", "ac"]));
//8
function f8(){
	var arr = [
	   {name: "L1", age: 45},
	   {name: "L1", age: 20},
	   {name: "L1", age: 10},
	   {name: "L1", age: 78},
	   {name: "L1", age: 41},
	   {name: "L1", age: 10}
	];
	arr = arr.sort(function(a, c){
		return a.age > c.age;
	})
	return arr;
}
console.log("//8");
console.log(f8());
//9
function f9(){
	var arr = [
	   {name: "L1", age: 45},
	   {name: "L1", age: 20},
	   {name: "L1", age: 10},
	   {name: "L1", age: 78},
	   {name: "L1", age: 41},
	   {name: "L1", age: 10}
	];
	var name = prompt("Your name", "L1");
	var age = prompt("Your age", "10");
	var exist = false;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].name == name && arr[i].age == age){ 
			alert("Такой пользователь уже существует");
			exist = true;
			break;
		}
	}
	if(!exist){
		arr.push({name: name, age: +age});
	}
	arr = arr.sort(function(a, c){
		return a.age > c.age;
	})
	return arr;
}
console.log("//9");
console.log(f9());
//11
function f11(arr){
	var middle = Math.floor(arr.length/2);
	var str = "";
	for (var i = 0; i < middle; i++) {
		str += arr[i] + arr[arr.length-i-1];
		str += "-";
	}
	return str;
}
console.log(f11(['1', '2', '3', '4', '5', '6']));
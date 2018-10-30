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
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			if(translateAn(arr[i]) == translateAn(arr[j])){
				arr.splice(j,1);
				j--;
			}
		}
	}
	return arr;
}
function translateAn(str){	
		str = str.toLowerCase();
		str = str.split('');
		str = str.sort(function(a, c){
			return a > c;
		})
		str = str.join('');
	return str;
}
console.log("//3");
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
console.log(anClean(arr));

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
//console.log(f9());
//10
console.log("//10");
function count3(arr){
	var num = 0;
	for (var i = 0; i < arr.length; i++) {
		var res = (arr[i]+"").match(/3/g);
		num += res.length;
	}	
	return num;
}
console.log(count3([13, 35, 3, 443]));//4
//11
function f11(arr){
	var middle = Math.floor(arr.length/2);
	var odd = (arr.length%2 !== 0) ? true : false;
	var str = "";
	for (var i = 0; i < middle; i++) {
		if(odd && i+1 == middle){
			str += arr[i] + arr[middle] +arr[arr.length-i-1];
		}else{
			str += arr[i] + arr[arr.length-i-1];
		}		
		if(i + 1 !== middle){
			str += "-";
		}		
	}
	return str;
}
console.log("//11");
console.log(f11(['1', '2', '3', '4', '5', '6', '7']));//17-26-345
//12
console.log("//12");
function sumArrays(arr1, arr2){
	var size = Math.max(arr1.length, arr2.length);
	var narr = [];
	for (var i = 0; i < size; i++) {
		if(arr1[i] && arr2[i]){
			narr.push(arr1[i]+arr2[i]);
		}else if(arr1[i]){
			narr.push(arr1[i]);
		}else{
			narr.push(arr2[i]);
		}
	}
	return narr;
}
console.log(sumArrays([1,2,3,8],[4,5,6,8,22]));
//13
console.log("//13");
function deleteElement(arr, elem){
	var str = arr.join("");
	var regex = new RegExp(elem, 'g');
	str = str.replace(regex,"");
	arr = str.split("");
	return arr;
}
console.log(deleteElement([1,2,3,4,3,3], 3));
//14
console.log("//14");
function intersection(arr1, arr2, arr3){
	var narr=[];
	for (var i = 0; i < arr1.length; i++) {
		if(arr2.includes(arr1[i]) && arr3.includes(arr1[i])){
			narr.push(arr1[i]);
		}
	}
	return narr;
}
console.log(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));
//15
console.log("//15");
function  changeArr(arr){
	var narr = []; var j = 0;
	for (var i = 0; i < arr.length; i++) {
		do{
			narr.push(arr[i]);
			j++;
		}while(j < arr[i]);
		j = 0;
	}
	return narr;
}
console.log(changeArr([2, 3, 1, 4]));
//16
console.log("//16");
function addElements(arr, size, elem){
	var s = arr.length;
	for (var i = 0; i < size-s; i++) {
		arr.push(elem);
	}
	return arr;
}
console.log(addElements([1,2,3], 6, 0));
//17
console.log("//17");
function writeWithoutLoop(arr){
	var narr = arr.slice(0);
	var min1 = Math.min(...arr);
	arr.splice(arr.indexOf(min1), 1);
	var min2 = Math.min(...arr);
	arr.splice(arr.indexOf(min2), 1);
	var min3 = Math.min(...arr);
	arr.splice(arr.indexOf(min3), 1);
	console.log(min1+" "+min2+" "+min3);
	var narr = narr.filter(function(elem){
		return elem < 0;
	});
	console.log(narr.slice(0,3));
}
writeWithoutLoop([5, 7, -9, 16, 22, -4, 5, 13, -54, -234,13]);
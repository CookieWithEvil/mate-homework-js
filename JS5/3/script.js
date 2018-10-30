//1
var a = 10;var b = 3;
console.log("//1");
console.log(a%b);
//2
function f2(a, b) {
	if(a % b == 0) console.log("Делиться: " + (a/b));
	else{
		console.log("Делиться с остатком: "+ (a%b))
	}
}
console.log("//2");
f2(a,b);
//3
console.log("//3");
console.log(Math.abs(a - b));
a= -99; b = 6;
console.log(Math.abs(a - b));
//4
console.log("//4");
console.log((Math.sqrt(379)).toFixed());
console.log((Math.sqrt(379)).toFixed(1));
console.log((Math.sqrt(379)).toFixed(2));
//5
console.log("//5");
console.log(Math.round(Math.random() *100 + 1));
//6
console.log("//6");
//x^2 + 4x + 9 = 0;
function getX(){
	var D = (4*4 - 4*9);
	if(D < 0) return "Desn't have any real number solutions";
	var x1 = (-4 + Math.round(Math.sqrt(D)))/4;
	var x2 = (-4 - Math.round(Math.sqrt(D)))/4;
	return [x1, x2];
}
console.log(getX());
//7
function isPrime(n){
	for (var i = n-1; i > 1; i--) {
		if(n % i === 0) return false;
	}
	return true;
}
console.log("//7");
console.log("Is 19 prime? - "+isPrime(19));
//8
console.log("//8");
// why don't use here isPrime inside?
function returnPrimes(n){
	var primes = [];
	for (var i = n; i > 1; i--) {
		for (var j = i-1; j > 1; j--) {
			if(i % j === 0) break;
			else if(j-1 == 1 && i % j !== 0){
				primes.push(i);
			}
		}
	}
	primes.push(2);
	return primes;
}
console.log("primes: "+returnPrimes(1000));
//9
console.log("//9");
function randomArray(){
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.round(Math.random()*200 + 1));
	}
	return arr;
}
console.log(randomArray());
//10
console.log("//10");
var date = new Date();
console.log(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate());
// you should add +1 to the month
//11
console.log("//11");
var date = new Date("10/11/2009"),
    locale = "uk-UA",
    month = date.toLocaleString(locale, { month: "long" });
    console.log(month);
//12
console.log("//12");
function convertDate(){
	var date = new Date();
	var str = "";
	if(date.getHours() < 10){
		str += "0"+ date.getHours()+":";
	}else{
		str += date.getHours()+":";
	}
	if(date.getMinutes() < 10){
		str += "0"+ date.getMinutes()+":";
	}else{
		str += date.getMinutes()+":";
	}	
	if(date.getSeconds() < 10){
		str += "0"+ date.getSeconds()+" ";
	}else{
		str += date.getSeconds()+" ";
	}	
	if(date.getDate() < 10){
		str += "0"+ date.getDate()+".";
	}else{
		str += date.getDate()+".";
	}
	if(date.getMonth() < 9){
		str += "0"+ (date.getMonth()+1)+".";
	}else{
		str += (date.getMonth()+1)+".";
	}
	str += date.getFullYear();

	return str;
}
console.log(convertDate());
//13
console.log("//13");
var date13 = new Date(2015, 1, 7),
    locale = "uk-UA",
    weekday = date13.toLocaleString(locale, { weekday: 'long' });
    console.log(weekday);
//14
console.log("//14");
var date14 = new Date();
var d = (date14.getTime()/3600).toFixed(2);
console.log(d);
//15
console.log("//15");
var date15 = new Date();
date15.convert = function(seconds){
	var minute = 60, minutes=0;
	var hour = minute*60, hours=0;
	var day = hour*24, days=0;
	var str = "";
	do{
		if(seconds >= day){
			seconds -= day;
			days++;
		}else if(seconds >= hour){
			seconds -= hour;
			hours++;
		}
		else if(seconds >= minute){
			seconds -= minute;
			minutes++;
		}
	}while(seconds > minute);
	str = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
	return str;
}
console.log(date15.convert(100000));

//1
myname = "global";
function func() {
    console.log(myname);// undefined
    var myname = "local";
    console.log(myname);// local
}
func();
//2
/*For 'var': only the new function creates new scope for a variable*/
var a = 90100;
function someFunc(){
  if(false){
    var a = 1;
  } else {
    var b = 2;
  }
  console.log(b); // 2
  console.log(a); // undefined
}
someFunc();
//3
/*because it's function expression - the hoisting doesn't work for it and b=undefined*/
// a(); //ok
// b(); //error

// var b = function(){
//  alert( 'function b');
// }

// function a(){
//  alert( 'function a' );
// }
//4
var i = 0;

for (; i< 10; i ++) {
  console.log(i)//0,1,2,3,4,5,6,7,8,9
}
//5
function factorial(n){
	if(n == 1) return 1;
	if(n%2 == 0) return 2*n*factorial(n-1);
	return n*factorial(n-1);
}
//6
console.time();
console.log(factorial(6));
console.timeEnd();
//7
function returnRandomString(){
	var stringLength = Math.round(Math.random() * (20 - 4)) + 4;
	var str = "";
	for (var i = 0; i < stringLength; i++) {
		str += String.fromCharCode(Math.round(Math.floor(Math.random() * (122 - 48)) + 48));
	}
	var j = 0;
	do{
		if(+str[j] === +str[j]) break;
		else if((+str[j] !== +str[j]) && (j === stringLength-1) ){
			str += stringLength;
		}
		j++;
	}
	return (str.indexOf("_") > -1) ? str : (str+"_");
}
console.log(returnRandomString());












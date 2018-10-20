//1
function askName() {
	var res = prompt("Как ваше имя?", "Qqqq1");
	this.name = res;//Qqqq1
}
//askName();//this: Window
var object = {};
object.askName = function() {
	var res = prompt("Как ваше имя?", "Qqqq2");
	this.name = res;/*this:
						askName: ƒ ()
						name: "Qqqq2"
						__proto__: Object*/
};
//object.askName();//this: Object
//2
function sumTo(n){
	var sum = 0;
	for (var i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}
console.log(sumTo(4));
//3
function min(a,b){
	if(a > b) return a;
	else return b;
}
//4
var obj4 = {};
Object.defineProperty(obj4, 'number', {
  value: 9,
  writable: true,
  enumerable: false,
  configurable: true
});

Object.defineProperty(obj4, 'cantDelete', {
  value: "no",
  writable: true,
  enumerable: true,
  configurable: false
});
delete obj4.cantDelete;
Object.defineProperty(obj4, 'getDouble', {
  get: function(arg) { return arg/3; },
  set: function(arg) { arg *= 2; },
  enumerable: true,
  configurable: true
});
for(var key in obj4){
	console.log(key);
}
console.log(obj4);
//5
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];
function sortAge(arr){
	arr = arr.sort(function(a,c){
		return a.age > c.age;
	});
	return arr;
}
people = sortAge(people);
console.log(people[0].age) // 6
//6
/*i know about this method:(https://learn.javascript.ru/task/array-unique),
just wanted to write my own code
function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) )*/
function unique(arr){		
	for (var i = 0; i < arr.length-1; i++) {
		for (var j = 0; j < arr.length; j++) {
			if(arr[i] == arr[j]) arr.splice(j, 1);
		}
	}	

	return arr;
}
console.log(unique(["arr","arr","nn","nn","kk","nn", "kk"]));//
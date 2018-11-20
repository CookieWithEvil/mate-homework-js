//1
console.log("//1");
var animal = { };
var rabbit = { };

rabbit.__proto__ = animal;

animal.eat = function() {
    this.full = true;
};

rabbit.eat();//in rabbit
console.log(rabbit.hasOwnProperty('full'));
//2
console.log("//2");
var animal = { jumps: null };
var rabbit = { jumps: true };

rabbit.__proto__ = animal;

console.log( rabbit.jumps ); // true (1)

delete rabbit.jumps;
console.log( rabbit.jumps ); // null (2)

delete animal.jumps;
console.log( rabbit.jumps);  // undefined (3)
//3
console.log("//3");
var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
console.log(pockets.pen == 3);//trues
console.log( bed.glasses == 1);//trues
console.log(table.money == undefined);//trues

console.log(pockets.pen);
console.time();
console.log(bed.glasses);
console.timeEnd();
console.time();
console.log(head.glasses);//less time
console.timeEnd();
console.log(table.money);
//4
console.log("//4");
function Rabbit() { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit.eats);//true
// А если код будет такой? (заменена одна строка):

function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype.eats = false; // (*)

console.log(rabbit.eats);//false
// А такой? (заменена одна строка)

function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

// delete Rabbit.prototype.eats; // (*) undefined
delete Rabbit.eats;// true

console.log(rabbit.eats);//undefined
//5
console.log("//5");
function Rabbit() { }
Rabbit.prototype.test = function() { console.log(this); }

var rabbit = new Rabbit();

// __proto__ doesn't work in -IE10
rabbit.test();// ie9+ & chrome
rabbit.__proto__.test();// chrome
Rabbit.prototype.test();// ie9+ & chrome
Object.getPrototypeOf(rabbit).test();// ie9+ & chrome
//6
console.log("//6");
function Hamster() {  
	this.food = [];
	Hamster.prototype.found = function(something) {
	  this.food.push(something);
	};
}
// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log(speedy.food.length); // 2
console.log(lazy.food.length);   // 2 (!??)
//7
console.log("//7");
class Person{
	constructor(legs, arms, canWalk){
		this.legs = legs;
		this.arms = arms;
		this.canWalk = canWalk;
	}
}
class Programer extends Person{
	constructor(legs, arms, canWalk, language){
		super(legs, arms, canWalk);
		this.language = language;
	}
}
var J = new Programer(2,2,true,"js");
var C = new Programer(1,1,false,"c++");
console.log(J);
console.log(C);
//8
console.log("//8")
function Adder(startingValue){
	this.value = startingValue;
	Adder.prototype.addInput = function(){
		var res = prompt("Give a number", 5);
		this.value += +res;
	}
	Adder.prototype.showValue = function(){
		console.log(this.value);
	}
}
var adder = new Adder(1); // начальное значение 1
adder.addInput(); // прибавит ввод prompt к текущему значению2
adder.addInput(); // прибавит ввод prompt к текущему значению3
adder.showValue();
//9
console.log("//9")
function sum(num1) {
  var s = num1;
  function f(num2) {
    s += num2;
    return f;
  }
  f.toString = function() {
    return s;
  };
  return f;
}

console.log(sum(2)(5)(6)(7)(2)(3)(4));//29
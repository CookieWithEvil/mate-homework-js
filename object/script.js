//1
var counter = 0;
function Person(firstName, lastName, age){
	counter++;
	this.firstName = firstName;
	this.firstName = firstName;
	this.age = age;
	this.isCanWalk = function(){
		return true;
	}
	Person.countPersons = function(){
		return counter;
	}
}
var aa = new Person("aa","aa","100");
var qq = new Person("qq","qq","100");
var ee = new Person("ee","ee","100");
//2
function Car(canRide, wheels, model){
	this.canRide = canRide;
	this.wheels = wheels;
	this.model = model;
	this.toString = function(){
		console.log("Єто обьект "+this.name+"Он может ехать?"+this.canRide+"У него "+this.wheels+" колеса и у него модель "+this.model);
	}
}
//3
var ladder = {
	step: 0,
	up: function(){
		this.step++;
		return this;
	},
	down: function(){
		this.step--;
		return this;
	},
	showStep: function(){
		alert(this.step);
		return this;
	}
}

ladder.up().up().down().up().down().showStep();
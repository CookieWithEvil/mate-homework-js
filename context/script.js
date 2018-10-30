//1
console.log("//1");
function getName(){
	return this;
}
var obj = {
	name: ""
}

console.log(getName.call(obj, ""));
console.log(getName());
//2
console.log("//2");
console.log("call/apply")
// function getDoubled(number){
// 	return number*2;
// }
// function getDoubledTrippled(){
// 	var t = this;
// 	return getDoubled.call(this, this.number)*3;
// }
// var obj2 = {
// 	number: 5
// }
// console.log(getDoubledTrippled.apply(obj2, Object.keys(obj2)));
console.log("bind");
function getDoubled(){
	return this.number*2;
}
function getDoubledTrippled(){
	var f = getDoubled.bind(this);
	return f()*3;
}
var obj2 = {
	number: 5
}
var f = getDoubledTrippled.bind(obj2);
console.log(f());
//3
console.log("//3");
function City(name, population, country){
	this.name = name;
	this.population = population;
	this.country = country;
	this.getPopulation = function(){
		return this.population;
	}
	this.getCityName = function(){
		return this.name;
	}
	Object.defineProperty(this, 'AREA', {
	  enumerable: false,
	  configurable: false,
	  writable: false,
	  value: 'CITY'
	});
	this.addCitizen = function(){
		this.population++;
	}
}

var k = new City("K", 100000, "Uk");
delete k.AREA;
console.log(k.AREA);
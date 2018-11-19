// //0
// function isContextEqualTo(contextLink, currentContext) {
//    console.log(contextLink === currentContext);
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
    
//     this.getName = function () {
//        isContextEqualTo(window, this); // true
//        isContextEqualTo(user, this); // false
//        return this.name;
//     };
// }

// Person.getAge = function () {
//     isContextEqualTo(window, this); // false
//     return this.age;
// };

// var user = new Person("erer", 45);

// var getAge = Person.getAge;
// var getName = user.getName;

// console.log(getAge()); //  в каком контексте вызана функция? person
// console.log(getName()); //  в каком контексте вызана функция? user
// console.log(user.getName()); //  в каком контексте вызана функция? user

// Person.getAge = function() {
//     isContextEqualTo(Person, this); // true
//     return this.name;
// }

// user.getAge = getAge;
// console.log(user.getAge()); //  в каком контексте вызана функция? person
//1
console.log("//1");
function getName(){
  console.log(this.name);
  return this.name;
}
var name = "nnnnn";
var obj = {
  name: "mmmmm"
}

getName();
getName.call(obj);
//2
console.log("//2");
function getDoubled(){
  return this.num * 2;
}
function getDoubledTrippled(){
  return getDoubled.call(this) * 3;
}
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
  Object.defineProperty(user, "AREA", {
    value: "City",
    writable: false, 
    configurable: false 
  });
  this.addCitizen = function(){
    ++this.population;
  }
}
//4
console.log("//4");
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
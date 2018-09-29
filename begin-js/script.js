//1
var str = "Have a good day!";
console.log(str);
//2
var age = 25;
console.log(age);
age = undefined;
//3
var info = {
	name: null,
	age: null
};
var name = "Qwerty"
info.name = name;
console.log(info.name);
delete info.name;
console.log(name);
//4
var customArray = [1,2,3];
console.log(customArray);
customArray = 0;
console.log(customArray);
//5
var student = "Mary";
console.log(student);
student = "Mary Akifieva";
console.log(student);
//6
var complex = [];
complex[0] = "My name is:";
complex[1] = 7;
complex[2] = null;
complex[3] = info;
console.log(complex[2]);
//7
var complexObj = {};
complexObj.name = "Mary";
complexObj.age = 21;
complexObj.friends = ["H", "S", "K"];
complexObj.soc_links = {facebook: "facebook.com/acc", google: "google.com/acc"};
console.log("My name is "+complexObj.name+".I am "+complexObj.age+" old. I have a lot of friends, but the best one is: "+complexObj.friends[0]+". You can find me on facebook: "+complexObj.soc_links.facebook+" or on goole groups: "+complexObj.soc_links.google);
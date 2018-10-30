//1
console.log("//1");
console.log(('aaa@bbb@ccc').replace(/@/g, "!"));
//2
console.log("//2");
console.log((('aaa bbb ccc').slice(0, 4)).concat(('aaa bbb ccc').slice(7)));
console.log((('aaa bbb ccc').substr(0, 4)).concat(('aaa bbb ccc').substr(7, 4)));
console.log((('aaa bbb ccc').substring(0, 4)).concat(('aaa bbb ccc').substring(7)));
//3
//var date = new Date('2025-12-31');
console.log("//3");
var date = '2025-12-31';
var date = date.split("-");
date = [date[2], date[1], date[0]].join("/");
console.log(date);
//4
console.log("//4");
console.log(("js").toUpperCase());
//5
console.log("//5");
console.log(('я учу javascript!').length);
//6
console.log("//6");
function cutString(str, n) {
	if(str.length > n){
		str = str.slice(0, n);
		return str+"...";
	}
	return str;
}
console.log(cutString(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 10));
//7
console.log("//7");
console.log(('я учу javascript!').split(" "));
//8
console.log("//8");
console.log(['я', 'учу', 'javascript', '!'].join("+"));
//9
console.log("//9");
var str = "sit amet, consectetur";
str = str[0].toUpperCase() + str.slice(1);
console.log(str);
//10
console.log("//10");
var str = "ipsum dolor sit amet, consectetur adipisicing";
str = str.split(" ");
for (var i = 0; i < str.length; i++) {
	str[i] = str[i][0].toUpperCase() + str[i].slice(1);
}
str = str.join(" ");
console.log(str);
//11
console.log("//11");
function transformStr(str){
	str = str.split("_");
	for (var i = 1; i < str.length; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].slice(1);
	}
	str = str.join("");
	return str;
}
console.log(transformStr("var_test_text"));
//12
console.log("//12");
function transform(str){
	str = str.split("");
	for (var i = 1; i < str.length; i++) {
		if(str[i].toUpperCase() === str[i]){
			var char = "_"+str[i].toLowerCase();
			str.splice(i, 1, char);
		}
	}
	str = str.join("");
	return str;
}
console.log(transform("varTestText"));
//13
console.log("//13");
function divide(str){
	str = str.split("");
	for (var i = 1; i < str.length; i++) {
		if(i % 3 === 0){
			str.splice(str.length-i, 0, " ");
		}
	}
	str = str.join("");
	return str;
}
console.log(divide('12345678'));
// numbers should divide by 3 characters so the result should be  '12 345 678' not '1 23 45 678'

//1
var r = '9' + 0;//'90'
console.log(r);
var r = 9 + '0';//'90'
console.log(r);
var r = 4 + 9;//13
console.log(r);
var r = null + 7;//7
console.log(r);
var r = '6' + null;//'6null'
console.log(r);
var r = '6' + [];//6
console.log(r);
var r = '6' + null;//'6null'
console.log(r);
//2
/*2/3 + 1 + 1/3 == 2*/ // false
console.log(2/3 + 1 + 1/3 == 2); // false
// because the representation of floating points in JavaScript follows the format as specified in IEEE-754.
// When counting, numbers are translated to binary system and 1/3 is an endless
// fraction binary system, so when translated back — it's endless either.

//3
var r = 6 && 0 && 7;//0
console.log(r);
var r = -9 && -8;//-8
console.log(r);
var r = 6 && 0 && 7;//0
console.log(r);
var r = "string" && 0;//0
console.log(r);
var r = [] && {} && 7;//7
console.log(r);
var r = [] || 7;//[]
console.log(r);
var r = {} || 0;//{}
console.log(r);
var r = false || true;//true
console.log(r);
var r = "2" > "3";//false
console.log(r);
var r = "ab" <= "fg";//true
console.log(r);
var r = "2k" <= "8l";//true
console.log(r);
var r = "2" != 2;//false
console.log(r);
var r = "2" !== 2;//true
console.log(r);
// var r = (++2) + 2;//5
// console.log(r);
// var r = (++2) + (2--);//5
// console.log(r);
// var r = (1++) - (2--);//-1
// console.log(r);
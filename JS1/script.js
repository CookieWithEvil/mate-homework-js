//PART 1
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

//PART 2
//1
var t = {
    y: 9
};
var number = t.y;
number += 5;
console.log(t.y, number); // 9, 14
//2
var t = {
    y: [1, 3, 5, 7]
};
var number = t.y[2];//5
for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;//2, 4, 6, 8
}
console.log(number); // 5
//3
var t = 9;
var obj = {
    number: t
};
obj.number++;
console.log(obj.number, t);//10, 9
//4
var object1 = {
    str: {
        name: "L"
    }
};

var obj = {
    number: 67
};

object1.str.number = obj.number;//67
obj.number++;//68

var str = object1.str;//str: {name: "L", number: 67}

object1.str.name = "Kolya";

console.log(str, object1.str.number);//str: {name: "Kolya", number: 67}, 67
//5
var object1 = {
    obj: {
        number: 0
    }
};

var object2 = {
    str: "Kolya"
};

object2.str.number = object2.str.number;//undefined

object2.str.number++;//NaN

console.log(object2.str.number);//undefined (i don't know why)

console.log(++object2.str.number);//NaN
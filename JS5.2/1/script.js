//1
function User(fullName) {
	this.fullName = fullName;
	Object.defineProperty(this, 'firstName', {
	    get: function() {
	      let f = (this.fullName).slice(0, (this.fullName).indexOf(' '));
	      return f;
	    },
	    set: function(name) {
	    	this.fullName = name + ' ' +this.lastName;
	    }
    });
    Object.defineProperty(this, 'lastName', {
	    get: function() {
	      let s = (this.fullName).slice((this.fullName).indexOf(' ')+1);
	      return s;
	    },
	    set: function(surname) {
	    	this.fullName = this.firstName + ' ' + surname;
	    }
    });
}

var vasya = new User('cxzcz zxcxczx');
console.log(vasya.lastName);
vasya.lastName = 'jfdjfd';
vasya.firstName = 'jfdjfd';
console.log(vasya.firstName);
//2
function Calculator(){
	this.operations = [
		{
			symbol: '+', 
			operation: function(num1,num2){
				return num1 + num2;
			}
		}
	]
	this.addMethod = function(name, func){
		let newOperation = {};
		newOperation.symbol = name;
		newOperation.operation = func;
		this.operations.push(newOperation);
	}
	this.calculate = function(str){
		str = str.split(" ");
		let result;
		for (var i = 0; i < this.operations.length; i++) {
			if(str[1] === this.operations[i].symbol){
				result = this.operations[i].operation(+str[0], +str[2]);
				break;
			}
		}
		return result;
	}
}

var powerCalc = new Calculator;
console.log( powerCalc.calculate('3 + 7') ); // 10
powerCalc.addMethod('*', function(a, b) {
  return a * b;
});
powerCalc.addMethod('/', function(a, b) {
  return a / b;
});
powerCalc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result ); // 8
function f1() {
	let ul = document.createElement('ul');
	ul.className = `task1`;
	ul.innerHTML = `<h4>${ul.className}</h4>`;
	for (var i = 0; i < 16; i++) {
		if(i % 2 == 0){ ul.innerHTML += `<li> ${i} is even</li>`;}
		else {ul.innerHTML += `<li> ${i} is odd</li>`;}
	}
	document.body.appendChild(ul);
}
//2
function f2() {
	let ul = document.createElement('ul');
	ul.className = `task2`;
	ul.innerHTML = `<h4>${ul.className}</h4>`;
	for (var i = 1; i < 101; i++) {
		if((i % 3 == 0) && (i % 5 == 0)){
			ul.innerHTML += `<li>FizzBuzz</li>`;
		}else if(i % 3 == 0) {
			ul.innerHTML += `<li>Fizz</li>`;
		}else if(i % 5 == 0){
			ul.innerHTML += `<li>Buzz</li>`;
		}else{
			ul.innerHTML += `<li>${i}</li>`;
		}
	}
	document.body.appendChild(ul);
}
//3
function f3(a, c) {
	let div = document.createElement('div');
	// var primes = getPrimes(Math.min(a, c));	
	div.className = `task3`;
	div.innerHTML = `<h4>${div.className}</h4>`;	
	var gcd = 1;	
	if(Math.max(a, c)%Math.min(a, c) === 0) gcd = Math.min(a, c);
	else{
		for (var i = Math.min(a, c); i > 1; i--) {
			while(a % i == 0 && c % i == 0){
				a /= i; c /= i;
				gcd *= i;
			}
		}
	}	
	div.innerHTML += `GCD: ${gcd}`;
	document.body.appendChild(div);
}
// function getPrimes(num){//function returns all primes <= num
// 	var primes = [2,];
// 	for(var i = 1; i < num+1; i++){
// 		for (var j = i-1; j >= 1; j--) {
// 			if(i % j == 0){ 
// 				break;
// 			}else if((i % j != 0) && (j - 1 == 1)){
// 				primes.push(i);
// 			}
// 		}
// 	}
// 	return primes;
// }
//4
function f4() {
	let ul = document.createElement('ul');
	ul.className = `task4`;
	ul.innerHTML = `<h4>${ul.className}</h4>`;
	var sum = 0;
	for (var i = 1; i < 1001; i++) {
		if((i%3==0) || (i%5==0)) sum += i;
	}
	ul.innerHTML += `Sum: ${sum}`;
	document.body.appendChild(ul);
}
//5
function f5() {
	console.log("numbers that divide to 5 and 3 between 10-90:");
	for (var i = 10; i < 91; i++) {
		if((i%3==0) && (i%5==0)) console.log(i);
	}
}
//6
function f6() {
	console.log("odd numbers between 70-11 :");
	for (var i = 70; i > 10; i--) {
		if(i % 2 !== 0) console.log(i);
	}
}
//7
function f7() {
	console.log("even numbers that divide to 2 and 3 from range 78-13 :");
	for (var i = 78; i > 12; i--) {
		if((i % 2 == 0) && (i % 3 == 0)) console.log(i);
	}
}

f1();
f2();
f3(24, 18);//6
f4();
f5();
f6();
f7();
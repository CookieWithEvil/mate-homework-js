function f1() {
	let ul = document.createElement('ul');
	ul.className = `task1`;
	ul.innerHTML = `<h4>${ul.className}</h4>`;
	for (var i = 1; i < 51; i++) {
		ul.innerHTML += `<li> ${i} </li>`;
	}
	document.body.appendChild(ul);
}
function f2() {
	const arr = [1, 2, 3, 4, 5];
	let ul = document.createElement('ul');
	ul.className = `task2`;
	ul.innerHTML = `<h4>${ul.className}</h4>`;
	for (var i = 0; i < arr.length; i++) {
		ul.innerHTML += `<li> ${arr[i]} </li>`;
	}
	document.body.appendChild(ul);
}
function f3() {
	const arr = [2, 3, 4, 5];
	let c = 1;//future composition
	let div = document.createElement('div');
	div.className = `task3`;
	div.innerHTML = `<h4>${div.className}</h4>`;
	div.innerHTML += `Composition: `;	
	for (var i = 0; i < arr.length; i++) {
		c *= arr[i];
	}
	div.innerHTML += `${c}`;
	document.body.appendChild(div);
}
function f4() {
	let obj = {'Минск':'Беларусь', 'Москва':'Россия', 'Киев':'Украина'};
	let ul = document.createElement('ul');
	ul.className = `task4`;
	ul.innerHTML = `<h4>${ul.className}</h4>`;
	for (key in obj) {
		ul.innerHTML += `<li> ${key} - это ${obj[key]}</li>`;
	}
	document.body.appendChild(ul);
}
function f5() {
	let num = 1000;
	let i = 1;
	let div = document.createElement('div');
	div.className = `task5`;
	div.innerHTML = `<h4>${div.className}</h4>`;
	do{
		num /= 2;
		i++;
	}while(num >= 50);
	div.innerHTML += `The number will be: ${num} <br /> And iterations: ${i}`;
	document.body.appendChild(div);
}
function f6() {
	const arr = [2, 5, 9, 15, 0, 4];
	let c = 1;//future composition
	let div = document.createElement('div');
	div.className = `task6`;	
	div.innerHTML = `<h4>${div.className}</h4>`;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] > 3 && arr[i] < 10){
			div.innerHTML += `${arr[i]}`;
		}
	}	
	document.body.appendChild(div);
}
function f7() {
	let ul = document.createElement('ul');
	ul.className = `task7`;
	ul.innerHTML = `<h4>${ul.className}</h4>`;
	var date = new Date(),
    locale = "en-us",
    month = date.toLocaleString(locale, { month: "long" });
    var m;
	for (var i = 0; i < 12; i++) {
		date.setMonth(i);
		m = date.toLocaleString(locale, { month: "long" });
		if(m === month){
			ul.innerHTML += `<li><b>${m}</b></li>`;
		}else{
			ul.innerHTML += `<li>${m}</li>`;
		}				
	}
	document.body.appendChild(ul);
}

f1();
f2();
f3();
f4();
f5();
f6();
f7();
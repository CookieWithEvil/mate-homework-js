var url = "http://localhost:5000/people";

let people = {}
//check if input values valid
document.querySelector("#name").addEventListener("blur", function(event){
    if(event.target.value == ""){
      event.target.style.backgroundColor = "pink";
    }else{
      event.target.style.backgroundColor = "";
    }
});
document.querySelector("#surname").addEventListener("blur", function(event){
    if(event.target.value == ""){
      event.target.style.backgroundColor = "pink";
    }else{
      event.target.style.backgroundColor = "";
    }
});
document.querySelector("#tel").addEventListener("blur", function(event){
  if(/((\d{3}-){2}\d{2}-\d{2})/.test(event.target.value)){
    event.target.style.backgroundColor = "";
  }else{
    event.target.style.backgroundColor = "pink";
  }
});

//submit
document.querySelector("form").addEventListener("submit", function(event){
  postNewUser(url); 
  docuent.querySelector("users").innerHTML = "";
  displayUsers();
  event.preventDefault();
});
//collect input value
function collectInputs(){
  let user = {};  
  user.name = document.getElementById("name").value;
  user.lastname = document.getElementById("surname").value;
  user.phone = document.getElementById("tel").value;
  user.agree = document.getElementById("agreed").checked;  
  return user;
}

function postNewUser(url){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        (people.users).push(collectInputs());
    }
  }
  let id = people.users.length;
  xhr.send(JSON.stringify({ "id": ++id, "name": people.users[id]["name"], "lastName": people.users[id]["lastName"],"phone":people.users[id]["phone"],"agree":people.users[id]["agree"]}));
}

function getUsers(url){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send(JSON.stringify({'id': 2,'name': 'FF'}));
  if (xhr.status != 200) {
    console.log("Error " + xhr.status + ': ' + xhr.statusText ); 
  } else {
    console.log( xhr.responseText ); 
    let responseText = JSON.parse(xhr.responseText);
    people.users = responseText.list;
    console.log(people) ;
  }
}

function displayUsers(){
  for (var i = 0; i < people.users.length; i++) {
    let li = document.createElement("LI");
    li.innerHTML = `${people.users[i]["name"]} ${people.users[i]["lastName"]}`;
    document.querySelector("#users").appendChild(li);
  }   
};
//onload
getUsers(url);
displayUsers();
<<<<<<< HEAD
var conditions_request = new XMLHttpRequest();
conditions_request.open('GET', 'https://api.infermedica.com/v2/symptoms', true);
conditions_request.setRequestHeader("App-Id","00ed7389")
conditions_request.setRequestHeader("App-Key","7f3e634c66e7f5a734a549f7cc4e4683")
conditions_request.setRequestHeader("Content-Type","application/json")
// Send request
conditions_request.send();
conditions_request.addEventListener("load", transferComplete);

var data = [];

function transferComplete() {
  data = JSON.parse(conditions_request.responseText);

  populateConditions(data);
}

function populateConditions(data) {
  var conditions_list = document.getElementById('myInput');
  var y = document.getElementById('myUL');

  //create an html element for each condition
  data.forEach(function(symptom) {
    console.log(symptom);
    var node = document.createElement("li");
    node.className = "form-check";
    node.innerHTML = symptom.name;
    y.appendChild(node);
  });

}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
=======
var conditions_request = new XMLHttpRequest();
conditions_request.open('GET', 'https://api.infermedica.com/v2/symptoms', true);
conditions_request.setRequestHeader("App-Id","00ed7389")
conditions_request.setRequestHeader("App-Key","7f3e634c66e7f5a734a549f7cc4e4683")
conditions_request.setRequestHeader("Content-Type","application/json")
// Send request
conditions_request.send();
conditions_request.addEventListener("load", transferComplete);

var data = [];

function transferComplete() {
  data = JSON.parse(conditions_request.responseText);

  populateConditions(data);
}

function populateConditions(data) {
  var conditions_list = document.getElementById('myInput');
  var y = document.getElementById('myUL');

  //create an html element for each condition
  data.forEach(function(symptom) {
    console.log(symptom);
    var node = document.createElement("li");
    node.className = "form-check";
    node.innerHTML = symptom.name;
    y.appendChild(node);
  });

}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
>>>>>>> f84a76e054756ee7701da5ced856a279b4cc4bff

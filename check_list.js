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
  var y = document.getElementById('symptoms');
  //create an html element for each condition
  data.forEach(function(symptom) {
    var div = document.createElement("DIV");
    div.className = "form-check";
    div.setAttribute("id", symptom.common_name);
    var input = document.createElement("INPUT");
    input.className = "form-check-input";
    input.setAttribute("name", "symptoms[" + symptom.common_name + "]");
    input.setAttribute("type", "checkbox");
    input.setAttribute("value", symptom.id);
    var label = document.createElement("LABEL");
    label.className = "form-check-label";
    label.setAttribute("for", symptom.common_name);
    label.innerHTML = symptom.common_name;
    div.appendChild(input);
    div.appendChild(label);
    y.appendChild(div);
  });
}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    form = document.getElementById("symptoms");
    divs = form.getElementsByTagName("div");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < divs.length; i++) {
        if (divs[i].id.toUpperCase().indexOf(filter) > -1) {
            divs[i].style.display = "";
        } else {
            divs[i].style.display = "none";
        }
    }
}

document.getElementById("myForm").addEventListener("submit", function(e){
  console.log('submitting!');
    e.preventDefault();
    var formData = $('form').serializeJSON();
    getDiagnosis(formData);
});


function getDiagnosis(formData) {
  console.log(formData);
  var sex = Object.keys(formData.sex)[0];
  var age = formData.age;
  var evidence = [];

  Object.values(formData.symptoms).forEach(function(sym) {

    var obj = {}
    obj["id"] = sym;
    obj["choice_id"] = "present";
    obj["initial"] = true;
    evidence.push(obj);
  });


  var dig = {
      'sex':  sex,
      'age':  age,
      'evidence' : evidence,
    }
    var jsondig= JSON.stringify(dig)
  var diagnose_request = new XMLHttpRequest();
  diagnose_request.open('POST', 'https://api.infermedica.com/v2/diagnosis', true);
  diagnose_request.setRequestHeader("App-Id","00ed7389");
  diagnose_request.setRequestHeader("App-Key","7f3e634c66e7f5a734a549f7cc4e4683");
  diagnose_request.setRequestHeader("Content-Type","application/json");
  diagnose_request.send(jsondig);
  diagnose_request.addEventListener("load", dxComplete);

  function dxComplete() {
    dx_data = JSON.parse(diagnose_request.responseText);
    var name = dx_data["conditions"][0]["common_name"];
    var probability = dx_data["conditions"][0]["probability"];
    console.log(name);
    console.log(probability);
    document.getElementById("diagnosis").innerHTML ="You probably have: "+ name;
    document.getElementById("prob").innerHTML ="Probability: " + probability*100+" %";

    //access the diagnosis ID div
    //add the results as innerHTML
  }

}
function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'none')
          e.style.display = 'block';
       else
          e.style.display = 'none';
    }

function show(id) {
  var e = document.getElementById(id);
  e.style.display = 'block';
}

    // (function () {
    //     var old = console.log;
    //     var logger = document.getElementById('log');
    //     console.log = function () {
    //       for (var i = 0; i < arguments.length; i++) {
    //         if (typeof arguments[i] == 'object') {
    //             logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
    //         } else {
    //             logger.innerHTML += arguments[i] + '<br />';
    //         }
    //       }
    //     }
    // })();
//Create Labels
var x = document.getElementById("myForm");
toggle_visibility('symptoms');

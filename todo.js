let username = document.getElementById("Username");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");

function validate(callback){
    if(username.value=="admin" && pwd.value==12345){
        return true;
    }
    else{
        return callback();
    }
}
function loginError(){
  alert("Invaid Username or Password");
  return false;
}




function loadDoc() {
  console.log("here")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       var resp = JSON.parse(this.responseText)
    
      var demo = document.getElementById("demo");
      // demo.innerHTML = "";
      var demo="";
      for(var i =0; i<resp.length; i++){
        var currentRecord = resp[i];
        demo += "<tr><td>"+currentRecord.id+"</td><td>"+currentRecord.title+"</td><td><input type='checkbox' name='test' value="+currentRecord.completed+"></td></tr>"
    }
    document.getElementById("tableBody").innerHTML = demo;
}
}
       var count =0;
    
        $('body').on('change','input[type=checkbox]',function(e){
            console.log("check box is checked");
            var count = $("[type='checkbox']:checked").length;
            var promise =new Promise(function(resolve,reject){
              
              if(count===5){
              
              resolve("Congrats.5 Tasks have been successfully Completed ");
              }
            })
            promise
            .then(function(s){
              alert(s);
            })
            });
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
  }

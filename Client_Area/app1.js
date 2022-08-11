// firebase links starts

var firebaseConfig = {
    apiKey: "AIzaSyCZBWnYlII7deGcr8auHxi6ukMbuKki0i0",
    authDomain: "the-big-fish-b3445.firebaseapp.com",
    databaseURL: "https://the-big-fish-b3445-default-rtdb.firebaseio.com",
    projectId: "the-big-fish-b3445",
    storageBucket: "the-big-fish-b3445.appspot.com",
    messagingSenderId: "44348757949",
    appId: "1:44348757949:web:cf2a3df67b1b4a6060e4d4"
  };
  
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
// firebase links ends

var code = "staff_of_tbf";


function check(){
    if(document.getElementById("code_input").value === code){
        document.getElementById("h3_success").innerHTML = "The code is correct.<br>Access granted.";
        document.getElementById("h3_fail").innerHTML = ""
        // window.location="https://the-big-fish-b3445-default-rtdb.firebaseio.com";
        window.location="client.html"
    }
    else{
        document.getElementById("h3_fail").innerHTML = "The code is incorrect.<br>Access denied."
    }
}

function addOrder(){
    var ordername = document.getElementById("order_name").value;
    
    firebase.database().ref("/").child(ordername).update({
          purpose:"adding order manually"
    });

    localStorage.setItem("ordername", ordername);
    window.location = "check_order.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    order_names = childKey;
   //Start code
   console.log("order - " + order_names);
   console.log(order_names);


   row = "<div class='order_name' id=" + order_names + " onclick='redirecttoordername(this.id)'>" + order_names + "</div><hr>";
   document.getElementById("output").innerHTML += row; 


   //End code
   });});}

getData();

function redirecttoordername(name){
    console.log(name);
    localStorage.setItem("ordername", name);
    window.location="check_order.html";
}









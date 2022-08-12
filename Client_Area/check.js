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

var ordername = localStorage.getItem("ordername");

document.getElementById("heading").innerHTML = ordername;

function getData() { firebase.database().ref("/"+ordername).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    order_data = childData;

    uname = order_data["name"];
    ucontact = order_data["phone_no"];
    uemail = order_data["email"];
    uaddress = order_data["address"];
    uorder = order_data["order"];
    uquantity = order_data["quantity"];

    
    row1 = "<div class='container' id='inf'>  <div class='row' id='inf_row'>   <div class='col'>Name : </div> <div class='col'>"+uname+"</div>";
    row2 = "<div class='container' id='inf'>  <div class='row' id='inf_row'>   <div class='col'>Contact : </div> <div class='col'>+91 "+ucontact+"</div>";
    row3 = "<div class='container' id='inf'>  <div class='row' id='inf_row'>   <div class='col'>E - Mail : </div> <div class='col'>"+uemail+"</div>";
    row4 = "<div class='container' id='inf'>  <div class='row' id='inf_row'>   <div class='col'>Address : </div> <div class='col'>"+uaddress+"</div>";
    row5 = "<div class='container' id='inf'>  <div class='row' id='inf_row'>   <div class='col'>Order : </div> <div class='col'>"+uorder+"</div>";
    row6 = "<div class='container' id='inf'>  <div class='row' id='inf_row'>   <div class='col'>Quantity : </div> <div class='col'>"+uquantity+"</div>";

    document.getElementById("output").innerHTML = row1 + row2 + row3 + row4 + row5 + row6;

    console.log(firebase_message_id);
    console.log(order_data);
//start code

//End code
 } });  }); }

 getData();

//  function open_order() {
//   if ("Amaze Shoppe Wooden Table (Item Code - 0001)" === uorder) {
//     window.location="";
//   }
//  }
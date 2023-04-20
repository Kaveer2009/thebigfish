// function no_problem(){
//     var order = "0001"
//     localStorage.setItem("order-name", order);
//     console.log(order);
// }

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

var Order_head = "";
var Order_head_set = "";


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

function buy_0001(){
    Order_head = "Amaze Shoppe Wooden Table (Item Code - 0001)";
    localStorage.setItem("Order_name", Order_head);
    // Order_head_set = localStorage.getItem("Order_name");
    
}

function buy_0002(){
  Order_head = "example(Item Code - 0002)";
  localStorage.setItem("Order_name", Order_head);
  // Order_head_set = localStorage.getItem("Order_name");
  
}




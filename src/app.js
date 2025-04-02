import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function ExcuseGenerator(excuse1){
    
    return excuse1[Math.floor(Math.random() * who.length)]
  
  }


    let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird ','My dad '];
    let excuseWho = ExcuseGenerator(who);
    let action = ['ate ', 'lost ', 'crushed ', 'broke ', 'close '];
    let excuseAction = ExcuseGenerator(action);
    let what = ['my homework ', 'my phone ', 'the car ','the house ','my bedroom '];
    let excuseWhat = ExcuseGenerator(what);
    let when = ['before the class', 'while she was at the church', 'while I was exercising', 'during my lunch', 'while I was praying'];
    let excuseWhen = ExcuseGenerator(when);


  
   document.getElementById("excuse").innerHTML = excuseWho + excuseAction + excuseWhat + excuseWhen;
   
};

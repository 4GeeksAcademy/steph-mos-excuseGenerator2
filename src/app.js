import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function randomArrayElement(array){
    
    return array[Math.floor(Math.random() * array.length)]
  
  }


    let who = ['The dog', 'My grandma', 'The mailman', 'My bird','My dad'];
    let excuseWho = randomArrayElement(who);
    let action = ['ate', 'lost', 'crushed', 'broke', 'close'];
    let excuseAction = randomArrayElement(action);
    let what = ['my homework', 'my phone', 'the car','the house','my bedroom'];
    let excuseWhat = randomArrayElement(what);
    let when = ['before the class', 'while she was at the church', 'while I was exercising', 'during my lunch', 'while I was praying'];
    let excuseWhen = randomArrayElement(when);


  
    
   document.getElementById("excuse").innerHTML = excuseWho + " " + excuseAction+ " " + excuseWhat+ " " + excuseWhen;
   
};

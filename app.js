'use strict'
const switcher = document.querySelector('.btn');
 switcher.addEventListener('click', function() {
    
    var className = document.body.className;
    if(className == "fadeWhite") {
        
        document.body.className="fadeBlack";
        
        document.getElementById("btn").textContent = "Dark";

    }
    else {
        
        document.body.className="fadeWhite";
        document.getElementById("btn").textContent = "Light"; 

    }


});
function run(){
    // 8887 is the port number you have launched your serve
    var URL = "http://127.0.0.1:8887/hunie.jpg";
 
    window.open(URL, null);
 
 }
 run();




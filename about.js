'use strict'
const input = document.querySelector("input");
 input.addEventListener('click', function(){
    var x = document.getElementById("hidden");
    var g = document.getElementById("a");
    alert(x.className)
    if(x== "hidden") {
        x.className="expand"
        g.className="anim";
        
    }
    if(x.className=="expand"){
        x.className="hidden"
        g.className="rev";

    }
    else{
        g.className="anim";
        x.className="expand";

    }
    });




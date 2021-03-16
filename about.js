'use strict'
const input = document.querySelector("input.aboutme");
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
        let p = document.getElementsByTagName('p');
        let myText;
        
        for (i = 0; i < p.length; i++) {
          if (p[i].innerHTML == "*I'm a full time CS student dev new to web design and data structures seeking to improve my skills in all languages") {
            // console.log(myText, p[0].innerHTML);
            myText = p[i];
            break;
          }
        }
        
        myText.removeAttribute("hidden"); 
    }
    else{
        g.className="anim";
        x.className="expand";

    }
    });



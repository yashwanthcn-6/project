let row1=document.querySelector(".sub1");
let row2=document.querySelector(".sub2");
let row3=document.querySelector(".sub3");


let b=document.querySelector("body");
let h1=document.querySelector("h1");

let a=document.querySelector("button")

let conts=document.querySelectorAll(".cont");
let change="x";

    conts.forEach((on) => {
        
        on.addEventListener("click", () => {
            let p = on.querySelector("p.res");
            
            // if cell already has content (x or 0), freeze it - don't change
            if(p.textContent !== "") return;
            
                 if(change == "x"){
                    p.textContent = "x";
                      change="0";
                 }
                 else{
                    p.textContent = "0";
                    change="x";
                 }
                 
                
        });
        })
    

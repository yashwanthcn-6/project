let row1=document.querySelector(".sub1");
let row2=document.querySelector(".sub2");
let row3=document.querySelector(".sub3");
const winner = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


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
                 
                checkwinner();
        });
        })
    
const checkwinner=()=>{
    for(let pattern of winner){

        console.log(pattern[0],pattern[1],pattern[2]);
         console.log(winner[pattern[0]],winner[pattern[1]],winner[pattern[2]]);
          console.log(
            conts[pattern[0]].textContent,
            conts[pattern[1]].textContent,
            conts[pattern[2]].textContent
        );
    }

    }
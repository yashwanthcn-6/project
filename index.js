let row1=document.querySelector(".sub1");
let row2=document.querySelector(".sub2");
let row3=document.querySelector(".sub3");
let t=document.querySelector("h4");
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
let count=7;
function timer(){
    count--;
    console.log(count);
    t.textContent = `Time: ${count}`;

}
let yy=setInterval(function(){
    timer();
    if(count === 0){
        clearTimeout(yy);
        t.textContent = "Time is up";
    }
}, 1000);




let b=document.querySelector("body");
let h2=document.querySelector("h2");

let a=document.querySelector("button")

let conts=document.querySelectorAll(".cont");
let change="x";
let o=document.querySelector("#zero");
let x=document.querySelector("#xone");
    conts.forEach((on) => {
        
        on.addEventListener("click", () => {
            let p = on.querySelector("p.res");
            
            if(p.textContent !== "") return;
            
                 if(change == "x"){
                    p.textContent = "x";
                      change="0";
                      o.textContent="its turn for the player 0";
                      x.textContent="";
                     
                      

                 }
                 else{
                    p.textContent = "0";
                    change="x";
                    x.textContent="its turn for the player x";
                    o.textContent="";
                    
                    
                 }
                 
               checkwinner();
        });
        })
    
        

       let checkwinner=()=>{
    for(let pattern of winner){
       
        
            let a=conts[pattern[0]].textContent;
            let b=conts[pattern[1]].textContent;
            let c=conts[pattern[2]].textContent;
            
    

    
    if(a !=="" && b !=="" && c !==""){
        if(a === b && b === c){
            
            h2.textContent=`winner is ${a}`;
            return 0;
           }
            }}};

      
        


            
            
                  
    

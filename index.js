
let p=document.querySelector("body");
let c=document.querySelector("h1");
let r="red";
c.addEventListener("click",()=>{
    c.innerHTML="Hello World";
}
    )
let abc=()=>{
    if(r== "red"){
        p.style.backgroundColor="red";
        c.style.color="blue";
       r="blue";}
    else {
         p.style.backgroundColor="blue";
         c.style.color="red";
         r="red";}
    }
    
a.addEventListener("click",abc)

    
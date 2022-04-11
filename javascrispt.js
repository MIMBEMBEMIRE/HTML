

var app =document.querySelector("h1").style.background="red";
var bnt1 = document.getElementById("btn-1");
var bnt2 = document.getElementById("btn-2");
var answer = document.querySelector("p");


var clika =document.querySelector(".click-event");
clika.style.borderRadius = "150px";
clika.addEventListener("click", () => {
clika.classList.add("questio1");

});

bnt1.addEventListener("click", () => {
answer.classList.add("showreponse");
});

bnt2.addEventListener("click", () =>{

   answer.style.visibility ="visibible";
   answer.style.background ="black";
});
//---------------------------------------------

const mouse1 = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) =>{
    mouse1.style.left =e.pageX + "px";
    mouse1.style.top =e.pageY + "px";

});
window.addEventListener("mousedown",() =>{
    mouse1.style.transform ="scale(2) translate(-25%,-25%)";
});

window.addEventListener("mouseup",() =>{
    mouse1.style.transform ="scale(2) translate(-50%,-50%)";
    mouse1.style.border = "2px solid teal"
});

clika.addEventListener("mouseup",() =>{
clika.style.background = "rgba(0,0,0,0)";
});






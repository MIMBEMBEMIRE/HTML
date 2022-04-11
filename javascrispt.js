

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
answer.style.visibility="visible";
answer.style.background ="yellow";
});

bnt2.addEventListener("click", () =>{

   answer.style.visibility ="visibible";
   answer.style.background ="black";
});




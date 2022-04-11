

var app =document.querySelector("h1").style.background="red";
var clika =document.querySelector(".click-event");
clika.style.borderRadius = "150px";
clika.addEventListener("click", () => {
    clika.style.background="blue";
    console.log("click");
})



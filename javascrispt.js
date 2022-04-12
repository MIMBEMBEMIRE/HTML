

//---------------------------------------------






//--comment cree un son en javascript a rre
//scroll event


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
//form
const inputname=document.querySelector(input[type="text"]);
const select =document.querySelector("select");
let psendo="";
let language ="";
const form = document.querySelector("form");


inputname.addEventListener("input",()=>{
pseudo = e.target.value;
});
select.addEventListener("input", (e) => {
    console.log(e.target.value);
});
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(cgv.checked){
document.querySelector("form > div").innerHTML=
        "<h3>{psendo}</h3>"
        "<h4>language:${language}</h4>"
}else{
alert("veuille selection GBS");
    }


});






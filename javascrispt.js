

//---------------------------------------------






//--comment cree un son en javascript a rre
//scroll event
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if(window.scrollY > 120){
        nav.style.top = 0;

}else{
    nav.style.top ="-50px;";
}
});






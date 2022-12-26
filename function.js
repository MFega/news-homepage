const hamburger =document.getElementById("btn");
const close = document.getElementById("close");
const body = document.querySelector(".body");
const slider = document.querySelector(".nav-bar");

hamburger.addEventListener("click", ()=> {
    hamburger.style.display = "none";
    close.style.display = "block";
    slider.style.display = "block";
    body.style.background = " hsl(233, 8%, 79%) "
})

close.addEventListener("click", ()=>{
    hamburger.style.display = "block";
    close.style.display = "none"
    slider.style.display = "none"
    body.style.background = "initial"
})

 
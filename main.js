const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const logoImage = document.querySelector(".logo img")
;
menuBtn.addEventListener("click", function() {
    menuBtn.classList.toogle("active");
    nav.classList.toogle("active")
})

window.addEventListener("scroll", function(){
    if(window.pageXOffset > 4) {
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled")
    }
})
var menuOpener = document.querySelector(".mobileOpener");
var menuClose = document.querySelector(".menuClose");
var menu = document.querySelector(".navigation");

menuOpener.addEventListener("click", function(){
    menu.classList.add("opened");
});

menuClose.addEventListener("click", function(){
    menu.classList.remove("opened");
});
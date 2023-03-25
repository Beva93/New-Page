var menuOpener = document.querySelector(".mobileOpener");
var menuClose = document.querySelector(".menuClose");
var menu = document.querySelector(".navigation-menu");

menuOpener.addEventListener("click", function(){
    menu.classList.add("opened");

});
menuClose.addEventListener("click", function(){
    menu.classList.remove("opened");

}
);

var register = document.querySelector(".register");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close");

register.addEventListener("click", function(){
    popup.style.display = "flex"
});
close.addEventListener("click", function(){
    popup.style.display = "none"
});

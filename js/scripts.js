let darkButton=document.querySelector(".site-header__button");
let body=document.querySelector(".light")
darkButton.onclick=function(){
    body.classList.toggle("light");
    body.classList.toggle("dark");
}
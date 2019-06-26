
function mouseHandler(){
    event.target.style.color = "brown";
};

const navStyle = document.querySelectorAll("nav a");

navStyle.forEach((link)=>{
    link.addEventListener("mouseover",mouseHandler);
})

function mouseHandlerButton(){
    event.target.style.backgroundColor = "brown";
}

const firstButton = document.querySelector(".btn");

firstButton.addEventListener("mousemove",mouseHandlerButton);

const secondButton = document.querySelector(".btn-2");

secondButton.addEventListener("mousemove", mouseHandlerButton);

const thirdButton = document.querySelector(".btn-3");

thirdButton.addEventListener("mousemove",mouseHandlerButton);


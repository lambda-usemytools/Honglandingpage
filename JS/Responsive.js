
const navLive = document.querySelectorAll("nav a");

navLive.forEach((event)=>{
    event.addEventListener("mouseover",(event)=>{
        event.target.style.color = "brown"
    });
})

navLive.forEach((event)=>{
    event.addEventListener("mouseout",(event)=>{
        event.target.style.color = "#1E3A46"
    });
})

const titleLive = document.querySelectorAll(".title");

titleLive.forEach((event)=>{
    event.addEventListener("mouseover",(event)=>{
        event.target.style.color = "brown"
    });
})

titleLive.forEach((event)=>{
    event.addEventListener("mouseout",(event)=>{
        event.target.style.color = "#41340C"
    });
})


function mouseHandlerButton(){
    event.target.style.backgroundColor = "brown";
    event.target.style.color = "#EDE3C2"
}

const firstButton = document.querySelector(".btn");

firstButton.addEventListener("mouseover", mouseHandlerButton);
firstButton.addEventListener("mouseout",(event)=>{
    event.target.style.backgroundColor = " #488EAC"
});

const secondButton = document.querySelector(".btn-2");

secondButton.addEventListener("mouseover", mouseHandlerButton);
secondButton.addEventListener("mouseout",(event)=>{
    event.target.style.backgroundColor = "#DAAB1D"
    event.target.style.color = "#336277"
});

const thirdButton = document.querySelector(".btn-3");

thirdButton.addEventListener("mouseover",mouseHandlerButton);
thirdButton.addEventListener("mouseout",(event)=>{
    event.target.style.backgroundColor = "#488EAC"
});




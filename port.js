const nav=document.querySelector(".Menu");

function init(){
    nav.addEventListener("click",function(event){
        handleButton(event.target.innerText);
    })
}

function handleButton(value){
    if(value=="Intro"){
        Redirect("./intro.html")
    }
    if(value=="About Me"){
        Redirect("./aboutme.html")
    }
    if(value=="Education"){
        Redirect("./education.html")
    }
    if(value=="Projects"){
        Redirect("./projects.html")
    }
    if(value=="Skills"){
        Redirect("./skills.html")
    }
    console.log(value);
}

function Redirect(url){
    window.location=url;
}

init();



var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    mousewheel: true,
    keyboard: true,
  });
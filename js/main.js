/****************** NAVIGATION ******************/
// DECLARING VARIABLES
let navBtn = document.querySelector(".navigation__menu"), 
    navBar = document.querySelector(".navigation__nav");
// SHOW/HIDE NAVIGATION 
navBtn.onclick = function(e){
    e.preventDefault();
    navBar.classList.toggle("navigation__nav--open");
    this.classList.toggle("navigation__menu--close");
};

// HIDE NAVIGATION BAR WHEN SLIDE DOWN AND SHOW WHEN SLIDE UP
let prevScrollpos   = window.pageYOffset,
    navBarContainer = document.querySelector(".navigation");
window.onscroll = function() {
  if(navBtn.classList.contains("navigation__menu--close")){
      // pass
  }else if(window.pageYOffset > 250){
    navBarContainer.style.backgroundColor = "rgba(34, 53, 73, 1)";
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navBarContainer.style.top = "0";
      navBarContainer.style.backgroundColor = "rgba(34, 53, 73, 1)";
    } else {
      navBarContainer.style.top = "-6rem";
      navBarContainer.style.backgroundColor = "rgba(34, 53, 73, 0.5)";
    }
    prevScrollpos = currentScrollPos;
  }else{
    navBarContainer.style.backgroundColor = "transparent";
  }
}

/****************** SLIDER ******************/
// Declaring Variables
let sliderItems = Array.from(document.querySelectorAll(".slider__item")),
    prevBtn     = document.querySelector(".slider__arrow--prev"),
    nextBtn     = document.querySelector(".slider__arrow--next"),
    currentSlide = 0,
    nextSlide    = currentSlide + 1;

resetSlider();
nextBtn.onclick = rightSlide;
prevBtn.onclick = leftSlide;
function rightSlide(){
    if(currentSlide < sliderItems.length - 1){
        currentSlide ++;
        resetSlider();
    }
}
function leftSlide(){
    if(currentSlide > 0){
        currentSlide --;
        resetSlider();
    }
}
function resetSlider(){
    // Remove All Classes I played with so, reduce Possible errors
    document.querySelectorAll(".slider__item").forEach(function(e){
        e.classList.remove("slider__item--active");
        e.classList.remove("slider__item--next");
        e.classList.remove("slider__item--left");
        e.classList.remove("slider__item--right");
        e.classList.remove("slider__item--prev");
    });
    // Set The Current Showed Element
    sliderItems[currentSlide].classList.add("slider__item--active");
    // Check If the Slider Item Is Not The Last [The Normal Mode Of Slider]
    if(currentSlide < sliderItems.length - 1){
        // Set The Next Item Which Appears On The Right Side Of Slider
        sliderItems[currentSlide].nextElementSibling.classList.add("slider__item--next");
    }
    if(currentSlide > 0 && currentSlide < sliderItems.length){
        sliderItems[currentSlide].previousElementSibling.classList.add("slider__item--prev");
    }
        for(let i = currentSlide + 2; i < sliderItems.length; i++){
            sliderItems[i].classList.add("slider__item--right");
        }
        for(let j = 0; j < currentSlide - 1; j++){
            sliderItems[j].classList.add("slider__item--left");
        }
}



/*
CLASSES:--
    [0] slider__item--active
    [1] slider__item--next
    [2] slider__item--left
    [3] slider__item--right
*/
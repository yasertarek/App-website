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
  }else if(window.pageYOffset > 66){
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

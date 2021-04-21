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
/****************** MAP ******************/
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
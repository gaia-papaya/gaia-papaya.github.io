//tab flipper (also flips header images)
function TabFlipper(event, TabName) {
    //get all elements with class of 'tabcontent' and hide
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //get all elements of class 'topimage' and hide
    tabimage = document.getElementsByClassName("tabimages");
    for(i = 0; i <tabimage.length; i++) {
        tabimage[i].style.display = "none"
    }   

    //get all elements with class of 'tablink' and remove class of 'active'
    tablinks = document.getElementsByClassName("tablink")
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //extract width of the tabs
     tabs = document.getElementById("tabs");
     tabStyles = window.getComputedStyle(tabs);
     tabWidth = tabStyles.width;

    // Show the current tab content and images, and add an "active" class to the button that opened the tab
    document.getElementById(TabName).style.display = "flex";
    event.currentTarget.className += " active";
    //set max and min width to fit tabs
    document.getElementById(TabName).style.maxWidth = tabWidth;

    //display images
    TabImageName = TabName + "Image"
    document.getElementById(TabImageName).style.display = "flex"


}

//hide navbar when user scrolls down, show when scrolls up
var PreviousScrollPos = window.scrollY;
window.onscroll = function() {
    CurrentScrollPos = window.scrollY;
    if(CurrentScrollPos < PreviousScrollPos) {
        document.getElementById("topbar").style.top = "0";
    } else {
        document.getElementById("topbar").style.top = "-150px";
    }
    PreviousScrollPos = CurrentScrollPos;
}

//slide show code

let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
} 
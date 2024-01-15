//tab flipper (also flips header images)
function TabFlipper(event, TabName) {
    //get all elements with class of 'tabcontent' and hide
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

    //get all elements with class of 'tablink' and remove class of 'active'
    tablinks = document.getElementsByClassName("tablink")
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

// Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(TabName).style.display = "block";
  event.currentTarget.className += " active";

}

document.getElementsByClassName("tablink active")




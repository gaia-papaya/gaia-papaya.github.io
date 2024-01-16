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
    var tabs = document.getElementById("tabs");
    var tabStyles = window.getComputedStyle(tabs);
    var tabWidth = tabStyles.width;

    // Show the current tab content and images, and add an "active" class to the button that opened the tab
    document.getElementById(TabName).style.display = "flex";
    event.currentTarget.className += " active";
    //set max and min width to fit tabs
    document.getElementById(TabName).style.minWidth = tabWidth; 
    document.getElementById(TabName).style.maxWidth = tabWidth;

    //display images
    TabImageName = TabName + "Image"
    document.getElementById(TabImageName).style.display = "flex"
 
}




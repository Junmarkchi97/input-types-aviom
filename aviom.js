var popNav= document.getElementById("pop-nav");
popNav.style.visibility = "hidden";

function togglemenu(){
  if ( popNav.style.visibility == "hidden"){
    popNav.style.visibility = "visible";
  }
  else
  {
    popNav.style.visibility = "hidden";
  }
}

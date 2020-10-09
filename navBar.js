'use strict'
let isToggleVisible = true;
let menuCollapse = document.querySelector("#menu-collapse");

document.querySelector("#mobile-toggle").addEventListener('click', function(event){
    event.preventDefault();
    console.log("toggling: ", menuCollapse.style.display);
    if (menuCollapse.style.display === "none" || menuCollapse.style.display === "") {
        menuCollapse.style.display = "flex";
        isToggleVisible = true;
    }
    else {
        menuCollapse.style.display = "none";
        isToggleVisible = false;
    }
});

window.onresize = function(){
    if(window.innerWidth > 600){
        menuCollapse.style.display = "flex";
        isToggleVisible = false;
    }
    else if(window.innerWidth <= 600 && isToggleVisible === false) {
        menuCollapse.style.display = "none";
    }
}
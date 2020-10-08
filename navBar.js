'use strict'

document.querySelector("#mobile-toggle").addEventListener('click', function(event){
    event.preventDefault();
    console.log("toggling");
    let menuCollapse = document.querySelector("#menu-collapse");
    if (menuCollapse.style.display == "none") menuCollapse.style.display = "flex";
    else menuCollapse.style.display = "none";
});

window.onresize = function(){
    if(window.innerWidth > 600){
        document.querySelector("#menu-collapse").style.display = "flex";
    }
}
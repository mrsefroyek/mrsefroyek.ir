$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({'placement': 'left'})   
});
function toggleMenu(){
    let menuIcon=document.querySelector(".menu-icon");
    let menuContent=document.querySelector(".menu-content");
    if(menuIcon.hasAttribute("open-mode")){
      menuIcon.classList.add("bi-x");
      menuIcon.classList.remove("bi-list");
      menuIcon.removeAttribute("open-mode");
      menuContent.style.display = 'flex';
    }else {
        menuIcon.classList.add("bi-list");
        menuIcon.classList.remove("bi-x"); 
        menuIcon.setAttribute("open-mode","true"); 
        menuContent.style.display = 'none'; 
    }
   
}
function showSection(sectionName){
    let sections=document.querySelectorAll(".section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("show");
        sections[i].classList.add("hide");
    }
    let item=document.querySelector(`.${sectionName}`);
    item.classList.add("show");
    this.toggleMenu();
}

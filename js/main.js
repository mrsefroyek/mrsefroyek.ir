function showMenu(){
    let menu=document.querySelector(".menu");
    menu.style.display = 'flex'
}
function hideMenu(){
    let menu=document.querySelector(".menu");
    menu.style.display = 'none'
}
function goTo(section){
    let sections=document.querySelectorAll(".section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("show");
        sections[i].classList.add("hide");
    }
    let item=document.querySelector(`.${section}`);
    item.classList.add("show");
    this.hideMenu();
}
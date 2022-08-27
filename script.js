const menuBar = document.getElementById('menu-bar')
const navCenter = document.getElementById('nav-center')

menuBar.addEventListener('click', menuDownShow)
let menu = false;
function menuDownShow() {
    if(!menu){
        navCenter.classList.add('nav-center-down')
        menu = true
    }else{
        navCenter.classList.remove('nav-center-down')
        menu = false
    }
}
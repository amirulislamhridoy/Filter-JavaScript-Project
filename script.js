const menuBar = document.getElementById('menu-bar')
const navCenter = document.getElementById('nav-center')
const ourStore = document.getElementById('our-store')
const storeCardContainer = document.getElementById('store-card-container')

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

let search = null;
const foodFn = () => {
    fetch('foods.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // data.map(s => div.innerHTML = `${s.name}`)
        // storeCardContainer.appendChild(div)
        for(const d of data){
            const div = document.createElement('div')
            div.innerHTML = `
                <div class='store-card-1'>
                    <img src=${d.img} alt=>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class='store-card-2'>
                    <span>${d.name}</span>
                    <b>$${d.price}</b>
                </div>
            `
            div.classList.add('store-card')
            storeCardContainer.appendChild(div)
        }
    })
}
foodFn()
const menuBar = document.getElementById('menu-bar')
const navCenter = document.getElementById('nav-center')
const ourStore = document.getElementById('our-store')
const storeCardContainer = document.getElementById('store-card-container')
const input = document.getElementById('input')
const allBtn = document.getElementById('all-btn')
const cakeBtn = document.getElementById('cake-btn')
const cupcakeBtn = document.getElementById('cupcake-btn')
const sweetBtn = document.getElementById('sweet-btn')
const doughnutBtn = document.getElementById('doughnut-btn')
const headerLastBtn = document.getElementById('header-last-btn')
const bannerSide = document.getElementById('banner-side')

menuBar.addEventListener('click', menuDownShow)
input.addEventListener('keyup', (e) => foodFn(e.target.value))
allBtn.addEventListener('click', () => foodFn(''))
cakeBtn.addEventListener('click', () => foodFn2('Cake Item'))
cupcakeBtn.addEventListener('click', () => foodFn('cupcake item'))
sweetBtn.addEventListener('click', () => foodFn('sweet item'))
doughnutBtn.addEventListener('click', () => foodFn('dougnut item'))

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

const foodFn = (e) => {
    let search = e || '';
    fetch('foods.json')
    .then(res => res.json())
    .then(data => {
        storeCardContainer.innerHTML = ''
        const filter = data.filter(d => d.name.toLowerCase().includes(search))
        for(const f of filter){
            const div = document.createElement('div')
            div.innerHTML = `
                <div class='store-card-1'>
                    <img src=${f.img} alt=''>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class='store-card-2'>
                    <span>${f.name}</span>
                    <b>$${f.price}</b>
                </div>
            `
            div.classList.add('store-card')
            storeCardContainer.appendChild(div)
        }
    })
}
foodFn()
const foodFn2 = (e) => {
    let search = e || '';
    fetch('foods.json')
    .then(res => res.json())
    .then(data => {
        storeCardContainer.innerHTML = ''
        const filter = data.filter(d => d.name.includes(search))
        for(const f of filter){
            const div = document.createElement('div')
            div.innerHTML = `
                <div class='store-card-1'>
                    <img src=${f.img} alt=''>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class='store-card-2'>
                    <span>${f.name}</span>
                    <b>$${f.price}</b>
                </div>
            `
            div.classList.add('store-card')
            storeCardContainer.appendChild(div)
        }
    })
}

let toggle = true;
headerLastBtn.addEventListener('click', () => {
    toggle = !toggle
    if(toggle){
        bannerSide.style.right = '0'
    }else{
        bannerSide.style.right = '-300px'
    }
})

// hello
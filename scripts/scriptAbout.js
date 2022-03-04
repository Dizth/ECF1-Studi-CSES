//menu

const btnMenu = document.getElementById('menuButton')
const menuWrapper = document.getElementById('menuWrapper')
const spanWrapper = document.getElementById('spanWrapper')
const outsideMenu = document.getElementById('outsideMenu')
const menuContainer = document.getElementById('menuContainer')

btnMenu.addEventListener('click', (e) =>  {
    menuWrapper.classList.toggle('displayMenu')
    spanWrapper.classList.toggle('displayColor')
    outsideMenu.classList.toggle('displayOutside')
    if (menuWrapper.classList[1] === 'displayMenu') {
        menuContainer.style.height = '100%'
    } else {
        menuContainer.style.height = '0%'
    }
})

outsideMenu.addEventListener('click', (e) => {
    menuContainer.style.height = '0%'
    menuWrapper.classList.remove('displayMenu')
    spanWrapper.classList.remove('displayColor')
    outsideMenu.classList.remove('displayOutside')
})

//text reveal
let listItems = [...document.querySelectorAll('li')]

let options = {
    rootMargin: '-10%',
    threshold: 0.0
}

let observer = new IntersectionObserver(showItem, options)

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.children[0].classList.add('active')
        }
    })
}

listItems.forEach(item =>{
    observer.observe(item)
})

console.log(listItems)
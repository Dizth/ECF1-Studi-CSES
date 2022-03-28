const btnMenu = document.getElementById('menuButton')
const menuWrapper = document.getElementById('menuWrapper')
const spanWrapper = document.getElementById('spanWrapper')
const outsideMenu = document.getElementById('outsideMenu')
const menuContainer = document.getElementById('menuContainer')
const btnTop = document.getElementById('btnTop')

btnTop.addEventListener('click', (e) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

btnMenu.addEventListener('click', (e) =>  {
    menuWrapper.classList.toggle('displayMenu')
    spanWrapper.classList.toggle('displayColor')
    outsideMenu.classList.toggle('displayMenu')
    if (menuWrapper.classList[1] === 'displayMenu') {
        menuContainer.style.height = '100vh'
    } else {
        menuContainer.style.height = '0vh'
    }
})

outsideMenu.addEventListener('click', (e) => {
    menuContainer.style.height = '0vh'
    menuWrapper.classList.remove('displayMenu')
    spanWrapper.classList.remove('displayColor')
    outsideMenu.classList.remove('displayMenu')
})
const btnMenu = document.getElementById('menuButton')
const menuWrapper = document.getElementById('menuWrapper')
const spanWrapper = document.getElementById('spanWrapper')

btnMenu.addEventListener('click', (e) =>  {
    menuWrapper.classList.toggle('displayMenu')
    spanWrapper.classList.toggle('displayColor')
})
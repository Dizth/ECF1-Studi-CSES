const btnMenu = document.getElementById('menuButton')
const menuWrapper = document.getElementById('menuWrapper')
const spanWrapper = document.getElementById('spanWrapper')
const outsideMenu = document.getElementById('outsideMenu')
const menuContainer = document.getElementById('menuContainer')

const sideCover = document.querySelector('.side-cover')
const play = document.querySelector('.placeholder')
const btnChess = document.getElementById('btnChess')
const chessVid = document.querySelector('.chess-vid')

btnMenu.addEventListener('click', (e) =>  {
    menuWrapper.classList.toggle('displayMenu')
    spanWrapper.classList.toggle('displayColor')
    outsideMenu.classList.toggle('displayOutside')
    if (menuWrapper.classList[1] === 'displayMenu') {
        menuContainer.style.height = '100%'
        //document.body.style.overflowY = 'hidden'
    } else {
        menuContainer.style.height = '0%'
        //document.body.style.overflowY = 'visible'
    }
})

outsideMenu.addEventListener('click', (e) => {
    menuWrapper.classList.remove('displayMenu')
    spanWrapper.classList.remove('displayColor')
    outsideMenu.classList.remove('displayOutside')
})


btnChess.addEventListener('mouseover', (e) => {
    if (sideCover.clientWidth > 0) {
        chessVid.style.display ='block'
        chessVid.play()
        play.style.display ='none'
    }
})

btnChess.addEventListener('mouseout',(e) => {
    chessVid.style.display ='none'
    play.style.display ='block'
    chessVid.pause()
})
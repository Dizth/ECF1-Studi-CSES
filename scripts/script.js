//menu
const btnMenu = document.getElementById('menuButton')
const menuWrapper = document.getElementById('menuWrapper')
const spanWrapper = document.getElementById('spanWrapper')
const outsideMenu = document.getElementById('outsideMenu')
const menuContainer = document.getElementById('menuContainer')

//right page videos
const sideCover = document.querySelector('.side-cover')
const play = document.querySelector('.placeholder')
const btnCooking = document.getElementById('btnCooking')
const cookingVid = document.getElementById('cookingVid')
const btnChess = document.getElementById('btnChess')
const chessVid = document.getElementById('chessVid')
const btnDance = document.getElementById('btnDance')
const danceVid = document.getElementById('danceVid')
const btnFablab = document.getElementById('btnFablab')
const fablabVid = document.getElementById('fablabVid')
const btnSewing = document.getElementById('btnSewing')
const sewingVid = document.getElementById('sewingVid')
const btnPottery = document.getElementById('btnPottery')
const potteryVid = document.getElementById('potteryVid')
const btnMusic = document.getElementById('btnMusic')
const musicVid = document.getElementById('musicVid')
const btnLudo = document.getElementById('btnLudo')
const ludoVid = document.getElementById('ludoVid')
const btnInfo = document.getElementById('btnInfo')
const infoVid = document.getElementById('infoVid')

const btnTop = document.getElementById('btnTop')

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

function displayVideo(video) {
    if (sideCover.clientWidth > 0) {
        video.style.display ='block'
        video.play()
        play.style.display ='none'
    }
}

function hideVideo(video) {
    video.style.display ='none'
    play.style.display ='block'
    video.pause()
}

btnCooking.addEventListener('mouseover', (e) => {
    displayVideo(cookingVid)
})

btnCooking.addEventListener('mouseout',(e) => {
    hideVideo(cookingVid)
})

btnChess.addEventListener('mouseover', (e) => {
    displayVideo(chessVid)
})

btnChess.addEventListener('mouseout',(e) => {
    hideVideo(chessVid)
})

btnDance.addEventListener('mouseover', (e) => {
    displayVideo(danceVid)
})

btnDance.addEventListener('mouseout',(e) => {
    hideVideo(danceVid)
})

btnFablab.addEventListener('mouseover', (e) => {
    displayVideo(fablabVid)
})

btnFablab.addEventListener('mouseout',(e) => {
    hideVideo(fablabVid)
})

btnSewing.addEventListener('mouseover', (e) => {
    displayVideo(sewingVid)
})

btnSewing.addEventListener('mouseout',(e) => {
    hideVideo(sewingVid)
})

btnPottery.addEventListener('mouseover', (e) => {
    displayVideo(potteryVid)
})

btnPottery.addEventListener('mouseout',(e) => {
    hideVideo(potteryVid)
})

btnMusic.addEventListener('mouseover', (e) => {
    displayVideo(musicVid)
})

btnMusic.addEventListener('mouseout',(e) => {
    hideVideo(musicVid)
})

btnLudo.addEventListener('mouseover', (e) => {
    displayVideo(ludoVid)
})

btnLudo.addEventListener('mouseout',(e) => {
    hideVideo(ludoVid)
})

btnInfo.addEventListener('mouseover', (e) => {
    displayVideo(infoVid)
})

btnInfo.addEventListener('mouseout',(e) => {
    hideVideo(infoVid)
})

//To the top btn

btnTop.addEventListener('click', (e) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

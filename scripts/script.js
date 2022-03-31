//right page videos
const sideCover = document.querySelector('.side-cover')
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

function displayVideo(video) {
    if (sideCover.clientWidth > 0) {
        video.style.display ='block'
        video.play()
    }
}

function hideVideo(video) {
    video.style.display ='none'
    video.pause()
}

btnCooking.addEventListener('mouseenter', (e) => {
    displayVideo(cookingVid)
})

btnCooking.addEventListener('mouseleave',(e) => {
    hideVideo(cookingVid)
})

btnChess.addEventListener('mouseenter', (e) => {
    displayVideo(chessVid)
})

btnChess.addEventListener('mouseleave',(e) => {
    hideVideo(chessVid)
})

btnDance.addEventListener('mouseenter', (e) => {
    displayVideo(danceVid)
})

btnDance.addEventListener('mouseleave',(e) => {
    hideVideo(danceVid)
})

btnFablab.addEventListener('mouseover', (e) => {
    displayVideo(fablabVid)
})

btnFablab.addEventListener('mouseleave',(e) => {
    hideVideo(fablabVid)
})

btnSewing.addEventListener('mouseenter', (e) => {
    displayVideo(sewingVid)
})

btnSewing.addEventListener('mouseleave',(e) => {
    hideVideo(sewingVid)
})

btnPottery.addEventListener('mouseenter', (e) => {
    displayVideo(potteryVid)
})

btnPottery.addEventListener('mouseleave',(e) => {
    hideVideo(potteryVid)
})

btnMusic.addEventListener('mouseenter', (e) => {
    displayVideo(musicVid)
})

btnMusic.addEventListener('mouseleave',(e) => {
    hideVideo(musicVid)
})

btnLudo.addEventListener('mouseenter', (e) => {
    displayVideo(ludoVid)
})

btnLudo.addEventListener('mouseleave',(e) => {
    hideVideo(ludoVid)
})

btnInfo.addEventListener('mouseenter', (e) => {
    displayVideo(infoVid)
})

btnInfo.addEventListener('mouseleave',(e) => {
    hideVideo(infoVid)
})
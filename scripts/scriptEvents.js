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

//to the top btn
const btnTopEvent = document.getElementById('btnTopEvent')

btnTopEvent.addEventListener('click', (e) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

// Like (interested)
const btnHeart = document.getElementById('btnHeart')
const interestedProgress = document.getElementById('interestedProgress')
const btnInterested = document.getElementById('interested')
const valueMax =  parseInt(interestedProgress.getAttribute('aria-valuemax'))
let interestedCount = parseInt(interestedProgress.getAttribute('aria-valuenow'))
let cpt = 0
let max = 0

btnInterested.addEventListener('click', (e) => {
    if (max < valueMax) {
        if (cpt === 0) {
            btnHeart.childNodes[3].classList.remove('hide')
            btnHeart.childNodes[1].classList.add('hide')
            interestedCount++
            let total = interestedCount * 100 / valueMax
            let string = ''
            string += total
            cpt++
            max++
            interestedProgress.innerText = interestedCount + ' / 250'
            return changeWidth(string)
        } else {
            btnHeart.childNodes[1].classList.remove('hide')
            btnHeart.childNodes[3].classList.add('hide')
            interestedCount--
            let total = interestedCount * 100 / valueMax
            let string = ''
            string += total
            cpt = 0
            max--
            interestedProgress.innerText = interestedCount + ' / 250'
            return changeWidth(string)
        }
    }
})

btnHeart.addEventListener('click', (e) => {
    if (max < valueMax) {
        if (cpt === 0) {
            btnHeart.childNodes[3].classList.remove('hide')
            btnHeart.childNodes[1].classList.add('hide')
            interestedCount++
            let total = interestedCount * 100 / valueMax
            let string = ''
            string += total
            cpt++
            max++
            interestedProgress.innerText = interestedCount + ' / 250'
            return changeWidth(string)
        } else {
            btnHeart.childNodes[1].classList.remove('hide')
            btnHeart.childNodes[3].classList.add('hide')
            interestedCount--
            let total = interestedCount * 100 / valueMax
            let string = ''
            string += total
            cpt = 0
            max--
            interestedProgress.innerText = interestedCount + ' / 250'
            return changeWidth(string)
        }
    }
})

function changeWidth(string) {
    interestedProgress.style.width = string + '%'
}
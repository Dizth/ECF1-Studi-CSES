// Like (interested)
const btnHeart = document.getElementById('btnHeart')
const btnInterested = document.getElementById('interested')
const interestedProgress = document.getElementById('interestedProgress')
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
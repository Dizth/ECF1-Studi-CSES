//text reveal
let ulList = [...document.querySelectorAll("ul.text-reveal > li")];

let options = {
    rootMargin: '-10%',
    threshold: 0.0
}

let observer = new IntersectionObserver(showItem, options)

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(entry.target.children[0].localName === "button") {
                entry.target.children[0].classList.add('activeBtn')
            } else {
                entry.target.children[0].classList.add('active')
            }
        }
    })
}

ulList.forEach(item =>{
    observer.observe(item)
})
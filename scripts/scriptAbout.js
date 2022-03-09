//text reveal
let ulList = [...document.querySelectorAll("ul.text-reveal > li")];

let listItems = ulList.filter(element => element.localName !== "li" ? element.pop : element)

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

listItems.forEach(item =>{
    observer.observe(item)
})
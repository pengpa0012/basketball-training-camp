
const nav = document.querySelector('nav')
const navList = nav.querySelectorAll('ul li a')
const navLogo = nav.querySelector('.navbar-brand')

function runOnScroll() {
    
    const front = document.querySelector('.front')
    const top = front.getBoundingClientRect().y

    if(top <= -450){
        nav.classList.add('bg-light')
        nav.classList.add('shadow-sm')
        nav.classList.remove('bg-transparent')

        navLogo.classList.remove('text-white')
        navLogo.classList.add('text-dark')
        
        navList.forEach(li => {
            li.classList.remove('text-white')
            li.classList.add('text-dark')
        })
    }else{
        nav.classList.remove('bg-light')
        nav.classList.remove('shadow-sm')
        nav.classList.add('bg-transparent')

        navLogo.classList.add('text-white')
        navLogo.classList.remove('text-dark')

        navList.forEach(li => {
            li.classList.add('text-white')
            li.classList.remove('text-dark')
        })
    }
 }

window.addEventListener("scroll", runOnScroll)


class ChangeImage{
    constructor(list, image){
        this.list = list
        this.image = image
        changeImgSrc(this)
    }
}

function changeImgSrc(list, image){
    console.log(list)
    list.addEventListener('click', () => {
        image.src = list.attributes[0].textContent
    })

}

const li = document.querySelector('[data-src]')
const imgSrc = document.querySelector('.img-src')

new ChangeImage(li, imgSrc)

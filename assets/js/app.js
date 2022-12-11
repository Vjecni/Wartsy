import { log, get } from 'https://cdn.jsdelivr.net/gh/Vjecni/esaier-js/scriptum.js'


get('.hamburger').onEvent('click', () => {
    get('.hamburger').toggle('active')
    get('.mobile_menu').toggle('active')
})

let mobileLink = document.querySelectorAll('.-mobile_link')
let mobileMenu = document.querySelector('.mobile_menu')

for(let i = 0; i < mobileLink.length; i++) {
    mobileLink[i].addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
    })
}
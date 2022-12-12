import { log, get } from 'https://cdn.jsdelivr.net/gh/Vjecni/esaier-js/scriptum.js'


get('.hamburger').onEvent('click', () => {
    get('.hamburger').toggle('active')
    get('.mobile_menu').toggle('active')
})



get('.mobile_menu').onEvent('click', function (event) {

  if (event.target.matches('a[href^="#"]'))

    this.toggle('active')

})


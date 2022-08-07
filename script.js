const openElement = document.getElementById('open')
const closeElement = document.getElementById('close')
const containerElement = document.querySelector('.container')

openElement.addEventListener('click', openNav)
closeElement.addEventListener('click', closeNav)

function openNav() {
    containerElement.classList.add('show-nav')
}

function closeNav() {
    containerElement.classList.remove('show-nav')
}
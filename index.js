const toggleButton = document.getElementById("toggle-button")
const navbar = document.getElementById("navbar-links")
toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
    console.log('test')
})
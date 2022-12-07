// Navbar Scroll
window.onscroll = function() {
    const header = document.getElementById('navbar-top');
    const navbarScroll = document.getElementById('navbar-top').offsetTop;

    if(window.pageYOffset > navbarScroll){
        document.getElementById('navbar-top').classList.add('navbar-scroll');
    } else {
        document.getElementById('navbar-top').classList.remove('navbar-scroll');
    }

}

// JavaScript Hamburger
const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-click');
    navbar.classList.toggle('hidden');
});
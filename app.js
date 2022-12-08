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


// Pop Up
const getStarted = document.querySelectorAll('.get-started');
const started = document.getElementById('started');
const close = document.querySelector('.close');

for (let index = 0; index < getStarted.length; index++) {
    getStarted[index].addEventListener('click', function(){
        started.classList.remove('hidden');
        
        close.addEventListener('click', function(){ 
            started.classList.add('hidden');
        });
     
    });
    
}
 

// Pop Up Search
const search = document.getElementById('search');
const searchPopUp = document.querySelector('.search-popup');

search.addEventListener('click', function(){
    searchPopUp.classList.toggle('hidden');

});

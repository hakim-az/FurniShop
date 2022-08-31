const navbarHamburger = document.getElementById('navbar-hamburger');
const navbarMenu = document.querySelector('.navbar-menu');

function activeNavbar(){
    navbarMenu.classList.toggle("active-navbar");
}

navbarHamburger.addEventListener("click", activeNavbar);
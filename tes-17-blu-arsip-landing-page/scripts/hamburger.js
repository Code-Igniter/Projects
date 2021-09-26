const menuToggle = document.querySelector('.menu input');
const nav = document.querySelector('header nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})
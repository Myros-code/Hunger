const menuBtn = document.querySelector('.nav-button');
const closeBtn = document.querySelector('.close-button');
const mobileMenu = document.querySelector('.mobile-menu');
const bookingBtn = document.querySelector('.booking__button');
const menuItem = document.querySelectorAll('.menu__item');

$('.slick-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    speed: 1200,
});

menuBtn.onclick = function(){
    mobileMenu.style.left = 0;
    closeBtn.style.transform = 'rotate(360deg)';
}

closeBtn.addEventListener('click', function(){
    mobileMenu.style.left = '-200%';
    closeBtn.style.transform = 'rotate(0deg)';

});

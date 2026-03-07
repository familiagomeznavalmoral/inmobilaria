// ==========================
// EFECTO NAVBAR AL SCROLL
// ==========================

window.addEventListener('scroll', function() {

    const nav = document.querySelector('#navbar');

    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

});


// ==========================
// ANIMACION AL HACER SCROLL
// ==========================

window.addEventListener("scroll", function(){

    const elements = document.querySelectorAll(".villa-card");

    elements.forEach(function(el){

        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if(position < screenPosition - 100){

            el.classList.add("show");

        }

    });

});
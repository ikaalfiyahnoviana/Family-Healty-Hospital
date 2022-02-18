const navSlide = () => {
    const tampil = document.querySelector('.tampil');
    const nav = document.querySelector('.ul-links');
    const navLinks = document.querySelectorAll('.ul-links li');

    
    tampil.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

         //Animated link
            navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
         });

         //tampil animation
         tampil.classList.toggle('toggle');
    });

   
}

navSlide();
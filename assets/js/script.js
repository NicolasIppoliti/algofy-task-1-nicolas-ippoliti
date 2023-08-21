let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menuItems = document.querySelectorAll('.navbar a');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

menuItems.forEach(item => {
  item.addEventListener('click', () => {
      navbar.classList.remove('open');
      menu.classList.toggle('bx-x');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const hiddenContent = document.getElementById('hiddenContent');
  const toggleLink = document.getElementById('toggleContent');
  
  toggleLink.addEventListener('click', function(e) {
      e.preventDefault();
      if (hiddenContent.classList.contains('expanded')) {
          hiddenContent.classList.remove('expanded');
          toggleLink.textContent = "Read More";
      } else {
          hiddenContent.classList.add('expanded');
          toggleLink.textContent = "Read Less";
      }
  });
});

const sr = ScrollReveal({
  distance: '40px',
  duration: 2500,
  reset: false,
});

// Home and About Section Reveal
sr.reveal('.logo', { delay: 200, origin: 'left' });
sr.reveal('.navbar', { delay: 400, origin: 'top' });
sr.reveal('.menu-btn', { delay: 520, origin: 'right' });
sr.reveal('.home-about-text span', { delay: 600, origin: 'top' });
sr.reveal('.home-about-text h1', { delay: 680, origin: 'left' });
sr.reveal('.home-about-text p', { delay: 700, origin: 'right' });
sr.reveal('.main-btn', { delay: 860, origin: 'left' });
sr.reveal('.share', { delay: 950, origin: 'bottom' });
sr.reveal('.home-about-img', { delay: 1000, origin: 'right' });

// Contact Section Reveal
sr.reveal('.contact h1', { delay: 700, origin: 'left' });
sr.reveal('.contact p', { delay: 750, origin: 'right' });
sr.reveal('.contact form', { delay: 800, origin: 'bottom' });

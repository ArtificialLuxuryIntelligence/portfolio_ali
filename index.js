import './styles.scss';

//Delay for hero animation
const arrowTime = 8500;

let nav = document.querySelector('nav');
const hero = document.querySelector('.hero-content');

function activateNav() {
  if (nav.classList.contains('nav-active')) {
  } else {
    nav.classList.add('nav-active');
  }
}

(() => {
  // Activate nav after hero animation

  setTimeout(() => {
    activateNav();
  }, arrowTime + 1000);

  //  Active nav if page is scrolled down

  let options = {
    root: null,
    rootMargin: '-200px',
    threshold: 0,
  };
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? null : activateNav();
    });
  }, options);

  observer.observe(hero, options);
})();

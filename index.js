import './styles.scss';

//Delay for hero animation
const arrowTime = 6000;

const nav = document.querySelector('nav');
const hero = document.querySelector('.hero-content');
const year = document.getElementById('year');
const toggle = document.getElementById('nav-toggle');

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

  //  Toggle mobile nav

  toggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-nav-open');
  });

  //close on link click
  let links = [...document.querySelectorAll('a')];
  links.forEach((link) =>
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-nav-open');
    })
  );

  //floating labels in form

  let inputs = [
    ...document.querySelectorAll('input'),
    ...document.querySelectorAll('textarea'),
  ];
  inputs.forEach((input) => {
    let label = input.nextElementSibling;
    input.addEventListener('input', (e) => {
      console.log(label);
      console.log(e.target.value);
      if (e.target.value === '') {
        label.classList.remove('show');
      } else {
        label.classList.add('show');
      }
    });
  });

  //  Set current year in footer

  // year.innerText = new Date().getFullYear();
})();

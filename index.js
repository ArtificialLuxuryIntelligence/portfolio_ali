import './styles.scss';

//Delay for hero animation
const arrowTime = 6000;

let nav = document.querySelector('nav');
const hero = document.querySelector('.hero-content');
const year = document.getElementById('year');

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

  //floating labels in form

  let inputs = [
    ...document.querySelectorAll('input'),
    ...document.querySelectorAll('textarea'),
  ];
  console.log(inputs);
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

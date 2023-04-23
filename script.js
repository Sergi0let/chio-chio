document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  if (window.scrollY > 56) {
    header.classList.add('sticky');
    main.classList.add('sticky-top');
  } else {
    header.classList.remove('sticky');
    main.classList.remove('sticky-top');
  }
});

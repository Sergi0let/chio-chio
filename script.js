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

const openMenu = () => {
  const openBtn = document.querySelector('._open');
  openBtn.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.classList.add('open');
  });
};

openMenu();

const closeMenu = () => {
  const menu = document.querySelector('.menu');
  menu && menu.addEventListener('click', () => menu.classList.remove('open'));
};

closeMenu();

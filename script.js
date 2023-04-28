const menu = document.querySelector('.menu');
const popup = document.querySelector('.view-dish');
const book = document.querySelector('.book');

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
    menu.classList.add('open');
  });
};
openMenu();

const closeMenu = () => {
  menu.addEventListener('click', () => menu.classList.remove('open'));
};
closeMenu();

const openPopup = () => {
  const popupBtn = document.querySelectorAll('.dish');

  popupBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      popup.classList.add('open-popup');
    });
  });
};
openPopup();

const closePopup = () => {
  const closeBtn = document.querySelector('.view-dish__btn-close');
  closeBtn.addEventListener('click', () => {
    console.log('close');
    popup.classList.remove('open-popup');
  });
};

// -------------------------------------------------------------------
const openBook = () => {
  const bookBtns = document.querySelectorAll('#booking');

  bookBtns.forEach((bookBtn) => {
    bookBtn.addEventListener('click', () => {
      book.classList.add('open-booking');
    });
  });
};
openBook();

const closeBook = () => {
  const closeBtn = document.querySelector('.book__btn-close');
  closeBtn.addEventListener('click', () => {
    book.classList.remove('open-booking');
  });
};
closeBook();

// -------------------------------------------------------------------
const openSuccess = () => {
  const successBtn = document.querySelector('#open-success');

  successBtn.addEventListener('click', () => {
    console.log('success');
    const success = document.querySelector('.book-success');
    success.classList.add('open-booking');
  });
};
openSuccess();

const closeSuccess = () => {
  const closeBtn = document.querySelector('.book-success__btn-close');
  closeBtn.addEventListener('click', () => {
    const success = document.querySelector('#success-close');
    success.classList.remove('open-booking');
  });
};

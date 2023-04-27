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
  const menu = document.querySelector('.menu');
  openBtn.addEventListener('click', () => {
    menu.classList.add('open');
  });
};

openMenu();

const closeMenu = () => {
  const menu = document.querySelector('.menu');
  menu.addEventListener('click', () => menu.classList.remove('open'));
};

closeMenu();

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

const openPopup = () => {
  const popupBtn = document.querySelectorAll('.dish');
  const popup = document.querySelector('.view-dish');

  popupBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      popup.classList.add('open-popup');
    });
  });
};
openPopup();

const closePopup = () => {
  const popup = document.querySelector('.view-dish');
  const closeBtn = document.querySelector('.view-dish__btn-close');
  closeBtn.addEventListener('click', () => {
    console.log('close');
    popup.classList.remove('open-popup');
  });
};

// -------------------------------------------------------------------
const openBook = () => {
  const bookBtns = document.querySelectorAll('#booking');
  console.log(bookBtns);
  const book = document.querySelector('.book');
  bookBtns.forEach((bookBtn) => {
    bookBtn.addEventListener('click', () => {
      book.classList.add('open-booking');
    });
  });
};
openBook();

const closeBook = () => {
  const book = document.querySelector('.book');
  const closeBtn = document.querySelector('.book__btn-close');
  closeBtn.addEventListener('click', () => {
    console.log('close');
    book.classList.remove('open-booking');
  });
};
closeBook();

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

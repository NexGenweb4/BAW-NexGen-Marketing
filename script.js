const hamburgerIcon = document.querySelector('.ham-icon');
const menu = document.querySelector('.menu');

hamburgerIcon.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});



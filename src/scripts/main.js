const menuBtn = document.querySelector('.hamburger-menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  document.querySelector('.header__menu-list').classList.toggle('header__menu-list--hidden');
})

document.querySelector('.header__menu-list').addEventListener('click', (event) => {
  if (event.target.classList.contains('menu-list__item-link')) {
    menuBtn.classList.toggle('is-active');
    document.querySelector('.header__menu-list').classList.toggle('header__menu-list--hidden');    
  }
})
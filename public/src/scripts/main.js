document.addEventListener('click', (event) => {
  const menuBtn = document.querySelector('.hamburger-menu');

  if (event.target.classList.contains('hamburger-menu') || event.target.classList.contains('hamburger-menu-item')) {
    menuBtn.classList.toggle('is-active');
    document.querySelector('.header__menu-list').classList.toggle('header__menu-list--hidden');
  } else if (event.target.classList.contains('menu-list__item') || event.target.classList.contains('menu-list')) {
    return;
  } else {
    menuBtn.classList.remove('is-active');
    document.querySelector('.header__menu-list').classList.add('header__menu-list--hidden');
  }
  
})
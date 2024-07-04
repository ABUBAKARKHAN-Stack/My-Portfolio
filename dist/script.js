const hamIcon = document.querySelector('#ham-icon')
const mobMenu = document.querySelector('.mobile-menu')

hamIcon.addEventListener('click', function () {
  const hamIconInner = document.querySelector('.ham-icon');
  hamIconInner.classList.toggle('active');
  mobMenu.classList.toggle('active')
  if (mobMenu.className.includes('active')) {
    mobMenu.style.transition = 'all 0.3s easy-in'
  }
});


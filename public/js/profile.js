const buttons = document.querySelectorAll('.dropdown-button');
const menus = document.querySelectorAll('.dropdown-menu');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    menus[index].classList.toggle('show');
  });
});
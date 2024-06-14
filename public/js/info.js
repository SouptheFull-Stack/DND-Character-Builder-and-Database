const buttons = document.querySelectorAll('.info-button');
const texts = document.querySelectorAll('.info-text');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    texts[index].classList.toggle('show');
  });
});
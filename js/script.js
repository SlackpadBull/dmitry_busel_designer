const buttons = document.querySelectorAll('.filters__btn');
const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('clicked');
  });
});
const buttons = document.querySelectorAll('.filters__btn');
const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {

    // активная кнопка
    buttons.forEach(btn => {
      btn.classList.remove('filters__btn--active');
    });

    button.classList.add('filters__btn--active');

    const filter = button.dataset.filter;

    // фильтрация карточек
    cards.forEach(card => {

      const category = card.dataset.category;

      const isVisible = filter === 'all' || filter === category;

      card.classList.toggle('hidden', !isVisible);

    });

  });
});
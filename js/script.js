const buttons = document.querySelectorAll('.filters__btn')
const cards = document.querySelectorAll('.card')
const cardDetail = document.querySelector('.card-detail')
const cardDetailBack = document.querySelector('.card-detail__back')
const portfolioHeader = document.querySelector('.portfolio__header')
const portfolioGrid = document.querySelector('.portfolio__grid')

// Фильтрация карточек
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // активная кнопка
        buttons.forEach(btn => {
            btn.classList.remove('filters__btn--active')
        })

        button.classList.add('filters__btn--active')

        const filter = button.dataset.filter

        // фильтрация карточек
        cards.forEach(card => {
            const category = card.dataset.category

            const isVisible = filter === 'all' || filter === category

            card.classList.toggle('hidden', !isVisible)
        })
    })
})

// Открытие детального просмотра карточки
cards.forEach(card => {
    card.addEventListener('click', e => {
        e.preventDefault()

        const title = card.querySelector('.subtitle').textContent
        const text = card.querySelector('.card__text').textContent
        const img = card.querySelector('.card__img').src

        document.querySelector('.card-detail__title').textContent = title
        document.querySelector('.card-detail__text').textContent = text
        document.querySelector('.card-detail__img').src = img
        document.querySelector('.card-detail__img').alt = title

        cardDetail.classList.remove('hidden')
        portfolioHeader.style.display = 'none'
        portfolioGrid.style.display = 'none'
    })
})

// Закрытие детального просмотра
cardDetailBack.addEventListener('click', () => {
    cardDetail.classList.add('hidden')
    portfolioHeader.style.display = 'flex'
    portfolioGrid.style.display = 'grid'
})

// 1. Находим все 9 карточек
const cards = document.querySelectorAll('.skill_card');

// 2. Запускаем цикл для каждой карточки
cards.forEach(card => {
    // 3. Вешаем слушатель клика
    card.addEventListener('click', () => {
        // 4. Переключаем класс, который запускает 3D-анимацию в CSS
        card.classList.toggle('is-flipped');
    });
});
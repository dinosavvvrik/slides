// Ниже подключаем объекты. Селектор работает как CSS: выбирает все элементы с классом "slide".
function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide'); // Получаем NodeList из всех слайдов

    // Добавляем активный класс первому выбранному слайду по умолчанию
    slides[activeSlide].classList.add('active');

    // Обход всех слайдов — вешаем обработчик на каждый
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses();        // Очищаем текущие активные
            slide.classList.add('active'); // Добавляем активность к нажатому слайду
        });
    }

    // Функция очистки всех активных классов (удаление 'active')
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}

// Запускаем плагин. В скобках указываем, какой слайд активен по умолчанию (отсчёт с 0)
slidesPlugin(4); // Например, активен "Aston"

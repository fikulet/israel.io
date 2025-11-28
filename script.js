// Плавная прокрутка для ссылок навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Обработчик кнопки "Узнать больше"
document.querySelector('.cta-button').addEventListener('click', function() {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Обработчик формы контактов
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input, textarea');
    const formData = {
        name: inputs[0].value,
        email: inputs[1].value,
        message: inputs[2].value
    };
    
    // Проверка заполнения формы
    if (formData.name && formData.email && formData.message) {
        // Имитация отправки формы
        console.log('Форма отправлена:', formData);
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        
        // Очистка формы
        this.reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});

// Добавление класса активности при прокрутке
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            // Секция находится в центре экрана
            section.style.opacity = '1';
        }
    });
});

// Анимация появления элементов при загрузке страницы
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.about-item, .city-card, .fact-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s forwards`;
    });
});

// Сглаживание навигационного меню при прокрутке
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// Мобильное меню (для будущих расширений)
function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar .container');
    
    if (window.innerWidth <= 768) {
        // Код для мобильного меню можно добавить здесь
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
});

// Обработчик изменения размера окна
window.addEventListener('resize', function() {
    initMobileMenu();
});

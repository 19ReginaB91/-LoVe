// Изменение текста при наведении
document.querySelector('h1').addEventListener('mouseover', function() {
    this.textContent = 'Ты лучший муж в мире!';
    this.style.color = 'blue';
});

document.querySelector('h1').addEventListener('mouseout', function() {
    this.textContent = 'Дорогой муж, это для тебя!';
    this.style.color = '#ff6347';
});

// Всплывающее сообщение при клике на гифку
document.querySelector('img').addEventListener('click', function() {
    alert('Ты нашел секретное сообщение! Люблю тебя!');
});

// Увеличение гифки при клике
document.querySelector('img').addEventListener('click', function() {
    this.style.transform = 'scale(1.2)';
    this.style.transition = 'transform 0.5s ease';

    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 500);
});

// Добавляем дождь из сердечек
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Случайное положение по горизонтали
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Случайная скорость падения
    document.getElementById('hearts').appendChild(heart);

    // Удаляем сердечко после окончания анимации
    setTimeout(() => {
        heart.remove();
    }, 5000); // время, соответствующее анимации падения
}

// Каждую секунду добавляем новое сердечко
setInterval(createHeart, 300);

// Автоматическое воспроизведение песни
window.onload = function() {
    var audio = document.getElementById('myAudio');
    
    // Попытка воспроизвести песню при загрузке страницы
    audio.play().then(() => {
        console.log('Песня начала играть автоматически.');
    }).catch(error => {
        // Если автозапуск заблокирован, добавляем событие для любого действия на странице
        console.log('Автозапуск был заблокирован, ожидаем действия пользователя для запуска.');
        document.body.addEventListener('click', function() {
            audio.play();
        }, { once: true }); // Воспроизведение начнется при первом клике пользователя
    });
};

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentIndex = 1;   // 当前活动下标为 1

next.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > circles.length) {
        currentIndex = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 1) {
        currentIndex = 1;
    }
    update();
});

function update() {
    // 控制圆圈
    circles.forEach((circle, index) => {
        if (index < currentIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // 控制进度条
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length-1) / (circles.length-1) * 100 + '%';

    // 控制按钮
    if (currentIndex === 1) {
        prev.disabled = true;
    } else if (currentIndex === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
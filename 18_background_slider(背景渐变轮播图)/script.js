const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

// 当前轮播图的 下标
let currentIndex = 0;

// 刷新页面时,先 更新 body的背景图
setBodyBg(currentIndex);

// 关键点:如何确定当前轮播图的下标
rightBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > slides.length - 1)
        currentIndex = 0;

    setSlideBg(currentIndex);
    setBodyBg(currentIndex);
});

leftBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0)
        currentIndex = slides.length - 1;
    setSlideBg(currentIndex);
    setBodyBg(currentIndex);
});

function setBodyBg(index) {
    body.style.backgroundImage = slides[index].style.backgroundImage;
}

// 设置当前轮播图
function setSlideBg(index) {
    // 取消 所有轮播图的 acitive类名
    slides.forEach(slide => slide.classList.remove('active'));
    // 根据 坐标 设置当前轮播图
    slides[index].classList.add('active');
}
const container = document.querySelector('.slider-container')
const slideLeft = container.querySelector('.left-slide')
const slideRight = container.querySelector('.right-slide')
const upBtn = container.querySelector('.up-button')
const downBtn = container.querySelector('.down-button')
// 轮播图的数量
const slidesLength = slideRight.querySelectorAll('div').length

let currentIndex = 0

// 关键点: 左边区起始位置从最后一个开始,因为它向上轮播
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

// 关键点:如何切换轮播图片
function changeSlide(direction) {
    const sliderHeight = sliderContainer.clientHeight

    if (direction === 'up') {
        currentIndex++
        if (currentIndex > slidesLength - 1) {
            currentIndex = 0
        }
    } else if (direction === 'down') {
        currentIndex--
        if (currentIndex < 0) {
            currentIndex = slidesLength - 1
        }
    }
    // 左边文字切换 当前下标*内部高度------向下走
    // slideLeft.style.transform = `translateY(${currentIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${currentIndex*100}vh)`

    // 右边图片切换 当前下标*内部高度(负) -----向上走
    slideRight.style.transform = `translateY(-${currentIndex * sliderHeight}px)`
}
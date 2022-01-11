const imgContainer = document.querySelector('#image-container')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')

const imgs = imgContainer.querySelectorAll('img')
const imgWidth = imgs[0].width

let currentIndex = 0

const intervalTime = 2000
// 定时轮播
let interval = setInterval(run, intervalTime)

// 自动轮播
function run() {
    currentIndex++
    changeImg()
}

// 重置轮播
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, intervalTime)
}

function changeImg() {
    // 第一张图之前
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1
        // 最后一张图之后
    } else if (currentIndex > imgs.length - 1) {
        currentIndex = 0
    }

    // 图片移动方式:父元素盒子移动(图片宽度*当前下标)像素,并且方向从右往左
    imgContainer.style.transform = `translateX(-${currentIndex * imgWidth}px)`
}

leftBtn.addEventListener('click', () => {
    currentIndex--
    changeImg()
    resetInterval()
})

rightBtn.addEventListener('click', () => {
    currentIndex++
    changeImg()
    resetInterval()
})
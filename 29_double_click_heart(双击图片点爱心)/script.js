// 点击次数
const timesEl = document.querySelector('#times')
const loveMe = document.querySelector('.loveMe')

// 点击时的时间
let clickTime = 0
// 已点击次数
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    // 第一次点击记录时间
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        // 双击间隔<800ms,生成小心心
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            // 双击间隔>800ms,重新计时
            clickTime = new Date().getTime()
        }
    }
})

// 关键点:如何创建心心心
function createHeart(e) {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const xInside = e.clientX - e.target.offsetLeft
    const yInside = e.clientY - e.target.offsetTop

    heart.style.left = `${xInside}px`
    heart.style.top = `${yInside}px`

    loveMe.appendChild(heart)

    timesEl.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}
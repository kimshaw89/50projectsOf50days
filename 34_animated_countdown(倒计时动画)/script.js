const numsEl = document.querySelectorAll('.nums span')
const counterEl = document.querySelector('.counter')
const finalEl = document.querySelector('.final')
const replayBtn = document.querySelector('#replay')

countDown()

// 重置
replayBtn.addEventListener('click', () => {
    resetDOM()
    countDown()
})


// 复位dom
function resetDOM() {
    counterEl.classList.remove('hide')
    finalEl.classList.remove('show')

    numsEl.forEach(num => num.classList.value = '')

    numsEl[0].classList.add('in')
}

// 关键点:倒计时动画
function countDown() {
    const theLastIndex = numsEl.length - 1

    numsEl.forEach((num, idx) => {
        num.addEventListener('animationed', (e) => {
            // 分三种情况:1开始,2倒数第二个数,3最后
            if (num.animationName === 'goIn' && idx !== theLastIndex) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (num.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                // 最终,倒计时隐藏,重置按钮显示
                counterEl.classList.add('hide')
                finalEl.classList.add('show')
            }
        })
    })
}
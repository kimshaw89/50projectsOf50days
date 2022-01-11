const panelEl = document.querySelector('#panel')
const ratingsContainerEl = panelEl.querySelector('.ratings-container')
const ratingEls = ratingsContainerEl.querySelectorAll('.rating')
const sendBtn = panelEl.querySelector('#send')

// 默认评价
let selectedRating = 'Satisfied'

// 评级点击事件
// 1.焦点父元素包含rating类名则:移除active/当前添加active/更新默认评价
// 2.焦点元素包含rating类名则...
ratingsContainerEl.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        // 关键点:就是这两个判断条件,点在容器上还是子元素上
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerText
    }

    if (e.target.classList.contains('rating')) {
        removeActive()
        e.target.classList.add('active')
        selectedRating = e.target.innerText
    }

})

// 提交事件:重新生成panel的html内容
sendBtn.addEventListener('click', (e) => {
    panelEl.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>感谢提交!</strong>
        <br>
        <strong>评价为: <span class="selected">${selectedRating}</span></strong>
        <p>因为有你,一日更比一日好!</p>
    `
})

// 函数:移除所有rating的active类名
function removeActive() {
    ratingEls.forEach(ratingEL => {
        ratingEL.classList.remove('active')
    })
}

// 所有界面
const screens = document.querySelectorAll('.screen')
// 开始按钮
const start_btn = document.querySelector('#start-btn')
// 所有选择虫子的按钮
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
// 最后的游戏容器
const game_container = document.querySelector('#game-container')
// 时间元素
const timeEl = game_container.querySelector('#time')
// 分数元素
const scoreEl = game_container.querySelector('#score')
// 提示信息元素
const messageEl = game_container.querySelector('#message')

// 秒
// 分数
// 已捕捉的虫子数:对象
let seconds = 0
let score = 0
let selected_insect = {}

// 开始按钮事件:第一个界面添加up类
start_btn.addEventListener('click', () => screens[0].classList.add('up'))

// 选择"喜欢的"虫子:
// 所有虫子按钮添加点击事件:将其中img的src和alt赋值给自定义对象
// 第二个界面(选择虫子)添加up类,同时延迟一秒生成虫子,并开始游戏
choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt }

        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

// 开始游戏函数: 每秒计时一次
function startGame() {
    setInterval(increaseTime, 1000)
}

// 计时函数:秒为取余60,分为向下取整之秒除以60;同时注意,分与秒小于10,前+0;将分秒赋值给元素
// 最后seconds自加
function increaseTime() {
    let s = seconds % 60
    let m = Math.floor(seconds / 60)
    s = s < 10 ? `0${s}` : s
    m = m < 10 ? `0${m}` : m
    timeEl.innerText = `时间: ${m}:${s}`
    seconds++
}

// 生成虫子函数: 生成虫子div,top/left用随机坐标,包含img(生成:包含src和alt)
// 添加点击捕虫事件,添加到父元素
function createInsect() {
    const insect = document.createElement('div')
    const { x, y } = randomCoordinate()
    insect.classList.add('insect')
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}">`
    insect.addEventListener('click', catchInsect)
    game_container.append(insect)
}

// 随机坐标函数: 随机数*(视口高度/宽度-200)+虫子图片宽/高,返回{x,y}
function randomCoordinate() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

// 捕虫函数: 先加分,再添加当前元素的caught类,同时延时2s移除当前元素,最后添加虫子(抓得越快,虫子越多)
function catchInsect() {
    addScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsect()
}

// 添加虫子函数: 定时1s/1.5s生成虫子
function addInsect() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

// 加分函数: score自增,大于19时显示最后信息,将score赋值给元素
function addScore() {
    score++
    if (score > 19) {
        messageEl.classList.add('visible')
    }
    scoreEl.innerText = `分数: ${score}`
}


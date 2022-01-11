const container = document.querySelector('#container')
// 彩虹七色
const colors = [
    '#FF0000',
    '#FF7F00',
    '#FFFF00',
    '#00FF00',
    '#00FFFF',
    '#0000FF',
    '#8B00FF'
]

// 小方块默认颜色
const defaultBackgroundColor = `#1d1d1d`
const defaultColor = `#000`

// 小方块个数
const SQUARES = 500

// 添加小方块以及事件
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}


// 设置颜色
function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    /* 关键点:小方块有朦胧感的关键就是 盒子阴影 */
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// 移除颜色
function removeColor(element) {
    element.style.background = defaultBackgroundColor
    element.style.boxShadow = `0 0 2px ${defaultColor}`
}

// 获得随机颜色
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
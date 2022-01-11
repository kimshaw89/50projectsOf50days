const containerEl = document.querySelector('.container')
// 随机图片url
const randomURL = 'https://source.unsplash.com/random/'
// 每行个数
const rows = 5

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${randomURL}${getRondomSize()}`
    containerEl.appendChild(img)
}

// 关键点:生成随机尺寸,然后添加在网址后,变成随机图片
function getRondomSize() {
    return `${getRondomNr()}x${getRondomNr()}`
}

function getRondomNr() {
    return Math.floor(Math.random() * 10) + 300
}
const boxseContainer = document.querySelector('#boxes')
const btn = document.querySelector('#btn')
const smallBoxWidth = 125

btn.addEventListener('click',()=>boxseContainer.classList.toggle('big'))

function createBoxes() {
    // 双重循环打盒子(4*4)
    for (let i = 0; i< 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            // 关键点:每个盒子显示的位置不同
            // j决定x轴,i决定y轴,125为小盒子宽度
            box.style.backgroundPosition = `${-j*smallBoxWidth}px ${-i*smallBoxWidth}px`
            boxseContainer.appendChild(box)
        }
    }
}

createBoxes()
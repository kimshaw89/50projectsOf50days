const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

let text = "你要爱着就像从来没有被伤害过,你要舞蹈着就像从来没有人在看你。 --狄更斯"

let idx = 1
let speed = 300 / speedEl.value

writeText()
function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
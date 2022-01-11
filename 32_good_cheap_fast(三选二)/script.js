const toggles = document.querySelectorAll('.toggle')
const career = document.querySelector('#career')
const family = document.querySelector('#family')
const dream = document.querySelector('#dream')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
    littleTrick(e.target)
}))

// 关键点:三选二
function littleTrick(aim) {
    if (career.checked && family.checked && dream.checked) {
        if (career === aim) {
            dream.checked = false
        }

        if (family === aim) {
            career.checked = false
        }

        if (dream === aim) {
            family.checked = false
        }
    }
}
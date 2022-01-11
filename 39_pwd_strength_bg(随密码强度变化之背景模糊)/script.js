const background = document.querySelector('#background')
const pwd = document.querySelector('#password')

pwd.addEventListener('input', (e) => {
    const pwdLength = e.target.value.length
    // 模糊值:密码超过10位=完全清晰
    const blurValue = 20 - pwdLength * 2
    background.style.filter = `blur(${blurValue}px)`
})
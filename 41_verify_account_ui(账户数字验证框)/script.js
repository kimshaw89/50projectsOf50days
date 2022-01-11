const codes = document.querySelectorAll('.code')

// 默认焦点放在第一个验证码上
codes[0].focus()

// 循环添加事件:输入一位验证码后自动跳转后一位输入框中
// 或者 后退键自动回到前一个输入框中
codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            // 当前输入框内容设定为空
            // 关键点:不如此设置,单个输入框可输入无限的数字
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})


// 密码显示框
const resultEl = document.querySelector('#result')
// 密码长度
const lengthEl = document.querySelector('#length')
// 是否包含大写
const uppercaseEl = document.querySelector('#uppercase')
// 是否包含小写
const lowercaseEl = document.querySelector('#lowercase')
// 是否包含数字
const numbersEl = document.querySelector('#numbers')
// 是否包含字符
const symbolsEl = document.querySelector('#symbols')
// 生成按钮
const generatorEl = document.querySelector('#generate')
// 复制按钮
const clipboardEl = document.querySelector('#clipboard')

// 所有随机函数封装成对象
const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// 复制密码到剪贴板
clipboardEl.addEventListener('click',
    // 方法一:execCommand方法
    // (e) => {
    // const password = resultEl.innerText
    // if (!password) { return }
    // // 关键点:复制到剪贴板过程
    // const textarea = document.createElement('textarea')
    // // 密码复制给文本区的值
    // textarea.value = password
    // document.body.appendChild(textarea)
    // // 选中文本区,并复制
    // textarea.select()
    // document.execCommand('copy')
    // // 移除文本区
    // textarea.remove()
    // alert('密码已复制到剪贴板中')}

    // 方法二:Clipboard对象writeText()异步方法
    async () => {
        try {
            const password = resultEl.innerText
            if (!password) { return }
            await navigator.clipboard.writeText(password)
            alert('密码已复制到剪贴板中')
        } catch (error) {
            alert('复制失败:', error)
        }
    }
)

// 生成事件
generatorEl.addEventListener('click', () => {
    // 注意点:变量前的+ 代表转number类型
    const length = +lengthEl.value
    const hasUpper = uppercaseEl.checked
    const hasLower = lowercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    // 生成随机密码
    resultEl.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol)
})

// 生成随机密码
function generatePassword(length, upper, lower, number, symbol) {
    // 已生成的密码
    let generatedPassword = ''
    // >0等于有效,<0等于无效
    const typesCount = upper + lower + number + symbol
    // 过滤掉值为false的选项
    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0])

    // 设置选项都未选中.返回空字符串
    if (typesCount === 0) {
        return ''
    }

    // 注意点:循环步进为 已选选项值
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            // 获取有效的选项的键
            const funcName = Object.keys(type)[0]
            // 逐一生成密码
            generatedPassword += randomFunc[funcName]()
        })
    }

    // 返回最终的密码:之前算法有固定格式,不够复杂
    // 看我自己写的终极版:打乱所有顺序后再截取
    let finalPasswordArr = []
    generatedPassword.split('').forEach(item => {
        // 关键点:Math.round()必须四舍五入
        const newIndex = Math.round(Math.random() * finalPasswordArr.length)
        finalPasswordArr.splice(newIndex, 0, item)
    })

    const finalPassword = finalPasswordArr.join('').slice(0, length)
    return finalPassword
}

// 生成随机大写数字
function getRandomUpper() {
    // 关键点: 大写A码元索引为97,因为 返回26个随机大写字母
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// 生成随机小写字母
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// 生成随机个位数
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// 生成随机字符
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>,./'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
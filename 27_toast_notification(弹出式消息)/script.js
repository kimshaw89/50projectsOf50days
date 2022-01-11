const btn = document.querySelector('.btn')
const toasts = document.querySelector('#toasts')

const messages = [
    "程序员",
    "程序媛",
    "猛男",
    "女神"
]

const msgTypes = ['info', 'success', 'warn', 'error']

btn.addEventListener('click', () => createNotification())

// 生成提示消息
function createNotification(msg = null, msgType = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(msgType ? msgType : getRandomMsgType())
    notif.innerText = msg ? msg : getRandomMessage()

    toasts.appendChild(notif)

    // 移除消息的时机
    setTimeout(() => notif.remove(), 3000)
}

// 随机消息
function getRandomMessage() {
    return 'message from ' + messages[Math.floor((Math.random() * messages.length))]
}

// 随机消息类型
function getRandomMsgType() {
    return msgTypes[Math.floor(Math.random() * msgTypes.length)]
}
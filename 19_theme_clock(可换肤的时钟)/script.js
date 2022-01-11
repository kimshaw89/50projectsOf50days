const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

// 星期
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// 七曜
const days = ['日耀日', '月耀日', '火耀日', '水耀日', '木耀日', '金耀日', '土耀日'];
// 月份
// const months = ['Jan', 'Feb', 'Mar', 'Spr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const months = ['寅月', '卯月', '辰月', '巳月', '午月', '未月', '申月', '酉月', '戌月', '亥月', '子月', '丑月']

// 切换皮肤
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerText = '深色皮肤';
    } else {
        html.classList.add('dark');
        e.target.innerText = '浅色皮肤'
    }
});

// 页面刷新时,自动启动时钟
setTime();

// 每秒刷新一次
setInterval(setTime, 1000);

// 设置时间
function setTime() {
    const now = new Date();
    // 时,分,秒
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // 24小时制转 12小时制
    const hoursForClock = hours < 12 ? hours : hours - 12;
    // 上午AM 还是 下午PM
    const ampm = hours < 12 ? 'AM' : 'PM';
    // 月,日,星期
    const month = months[now.getMonth()];
    const date = now.getDate();
    const day = days[now.getDay()];

    // 设置 时针,分针,秒针
    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
    // 分小于10,则填上0
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${day},${month} <span class='circle'>${date}</span>`;
}

// 关键点:如何设置 时针,分针,秒针的旋转角度
function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_max;
}
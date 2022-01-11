const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;

const time = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(time);
    }

    loadText.innerText = `${load}%`;    // 进度值
    loadText.style.opacity = scale(load, 0, 100, 1, 0);     //  进度值逐渐透明
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;  //  背景图逐渐清晰
}

// 关键点
// 此函数作用为: 将处于[in_min,in_max]范围中的num 等比例映射到 [out_in,out_max]中去
function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
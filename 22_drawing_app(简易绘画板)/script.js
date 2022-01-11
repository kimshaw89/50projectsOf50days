const canvas = document.getElementById('canvas');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const context = canvas.getContext('2d');

// 线条粗细
let size = 10;
let isPressed = false;
// 设置 默认颜色为 黑色
colorEl.value = 'black';
let color = colorEl.value;
let x;
let y;

// 点击鼠标时, 记录坐标值
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

// 每一个载入的HTML文档都会成为Document对象
// 鼠标按键松开时 , 坐标为 未定义
document.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

// 画板添加 鼠标移动划线 的事件
canvas.addEventListener('mousemove', (e) => {
    // 只有当点击鼠标时,才开始划线
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        // 画圆结束后,画笔终点变起点
        x = x2;
        y = y2;
    }
});

// 增加 线条粗细
increaseBtn.addEventListener('click', () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

// 减少 线条粗细 
decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});

// 引用 用户选择的颜色
colorEl.addEventListener('change', (e) => color = e.target.value);

// 清除画板内所有东西
clearEl.addEventListener('click', () => context.clearRect(0, 0, canvas.width, canvas.height));

// 画圆
function drawCircle(x, y) {
    // 创建路径
    context.beginPath();
    // 画圆:半径为线条宽度
    context.arc(x, y, size, 0, Math.PI * 2);
    // 填充颜色(注意大小写)
    context.fillStyle = color;
    // 填充
    context.fill();
}

// 划线
function drawLine(x1, y1, x2, y2) {
    context.beginPath();    // 创建路径
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);  // 划线,从 1 到 2
    context.strokeStyle = color;    // 颜色
    context.lineWidth = size * 2;   // 线条粗细为 宽度*2
    context.stroke();       // 开始画图
}

// 应用线条粗细到页面
function updateSizeOnScreen() {
    sizeEl.innerText = size;
}
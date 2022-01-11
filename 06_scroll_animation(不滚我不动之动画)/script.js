const boxes = document.querySelectorAll('.box');

// 触发器的时机:到达页面视口的4/5
const triggerButtom = window.innerHeight / 5 * 4;

window.addEventListener('scroll',checkBoxes);

// 页面第一次加载,需要此函数,不然页面一片空白
checkBoxes();

// 关键点:触发的判定
function checkBoxes() {
    boxes.forEach(box => {
        // 获取 盒子顶部 相对视口的位置
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerButtom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
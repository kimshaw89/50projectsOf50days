const buttons = document.querySelectorAll('.ripple');

buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        // 点击时,鼠标所在的坐标
        const x = e.clientX;
        const y = e.clientY;
        // 鼠标在焦点元素内的偏移量
        const btnTop = e.target.offsetTop;
        const btnLeft = e.target.offsetLeft;
        // 鼠标在焦点元素中的坐标
        const xInside = x - btnLeft;
        const yInside = y - btnTop;
        // 鼠标点击时产生的涟漪
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);
        // 0.5S 后删除 涟漪
        setTimeout(() => circle.remove(), 500);
    });
});
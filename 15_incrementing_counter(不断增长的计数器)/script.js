const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    // 起始为0
    counter.innerText = '0';

    // 关键点:计数器如何跳动
    function updateCounter() {
        // 目标值:变量前 + ,意思为转为number类型    真有意思
        const target = +counter.getAttribute('data-target');
        // 起始值
        const current = +counter.innerText;
        // 增量: ceil()向上取整
        const increment = Math.ceil(target / 200);

        if (current < target) {
            // ceil() 向上取整
            counter.innerText = current + increment;
            // 设置间隔时间,给计算留时间
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
});


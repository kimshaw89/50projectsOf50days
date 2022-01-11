const tagsEl = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

// 页面渲染后,第一时间聚焦输入文本区域
textarea.focus();

textarea.addEventListener('keyup', (e) => {
    // 输入值:事件触发元素的值(不冒泡)
    createTags(e.target.value);

    if (e.key === 'Enter') {
        // 定时器:清空输入框的值,可以避免重复提交
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
});

// 根据输入值,筛选再创建 选择项 的标签
function createTags(input) {
    // 难点1:输入值的筛选(去除两边空格后不能为空),然后再拼接
    const tagsArr = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    // 每次输入后,都必须清空输入值,不然数值会连接在一起
    tagsEl.innerHTML = '';
    // 创建 选择项 标签 
    tagsArr.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

// 难点二:随机选择(先反复横跳,最后才选中一个标签)
function randomSelect() {
    // 反复随机挑选的间隔时间,单位(100ms)
    const times = 30;

    // 在多个 选项 里反复横跳
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        // 如果randomTag是有效的标签
        if (randomTag !== undefined) {
            highlightTag(randomTag);

            setTimeout(() => {
                unHighlightTag(randomTag);
            }, 100);
        }
    }, 100);

    // 这个定时器,才控制 反复随机的 时间长短
    setTimeout(() => {
        clearInterval(interval);

        // 结束 反复横跳后 最终选定一个 随机标签
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, 100 * times);
}

// 选择随机标签
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    // 难点3:随机标签下标为: 随机值 * 标签长度 ,再向下取整
    return tags[Math.floor(Math.random() * tags.length)];
}

// 将标签高亮 
function highlightTag(tag) {
    tag.classList.add('highlight');
}

//  取消标签高亮
function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
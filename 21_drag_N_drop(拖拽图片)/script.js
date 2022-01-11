const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// 事件顺序应该为: 选中 - 拖动 drag - 结束拖动
// 当用户开始拖拽一个元素或选中的文本时触发 (开始拖动)
fill.addEventListener('dragstart', dragStart);
// 当拖拽操作结束时触发 (比如松开鼠标按键或敲“Esc”键) (结束拖动)
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    // 事件顺序: 拖动 -- 悬停 -- 离开悬停 -- 落下
    // 当元素或选中的文本被拖到一个可释放目标上时触发（每100毫秒触发一次）(拖动)
    empty.addEventListener('dragover', dragOver);
    // 当拖拽元素或选中的文本到一个可释放目标时触发(悬停)
    empty.addEventListener('dragenter', dragEnter);
    // 当拖拽元素或选中的文本离开一个可释放目标时触发(离开悬停)
    empty.addEventListener('dragleave', dragLeave);
    // 当元素或选中的文本在可释放目标上被释放时触发(落下)
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.classList.add('hold');
    // 此处加一个定时器,是怕 执行速度过快?元素拿不起来??
    // invisible 是为了拿起图片时,半透明
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    // this.classList.remove('hold');
    this.className = 'fill';
}

function dragOver(e) {
    // 默认情况下, 元素/数据是不能放置到其他元素中
    // 因此我们要拖动元素,必须得防止 元素的默认行为
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}

// 松开鼠标时,添加图片元素到 当前方框里
function dragDrop() {
    this.className = 'empty';
    this.appendChild(fill);
}
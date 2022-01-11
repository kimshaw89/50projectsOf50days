const rangeEl = document.querySelector('#range')

rangeEl.addEventListener('input', (e) => {
    // 转number类型
    const value = +e.target.value
    const labelEl = e.target.nextElementSibling

    // 拖动条/拖动条进度 的元素宽度
    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
    const labelWidth = getComputedStyle(labelEl).getPropertyValue('width')

    // -2是去掉单位,转换为num类型
    const numRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2)
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2)

    // 拖动条的最大值和最小值
    const min = +e.target.min
    const max = +e.target.max

    // 关键点:当前百分比拖动条所占的像素(默认300/2=150) - 拖动条进度框 宽度的一半 + 等比放大系数
    const left = value * (numRangeWidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10)

    console.log(value * (numRangeWidth / max),scale(value, min, max, 10, -10));
    labelEl.style.left = `${left}px`
    labelEl.innerText = value
})

// 关键点:此函数系本项目第三次出现,作用为将一个坐标等比放大或缩小为另一个坐标
function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
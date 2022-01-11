// 小瓶子
const smallCups = document.querySelectorAll('.cup-small');
// 大瓶子剩余容量
const liters = document.getElementById('liters');
// 大瓶子已装多少水 百分比
const percentage = document.getElementById('percentage');

const remained = document.getElementById('remained');

// updateBigCup();

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index));
});

// 难点:如何装满已选择的小杯子
function highlightCups(index) {
    // 如果 已选的是最后一杯,且已装满水的,下标减一(最后一杯变为空)
    if (index === 7 && smallCups[index].classList.contains('full')) index--;
    // 另外,如果 已选的已满,而它的下一个杯子不满,则下标减一()
    else if (smallCups[index].classList.contains('full')
    && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--;
    }
    // 遍历所有小杯子,下标小于 指定坐的杯子 都加满,否则 移除 加满
    smallCups.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
}

// 装满大杯子
function updateBigCup() {
    // 装满水的小杯子的  数量
    const fullcups = document.querySelectorAll('.cup-small.full').length;
    // 小杯子的总数
    const totalCups = smallCups.length;

    // 剩余空间
    if (fullcups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullcups / 1000)}L`;
    }

    // 水占比
    if (fullcups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        const percent = fullcups / totalCups;
        percentage.style.visibility = 'visible';
        percentage.style.height = `${percent * 330}px`;
        percentage.innerText = `${percent * 100}%`;
    }

}
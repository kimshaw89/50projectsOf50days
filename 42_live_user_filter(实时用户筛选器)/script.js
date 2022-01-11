// 查询input
const filterEl = document.querySelector('#filter')
// 查询结果ul
const resultEl = document.querySelector('#result')

const listItems = []

getDate()

filterEl.addEventListener('input', (e) => filterDate(e.target.value))

// 异步获取数据
async function getDate() {
    const res = await fetch('https://randomuser.me/api?results=10')
    const { results } = await res.json()

    // 每次查询新数据之前,先清除查询结果框的内容
    resultEl.innerHTML = ``

    // 循环建立用户列表
    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city},${user.location.country}</p>
        </div>
        `
        resultEl.appendChild(li)
    });
}

// 搜索之后,过滤数据
function filterDate(searchTerm) {
    // 迭代每条数据,符合搜索条件的去掉隐藏,否则加上隐藏
    listItems.forEach(li => {
        if (li.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            li.classList.remove('hide')
        } else {
            li.classList.add('hide')
        }
    })
}
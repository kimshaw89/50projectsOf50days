const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((list, index) => {
    list.addEventListener('click', function () {
        hideAllContents()
        hideAllList()

        contents[index].classList.add('show')
        this.classList.add('active')
    })
})

// 隐藏所有图片
function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}

// 隐藏所有导航键
function hideAllList() {
    listItems.forEach(list => list.classList.remove('active'))
}
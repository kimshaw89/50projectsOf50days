const addBtn = document.querySelector('#add')

const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

// 关键点
function addNewNote(text = '') {
    // 创建note元素
    const note = document.createElement('div')
    note.classList.add('note')

    // 写入html
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    // 关键点:以上两行代码:text有值则显示main,无值则显示textarea 

    // 绑定各个元素
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    // 赋值并渲染
    textArea.value = text
    // marked插件方法
    main.innerHTML = marked(text)

    // 添加各个事件
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLS()
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)
        updateLS()
    })

    document.body.appendChild(note)
}

// 储存各本文数据到localStorage
function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}
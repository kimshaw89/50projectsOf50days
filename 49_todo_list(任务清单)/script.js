const form = document.querySelector('#form')
const input = form.querySelector('#input')
const todosUL = form.querySelector('#todos')

// 取出todos(localStorage)并json解析
// 如果todos存在,则遍历至待做事项
const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach((todo)=>addTodo(todo))
}

// 表单提交事件:(取消默认,添加待做事项)
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    addTodo()
})

// 函数:添加待做事项
// 待做事项可input获取,也可作函数参数输入
// 创建li,li赋值,添加左击事件(切换completed,更新LS),右击事件(取消默认,移除元素,更新LS)
// 元素添加li,输入栏赋值为空,更新LS
function addTodo(todo) {
    let text = input.value
    if (todo) {
        text = todo.text
    }

    if (text) {
        const todoLi = document.createElement('li')
        todoLi.innerText = text

        todoLi.addEventListener('click', () => {
            todoLi.classList.toggle('completed')

            updateLocalStorage()
        })

        todoLi.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoLi.remove()

            updateLocalStorage()
        })

        todosUL.appendChild(todoLi)
        input.value = ''

        updateLocalStorage()
    }

}

// 函数:更新localStorage
// 获取所有li元素，并建立空数组
// 遍历将li的内容，是否包含completed推送至空数组
// 将数组json化并存入localStorage
function updateLocalStorage() {
    const todoLis = todosUL.querySelectorAll('li')
    const todos = []

    todoLis.forEach((todoLi) => {
        todos.push({
            text: todoLi.value,
            completed: todoLi.classList.contains('complated')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}

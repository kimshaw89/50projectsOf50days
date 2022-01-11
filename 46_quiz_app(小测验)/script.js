const quizData = [
    {
        question: "浏览器中使用的语言是哪一个?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "CSS全称是?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "HTML全称是?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "JavaScript是哪一年正式发布的?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quizEl = document.querySelector('#quiz')
const questionEl = quizEl.querySelector('#question')
const answerEls = document.querySelectorAll(".answer")
const aText = quizEl.querySelector('#a_text')
const bText = quizEl.querySelector('#b_text')
const cText = quizEl.querySelector('#c_text')
const dText = quizEl.querySelector('#d_text')
const submitBtn = document.querySelector('#submit')

console.log(answerEls);

let currentQuiz = 0
let score = 0

loadQuiz()

submitBtn.addEventListener('click', () => {
    const answerId = getSelectedId()
    console.log(answerId);

    // 如果 答案对,加分
    if (answerId) {
        if (answerId === quizData[currentQuiz].correct) {
            score++
        }

        // 题目下标+1
        currentQuiz++
        // 如果不是最后一题,则读取题目
        if (currentQuiz < quizData.length) {
            loadQuiz()
            // 否则,生成成绩单
        } else {
            // 有意思的地方:直接html中加入点击重启页面的js函数
            quizEl.innerHTML = `
            <h2>您答对了${score}/${quizData.length}</h2>
            <button onclick="location.reload()">重置</button>
        `
        }
    }
})

// 全部答案取消选中
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

// 读取问题
function loadQuiz() {
    deselectAnswers()

    const currentQuizDate = quizData[currentQuiz]

    questionEl.innerText = currentQuizDate.question
    aText.innerText = currentQuizDate.a
    bText.innerText = currentQuizDate.b
    cText.innerText = currentQuizDate.c
    dText.innerText = currentQuizDate.d
}

// 获取已选答案的id
function getSelectedId() {
    let answerId = ''

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            // 注意此处不可直接返回,return会中断循环
            answerId = answerEl.id
        }
    })

    return answerId
}

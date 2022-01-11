const header = document.querySelector("#header");
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const authorName = document.getElementById('name')
const authorDate = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

// 模拟网速延时
setTimeout(getDate, 2500);
function getDate() {
    header.innerHTML =
        `<img src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80' alt=''>`
    title.innerHTML =
        `终有一天，孩子需要独自面对生活。`
    excerpt.innerHTML =
        `Every child eventually comes to a bridge that they must cross alone.`
    profile_img.innerHTML =
        `<img src="https://randomuser.me/api/portraits/men/18.jpg" alt="">`
    authorName.innerHTML = `anonymity`
    authorDate.innerHTML = `Dec 13,2021`

    // 加载数据完成后,移除 所有 动态背景效果
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
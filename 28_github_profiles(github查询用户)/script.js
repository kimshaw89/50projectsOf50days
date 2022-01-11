// 本章主要目的是为了熟悉 axios的使用

const APIURL = 'https://api.github.com/users/'

const form = document.querySelector('#form')
const main = document.querySelector('#main')
const search = form.querySelector('#search')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if (user) {
        getUser(user)

        search.value = ''
    }
})

// 获取用户数据
async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    } catch (err) {
        createErrorCard('No profile with this username')
    }
}

// 获取仓库
async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch (err) {
        createErrorCard('Problem fetching repos')
    }
}



// 生成用户卡片
function createUserCard(user) {
    const userID = user.name || user.login
    // 个人简历
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    // 生成用户卡片
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${userID}</h2>
            ${userBio}
            <ul>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>

            <div id="repos"></div>
        </div>
    </div>
    `

    main.innerHTML = cardHTML
}

// 生成错误卡片
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

// 生成仓库卡片
function addReposToCard(repos) {
    const reposEl = document.querySelector('#repos')

    repos
        .slice(0, 5)     // 前6个公共代码仓库
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

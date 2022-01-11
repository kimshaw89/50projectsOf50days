const pokeContainer = document.querySelector('#poke-container')
const pokemonCount = 150
// 各系宝可梦的背景颜色
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

// 宝可梦的类型列表
const mainTypes = Object.keys(colors)

fetchPokemons()

// 逐步生成宝可梦图鉴卡片
async function fetchPokemons() {
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i)
    }
}

// 获取宝可梦数据
async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const date = await res.json()
    createPokemonCard(date)
}

// 生成宝可梦卡片
function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    // 名字:首字母大写
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    // 填充字符串
    const id = pokemon.id.toString().padStart(3, '0')

    const pokemonTypes = pokemon.types.map(type => type.type.name)
    // 查找类型是否存在
    const type = mainTypes.find(type => pokemonTypes.indexOf(type) > -1)
    const color = colors[type]

    pokemonEl.style.backgroundColor = color

    pokemonEl.innerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">   
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
                <small class="type">
                    Type: <span>${type}</span>
                </small>
        </div>
    `

    pokeContainer.appendChild(pokemonEl)
}
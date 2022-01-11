// 关键点:本章仅仅是为了熟悉 async/await 以及 then()的用法
// 哦,还有 fetch()的用法

const jokeEl = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// async/await()
// async function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     const res = await fetch('https://icanhazdadjoke.com', config);

//     const date = await res.json();

//     jokeEl.innerHTML = date.joke;
// }

// then()
function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then((res) =>  res.json() )
        .then((date) => {jokeEl.innerHTML = date.joke});
}
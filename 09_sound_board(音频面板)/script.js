// 吧audio的id放入一个数组
const audioes = document.querySelectorAll('#audio');
// 所有audio的id值
let sounds = [];

audioes.forEach(audio => sounds.pull(audio.id));

const buttons = document.querySelector('#buttons');
// 关键点:根据audio的值创建每一个button并添加事件
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = btn;

    btn.addEventListener('click', () => {
        stopPlay();

        // 同id名的audio开始播放
        document.getElementById(sound).play();
    });

    buttons.appendChild(btn);
});

function stopPlay() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        // 所有歌曲暂停播放 并 播放进度归0
        song.pause();
        song.currentTime = 0;
    });
}
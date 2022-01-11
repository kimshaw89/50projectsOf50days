// 本章关键点:熟悉 各个键码
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (event) => {
    // 注意点 event.key的空格值为'' 空字符串
    insert.innerHTML = `
        <div class='key'>
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>
        
        <div class='key'>
            ${event.keyCode}
            <small>eventkeyCode</small>
        </div>

        <div class='key'>
            ${event.code}
            <small>eventcode</small>
        </div>
      `;
});
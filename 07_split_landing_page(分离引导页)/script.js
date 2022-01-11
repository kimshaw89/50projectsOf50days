const container = document.querySelector('.container');
const leftSplit = document.querySelector('.left');
const rightSplit = document.querySelector('.right');

leftSplit.addEventListener('mouseenter',()=>container.classList.add('hover-left'));
leftSplit.addEventListener('mouseleave',()=>container.classList.remove('hover-left'));


rightSplit.addEventListener('mouseenter',()=>container.classList.add('hover-right'));
rightSplit.addEventListener('mouseleave',()=>container.classList.remove('hover-right'));
let btn = document.querySelector('#btn');
let text = document.querySelector('#text');
btn.addEventListener('click', function() {
    if (text.innerText === 'The sign has changed!') {
        text.innerText = 'The sign has been clicked!';
    } else {
        text.innerText = 'The sign has changed!';
    }
});


let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let countText = document.querySelector('#count');
let reset = document.querySelector('#reset');
let count = 0;
plus.addEventListener('click', function() {
    count = count + 1;
    countText.textContent = count;
});
minus.addEventListener('click', function() {
    if (count ==0) {
        alert('Count cannot be less than 0');
    } else {
        count = count - 1;
        countText.textContent = count;
    }
});
reset.addEventListener('click', function() {
    count = 0;
    countText.textContent = count;

});

const color = document.querySelector('#change-color');

color.addEventListener('click', function () {
    document.body.classList.toggle('red');

    if (document.body.classList.contains('red')) {
        color.innerText = 'Reset color';
    } else {
        color.innerText = 'Change Color';
    }
});
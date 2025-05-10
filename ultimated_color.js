const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++ ) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const startChangingColor = function () {
    document.body.style.backgroundColor = randomColor();
};
const stopChangingColor = function () {};

document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)


// for value constantaly add use "+=" expect "="
// Math.random is for generate the random colour .
// Math.floor is use to take complete value of any digit of math not decimal


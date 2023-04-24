let body = document.querySelector('body');
let red = document.querySelector('#red');
let green = document.querySelector('#green');
let blue = document.querySelector('#blue');
let rgbColor = document.querySelector('.rgb-color-name span');

body.style.background = `rgb(${red.value},${green.value},${blue.value})`;
rgbColor.textContent = `RGB (${red.value}, ${green.value}, ${blue.value})`;

function changeValue()
{
    body.style.background = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    rgbColor.textContent = `RGB (${red.value}, ${green.value}, ${blue.value})`;
}

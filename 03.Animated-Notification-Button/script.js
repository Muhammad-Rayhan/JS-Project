let notify = document.querySelector('.notify');
let addNotify = document.querySelector('button');

let count = notify.getAttribute('data-count');
addNotify.addEventListener('click', function(){
    count++;
    notify.classList.remove('notify-count');
    notify.classList.add('notify-counts');
    if(count > 99){
        notify.setAttribute("data-count", `99+`);
    } else {
        notify.setAttribute("data-count", count);  
    }
})
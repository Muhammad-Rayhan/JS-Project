let button = document.querySelector("#show-hide");
let bodyContent = document.querySelector(".body-content");
let sidebar = document.querySelector(".sidebar");
let list = document.querySelectorAll("ul li");
let firstList = document.querySelector(".firstList");

firstList.classList.add('active');

bodyContent.classList.add('toggle-body-content');
button.addEventListener('click', function(){
    bodyContent.classList.toggle('toggle-body-content');
    sidebar.classList.toggle('toggle-sidebar');
})


list.forEach(function(value){
    value.addEventListener('click', function(e){
        list.forEach(function(value){
            if(value.classList.length > 0){
                value.classList.remove('active');
            }
        });
        
        if(e.target.tagName == 'A'){
            e.target.closest('li').classList.add('active');
        } else{
            e.target.classList.add('active');
        }
    })
})
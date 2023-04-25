let imgClick = document.querySelector(".container img");
let input = document.querySelector(".container input");

imgClick.src="images/eye-slash.png";
imgClick.addEventListener("click", function(){
    input.type = input.type == "password" ? "text" : "password";
    imgClick.src = input.type == "password" ? "images/eye-slash.png" : "images/eye.png";
})
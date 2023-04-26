let button = document.querySelector("button");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

//Set Cookie
button.addEventListener('click', function(){
    if(username.value != '' && password.value != ''){
        let userdata = {
            username: username.value.toLowerCase().trim(),
            password: password.value.toLowerCase().trim()
        }
        document.cookie =`userinfo=${JSON.stringify(userdata)}; expires=Fri, 28 Apr 2023 00:00:00 UTC; path=/;`; //Cookie Set
        username.value = '';
        password.value = '';
    } else {
        let text = '';
        if(username.value == '' && password.value == ''){
            text = `User Name & Password Not Found!`;
        } else if(username.value == ''){
            text = `User Name Not Found!`;
        } else if(password.value == '') {
            text = `Password Not Found!`;
        }
        alert(text);
    }
})

//Get Cookie Data
function getCookieData()
{
    let info = `userinfo=`;
    if(document.cookie.indexOf(info) == 0 && document.cookie != undefined){
        return document.cookie.substring(info.length);
    } else {
        return `Cookie Data Not Found!`;
    }
}

//Show on Login Page
let data = getCookieData();
if(data != 'Cookie Data Not Found!'){
    let info = JSON.parse(data);
    username.value = info.username;
    password.value = info.password;
} else {
    alert("Cookie Not Set!");
}

//Get Cookie
function getCookie()
{
    alert(getCookieData());
}

//Delete Cookie
function deleteCookieData()
{
    username.value = '';
    password.value = '';
    document.cookie = `userinfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
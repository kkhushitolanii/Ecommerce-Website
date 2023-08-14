// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav= document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    bar.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
 loginForm.style.marginLeft = "-50%";
 loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
 loginForm.style.marginLeft = "0%";
 loginText.style.marginLeft = "0%";
});
/*signupLink.onclick = (()=>{
 signupBtn.click();
 return false;
});
*/

const signinBtn = document.querySelector(".signin-btn")
const signupBtn = document.querySelector(".signup-btn")
const profileP = document.querySelector(".profile-p")
const profileImg = document.querySelector(".profile-img")
const logoutBtn = document.querySelector(".logout-btn")
logoutBtn.addEventListener('click',()=>{
    localStorage.setItem('currentUser',JSON.stringify(''))
})
console.log(signinBtn);
const currentUser = JSON.parse(localStorage.getItem('currentUser'))
if (currentUser) {
    profileP.textContent=`Welcome ${currentUser}`
    profileP.style.display="block"
    profileImg.style.display="block"
    logoutBtn.style.display="block"
    signinBtn.classList.add('loggedin')
    signupBtn.classList.add('loggedin')
    
}
else{
    
    signinBtn.style.display="block"
    signupBtn.style.display="block"
}
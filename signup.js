const fullname = document.querySelector("#fullname")
const email = document.querySelector("#email")
const create = document.querySelector("#create")
const confirm = document.querySelector("#confirm")

const users =[
    {"fullname":"CALEB D","email":"caleb@gmail.com","password":"password"},
    {"fullname":"CALEB D","email":"caleb@gmail.com","password":"password"},
    {"fullname":"CALEB D","email":"caleb@gmail.com","password":"password"},
    {"fullname":"CALEB D","email":"caleb@gmail.com","password":"password"}
]
localStorage.setItem('users',JSON.stringify(users))
console.log(users);

const signupForm = document.querySelector("#signupform")


signupForm.addEventListener('submit',(event)=>{
event.preventDefault()
console.log("clicked");
    if(create.value === confirm.value) {
        const users=JSON.parse(localStorage.getItem('users'))
        alert("Account created succesfully.")
        let newUser ={"fullname":fullname.value,"email":email.value,"password":create.value}
        users.push(newUser);
        localStorage.setItem('users',JSON.stringify(users))
        console.log(users);
        window.location.href="signin.html"
    }
    else{
        alert("password don't match")
    }

})

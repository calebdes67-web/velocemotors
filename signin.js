

let loginform = document.querySelector("#loginform")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

console.log(email);
console.log(password);



loginform.addEventListener('submit',(event)=>{

    event.preventDefault()
    const users =JSON.parse(localStorage.getItem('users'))

    console.log("login clicked");
    console.log(email.value);
    console.log(password.value);
  let found = false
    for(let user of users){
        
        if (email.value===user.email && password.value===user.password) {
        const currentUser = user.fullname
        localStorage.setItem('currentUser',JSON.stringify(currentUser))
        found = true
        }
        
        // window.location.href="signin.html"
    }
    if(found){
        alert("Login Succesfully");
        
        window.location.href="home.html";

        
    }
    else{
        alert("Invalid credentials...");
            
    }
    
})


const fullname = document.querySelector("#fullname")
const email = document.querySelector("#email")
const Send = document.querySelector("#Send")

// const messages=[
//     {"fullname":"CALEB D","email":"caleb@gmail.com","message":"" },
//     {"fullname":"CALEB D","email":"caleb@gmail.com","message":"" },
//     {"fullname":"CALEB D","email":"caleb@gmail.com","message":"" },
//     {"fullname":"CALEB D","email":"caleb@gmail.com","message":"" }
// ]
// localStorage.setItem('messages',JSON.stringify(messages))
// console.log(messages);

console.log(fullname);
console.log(email);
console.log(Send);

form.addEventListener('submit',(event)=>{
    console.log("clicked");
    const messages=JSON.parse(localStorage.getItem('messages'))
    let newMessages ={"fullname":fullname.value,"email":email.value,"message":Send.value}
    alert("Message Sent")
    messages.push(newMessages);
    localStorage.setItem('messages',JSON.stringify(messages))
    console.log(messages);
})

         
        


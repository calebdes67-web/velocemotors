

const cars=[
    {"name":"LAMBORGHINI URUS","price":"price:$278,654","image":"IMG_20260809_123252_176.jpg" },
    {"name":"BUGATTI CHIRON","price":"price:$3,760,000","image":"IMG_20260809_123217_233.jpg" },
    {"name":"FERRARI MONZA","price":"price:$4,000,000","image":"IMG_20260809_123233_171.jpg" },
    {"name":"AUDI R8 COUPE","price":"price:$252,000","image":"IMG_20260809_123220_282.jpg" },
    {"name":"MCLAREN ARTURA","price":"price:$250,000","image":"IMG_20260809_123242_278.jpg" },
    {"name":"PORSCHE 911","price":"price:$150,000","image":"download (5).png" },
    {"name":"MERCEDES-BENZ E-CLASS","price":"price:$90,000","image":"IMG_20260809_123241_964.jpg" },
    {"name":"ROLLS-ROYCE SPECTRE","price":"price:$450,000","image":"IMG_20260809_123256_725.jpg" },
    {"name":"LAMBORGHINI AVENTADOR","price":"price:$400,000","image":"IMG_20260809_123221_494.jpg" },
    {"name":"FORD MUSTANG","price":"price:$70,000","image":"download (2).png" },
    {"name":"BMW M4","price":"price:$100,000","image":"IMG_20260809_123202_064.jpg" },
    {"name":"FERRARI DAYTONA SP3","price":"price:$2,250,000","image":"IMG_20260809_123233_240.jpg" }
]
const container = document.querySelector(".container")
cars.map((car)=>{
    const card = document.createElement("div")
    card.classList.add("card")
    const image = document.createElement("img")
    image.src=car.image
    const title = document.createElement("h1")
    title.textContent=car.name
    const price = document.createElement("p")
    price.textContent = car.price
    const button = document.createElement("button")
    button.onclick=()=>buy(car)
    button.textContent = "BUY IT NOW"
    card.appendChild(image)
    card.appendChild(title)
    card.appendChild(price)
    card.appendChild(button)
    container.appendChild(card)

})
// localStorage.setItem('messages',JSON.stringify(customers))
// console.log(customers);

// container.addEventListener('submit',(event)=>{
//     console.log("clicked");
//     const customers=JSON.parse(localStorage.getItem('customers'))
//     let newCustomers ={"fullname":fullname.value,"email":email.value,"password":password.value}

//     customers.push(newCustomers);
//     localStorage.setItem('customers',JSON.stringify(customers))
//     console.log(customers);
// })
function buy(car) {
    console.log("buy is clicked"); 
    const currentCar=car
    localStorage.setItem('currentCar',JSON.stringify(currentCar))
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if(currentUser!==""){
        window.location.href="payment.html"
    } 
    else{
        window.location.href="signin.html"
    }
}
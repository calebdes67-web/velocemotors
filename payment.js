const cardnumber = document.querySelector('#cardnumber')
const expirationdate = document.querySelector('#expirationdate')
const cvc = document.querySelector('#cvc')
const nameoncard = document.querySelector('#nameoncard')
const button = document.querySelector('#button')

const payments =[
    {"fullname":"CALEB D","email":"caleb@gmail.com","password":"password"},
    {"fullname":"CALEB D","email":"caleb@gmail.com","password":"password"},
    {"fullname":"CALEB D","email":"caleb@gmail.com","password":"password"},
    {"fullname":"CALEB D","email":"caleb@gmail.com","password":"password"}
]
localStorage.setItem('payments',JSON.stringify(payments))
console.log(payments);

const paymentForm = document.querySelector("#paymentform")

paymentForm.addEventListener('submit',(event)=>{
event.preventDefault()
    console.log("clicked");
    const payments=JSON.parse(localStorage.getItem('payments'))
    let newPayments ={"cardnumber":cardnumber.value,"expirationdate":expirationdate.value,"cvc":cvc.value,"nameoncard":nameoncard.value}
    alert("Paid Succesfully")
    payments.push(newPayments);
    localStorage.setItem('payments',JSON.stringify(payments))
    console.log(payments);
    window.location.href="home.html"
})

const carName=document.querySelector(".car-name")
const carPrice=document.querySelector(".car-price")
const car=document.querySelector(".car")
const currentCar = JSON.parse(localStorage.getItem('currentCar'))
car.style.backgroundImage=`url(${currentCar.image})`
carName.textContent=currentCar.name
carPrice.textContent=currentCar.price

function getInfoOfUsers(){
    var data = localStorage.getItem("user")
    var userdata = JSON.parse(data)
    event.preventDefault()
    console.log(userdata[0])
    var email = document.getElementById('exampleInputEmail1').value
    var pass = document.getElementById('exampleInputPassword1').value
    if(email==userdata[0] && pass==userdata[1]){
        window.location="booking.html"

    }
}
var btn = document.getElementById('bttn')
btn.addEventListener('click',getInfoOfUsers)
var click =0

function hide(){
    var hi = document.getElementById('h')
    hi.innerHTML=""
    var div_heading = document.createElement('div')
    var h3 = document.createElement('h3')
   h3.textContent = "Make Payment Here"
   div_heading.append(h3)
   hi.append(div_heading)
   click++
   for(var i =click;i<10;i++){
   var div_bill = document.createElement('div')
   div_bill.textContent="PayBill Number :"+ 15861+i
    var div_form  = document.createElement('div')
    var form = document.createElement('form')
    var label = document.createElement('label')
    var input = document.createElement('input')
    label.textContent = "Full Name"
    label.append(input)
    form.append(label)
    div_form.append(form)
    hi.append(div_bill,div_form)
   }
}
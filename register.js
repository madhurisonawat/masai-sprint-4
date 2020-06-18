
function storeInfo(){

    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
 
    var arr=[ email,pass]
  
    event.preventDefault()
  
    var data = localStorage.getItem("user")

    var userdata = JSON.parse(data) || []
    userdata.push(arr)

    var str = JSON.stringify(userdata)
    localStorage.setItem("data", str)
    var ema =document.getElementById('email').value 
    var password =document.getElementById('pass').value 
    var address =document.getElementById('inputAddress').value 
    var city =document.getElementById('inputCity').value 
    var state =document.getElementById('inputState').value 
    var zip =document.getElementById('inputZip').value 

if(ema=="" || password =="" || address=="" || city=="" ||state=="" ||zip==""){
    alert('All fields are required')
}

else{
 
window.location ="index1.html"
}
}

var sub = document.getElementById('sub')
sub.addEventListener('click',storeInfo)



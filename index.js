function storeInfo(){
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
    var arr =[ email,pass]
    localStorage.setItem("user",JSON.stringify(arr))
    console.log(arr)
    event.preventDefault()
    window.location ="login.html"
}




var sub = document.getElementById('sub')
sub.addEventListener('click',storeInfo)
 
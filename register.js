
function storeInfo(){
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
 
    var arr=[ email,pass]
  
    event.preventDefault()
  
    var data = localStorage.getItem("user")

    var userdata = JSON.parse(data) || []
    for(var i=0;i<userdata.length;i++){
        if(email==userdata[i][0]){
            alert('already registered')
        }
    }
    userdata.push(arr)

    var str = JSON.stringify(userdata)
    localStorage.setItem("data", str)
    window.location ="login.html"
}




var sub = document.getElementById('sub')
sub.addEventListener('click',storeInfo)
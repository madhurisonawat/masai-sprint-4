 

function storeInfo(){

    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
 
    var arr=[ email,pass]
  
    event.preventDefault()
  
    var data = localStorage.getItem("data")
  
  
    var userdata = JSON.parse(data) || []

    for(var i=0;i<userdata.length;i++){
        if(userdata[i][0]==email){
            alert("already registered")
          return false
        }
    }
    var inputuser = document.querySelectorAll('input')
  
        for(var i=0;i<inputuser.length;i++){
            if(inputuser[i].value==""){
                alert("All fields are required")
            return false
            }
   
        }
        userdata.push(arr)

    var str = JSON.stringify(userdata)
    localStorage.setItem("data", str)
   
 
    window.location ="index1.html"

}

var sub = document.getElementById('sub')
sub.addEventListener('click',storeInfo)


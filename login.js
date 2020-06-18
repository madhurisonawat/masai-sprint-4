function getInfoOfUsers(){
    var data = localStorage.getItem("data")
    var userData = JSON.parse(data)
    event.preventDefault()
    //console.log("hi")
   console.log(userData)
    var email = document.getElementById('exampleInputEmail1').value
    var pass = document.getElementById('exampleInputPassword1').value
    for(var i=0;i<userData.length;i++){
        if(email==userData[i][0] && pass==userData[i][1]){
            //console.log(data[i][0])
            window.location="booking.html"
    
        }
    }
   
}
var btn = document.getElementById('bttn')
btn.addEventListener('click',getInfoOfUsers)



 




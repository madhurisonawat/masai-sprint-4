function getInfoOfUsers(){
    var data = localStorage.getItem("user")
    var userdata = JSON.parse(data)
    event.preventDefault()
    console.log(userdata[0])
    var email = document.getElementById('exampleInputEmail1').value
    var pass = document.getElementById('exampleInputPassword1').value
    if(email==userdata[0] && pass==userdata[1]){
        window.location="register.html"

    }
}
var btn = document.getElementById('bttn')
btn.addEventListener('click',getInfoOfUsers)
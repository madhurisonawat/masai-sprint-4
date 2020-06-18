var sub = document.getElementById('sub')
sub.addEventListener('click',display)

var customerArr=[]
function display(){
   
    var mes =document.getElementById('mes').value
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
event.preventDefault()

var date =new Date()
   var item = {
    date: date,
    email:email,
   name:name
  
   
}
customerArr.push(item);
document.getElementById('name').value=""
document.getElementById('email').value=""
document.getElementById('mes').value=""
create.call(item)
}


function create(){
    var table= document.getElementById('tab')
    var tr = document.createElement('tr')
    for (var i = 0; i < customerArr.length; i++) {
        var item = customerArr[i];
        tr.innerHTML=""
        var td1 = document.createElement('td')
        td1.textContent=i+1
        var td2 = document.createElement('td')
        td2.textContent=item.name
        var td3 = document.createElement('td')
        td3.textContent=item.email
        var td4 = document.createElement('td')
        td4.textContent=item.date
        tr.append(td1,td2,td3,td4)
      
    }
} 
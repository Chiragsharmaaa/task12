
const myForm = document.getElementById('my-form') 
const userName = document.getElementById('name') 
const userEmail = document.getElementById('email') 
const button = document.getElementById('form-button') 

 
button.addEventListener('click',onSubmit) 
 
function onSubmit(e){ 
  e.preventDefault() 
 
  let user_Obj = { 
    name: userName.value, 
    email: userEmail.value 
  } 
 
  const obj_stringified = JSON.stringify(user_Obj) 
  
  localStorage.setItem(userEmail.value,obj_stringified) 

  userName.value = '' 
  userEmail.value = '' 
} 

let arrOfKeys = Object.keys(localStorage)    

arrOfKeys.forEach(function(key){ 

  let stringifiedDetails = localStorage.getItem(key) 
 
  let userDetails = JSON.parse(stringifiedDetails) 

  const nameOfUser = document.createElement('h4') 
  const emailOfUser = document.createElement('h4') 
 
  nameOfUser.innerHTML = userDetails.name 
  emailOfUser.innerHTML = userDetails.email 
  const parentName = document.getElementById('divName') 
  const parentEmail = document.getElementById('divEmail') 
  parentName.appendChild(nameOfUser) 
  parentEmail.appendChild(emailOfUser) 
})
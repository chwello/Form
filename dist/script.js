const form = document.getElementById('form');
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const birthDate = document.getElementById("birthdate");
const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirm_email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

function showError(input, message){
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function checkRequired(inputArr){
  inputArr.forEach((input) => {
      if(input.value.trim() === ''){
          showError(input, "This field is required")
      }else{
          showSuccess(input)
      }
  })
}

function checkLength(input, min, max){
  if(input.value.length < min){
      showError(input, `This field must be at least ${min} characters`)
  }else if(input.value.length > max){
      showError(input, `This field must be less than ${max} characters`)
  }else{
      showSuccess(input)
  }
}

function checkPasswordsMatch(input1, input2){
  if(input1.value === input2.value){
      showSuccess(input)
  }else{
      showError(input2, 'Passwords do not match')
  }
}

function checkEmailMatch(input1, input2){
  if(input1.value === input2.value){
      showSuccess(input)
  }else{
      showError(input2, 'Email do not match')
  }
}

// check firstname
function checkFirstName(input){
  const reg = /^[A-Za-z. ]+$/
  if(reg.test(input.value.trim())){
      showSuccess(input)
  }else{
      showError(input, 'First name should only contain letters and periods')
  }
}
// check lastname
function checkLastName(input){
  const reg = /^[A-Za-z]+$/
  if(reg.test(input.value.trim())){
      showSuccess(input)
  }else{
      showError(input, 'Last name should only contain letters')
  }
}
// check birtdate
function checkBirthdate(input){
  const reg = /^[0-9\-/]+$/
  if(reg.test(input.value.trim())){
      showSuccess(input)
  }else{
      showError(input, 'Invalid birthdate format. Please use numbers and dashes (-) or slashes (/)')
  }
}
// check email
function checkEmail(input){
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(reg.test(input.value.trim())){
      showSuccess(input)
  }else{
      showError(input, 'Invalid email format. Please include the @ symbol')
  }
}
// check confirm Email
function checkConfirmEmail(input){
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(reg.test(input.value.trim())){
      showSuccess(input)
  }else{
      showError(input, 'Invalid email format. Please include the @ symbol')
  }
}
//check password
function checkPassword(input){
  const reg = /^[A-Za-z. ]+$/
  if(reg.test(input.value.trim())){
      showSuccess(input)
  }else{
      showError(input, 'Password must be at least 8 characters long')
  }
}
//check confirm password
function checkConfirmPassword(input){
  const reg = /^[A-Za-z. ]+$/
  if(reg.test(input.value.trim())){
      showSuccess(input)
  }else{
      showError(input, 'Password must be at least 8 characters long')
  }
}


form.addEventListener('submit', (e) => {
 e.preventDefault()
 checkRequired([firstName,lastName, birthDate ,email, confirmEmail,password, confirmPassword])
 checkLength(password, 8, 25)
 checkPasswordsMatch(password, confirmPassword)
 checkEmailMatch(email, confirmEmail)
 checkFirstName(firstName)
 checkLastName(lastName)
 checkBirthdate(birthDate)
 checkEmail(email)
 checkConfirmEmail(confirmEmail)
 checkPassword(password)
 checkConfirmPassword(confirmPassword)
})
//handle
function handleSubmit(event) {
  event.preventDefault(); 
  alert("Form successfully submitted!");
}
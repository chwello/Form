const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const bdate = document.getElementById('bdate')
const email = document.getElementById('email')
const cemail = document.getElementById('cemail')
const password = document.getElementById('password')
const confirmPass = document.getElementById('confirmPass')

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function checkRequired(inputArr){
  inputArr.forEach((input) => {
      if(input.value.trim() === ''){
        setErrorFor(input, "This field is required")
      }else{
        setSuccessFor(input)
      }
  })
}

function checkfname(input){
  const reg = /^[a-zA-Z]+(?:[.'\s][a-zA-Z]+)*$/
  if(reg.test(input.value.trim())){
    setSuccessFor(input)
  }else{
    setErrorFor(input, 'First name should only contain letters and periods')
  }
}

function checklname(input){
  const reg = /^[a-zA-Z]+$/;
  if(reg.test(input.value.trim())){
    setSuccessFor(input)
  }else{
    setErrorFor(input, 'Last name should only contain letters')
  }
}

function checkbirthdate(input){
  const reg = /^[0-9/-]+$/;
  if(reg.test(input.value.trim())){
    setSuccessFor(input)
  }else{
    setErrorFor(input, 'Please use numbers and dashes (-) or slashes (/)')
  }
}

function checkEmail(input){
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if(reg.test(input.value.trim())){
    setSuccessFor(input)
  }else{
    setErrorFor(input, 'Invalid email')
  }
}

function checkEmailsMatch(input1, input2){
  if(input1.value === input2.value){
    setSuccessFor(input)
  }else{
    setErrorFor(input2, 'Emails do not match')
  }
}

function checkLength(input, min, max){
  if(input.value.length < min){
    setErrorFor(input, `This field must be at least ${min} characters`)
  }else if(input.value.length > max){
    setErrorFor(input, `This field must be less than ${max} characters`)
  }else{
    setSuccessFor(input)
  }
}

function passwordsMatch(input1, input2){
  if(input1.value === input2.value){
    setSuccessFor(input)
  }else{
    setErrorFor(input2, 'Passwords do not match')
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkRequired([fname, lname, bdate, email, cemail, password, confirmPass])
  checkfname(fname)
  checklname(lname)
  checkbirthdate(bdate)
  checkEmail(email)
  checkEmailsMatch(email, cemail)
  checkLength(password, 8, 15)
  passwordsMatch(password, confirmPass)
  
  

})
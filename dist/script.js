const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const bdate = document.getElementById('bdate')
const email = document.getElementById('email')
const cemail = document.getElementById('cemail')
const password = document.getElementById('password')
const confirmPass = document.getElementById('confirmPass')
const inputs = document.querySelectorAll('input');

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
  if(input.value.trim() === ''){
    setErrorFor(input, 'First name is required');
  } else {
    const reg = /^(?:[a-zA-Z]+|[a-zA-Z]+[.'\s]?[a-zA-Z]+\.?)$/
    if(reg.test(input.value.trim())){
      setSuccessFor(input)
    } else {
      setErrorFor(input, 'First name should only contain letters and periods')
    }
  }
}


function checklname(input){
  if(input.value.trim() === ''){
    setErrorFor(input, 'Last name is required');
  } else {
    const reg = /^[a-zA-Z]+$/;
    if(reg.test(input.value.trim())){
      setSuccessFor(input);
    } else {
      setErrorFor(input, 'Last name should only contain letters');
    }
  }
}


function checkbirthdate(input){
  if(input.value.trim() === ''){
    setErrorFor(input, 'Birthday is required');
  } else {
    const reg = /^[0-9/-]+$/;
    if(reg.test(input.value.trim())){
      setSuccessFor(input)
    } else {
      setErrorFor(input, 'Please use numbers and dashes (-) or slashes (/)')
    }
  }
}

function checkEmail(input){
  if(input.value.trim() === ''){
    setErrorFor(input, 'Email is required');
  } else {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(reg.test(input.value.trim())){
      return true;
    } else {
      setErrorFor(input, 'Invalid email');
    }
  }
}

function checkEmailsMatch(input1, input2){
  if(input1.value.trim() === ''){
    setErrorFor(input1, 'Email is required');
  } else if(input2.value.trim() === ''){
    setErrorFor(input2, 'Confirm Email is required');
  } else {
    const bothEmailsValid = checkEmail(input1) && checkEmail(input2);

    if(input1.value === input2.value && bothEmailsValid){
      setSuccessFor(input1);
      setSuccessFor(input2);
    } else {
      setErrorFor(input2, 'Emails do not match');
    }
  }
}

function checkLength(input, min, max){
  if(input.value.length < min){
    setErrorFor(input, `This field must be at least ${min} characters`)
  }else if(input.value.length > max){
    setErrorFor(input, `This field must be less than ${max} characters`)
  }else{
    return true
  }
}

function passwordsMatch(input1, input2){

  const passwordValid = checkLength(input1, 8, 15)

  if((input1.value === input2.value) && input1.value.trim().length > 0 && passwordValid){
    setSuccessFor(input1)
  }else{
    setErrorFor(input2, 'Passwords do not match')
  }
}

function clearFields(){
  inputs.forEach(input => {
   if (input.type !== 'button' && input.type !== 'submit' && input.type !== 'reset') {
     input.value = '';
   }
 });
}


form.addEventListener('submit', (e) => {
  
  e.preventDefault()
  checkRequired([fname, lname, bdate, email, cemail, password, confirmPass])
  checkfname(fname)
  checklname(lname)
  checkbirthdate(bdate)
  checkEmailsMatch(email, cemail)
  passwordsMatch(password, confirmPass)
  
  const isError = form.querySelectorAll('.error').length > 0;

  if (!isError) {
   
    alert('Form successfully submitted!');
    
    
  }
  
})
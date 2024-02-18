const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const bdate = document.getElementById('bdate')

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


form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkRequired([fname, lname, bdate])
  checkfname(fname)
  checklname(lname)
  checkbirthdate(bdate)


 
    alert('Form successfully submitted!');

})
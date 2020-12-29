function submit(){
    
  validateEmpty();
  validateCo(); 
  validateEmail();
  validateCheck(); 
  
    
}
// runSuccessMsg();


function validateEmpty (){
  if (document.getElementById('email').value ===""){
    document.getElementById('emailError').innerText = "Provide email";
    document.getElementById('emailError').className = "error";
  }
}


function validateCo(){
  if (document.getElementById('email').value.endsWith(".co")){       
    // alert("YESSSSSSSSSSSSS");
    document.getElementById('emailError').innerText = "We are not accepting subscriptions from Columbia";
    document.getElementById('emailError').className = "error";
    return false;

  }  else {
      // alert("NOOOOOOOOOO");
      document.getElementById('emailError').style.display = "none";
      return true;
  }
}

function validateEmail(mail){ 
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById('email').value)
    && (document.getElementById('email').value !== "")){
    // alert("You have entered an VALID email address!")
    document.getElementById('emailError').style.display = "none";
    return true;
  }
    document.getElementById('emailError').innerText = "Please provide a valid e-mail address";
    document.getElementById('emailError').className = "error";
    return false;
}

function validateCheck(){
  if (document.getElementById('check').checked){
    document.getElementById('checkboxError').style.display = "none";
    // alert("YESSSSSSSSSSSSS")
  } else {   
      // alert("NOOOOOOOOOO");
      document.getElementById('checkboxError').innerText = "You must accept the terms and conditions";
      document.getElementById('checkboxError').className = "error";
      return false;
  }
} 

function runSuccessMsg() {  

  // alert('SUCCESS');
  if (validateEmpty() == true && validateCo() == true && validateEmail() == true && validateCheck() == true){

  document.getElementsByClassName('success-logo')[0].style.display = "inline";
  // document.getElementById('emailError').style.display = "none";    
  document.getElementById('main-thought').innerText = "Thanks for subscribing!"    
  document.getElementsByClassName('subheading')[0].innerText = "You have successfully subscribed to our email listing. Check your email for the discount code."
  document.getElementsByClassName('form-container')[0].style.display = "none";    
  }
}

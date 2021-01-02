submit = () => {
  
  let validEmail = validateEmail();
  let validCo = validateCo();   
  let validCheck = validateCheck(); 
  let validEmpty = validateEmpty();     
  
  if ((validEmail === true) && 
    (validCo === true) && 
    (validCheck === true) && 
    (validEmpty === true)){
    runSuccessMsg();
  }
}


validateEmpty = () => {
  if (document.getElementById('email').value ===""){
    document.getElementById('emailError').innerText = "Please provide a valid e-mail address";
    document.getElementById('emailError').className = "error";
    return false;
  }
  else {
    return true;
  }
}

validateCo= ()=>{
  if (document.getElementById('email').value.endsWith(".co")){       
    document.getElementById('emailError').innerText = "We are not accepting subscriptions from Columbia";
    document.getElementById('emailError').className = "error";
    return false
  }else{
    return true
  }
}

validateEmail = (mail) => { 
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById('email').value))
    {
    document.getElementById('emailError').innerText = "";
    return true;
  }
    document.getElementById('emailError').innerText = "Please provide a valid e-mail address";
    document.getElementById('emailError').className = "error";
    return false;
}

validateCheck = () => {
  if (document.getElementById('check').checked){
    document.getElementById('checkboxError').innerText = "";
    return true;
  } else {   
    document.getElementById('checkboxError').innerText = "You must accept the terms and conditions";
    document.getElementById('checkboxError').className = "error";
    return false;
  }
} 

runSuccessMsg = () => {    
  document.getElementsByClassName('success-logo')[0].style.display = "inline-block";    
  document.getElementById('heading').innerText = "Thanks for subscribing!"    
  document.getElementsByClassName('subheading')[0].innerText = "You have successfully subscribed to our email listing. Check your email for the discount code."
  document.getElementsByClassName('form-container')[0].style.display = "none"; 
  document.getElementById('emailError').style.display = "none";      
}

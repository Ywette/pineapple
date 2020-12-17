function submit(){
  
  validateEmpty();
  validateEmail();
  validateCheck(); 
  validateCo(); 
  runSuccessMsg();
}


function runSuccessMsg() {  
  alert('yessslnfvljnfd');

  document.getElementsByClassName('success-logo')[0].style.display = "inline";
  document.getElementById('emailError').style.display = "none";    
  document.getElementById('main-thought').innerText = "Thanks for subscribing!"    
  document.getElementsByClassName('subheading').innerText = "You have successfully subscribed to our email listing. Check your email for the discount code."
  document.getElementsByClassName('input-submit-container').disabled = true;    
  
} 

function validateEmpty(){
  if(document.getElementById('email').value === ""){      
    
    document.getElementById('emailError').innerText = "Email address is required";
    document.getElementById('emailError').style.display = "inline";
    
    return false;  
  }else{
    // alert('yesssssssss');
    document.getElementById('emailError').style.display = "none";
    return true;
  }
  
}

function validateEmail(mail){ 
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById('email').value)&&(document.getElementById('email').value !== ""))
  {
    // alert("You have entered an VALID email address!")
    document.getElementById('emailError').style.display = "none";
    return (true)
  }
    document.getElementById('emailError').innerText = "Please provide a valid e-mail address";
    document.getElementById('emailError').style.display = "inline";
    return (false)
}

function validateCheck(){
  if (document.getElementById('check').checked){
    document.getElementById('checkboxError').style.display = "none";
    // alert("YESSSSSSSSSSSSS")
    return true;
  } else {   
      // alert("NOOOOOOOOOO");
      document.getElementById('checkboxError').innerText = "You must accept the terms and conditions";
      document.getElementById('checkboxError').style.display = "inline";
    return false;
  }
} 

function validateCo(mail){
  if (document.getElementById('email').value.endsWith(".co")){       
    // alert("YESSSSSSSSSSSSS");
    document.getElementById('emailError').innerText = "We are not accepting subscriptions from Columbia";
    document.getElementById('emailError').style.display = "inline";
      return false
  }  else {
      // alert("NOOOOOOOOOO");
      document.getElementById('emailError').style.display = "none";
      return true;
  }
}



// document.getElementsByClassName('success-logo')[0].style.display = "inline";
// document.getElementById('emailError').style.display = "none";    
// document.getElementById('main-thought').innerText = "Thanks for subscribing!"    
// document.getElementsByClassName('subheading').innerText = "You have successfully subscribed to our email listing. Check your email for the discount code."
// document.getElementsByClassName('form-container').style.display = "none";

// function submit(){  
  
//   var submit = document.getElementById("submit");
//   var emailError1 = "Please provide valid email address";
//   var emailError2 = "Email address is required";
//   var emailError3 = "We are nor accepting subscriptions from Colombia emails";
//   var emailError = document.getElementById('emailError');
//   var checkboxError = document.getElementById('checkboxError');
//   var emailValue = document.getElementById('email').value;
//   var successMsg = document.getElementById('main-thought');
//   var successP = document.getElementsByClassName('subheading');
//   var icSuccess = document.getElementsByClassName('success-logo')[0];

//   // console.log("yeeeeej");

//   if (emailValue == ""){
//     icSuccess.style.display = "none";
//     emailError.style.display = "inline";
//     emailError.innerHTML = emailError2;
//   }
  
//   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)){
//     return true;

//     var emailValue = document.getElementById('email').value;
//     var successMsg = document.getElementById('main-thought');
//     var successP = document.getElementsByClassName('subheading')[0];
//     var icSuccess = document.getElementsByClassName('success-logo')[0];

//     emailError.style.display = "none";    
//     successMsg.innerText = "Thanks for subscribing!"    
//     successP.innerText = "You have successfully subscribed to our email listing. Check your email for the discount code."
//     icSuccess.style.display = "inline";
    

//   }
//   validateCheckbox();
  
  
// }

// validateCheckbox=()=>{ 

//   if (document.getElementById('check').checked){
//     return true;
//   } else {   
//     // alert("validation NOT successful");
//     document.getElementById('checkboxError').innerText = "You must accept the terms and conditions";
//     // return false;
//   }
//   console.log(valid)
// }

// validateEmailInput=()=>{
//   var emailError1 = "Please provide valid email address";
//   var emailError2 = "Email address is required";
//   var echeckboxError = "You must accept the terms and conditions"; 
//   var emailError = document.getElementById('emailError');
//   var checkboxError = document.getElementById('checkboxError');
//   var emailValue = document.getElementById('email').value;
//   var successMsg = document.getElementById('main-thought');
//   var successP = document.getElementsByClassName('subheading');
//   var icSuccess = document.getElementsByClassName('success-logo')[0];

//   // console.log("yeeeeej");

//   if (emailValue == ""){
//     icSuccess.style.display = "none";
//     emailError.style.display = "inline";
//     emailError.innerHTML = emailError2;


//   }else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)){
//     var emailError1 = "Please provide valid email address";
//     var emailValue = document.getElementById('email').value;
//     var successMsg = document.getElementById('main-thought');
//     var successP = document.getElementsByClassName('subheading')[0];
//     var icSuccess = document.getElementsByClassName('success-logo')[0];

//     emailError.style.display = "none";    
//     successMsg.innerText = "Thanks for subscribing!"    
//     successP.innerText = "You have successfully subscribed to our email listing. Check your email for the discount code."
//     icSuccess.style.display = "inline";
//     emailValue = "";

//   } else  if (emailValue.endsWith(".co") && emailValue.includes("@")){

//     var emailError3 = "We are nor accepting subscriptions from Colombia emails";
//     var emailValue = document.getElementById('email').value;

//     document.getElementById("emailError").innerText = emailError3;
//   }  
// }

// // validateCo=()=>{  

// //     if (emailValue.endsWith(".co") && emailValue.includes("@")){

// //       var emailError3 = "We are nor accepting subscriptions from Colombia emails";
// //       var emailValue = document.getElementById('email').value;

// //       document.getElementById("emailError").innerText = emailError3;
// //     }
// // }

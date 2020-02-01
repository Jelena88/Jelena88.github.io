const peopleNumber=document.querySelector('.peopleNumber'); 
const date=document.querySelector('#start'); 
const name=document.querySelector('#name'); 
const phone=document.querySelector('#phone'); 
const time=document.querySelector('#time');
const email=document.querySelector('#email');
const paragraf=document.querySelector('.paragraf');
const btn=document.getElementById('unosDugme');

btn.addEventListener('click', onclick)

function onclick() {
   
    if (peopleNumber.value == null || date.value == "" || name.value == "" || phone.value == null || time.value == "" || email.value == "")
    alert("Please Fill All Required Field");

    else if (peopleNumber.value == 0)
    alert("Number of People can't be 0");
    
   
    else if (peopleNumber.value == 1)
    paragraf.innerHTML = `You have reservation under the name ${name.value} for ${peopleNumber.value} person on ${date.value} at ${time.value}`
  
    else
    paragraf.innerHTML = `You have reservation under the name ${name.value} for ${peopleNumber.value} persons on ${date.value} at ${time.value}`

 return
    
}


//function to clear the form and get back at the top of the page
//when cancel button is clicked
function cancelSubmit(){
    document.getElementById('registration-form').reset();
    window.scrollTo(0, 0);
}

//function to set custom messages and report them
//about password validity
function passwordValidity(){
    if(pw.validity.patternMismatch){
        pw.setCustomValidity("Uh oh looks like you didn't check the details on password formating.");
        pw.reportValidity();
    }
    else if(pw.validity.valueMissing){
        pw.setCustomValidity("Bruh how will you connect without a password?");
        pw.reportValidity();
    }
    else{
        pw.setCustomValidity("");
        pw.reportValidity();
    }
}

//function to check if passwords are matching
//setting custom messages and reporting them
function passwordMatch(){
    if(pw_c.value != pw.value){
        pw_c.setCustomValidity("Huh? You didn't match the password buddy.");
        pw_c.reportValidity();
    }else{
        pw_c.setCustomValidity("");
        pw_c.reportValidity();
    }
}

//function to set custom validity messages about age check
function ageCheck(){
    var age = calculateAge();
    if (age<18){
        birthday.setCustomValidity("Silly, you must be an adult to sign up!");
        birthday.reportValidity();
    }
    else{
        birthday.setCustomValidity("");
        birthday.reportValidity();
    }
}

//function to calculate the age based on current date and 
//input birthday date
function calculateAge() { 
    var birthday = document.getElementById('birthday').value;
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month_dif = today.getMonth() - birthDate.getMonth();
    //if the month difference is smaller than zero (current month earlier than bday month)
    //or zero (current month = birthday month)
    //and the date is less than the birthdate then we have to substract one year from age
    //since it is not completed
    if (month_dif < 0 || (month_dif === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

//event listeners to the input elements for the password validation check
//and the birthday - age over 18 check
//giving real time feedback

const pw = document.getElementById('password');  
const pw_c = document.getElementById('password_conf');
const birthday = document.getElementById('birthday');
pw.addEventListener('input', ()=>passwordValidity());
pw_c.addEventListener('input',() =>passwordMatch());
birthday.addEventListener('input', ()=>ageCheck());
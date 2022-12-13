var nameError = document.getElementById("nam-error");
var mobileError = document.getElementById("num-error");
var mailError = document.getElementById("mail-error");
var usernameError = document.getElementById("user-error");
var confirmError = document.getElementById("confirm-error");
var passwordError = document.getElementById("pass-error");
var conformError = document.getElementById("conform-error");
var submitError = document.getElementById("subit-error");
var female = document.getElementById("female")
var male = document.getElementById("male")

var nameCheck = /^[a-zA-Z ]+$/
var mobileCheck = /^[6-9]\d{9}$/
var mailCheck = /^[a-z0-9.#]+@[a-z]+\.[a-z]{2,3}$/
var usernameCheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#%?&*-+ ]).{8}$/
var passwordCheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#%?&*-+ ]).{10}$/


function validateName() {
    var name = document.getElementById("name").value;

    if (name.length == 0 || name.length < 3) {
        nameError.innerHTML = "Please enter your Name";
        return false;
    }
    if (!name.match(nameCheck)) {
        nameError.innerHTML = "Please enter your correct name";
        return false;
    }
    nameError.innerHTML = "Valid"
    return true
}
function validateNumber() {
    var mobile = document.getElementById("mobile").value;


    if (mobile.length == 0) {
        mobileError.innerHTML = "Please enter your Number";
        return false;
    }
    if (!mobile.match(mobileCheck)) {
        mobileError.innerHTML = "Please enter your correct number";
        return false;
    }
    mobileError.innerHTML = "Valid"
    return true
}
function validateMail() {
    var mail = document.getElementById("mail").value;

    if (mail.length == 0) {
        mailError.innrHTML = "Please enter your email"
        return false;
    }
    if (!mail.match(mailCheck)) {
        mailError.innerHTML = "Please enter correct mailid"
        return false
    }
    mailError.innerHTML = "Valid"
    return true
}
function validateUser() {
    var user = document.getElementById("user").value;

    if (user.length == 0) {
        usernameError.innerHTML = "Please enter your username"
        return false;
    }
    if (!user.match(usernameCheck)) {
        usernameError.innerHTML = "Username must carries 8 letters,Capital letters ,Special characters and numbers"
        return false;
    }
    usernameError.innerHTML = "Valid"
    return true;
}
function validateConfirm() {
    var confirm = document.getElementById("confirm").value;

    if (confirm.length == 0) {
        confirmError.innerHTML = "Please enter your username"
        return false
    }
    if (!confirm.match(usernameCheck)) {
        confirmError.innerHTML = "Username is not same"
        return false;
    }
    confirmError.innerHTML = "Valid"
    return true;
}
function validatePass() {
    var password = document.getElementById("password").value;
    if (password.length == 0) {
        passwordError.innerHTML = "Please enter your password";
        return false;
    }

    if (!password.match(passwordCheck)) {
        passwordError.innerHTML = "Password must carries 10 Characters,Capital letters ,Special characters and numbers ";
        return false;
    }
    passwordError.innerHTML = "Valid"
    return true
}
function validateConform() {
    var conform = document.getElementById("conform").value;
    console.log(conform)
    if (conform.length == 0) {
        conformError.innerHTML = "Please enter your password"
        return false
    }
    if (!conform.match(passwordCheck)) {
        conformError.innerHTML = "Password is not same"
        return false;
    }
    conformError.innerHTML = "Valid"
    return true;
}
function validateGender() {
    if (female.checked == false && male.checked == false) {
        alert("Select your gender please");
        return false
    }
    return true
}
function validateForm() {
    if (!validateName() || !validateNumber() || !validateMail() || !validateUser() || !validateConfirm() || !validatePass() || !validateConform() || !validateGender()) {
        submitError.innerHTML = "Please fix error to submit";
        return false;
    }
    alert("Your login is Successful")
    return true
}
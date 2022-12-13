var nameError = document.getElementById("name-error");
var passwordError = document.getElementById("password-error");
var submitError = document.getElementById("subit-error");
var usernameCheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#%?&*-+ ]).{8}$/
var passwordCheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#%?&*-+ ]).{10}$/
function validate() {
    var username = document.getElementById("username").value;

    if (username.length == 0) {
        nameError.innerHTML = "Please enter your username";
        return false;
    }
    if (!username.match(usernameCheck)) {
        nameError.innerHTML = "Username must carries 8 letters,Capital letters ,Special characters and numbers";
        return false;
    }
    nameError.innerHTML = "Valid"
    return true
}
function validateNum() {
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
function validateForm() {
    if (!validate() || !validateNum()) {
        submitError.innerHTML = "Please fix error to submit";
        return false;
    }
    alert("Your login is Successful")
    return true
}
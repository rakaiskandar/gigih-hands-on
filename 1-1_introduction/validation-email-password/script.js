const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

const validationForm = (e) => {
    e.preventDefault();
    const emaiPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
    const emailRegex = emaiPattern.test(email.value);
    
    if(email.value === '' || password.value === ''){
        alert("Email should enter");
        return false;
    }

    if(!emailRegex){
        alert("Please make valid email");
        return false;
    } 

    if(password.value.length < 6){
        alert("Please enter atleast 6 character")
        return false;
    }

    alert("Valid email and password");
    return true;
}

form.addEventListener("submit", (e) => {
    try{
        validationForm(e);
    } catch{
        alert("error");
    }
})
const form = document.getElementById('form');
form.addEventListener('submit', e =>{
    e.preventDefault();
    
    // get user input
    const firstname = form['firstname'].value;
    const lastname = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    
    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);
    console.log('Email:', email);
    console.log('Password:', password);
    
    // check for empty inputs
    if(firstname === ''){
        addError('firstname', 'first name cannot be empty');
    }else{
        removeError('firstname');
    }
    if(lastname === ''){
        addError('lastname', 'Last name cannot be empty');
    }else{
        removeError('lastname');
    }
    if(email === ''){
        addError('email', 'email  cannot be empty');
    }else if(!isValid('email')){
        addError('email', 'Email is not valid');
    }    
    else{
        removeError('email');
    }
    if(password === ''){
        addError('password', 'password cannot be empty');
    }else{
        removeError('password');
    }

})


function addError(field, message){
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function removeError(field){
    const formControl =form[field].parentNode;
    formControl.classList.remove('error');
}

function isValid(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(string(email).toLowerCase());
}
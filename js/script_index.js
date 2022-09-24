const login_submit = document.getElementById('login_submit');
const input_email = document.getElementById('input_email');
const input_password = document.getElementById('input_password');


login_submit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = input_email.value;
    const password = input_password.value;
    
    if ([email, password].includes('')) {
        alert('Los campos no pueden estar vacíos');
        return;
    }

    //redirect to home
    window.location.href = 'historias.html';

});
const login_submit = document.getElementById('login_submit');
const input_email = document.getElementById('input_email');
const input_password = document.getElementById('input_password');


const usuario = {
    email: 'correo@gmail.com',
    password: '123456'
}

login_submit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = input_email.value;
    const password = input_password.value;
    
    if ([email, password].includes('')) {
        alert('Los campos no pueden estar vacíos');
        return;
    } else if (email !== usuario.email || password !== usuario.password) {
        alert('El usuario o la contraseña son incorrectos');
        return;
    } else {
        alert('Bienvenido');
        //redirect to home
        window.location.href = 'historias.html';
    }



});
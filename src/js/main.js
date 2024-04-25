// Función para el toggle de la contraseña
const buttonTooglePass = document.getElementById('togglePasswordButton');

const tooglePassword = () => {
    const inputPassword = document.getElementById('inputPassword');
    const typeInputPassword = inputPassword?.type;
    const newInputType = typeInputPassword === 'text' ? 'password' : 'text';
    inputPassword.type = newInputType;
}

buttonTooglePass.addEventListener('click', tooglePassword);


// Función para guardar los datos del formulario y mostrarlos en consola
const formButtonLogin = document.getElementById('formButtonLogin');

const saveFormData = (event) => {
    event.preventDefault();
    const inputUsuario = document.getElementById('inputUsuario').value;
    const inputPassword = document.getElementById('inputPassword').value;

    console.log('Datos del formulario:');
    console.log('Usuario:', inputUsuario);
    console.log('Contraseña:', inputPassword);
}

formButtonLogin.addEventListener('click', guardarDatosFormulario);
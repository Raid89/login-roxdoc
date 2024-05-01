// Función para el toggle de la contraseña
const buttonTooglePass = document.getElementById('togglePasswordButton');
const buttonLanguage = document.querySelector('.languageBtn');

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

formButtonLogin.addEventListener('click', saveFormData);

// Función para mostrar u ocultar el desplegable al hacer clic en el botón
function toggleDropdownLanguage() {
    var dropdown = document.getElementById("languageDropdown");
    dropdown.classList.toggle("show");
}

buttonLanguage.addEventListener('click', toggleDropdownLanguage)

// Cerrar el desplegable si el usuario hace clic fuera de él
window.onclick = function(event) {
    console.log(event.target);
  if (!event.target.matches('.item-language')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
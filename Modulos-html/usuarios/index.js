import PeticionesBackend from '../../js/class_and_functions_global/PeticionesBackend.js';
const peticionesBackend = new PeticionesBackend(
    'http://localhost:3000/api/usuario'
);

const formulario = document.querySelector('#login');
const formularioRecuperar = document.querySelector('#RecupererSumit');
const loginsec = document.querySelector('.login-section');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

const submit = document.querySelector('#submitIngresar');
const RecupererSumit = document.querySelector('#RecupererSumit');


const email = document.querySelector('#emailUsuario');
const contrasena = document.querySelector('#contrasenaUsuario');
let id = 0;

registerlink.addEventListener('click', () => {
    loginsec.classList.add('active');
});
loginlink.addEventListener('click', () => {
    loginsec.classList.remove('active');
});

window.addEventListener('load', () => {
    if (submit) {
        submit.addEventListener('click', ingresar);
    }
    if (RecupererSumit) {
        RecupererSumit.addEventListener('click', recuperar);
    }
});

function ingresar(e) {
    e.preventDefault();
    validarRol();
}
function recetearFormulario(e) {
    e.preventDefault();
    formulario.reset();
}

function recuperar(e) {
    e.preventDefault();
    variableRecuperer();
}

function variableRecuperer() {
    const Recuperer = document.querySelector('#Recuperer');
    let isValidado = true;
    const email_val =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (Recuperer.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese el email',
        });

        isValidado = false;
    } else if (!email_val.test(Recuperer.value) && Recuperer.value != '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El formato de gmail es incorrecto',
        });
        isValidado = false;
    }

    if (isValidado) {
        formulario.reset();
        Swal.fire('Se envio un correo de recuperar contraseña');
    }
}

async function validarRol() {
    //* Campos a validar

    

    //- Expresiones Regulares
    const email_val =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    /// Lógica de validación

    let isValidado = true;

    //* Validaciones para el nombre

    if (email.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese el email',
        });

        isValidado = false;
    } else if (!email_val.test(email.value) && email.value != '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El formato de gmail es incorrecto',
        });
        isValidado = false;
    } else if (contrasena.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese la contraseña',
        });
        isValidado = false;
    } else {
        isValidado = await validarLogin(email.value, contrasena.value);
        // console.log(id);
    }


    if (isValidado) {
        formulario.reset();

        window.location = `../../navbar.html?id=${id}`;

        // Swal.fire('Bienvenido a colch star ');
    }
}

async function validarLogin(email, password) {

    try {

        const usuarios = await peticionesBackend.findAll();


        const usuario = usuarios.find(
            (usuario) => usuario.email.toLowerCase() == email.toLowerCase()
        );

        if (usuario !== undefined && usuario.estado === true) {

             if (password == usuario.contrasena && email.toLowerCase() == usuario.email.toLowerCase()) {
                id = usuario.id_usuario;
                return true;
             } else {
                 Swal.fire({
                     icon: 'error',
                     title: 'Error',
                     text: 'la contraseña es incorrecta',
                 });

                 
                 return false;
             }
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email no encontrado',
            });
            return false;
        } 
    } catch (error) {
        console.log(error);
    }

    
}

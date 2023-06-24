import PeticionesBackend from '../class_and_functions_global/PeticionesBackend.js';
const peticionesBackend = new PeticionesBackend(
    'http://localhost:3000/api/proveedor'
);
import { listarProveedor } from './UIProveedor.js';

const formulario = document.querySelector('#formularioAgregarProveedor');

const submit = document.querySelector(
    '#formularioAgregarProveedor input[type="submit"]'
);

const cancelar = document.querySelector('#guardarCancelado');
const atras = document.querySelector('#xAgregar');

window.addEventListener('load', () => {
    submit.addEventListener('click', crearProveedor);
    cancelar.addEventListener('click', recetearFormulario);
    atras.addEventListener('click', recetearFormulario);
});

function recetearFormulario(e) {
    e.preventDefault();
    formulario.reset();
}

function crearProveedor(e) {
    e.preventDefault();

    /// Validar el formulario
    validarProveedor();
}

function validarProveedor() {
    //* Campos a validar

    const nombre = document.querySelector(
        '#formularioAgregarProveedor input[name="nombreGuardar"]'
    );

    const telefono = document.querySelector(
        '#formularioAgregarProveedor input[name="telefonoGuardar"]'
    );

    const direccion = document.querySelector(
        '#formularioAgregarProveedor input[name="direccionGuardar"]'
    );
    const contacto = document.querySelector(
        '#formularioAgregarProveedor input[name="contactoGuardar"]'
    );

    //- Expresiones Regulares
    const number = /^\D*$/;
    const text = /^[^a-zA-Z]*$/;
    const email_val =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const signo = /[|°!"#$%&/()=?¿]/;

    /// Lógica de validación

    let isValidado = true;

    if (
        nombre.value == '' &&
        telefono.value == '' &&
        direccion.value == '' &&
        contacto.value == ''
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios',
        });
        isValidado = false;

        //* Validaciones para el nombre
    } else if (nombre.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre es obligatorios',
        });

        isValidado = false;
    } else if (!number.test(nombre.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre no puede tener numeros',
        });
        isValidado = false;
    } else if (!nombre.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre no puede ser un espacio',
        });
        isValidado = false;
    } else if (signo.test(nombre.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre no puede tener signos',
        });
        isValidado = false;

        //* Validaciones para teléfono
    } else if (telefono.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El teléfono es obligatorios',
        });

        isValidado = false;
    } else if (!text.test(telefono.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Teléfono no puede tener letras',
        });
        isValidado = false;
    } else if (!telefono.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Teléfono no puede ser un espacio',
        });
        isValidado = false;
    } else if (signo.test(telefono.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Telefono no puede tener signos',
        });
        isValidado = false;


        //* Validaciones para dirección
    } else if (direccion.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La dirección es obligatoria',
        });
        isValidado = false;
    } else if (!direccion.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La direccion no puede ser un espacio',
        });
        isValidado = false;
    }
    //* Validaciones para contacto
    else if (contacto.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'el contacto es obligatoria',
        });
        isValidado = false;
    } else if (!contacto.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'el contacto no puede ser un espacio',
        });
        isValidado = false;
    }

    if (isValidado) {
        ///! Insertar cliente

        const nuevoProveedor = {
            nombre: nombre.value,
            telefono: telefono.value,
            direccion: direccion.value,
            contacto: telefono.value,
        };

        registrarProveedor(nuevoProveedor);
    }
}

function mostrarToast(mensaje) {
    const toastDiv = document.querySelector('#toastAgregar'); //* Seleccionamos el toast que esta en nuestro HTML
    const toastBody = document.querySelector('#toast-body-agregar'); //* Y también el body para agregar contenido a nuestro toast
    /// Creamos la instancia
    const toast = new bootstrap.Toast(toastDiv);
    toastBody.textContent = mensaje;
    /// Mostrando el mensaje
    toast.show();
}


async function registrarProveedor(nuevoProveedor) {
    // console.log(nuevoCliente);
    const resultado = await peticionesBackend.registrarDato(nuevoProveedor);

    // console.log(resultado);
    //* Serrando el modal
    const modalBootstrap = bootstrap.Modal.getInstance(
        document.querySelector('#myModal')
    );
    modalBootstrap.hide();

    formulario.reset();
    if (resultado === 'proveedor agregado exitosamente') {
        listarClientes();
        mostrarToast(
            Swal.fire('proveedor agregado correctamente', '', 'success')
        );

        listarClientes();
    } else {
        mostrarToast(
            Swal.fire('El proveedor no fue agregado, aparecer hubo un error', '', 'error')
        );
    }
};


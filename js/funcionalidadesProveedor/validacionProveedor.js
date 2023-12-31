import PeticionesBackend from '../class_and_functions_global/PeticionesBackend.js';
const peticionesBackend = new PeticionesBackend(
    'http://localhost:3000/api/proveedores'
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
    const cedula = document.querySelector(
        '#formularioAgregarProveedor input[name="cedulaGuardar"]'
    );
    const nit = document.querySelector(
        '#formularioAgregarProveedor input[name="nitGuardar"]'
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
        cedula.value == '' &&
        nit.value == ''
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios',
            width: '400px',
            
            

        });
        isValidado = false;

        //* Validaciones para el nombre
    } else if (nombre.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre es obligatorios',
            width: '400px',

        });

        isValidado = false;
    } else if (!number.test(nombre.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre no puede tener numeros',
            width: '400px',

        });
        isValidado = false;
    } else if (!nombre.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre no puede ser un espacio',
            width: '400px',

        });
        isValidado = false;
    } else if (signo.test(nombre.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre no puede tener signos',
            width: '400px',

        });
        isValidado = false;

        //* Validaciones para teléfono
    } else if (telefono.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El teléfono es obligatorios',
            width: '400px',

        });

        isValidado = false;
    } else if (!text.test(telefono.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Teléfono no puede tener letras',
            width: '400px',

        });
        isValidado = false;
    } else if (!telefono.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Teléfono no puede ser un espacio',
            width: '400px',

        });
        isValidado = false;
    } else if (signo.test(telefono.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Telefono no puede tener signos',
            width: '400px',

        });
        isValidado = false;


        //* Validaciones para dirección
    } else if (direccion.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La dirección es obligatoria',
            width: '400px',

        });
        isValidado = false;
    } else if (!direccion.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La direccion no puede ser un espacio',
            width: '400px',

        });
        isValidado = false;
    }
    //* Validaciones para contacto
    else if (!cedula.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'la cedula no puede ser un espacio',
            width: '400px',

        });
        isValidado = false;
    }else if (signo.test(cedula.value)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'la cedula no puede contener signos',
            width: '400px',
        })
        isValidado=false

    }
    else if (!nit.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'el nit no puede ser un espacio',
            width: '400px',

        });
        isValidado = false;
    }else if (signo.test(nit.value)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'el nit no puede contener signos',
            width: '400px',
        })
        isValidado=false

    }

    if (isValidado) {
        ///! Insertar cliente

        const nuevoProveedor = {
            nombre: nombre.value,
            telefono: telefono.value,
            direccion: direccion.value,
            cedula: cedula.value,
            nit: nit.value,
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
    if (resultado === 'Proveedor agregado exitosamente') {
        listarProveedor();
        mostrarToast(
            Swal.fire('Proveedor agregado correctamente', '', 'success')
        );

        listarProveedor();
    } else {
        mostrarToast(
            Swal.fire('El proveedor no fue agregado, al parecer hubo un error', '', 'error')
        );
    }
};


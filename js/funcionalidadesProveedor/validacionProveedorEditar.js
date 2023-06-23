import PeticionesBackend from '../class_and_functions_global/PeticionesBackend.js';
const peticionesBackend = new PeticionesBackend(
    'http://localhost:3000/api/proveedor'
);
import { listarClientes } from './UIClientes.js';

const formulario = document.querySelector('#formularioEditarProveedor');

let id = '';

const nombre = document.querySelector(
    '##formularioEditarProveedor input[name="nombreEditar"]'
);

const apellido = document.querySelector(
    '##formularioEditarProveedor input[name="apellidoEditar"]'
);

const telefono = document.querySelector(
    '##formularioEditarProveedor input[name="telefonoEditar"]'
);

const email = document.querySelector(
    '##formularioEditarProveedor input[name="emailEditar"]'
);

const direccion = document.querySelector(
    '##formularioEditarProveedor input[name="direccionEditar"]'
);

const submit = document.querySelector(
    '##formularioEditarProveedor input[type="submit"]'
);

const cancelar = document.querySelector('#editarCancelado');

const atras = document.querySelector('#xEditar');

window.addEventListener('load', () => {
    submit.addEventListener('click', editarClientes);
    cancelar.addEventListener('click', recetearFormulario);
    atras.addEventListener('click', recetearFormulario);
});

export function llenarFormulario(registro) {
    nombre.value = registro.nombre;
    apellido.value = registro.apellido;
    telefono.value = registro.telefono;
    email.value = registro.email;
    direccion.value = registro.direccion;
    console.log(registro.id_cliente);

    id = registro.id_cliente;
}

function recetearFormulario(e) {
    e.preventDefault();
    formulario.reset();
}

function editarClientes(e) {
    e.preventDefault();

    /// Validar el formulario
    validarCliente();
}

function validarCliente() {
    //* Campos a validar

    //- Expresiones Regulares
    const number = /^\D*$/;
    const text = /^[^a-zA-Z]*$/;
    const email_val =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const signo = /[|°!"#$%&/()=?¿]/;

    //* Contenedores del formularios
    const divNombre = document.querySelector(
        '##formularioEditarProveedor div[name="divNombre"]'
    );

    const divApellido = document.querySelector(
        '##formularioEditarProveedor div[name="divApellido"]'
    );

    const divTelefono = document.querySelector(
        '##formularioEditarProveedor div[name="divTelefono"]'
    );

    const divEmail = document.querySelector(
        '##formularioEditarProveedor div[name="divEmail"]'
    );

    const divDireccion = document.querySelector(
        '##formularioEditarProveedor div[name="divDireccion"]'
    );

    /// Lógica de validación

    let isValidado = true;

    //* Validaciones para el nombre

    if (
        nombre.value == '' &&
        apellido.value == '' &&
        telefono.value == '' &&
        email.value == '' &&
        direccion.value == ''
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

        //Validaciones para el apellido
    } else if (apellido.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El apellido es obligatorios',
        });

        isValidado = false;
    } else if (!number.test(apellido.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El apellido no puede tener numeros',
        });
        isValidado = false;
    } else if (!apellido.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El apellido no puede ser un espacio',
        });
        isValidado = false;
    } else if (signo.test(apellido.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El apellido no puede tener signos',
        });
        isValidado = false;

        //* Validaciones para teléfono
    } else if (telefono.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El telefono es obligatorios',
        });

        isValidado = false;
    } else if (!text.test(telefono.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Telefono no puede tener letras',
        });
        isValidado = false;
    } else if (!telefono.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Telefono no puede ser un espacio',
        });
        isValidado = false;
    } else if (signo.test(telefono.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Telefono no puede tener signos',
        });
        isValidado = false;

        //* Validaciones para el gmail
    } else if (email.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El email es obligatorios',
        });
        isValidado = false;
    } else if (!email_val.test(email.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Formato no valido',
        });

        isValidado = false;
    } else if (!email.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El email no puede ser un espacio',
        });
        isValidado = false;
        //* Validaciones para dirección
    } else if (direccion.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La direccion es obligatorios',
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

    if (isValidado) {
        //* Serrando el modal
        const modalBootstrap = bootstrap.Modal.getInstance(
            document.querySelector('#modalEditar')
        );
        modalBootstrap.hide();

        guardarCambiosProveedor();

        formulario.reset();
    }
}

async function guardarCambiosProveedor() {
    const clienteEditado = {
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
        email: email.value,
        direccion: direccion.value,
    };

    // console.log(id);
    // console.log(clienteEditado);



    const resultado = await peticionesBackend.actualizarRegistro(
        clienteEditado,
        id
    );


    console.log(resultado);
    if (resultado === 'Actualización exitosa') {
        listarClientes();
        mostrarToast(Swal.fire('proveedor editado correctamente', '', 'success'));

        
    }else{

        mostrarToast(
            
            Swal.fire(
                'El proveedor no fue editado, aparecer hubo un error',
                '',
                'error'
            )
        );
    }


    
}

function imprimirAlerta(mensaje, lugar, clase) {
    /// Verificar que no exista la alerta
    const alert = document.querySelector(`.alerta${clase}`);

    if (!alert) {
        //? Crear alerta
        const divMensaje = document.createElement('div');

        divMensaje.classList.add(
            // 'px-2',
            'py-1',
            'rounded',
            'max-w-lg',
            'mx-auto',
            'mt-2',
            'text-center',
            'border',
            `alerta${clase}`
        );

        divMensaje.classList.add(
            'bg-red-100',
            'border-red-400',
            'text-red-700'
        );

        divMensaje.textContent = mensaje;

        lugar.parentNode.insertBefore(divMensaje, lugar.nextSibling);

        setTimeout(() => {
            divMensaje.remove();
        }, 4500);
    }
}

function mostrarToast(mensaje) {
    const toastDiv = document.querySelector('#toastEditar'); //* Seleccionamos el toast que esta en nuestro HTML
    const toastBody = document.querySelector('#toast-body-editar'); //* Y también el body para agregar contenido a nuestro toast
    /// Creamos la instancia
    const toast = new bootstrap.Toast(toastDiv);
    toastBody.textContent = mensaje;
    /// Mostrando el mensaje
    toast.show();

    
}

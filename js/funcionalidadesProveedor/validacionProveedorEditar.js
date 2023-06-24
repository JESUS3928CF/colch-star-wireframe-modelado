import PeticionesBackend from '../class_and_functions_global/PeticionesBackend.js';
const peticionesBackend = new PeticionesBackend(
    'http://localhost:3000/api/proveedores'
);
import { listarProveedor } from './UIProveedor.js';

const formulario = document.querySelector('#formularioEditarProveedor');

let id = '';

const nombre = document.querySelector(
    '#formularioEditarProveedor input[name="nombreEditar"]'
);



const telefono = document.querySelector(
    '#formularioEditarProveedor input[name="telefonoEditar"]'
);


const direccion = document.querySelector(
    '#formularioEditarProveedor input[name="direccionEditar"]'
);
const contacto = document.querySelector(
    '#formularioEditarProveedor input[name="contactoEditar"]'
);

const submit = document.querySelector(
    '#formularioEditarProveedor input[type="submit"]'
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
    telefono.value = registro.telefono;
    direccion.value = registro.direccion;
    contacto.value = registro.contacto;
    console.log(registro.id_proveedor);

    id = registro.id_proveedor;
}

function recetearFormulario(e) {
    e.preventDefault();
    formulario.reset();
}

function editarClientes(e) {
    e.preventDefault();

    /// Validar el formulario
    validarProveedor();
}

function validarProveedor() {
    //* Campos a validar

    //- Expresiones Regulares
    const number = /^\D*$/;
    const text = /^[^a-zA-Z]*$/;
    const email_val =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const signo = /[|°!"#$%&/()=?¿]/;

    //* Contenedores del formularios
    const divNombre = document.querySelector(
        '#formularioEditarProveedor div[name="divNombre"]'
    );

    

    const divTelefono = document.querySelector(
        '#formularioEditarProveedor div[name="divTelefono"]'
    );

    
    const divDireccion = document.querySelector(
        '#formularioEditarProveedor div[name="divDireccion"]'
    );

    /// Lógica de validación

    let isValidado = true;

    //* Validaciones para el nombre

    if (
        nombre.value == '' &&
        telefono.value == '' &&
        direccion.value == ''&&
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
        //* Validaciones para contacto
     else if (direccion.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El contacto es obligatorios',
        });
        isValidado = false;
    } else if (!direccion.value.trimStart()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'el contacto no puede ser un espacio',
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
    const proveedorEditado = {
        nombre: nombre.value,
        telefono: telefono.value,
        direccion: direccion.value,
        contacto: contacto.value,
    };

    // console.log(id);
    // console.log(clienteEditado);



    const resultado = await peticionesBackend.actualizarRegistro(
        proveedorEditado,
        id
    );


    console.log(resultado);
    if (resultado === 'Actualización exitosa') {
        listarProveedor();
        mostrarToast(Swal.fire('Cliente editado correctamente', '', 'success'));

        
    }else{

        mostrarToast(
            
            Swal.fire(
                'El cliente no fue editado, aparecer hubo un error',
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

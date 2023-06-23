import PeticionesBackend from '../class_and_functions_global/PeticionesBackend.js';
 const peticionesBackend = new PeticionesBackend(
     'http://localhost:3000/api/proveedor'
 );
 import { listarClientes } from './UIProveedor.js';

    const formulario = document.querySelector('#formularioEditarProveedor');

    const submit = document.querySelector(
        '#formularioEditarProveedor input[type="submit"]'
    );

    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearClientes);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e) {
        e.preventDefault();
        formulario.reset();
    }

    function crearClientes(e) {
        e.preventDefault();

        /// Validar el formulario
        validarCliente();
    }

    function validarCliente() {
        //* Campos a validar

        const nombre = document.querySelector(
            '#formularioEditarProveedor input[name="nombreGuardar"]'
        );

        const apellido = document.querySelector(
            '#formularioEditarProveedor input[name="apellidoGuardar"]'
        );

        const telefono = document.querySelector(
            '#formularioEditarProveedor input[name="telefonoGuardar"]'
        );

        const email = document.querySelector(
            '#formularioEditarProveedor input[name="emailGuardar"]'
        );

        const direccion = document.querySelector(
            '#formularioEditarProveedor input[name="direccionGuardar"]'
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

        if (isValidado) {
            ///! Insertar cliente

            const nuevoCliente = {
                nombre: nombre.value,
                apellido: apellido.value,
                direccion: direccion.value,
                telefono: telefono.value,
                email: email.value,
            };

            registrarCliente(nuevoCliente);
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


    async function registrarCliente(nuevoCliente){
        // console.log(nuevoCliente);
        const resultado = await peticionesBackend.registrarDato(nuevoCliente);

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
        }else{
            mostrarToast(
                Swal.fire('El proveedor no fue agregado, aparecer hubo un error', '', 'error')
            );
        }
    };
    


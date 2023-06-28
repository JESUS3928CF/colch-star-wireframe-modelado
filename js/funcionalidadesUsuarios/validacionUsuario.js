import PeticionesBackend from '../class_and_functions_global/PeticionesBackend.js';
 const peticionesBackend = new PeticionesBackend(
     'http://localhost:3000/api/usuario'
 );
 import { listarUsuarios } from './UIUsuarios.js';
    const formulario = document.querySelector('#formularioagregarusuario');
    const formulario2=document.querySelector('#AgregarUsuario')


    const submit = document.querySelector(
        '#formularioagregarusuario input[type="submit"]');

    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearUsuarios);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
        formulario2.reset();
    }

    function crearUsuarios(e) {
        e.preventDefault();
        /// Validar el formulario
        validarUsuario();
    }

    function variablesFormulario2(){

        const contraseña = document.querySelector(
            '#AgregarUsuario input[name="contraseñaGuardar"]'
        );

        const confirmarContraseña = document.querySelector(
            '#AgregarUsuario input[name="contraseñaconfirmarGuardar"]'
        );

        const seleccionarRol = document.querySelector(
            '#AgregarUsuario select[name="selectRol"]'
        );
        const selectedOption = seleccionarRol.options[seleccionarRol.selectedIndex].value;
        console.log(selectedOption)

        return {
            contraseñas: contraseña,
            confirmarContraseñas: confirmarContraseña,
            selectedOptions: selectedOption,
            seleccionarRol,
        };

    }

    function validarUsuario() {

        const variables=variablesFormulario2()
        //* Campos a validar


        const nombre = document.querySelector(
            '#formularioagregarusuario input[name="nombreGuardar"]'
        );
        
        const apellido = document.querySelector(
            '#formularioagregarusuario input[name="apellidoGuardar"]'
        );

        const telefono = document.querySelector(
            '#formularioagregarusuario input[name="telefonoGuardar"]'
        );

        const email = document.querySelector(
            '#formularioagregarusuario input[name="emailGuardar"]'
        );

       

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        var signo = /[|°!"#$%&/()=?¿]/;


        const email_val =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
       
        /// Lógica de validación
        let isValidado = true;

        //* Validaciones para todos los campos
        if(nombre.value=='' && apellido.value=="" && telefono.value=="" && email.value=="" &&variables.contraseñas.value=="" && variables.confirmarContraseñas.value=="" && variables.selectedOptions===""){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios',
                 })
                   isValidado = false 

        //* Validaciones para el  campo nombre
        }else if (nombre.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre es obligatorio',
                 })
                   isValidado = false 
        } else if (!number.test(nombre.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre no puede contener números',
                 })
            isValidado = false; 
            
        }else if (!nombre.value.trimStart()){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El nombre no puede ser un espacio',
                     })
                isValidado = false;     
        }else if (signo.test(nombre.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el nombre',
                 })
            isValidado = false;

        //* Validaciones para el apellido
        
        }else if (apellido.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El apellido es obligatorio',
                 })
            isValidado = false;
        }else if (!number.test(apellido.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El apellido no puede contener números',
                 })
            isValidado = false;
        }else if (!apellido.value.trimStart()){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El Apellido  no puede ser un espacio',
                     })
                isValidado = false;  
        }else if (signo.test(apellido.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el apellido',
                 })
            isValidado = false;
            
        //* Validaciones para teléfono
        }else if (telefono.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El teléfono es obligatorio',
                 })
            isValidado = false;

        } else if (!text.test(telefono.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El teléfono no pueden ser letras',
                 })
            isValidado = false;
        }else if (!telefono.value.trimStart()){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El telefono no puede ser un espacio',
                     })
                isValidado = false;  
                
        }else if (signo.test(telefono.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el telefono',
                 })
            isValidado = false;
            
        //* Validaciones para el gmail
        } else if (email.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El email es obligatorio',
                 })
            isValidado = false;
        }else if (!email_val.test(email.value) && email.value != '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El formato de gmail es incorrecto',
                 })
            isValidado = false;
        }else if (!email.value.trimStart()){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El email no puede ser un espacio',
                     })
                isValidado = false;        

          //* Validaciones para la contraseña
        }else if (variables.contraseñas.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La contraseña es obligatoria',
                 })
            isValidado = false;

        //* Validaciones para la confirmacion de contraseña
        } else  if (variables.confirmarContraseñas.value == '') {
             Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Confirma la contraseña',
              })
            isValidado = false;
            

        } else if(variables.contraseñas.value!=variables.confirmarContraseñas.value){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden',
              })
            isValidado = false; 

            //*Validacion de rol
        }else  if (variables.selectedOptions === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Seleccione un rol',
              })
            isValidado = false; 
        }


        
        if (isValidado) {
            ///! Insertar usuario

            // contraseñas:contraseña,
            // confirmarContraseñas:confirmarContraseña,
            // selectedOptions:selectedOption

            const { contraseñas, seleccionarRol } = variablesFormulario2();

    
            const nuevoUsuario = {
                nombre: nombre.value,
                apellido: apellido.value,
                telefono: telefono.value,
                email: email.value,
                contrasena: contraseñas.value,
                fk_rol: seleccionarRol.value,
            };

            console.log(nuevoUsuario);

            console.log(contraseñas, "cc");
            console.log(seleccionarRol.value);


            registrarUsuario(nuevoUsuario);
        }
    
    

   

    async function registrarUsuario(nuevoUsuario){
        // console.log(nuevoCliente);
        const resultado = await peticionesBackend.registrarDato(nuevoUsuario);

        // console.log(resultado);
        //* Serrando el modal
        const modalBootstrap = bootstrap.Modal.getInstance(
            document.querySelector('#myModal')
        );
        modalBootstrap.hide();

        formulario.reset();
        if (resultado === 'Usuario agregado exitosamente') {
            listarUsuarios();
            mostrarToast(
                Swal.fire('Usuario agregado correctamente', '', 'success')
            );

            listarUsuarios();
        }else{
            
                Swal.fire('El usuario no fue agregado, aparecer hubo un error', '', 'error')
            
        }

}

}


// }else if (!nombre.value.trimStart()){
//     Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'El nombre no puede ser un espacio',
//          })
//     isValidado = false;
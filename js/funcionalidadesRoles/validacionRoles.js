(() => {
    const formulario = document.querySelector('#formularioagregarrol');


    const submit = document.querySelector(
        '#formularioagregarrol input[type="submit"]'
    );

    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearRol);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
    }

    function crearRol(e) {
        e.preventDefault();

        /// Validar el formulario
        validarRol();
    }

    function validarRol() {
        //* Campos a validar

        const nombre = document.querySelector(
            '#formularioagregarrol input[name="nombreGuardar"]'
        );

        const elemento1 = document.forms['formularioagregarrol']['check'].checked
        const elemento2 =document.forms['formularioagregarrol']['checkDos'].checked
        const elemento3 = document.forms['formularioagregarrol']['checkTres'].checked
        const elemento4 = document.forms['formularioagregarrol']['checkCuatro'].checked
        const select = document.forms['formularioagregarrol']['seleccion'].checked
        const select1 = document.forms['formularioagregarrol']['seleccionDos'].checked
        const select2 = document.forms['formularioagregarrol']['seleccionTres'].checked
        const select3 = document.forms['formularioagregarrol']['seleccionCuatro'].checked
        const select4 = document.forms['formularioagregarrol']['seleccionCinco'].checked


        //- Expresiones Regulares
        const number = /^\D*$/;
        var signo = /[|°!"#$%&/()=?¿]/;
        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre
        if (select==false && select1==false && select2==false && select3==false && select4==false && elemento1==false && elemento2==false && elemento3==false && elemento4== false && nombre.value==''){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios'
            })
            isValidado=false
        }
       else if (nombre.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre es obligatorio',
                 })
             isValidado = false;

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
        }else if (elemento1==false && elemento2==false && elemento3==false && elemento4== false){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Seleccione por lo menos un permisos'
            })
            isValidado=false
        }else if(select==false && select1==false && select2==false && select3==false && select4==false){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'Seleccione por lo menos un  modulos'
            })
            isValidado=false
        }

        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#myModal')
            );
            modalBootstrap.hide();

            formulario.reset();

            Swal.fire(
                'Rol agregado  correctamente',
                '',
                'success'
              )

        }
    }

})();

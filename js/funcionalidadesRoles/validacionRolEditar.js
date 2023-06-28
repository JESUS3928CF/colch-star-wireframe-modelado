(() => {
    const formulario = document.querySelector('#formularioeditarrol');


    const submit = document.querySelector(
        '#formularioeditarrol input[type="submit"]'
    );

    const cancelar = document.querySelector('#editarCancelado');
    const atras = document.querySelector('#xEditar');

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

        const nombre = document.querySelector('#formularioeditarrol input[name="nombreGuardar"]');
        const elemento1 = document.forms['formularioeditarrol']['checkEditar'].checked
        const elemento2 =document.forms['formularioeditarrol']['checkEditarDos'].checked
        const elemento3 = document.forms['formularioeditarrol']['checkEditarTres'].checked
        const elemento4 = document.forms['formularioeditarrol']['checkEditarCuatro'].checked
        const select = document.forms['formularioeditarrol']['seleccionEditar'].checked
        const select1 = document.forms['formularioeditarrol']['seleccionEditarDos'].checked
        const select2 = document.forms['formularioeditarrol']['seleccionEditarTres'].checked
        const select3 = document.forms['formularioeditarrol']['seleccionEditarCuatro'].checked
        const select4 = document.forms['formularioeditarrol']['seleccionEditarCinco'].checked


        //- Expresiones Regulares
        const number = /^\D*$/;
        var signo = /[|°!"#$%&/()=?¿]/;

        let isValidado = true;

        /// Lógica de validación
        //* Validaciones para el nombre
        if(elemento1==false &&elemento2 ==false && elemento3==false && elemento4 ==false && select ==false && select1 ==false && select2 ==false && select3 ==false  && select4 ==false && nombre.value==""){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios',
                width: '700px'

            })
            isValidado=false

        }
        else if (nombre.value == '') {


            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre es obligatorio',
                width: '700px'

                 })
                   isValidado = false 
        } else if (!number.test(nombre.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre no puede contener números',
                width: '700px'

                 })
            isValidado = false; 
            
        }else if (!nombre.value.trimStart()){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El nombre no puede ser un espacio',
                    width: '700px'

                     })
                isValidado = false;  
        }else if (signo.test(nombre.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el nombre',
                width: '700px'

                 })
            isValidado = false;
        }else if(elemento1==false &&elemento2 ==false && elemento3==false && elemento4 ==false){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Seleccione por lo menos un permisos',
                width: '700px'

            })
            isValidado=false
        }else if(select ==false && select1 ==false && select2 ==false && select3 ==false  && select4 ==false){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'Seleccione por lo menos un  modulos',
                width: '700px'

            })
            isValidado=false
        }


                
        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#modalEditar')
            );
            modalBootstrap.hide();

            formulario.reset();

            Swal.fire(
                    'Rol editado correctamente',
                    '',
                    'success'
            );
        }
    }

   
})();

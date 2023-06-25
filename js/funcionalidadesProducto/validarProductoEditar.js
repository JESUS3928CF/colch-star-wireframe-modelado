(() => {
    const formulario = document.querySelector('#formularioEditarProducto');
    const subFormulario = document.querySelector('#ColoresEditar')


    const submit = document.querySelector(
        '#formularioEditarProducto input[type="submit"]'
    );

    const cancelar = document.querySelector('#editarCancelado');

    const atras = document.querySelector('#Editar');

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

    function variablesColor(){
        const negro = document.forms['ColoresEditar']['negroEditar'].checked
        const rojo = document.forms['ColoresEditar']['rojoEditar'].checked
        const azul = document.forms['ColoresEditar']['azulEditar'].checked
        const verde = document.forms['ColoresEditar']['verdeEditar'].checked
        const gris = document.forms['ColoresEditar']['grisEditar'].checked

        return{
            Negro: negro,
            Rojo: rojo,
            Azul: azul,
            Verde: verde,
            Gris:gris
        }

    }


    function validarCliente() {

        const color = variablesColor()
        //* Campos a validar

        const producto = document.querySelector(
            '#formularioEditarProducto input[name="productoEditar"]'
        );

        const cantidad = document.querySelector(
            '#formularioEditarProducto input[name="cantidadEditar"]'
        );

        const precio = document.querySelector(
            '#formularioEditarProducto input[name="precioEditar"]'
        );

        const talla = document.querySelector(
            '#formularioEditarProducto input[name="tallaEditar"]'
        );

        const tela = document.querySelector(
            '#formularioEditarProducto input[name="telaEditar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        var signo = /[|°!"#$%&/()=?¿]/;


        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para todos los campos
        if (producto.value == '' && cantidad.value == "" && precio.value == "" && talla.value == "" && tela.value == "" && color.Azul==false && color.Gris==false && color.Negro==false && color.Rojo==false && color.Verde==false) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios',
            })
            isValidado = false

            //* Validaciones para producto
        } else if (producto.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El producto es obligatorio',
            })
            isValidado = false
        } else if (!number.test(producto.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El producto no puede contener números',
            })
            isValidado = false;

        }else if (!producto.value.trimStart()) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El producto no puede ser un espacio',
            })
            isValidado = false;
        }else if (signo.test(producto.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el Producto',
                 })
            isValidado = false;    

            //validacion de cantidad
        } else if (cantidad.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cantidad es obligatorio',
            })
            isValidado = false;

        }else if (!text.test(cantidad.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cantidad no pueden contener letras'
            })
            isValidado=false

        }else if (!cantidad.value.trimStart()){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'La cantidad no puede ser un campo vacio'
            });
            isValidado=false

        }else if (signo.test(cantidad.value)){
            Swal.fire({
                icon:'error',
                title:'Error',
                text: 'No se puede poner signos en la cantidad'
            })
            isValidado=false

        
            //validacion de precio
        } else if (precio.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El precio  es obligatorio',
            })
            isValidado = false;
        }else if (!text.test(precio.value)){
            Swal.fire({
                icon:'error',
                title:'Error',
                text: 'El precio no puede contener letras'
            })
            isValidado=false
        }else if (!precio.value.trimStart()){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'El precio no puede ser un campo vacio'
            });
            isValidado=false


        }else if (signo.test(precio.value)){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'No se puede poner signos en el precio'
            })

            isValidado=false

            //validacion de talla

        } else if (talla.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La talla es obligatorio',
            })
            isValidado = false

        }else if(!number.test(talla.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La talla no puede tener numero',
            })
            isValidado = false

        }else if (!talla.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La talla no puede ser un campo vacio',
            })
            isValidado = false

        }else if(signo.test(talla.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en la talla',
            })
            isValidado = false
        }

        //validacion tela
        else if (tela.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La tela es obligatorio',
            })
            isValidado = false
        }else if (!number.test(tela.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La tela no puede tener numeros',
            })
            isValidado = false
        }else if (!tela.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La tela no puede ser un campo vacio',
            })
            isValidado = false

        }else if(signo.test(tela.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en la tela',
            })
            isValidado = false
        }else if(color.Azul==false && color.Gris==false && color.Negro==false && color.Rojo==false && color.Verde==false){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'Seleccione al menos un color'
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
                'Producto editado correctamente',
                '',
                'success'
            );
        }
    }



  
})();

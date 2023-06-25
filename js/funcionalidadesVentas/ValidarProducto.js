(() => {
    const formulario = document.querySelector('#formularioParaAgregarProducto');


    const submit = document.querySelector(
        '#formularioParaAgregarProducto input[type="submit"]'
    );

   

    const cancelar = document.querySelector('#cancelar');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearProducto);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

   

    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
    }

    function crearProducto(e) {
        e.preventDefault();

        /// Validar el formulario
        validarProducto();
    }


    function validarProducto() {
        //* Campos a validar

        const producto = document.querySelector('#producto');
        const selectedOption = producto.options[producto.selectedIndex].value;


        const Cantidad = document.querySelector('#cantidad');

        const precio=document.querySelector('#precio');

        const cliente = document.querySelector('#cliente');
        const clientes = cliente.options[cliente.selectedIndex].value;


        const fecha =document.querySelector('#Fecha');

        const descripcion = document.querySelector('#descripcion');

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const signo= /[|°!"#$%&/()=?¿]/;

         
        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre
       

        //* Validaciones para teléfono
     if(selectedOption===""){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'Seleccione un producto'
        })
        isValidado=false
     }else if (Cantidad.value==""){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'La cantidad es obligatoria'
        })
        isValidado=false
     }else if (!text.test(Cantidad.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'La cantidad no puede tener letras'
        })
        isValidado=false

     }else if (signo.test(Cantidad.value)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La cantidad no puede tener signos'
        })
        isValidado=false

     }else if(!Cantidad.value.trimStart()){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La cantidad no puede ser un espacio'
        })
        isValidado=false

     }else if (precio.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El precio es obligatorio'
        })
        isValidado=false
     }else if(!text.test(precio.value)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El precio no puede tener letra'
        })
        isValidado=false

     }else if (signo.test(precio.value)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El precio no puede tener signos'
        })
        isValidado=false
     }else if (!precio.value.trimStart()){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El precio no puede ser un espacio'

        })
        isValidado=false
     }else if (clientes==""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Cliente es obligatorio'

        })
        isValidado=false
     }else if (fecha.value==""){
        Swal.fire({
            icon:'error',
            title:'Error',
            text: 'La fecha es obligatoria'
        })
        isValidado=false

     }else if(descripcion.value==""){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'La descripcion es obligatoria'
        })
        isValidado=false
     }else if (!number.test(descripcion.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'La descripcion no puede tener numeros'
        })
        isValidado=false
     }else if (!descripcion.value.trimStart()){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'La descripcion no puede ser un espacio'
        })
        isValidado=false
     }else if (signo.test(descripcion.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'La descripcion no puede tener signos'
        })
        isValidado=false
     }




        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#Producto')
            );
            modalBootstrap.hide();

            formulario.reset();
            Swal.fire(
                'Producto agregada correctamente',
                '',
                'success'
            )
            

        }
    }

})();

(() => {

    const formulario= document.querySelector('#formularioAgregarPrenda');
    const formularioEditar=document.querySelector('#formularioEditarPrendas');

    const submitEditar=document.querySelector('#Editar')
    const submit = document.querySelector('#buttonSubmit');
    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#xAgregar');

window.addEventListener('load',()=>{
    if(submit){submit.addEventListener('click', crearPrenda)}

    if(submitEditar){
        submitEditar.addEventListener('click',editarPrenda)

    }
    cancelar.addEventListener('click', recetearFormulario);
    atras.addEventListener('click', recetearFormulario);


});

function crearPrenda(e){
    e.preventDefault();
    ValidarPrenda();
};

function editarPrenda(e){
    e.preventDefault();
    Editar();
}


function recetearFormulario(e) {
    e.preventDefault();
    formulario.reset();
    formularioEditar.reset();
}


//funcion donde contine las variables
function variable(){
    const prenda = document.querySelector('#prendaGuardar');
    const proveedores = document.querySelector('#proveedorGuardar');
    const cantidad = document.querySelector('#cantidadGuardar');
    const cantidadE = document.querySelector('#cantidadEditar');
    const producto= document.querySelector('#productoEditar')
    const precio = document.querySelector('#precioEditar')
    const talla = document.querySelector('#tallaEditar')
    const tela =document.querySelector('#telaEditar')
    isvalidar = true;
    const number = /^\D*$/;
    const text = /^[^a-zA-Z]*$/;
    const signo = /[|°!"#$%&/()=?¿"]/

    //Retorna las variables que se van a implementar
    return{
        prendas:prenda,
        proveedor:proveedores,
        cantidaprenda: cantidad,
        cantidadEditar:cantidadE,
        Validar:isvalidar,
        Numero: number,
        Texto: text,
        Signos: signo,
        Productos: producto,
        Precio:precio,
        Talla:talla,
        Tela:tela

    }
}

//Funcion donde valida los campos input
function ValidarPrenda (){

    //Variable que trae las variables que se van a implentar de la funcion
    const Datos = variable()

    //Validar los campos del formulario
    if(Datos.prendas.value=="" && Datos.proveedor.value=="" && Datos.cantidaprenda.value=="" ){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios'
        })
        Datos.Validar=false

    }else if(Datos.prendas.value==""){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo prenda es obligatorio'
        })
        Datos.Validar=false

    }else if (!Datos.Numero.test(Datos.prendas.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo prenda no puede contener numeros'
        })
        Datos.Validar=false
    }else if(Datos.Signos.test(Datos.prendas.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo prenda no puede contener signos'
        })
        Datos.Validar=false
    }else if (!Datos.prendas.value.trimStart()){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo prenda no puede ser espacio'
        })
        Datos.Validar=false

    }else if(Datos.proveedor.value==""){

        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo proveedor es obligatorio'
        })
        Datos.Validar=false

    }else if (!Datos.Numero.test(Datos.proveedor.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo proveedor no puede contener numeros'
        })
        Datos.Validar=false
    }else if(Datos.Signos.test(Datos.proveedor.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo proveedor no puede contener signos'
        })
        Datos.Validar=false
    }else if (!Datos.proveedor.value.trimStart()){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo proveedor no puede ser espacio'
        })
        Datos.Validar=false

    } else if(Datos.cantidaprenda.value==""){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo cantidad es obligatorio'
        })
        Datos.Validar=false

    }else if (!Datos.Texto.test(Datos.cantidaprenda.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo cantidad no puede contener letras'
        })
        Datos.Validar=false
    }else if(Datos.Signos.test(Datos.cantidaprenda.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo cantidad no puede contener signos'
        })
        Datos.Validar=false
    }else if (!Datos.cantidaprenda.value.trimStart()){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo cantidad no puede ser espacio'
        })
        Datos.Validar=false

    }

    if (Datos.Validar){
        //* Cerrando el modal
        const modalBootstrap = bootstrap.Modal.getInstance(document.querySelector('#prenda'));
        modalBootstrap.hide();
        formulario.reset();
        Swal.fire('Prenda agregada correctamente','','success')
    }
}



function Editar(){
const Datos=variable();

if(Datos.Productos.value=="" && Datos.cantidaprenda.value=="" && Datos.Precio.value=="" && Datos.Talla.value=="" && Datos.Tela.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios'
        })
        Datos.Validar=false
    }else if(Datos.Productos .value==""){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo Productos es obligatorio'
        })
        Datos.Validar=false
    
    }else if (!Datos.Numero.test(Datos.Productos .value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo Productos no puede contener numeros'
        })
        Datos.Validar=false
    }else if(Datos.Signos.test(Datos.Productos .value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo Productos no puede contener signos'
        })
        Datos.Validar=false
    }else if (!Datos.Productos .value.trimStart()){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo Productos no puede ser espacio'
        })
        Datos.Validar=false
    } else if(Datos.cantidadEditar.value==""){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo cantidad es obligatorio'
        })
        Datos.Validar=false

    }else if (!Datos.Texto.test(Datos.cantidadEditar.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo cantidad no puede contener letras'
        })
        Datos.Validar=false
    }else if(Datos.Signos.test(Datos.cantidadEditar.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo cantidad no puede contener signos'
        })
        Datos.Validar=false
    }else if (!Datos.cantidadEditar.value.trimStart()){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo cantidad no puede ser espacio'
        })
        Datos.Validar=false

    } else if(Datos.Precio.value==""){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo precio es obligatorio'
        })
        Datos.Validar=false

    }else if (!Datos.Texto.test(Datos.Precio.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo precio no puede contener letras'
        })
        Datos.Validar=false
    }else if(Datos.Signos.test(Datos.Precio.value)){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo precio no puede contener signos'
        })
        Datos.Validar=false
    }else if (!Datos.Precio.value.trimStart()){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'El campo precio no puede ser espacio'
        })
        Datos.Validar=false

}else if(Datos.Talla.value==""){
    Swal.fire({
        icon:'error',
        title: 'Error',
        text: 'El campo Talla es obligatorio'
    })
    Datos.Validar=false

}else if (!Datos.Numero.test(Datos.Talla.value)){
    Swal.fire({
        icon:'error',
        title: 'Error',
        text: 'El campo Talla no puede contener numeros'
    })
    Datos.Validar=false
}else if(Datos.Signos.test(Datos.Talla.value)){
    Swal.fire({
        icon:'error',
        title: 'Error',
        text: 'El campo Talla no puede contener signos'
    })
    Datos.Validar=false
}else if (!Datos.Talla.value.trimStart()){
    Swal.fire({
        icon:'error',
        title: 'Error',
        text: 'El campo Talla no puede ser espacio'
    })
    Datos.Validar=false
}else if(Datos.Tela.value==""){
    Swal.fire({
        icon:'error',
        title: 'Error',
        text: 'El campo Tela es obligatorio'
    })
    Datos.Validar=false

}else if (!Datos.Numero.test(Datos.Tela.value)){
    Swal.fire({
        icon:'error',
        title: 'Error',
        text: 'El campo Tela no puede contener numeros'
    })
    Datos.Validar=false
}else if(Datos.Signos.test(Datos.Tela.value)){
    Swal.fire({
        icon:'error',
        title: 'Error',
        text: 'El campo Tela no puede contener signos'
    })
    Datos.Validar=false
}else if (!Datos.Tela.value.trimStart()){
    Swal.fire({
        icon:'error',
        title: 'Error',
        text: 'El campo Tela no puede ser espacio'
    })
    Datos.Validar=false
}

if (Datos.Validar){
    //* Cerrando el modal
    const modalBootstrap = bootstrap.Modal.getInstance(document.querySelector('#modalEditar'));
    modalBootstrap.hide();
    formulario.reset();
    Swal.fire('Prenda editada correctamente','','success')
}


}

})();


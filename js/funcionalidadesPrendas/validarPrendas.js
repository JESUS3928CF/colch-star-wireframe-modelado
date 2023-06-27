(() => {

    const formulario= document.querySelector('#formularioAgregarPrenda');
    const formularioEditar=document.querySelector('#formularioEditarPrendas');
    const formulario2=document.querySelector('#Tallaje')
    const formulario3=document.querySelector('#Colore')
    const formulario4=document.querySelector('#Sexo')





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
    formulario2.reset();
    formulario3.reset();
    formulario4.reset();
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
    const Stelas = document.querySelector('#SelectT');
    const seleT = Stelas.options[Stelas.selectedIndex].value;
    const TallaOcho = document.forms['Tallaje']['TallaOcho'].checked
    const TallaDiesiseis = document.forms['Tallaje']['TallaDiesiseis'].checked
    const TallaS = document.forms['Tallaje']['TallaS'].checked
    const TallaM = document.forms['Tallaje']['TallaM'].checked
    const TallaL = document.forms['Tallaje']['TallaL'].checked
    const TallaXL = document.forms['Tallaje']['TallaXL'].checked
    
    const Negro = document.forms['Colore']['Negro'].checked
    const Rojo = document.forms['Colore']['Rojo'].checked
    const Azul = document.forms['Colore']['Azul'].checked
    const Blanco = document.forms['Colore']['Blanco'].checked
    const Rosado = document.forms['Colore']['Rosado'].checked
    const Morado = document.forms['Colore']['Morado'].checked
    const Azulclaro = document.forms['Colore']['AzulClaro'].checked
    const Verde = document.forms['Colore']['Verde'].checked

    const masculino = document.forms['Sexo']['Masculino'].checked
    const femenino = document.forms['Sexo']['Femenino'].checked



    const  negroEditar = document.forms['Editar']['negroEditar'].checked
    const  rojoEditar= document.forms['Editar']['rojoEditar'].checked
    const  azulEditar= document.forms['Editar']['azulEditar'].checked
    const  verdeEditar= document.forms['Editar']['verdeEditar'].checked
    const  grisEditar= document.forms['Editar']['grisEditar'].checked



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
        Tela:tela,
        telas:seleT,
        TallaO:TallaOcho,
        TallaD:TallaDiesiseis,
        TallaM:TallaM,
        TallaS:TallaS,
        TallaL:TallaL,
        TallaXL:TallaXL,
        ColorNegro:Negro,
        ColorRojo:Rojo,
        ColorAzul:Azul,
        ColorBlanco:Blanco,
        ColorRosado:Rosado,
        ColorMorado:Morado,
        ColorAzulClaro:Azulclaro,
        ColorVerde:Verde,
        M: masculino,
        F: femenino,
        negroEditar,
        rojoEditar,      
        azulEditar,      
        verdeEditar,     
        grisEditar

    }
}

//Funcion donde valida los campos input
function ValidarPrenda (){

    //Variable que trae las variables que se van a implentar de la funcion
    const Datos = variable()

    //Validar los campos del formulario
    if(Datos.prendas.value=="" && Datos.proveedor.value=="" && Datos.cantidaprenda.value=="" &&  Datos.ColorAzul==false && Datos.ColorAzulClaro==false && Datos.ColorBlanco==false && Datos.ColorMorado==false && Datos.ColorNegro==false && Datos.ColorRojo==false && Datos.ColorRosado==false && Datos.ColorVerde==false  && Datos.TallaO==false && Datos.TallaD==false && Datos.TallaS==false && Datos.TallaM==false && Datos.TallaL==false && Datos.TallaXL==false && Datos.M==false && Datos.F==false){
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

    }else if(Datos.telas==""){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'Seleccione una tela'
        })
        Datos.Validar=false

    }else if(Datos.TallaO==false && Datos.TallaD==false && Datos.TallaS==false && Datos.TallaM==false && Datos.TallaL==false && Datos.TallaXL==false){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'Seleccione una talla'
        })
        Datos.Validar=false


    }else if (Datos.ColorAzul==false && Datos.ColorAzulClaro==false && Datos.ColorBlanco==false && Datos.ColorMorado==false && Datos.ColorNegro==false && Datos.ColorRojo==false && Datos.ColorRosado==false && Datos.ColorVerde==false){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'Seleccione un color'
        })
        Datos.Validar=false


    }else if (Datos.M==false && Datos.F==false){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'Seleccione el genero'
        })
        Datos.Validar=false

    }else if (Datos.M==true && Datos.F==true){
        Swal.fire({
            icon:'error',
            title: 'Error',
            text: 'Solo selecciona un  genero'
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

if(Datos.Productos.value=="" && Datos.cantidaprenda.value=="" && Datos.Precio.value=="" && Datos.Talla.value=="" && Datos.Tela.value=="" &&  Datos.negroEditar==false && Datos.rojoEditar==false && Datos.azulEditar==false && Datos.verdeEditar==false && Datos.grisEditar==false){
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
}else if ( Datos.negroEditar==false && Datos.rojoEditar==false && Datos.azulEditar==false && Datos.verdeEditar==false && Datos.grisEditar==false){
    Swal.fire({
        icon:'error',
        title: 'Error',
        text: 'Selecciona un color'
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


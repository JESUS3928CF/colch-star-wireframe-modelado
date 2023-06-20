(() => {
    const formulario = document.querySelector('#formularioAgregarDiseño')
    const formularioModificar=document.querySelector('#formularioModificar')
    const  formularioEditar=document.querySelector('#formularioEditarDiseño')

const submit = document.querySelector('#disenosA');
const submitModificar= document.querySelector('#ModificarDiseno')
const sumitEditar=document.querySelector('#EditarDiseno')

const cancelar = document.querySelector('#guardarCancelado');
const atras = document.querySelector('#xAgregar');

window.addEventListener('load', () => {

    if (submit){ submit.addEventListener('click', crearDisenos);}

    if(submitModificar){submitModificar.addEventListener('click',Modificar)}
    
    if (sumitEditar){
        sumitEditar.addEventListener('click',EditarDisenos)
    }


    cancelar.addEventListener('click', recetearFormulario);
    atras.addEventListener('click', recetearFormulario);
});

function recetearFormulario(e) {
    e.preventDefault();
    formulario.reset();
    formularioModificar.reset();
}

function crearDisenos(e) {
    e.preventDefault();
    /// Validar el formulario
    Disenos();
}

function Modificar(e){
    e.preventDefault();
    Modificacion()
}


function EditarDisenos(e){
    e.preventDefault(),
    Editar()
}

function variable(){
const nombre = document.querySelector('#NombreDiseno');
const nombreDiseno=document.querySelector('#nombreEditar');
const imagen = document.querySelector('#formFile1' );
const precio = document.querySelector('#precioGuardar');
const number = /^\D*$/;
const text = /^[^a-zA-Z]*$/;
const signo = /[|°"#$%&/()=?¿]/
isValidado=true

return{
    NombreDiseno:nombre,
    Nombre:nombreDiseno,
    Precio:precio,
    Numero:number,
    Texto:text,
    Signos:signo,
    Validar: isValidado
    
}

}

function Disenos() {
    const Datos= variable();

    if (Datos.NombreDiseno.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo diseño es obligatorio'
        })
        Datos.Validar=false

    }else if (!Datos.Numero.test(Datos.NombreDiseno.value)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo diseño no puede contener numeros'
        })
        Datos.Validar=false

    }else if (Datos.Signos.test(Datos.NombreDiseno.value)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo diseño no puede contener signos'
        })
        Datos.Validar=false

    }else if (!Datos.NombreDiseno.value.trimStart()){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo diseño no puede ser espacios'
        })
        Datos.Validar=false
    }
    
    if (isValidado) {
        //* Serrando el modal
        const modalBootstrap = bootstrap.Modal.getInstance(
            document.querySelector('#myModal1')
        );
        modalBootstrap.hide();

        formulario.reset();

         Swal.fire('Diseño agregado correctamente','','success');
    }
}


function Modificacion(){

    const Datos= variable();

    if (Datos.Precio.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo precio es obligatorio'
        })
        Datos.Validar=false

    }else if (!Datos.Texto.test(Datos.Precio.value)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo precio no puede contener letras'
        })
        Datos.Validar=false

    }else if (Datos.Signos.test(Datos.Precio.value)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo precio no puede contener signos'
        })
        Datos.Validar=false

    }else if (!Datos.Precio.value.trimStart()){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo precio no puede ser espacios'
        })
        Datos.Validar=false
    }
    
    if (Datos.Validar) {
        //* Serrando el modal
        const modalBootstrap = bootstrap.Modal.getInstance(document.querySelector('#myModalPrecio'));
        modalBootstrap.hide();
        formulario.reset();
         Swal.fire('Precio modificado correctamente','','success');
    }

}























function Editar(){
    const Datos= variable();

    if (Datos.Nombre.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo diseño es obligatorio'
        })
        Datos.Validar=false

    }else if (!Datos.Numero.test(Datos.Nombre.value)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo diseño no puede contener numeros'
        })
        Datos.Validar=false

    }else if (Datos.Signos.test(Datos.Nombre.value)){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo diseño no puede contener signos'
        })
        Datos.Validar=false

    }else if (!Datos.Nombre.value.trimStart()){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo diseño no puede ser espacios'
        })
        Datos.Validar=false
    }
    
    if (Datos.Validar) {
        //* Serrando el modal
        const modalBootstrap = bootstrap.Modal.getInstance(
            document.querySelector('#modalDiseño')
        );
        modalBootstrap.hide();

        formulario.reset();

         Swal.fire('Diseño agregado correctamente','','success');
    }
}
})();

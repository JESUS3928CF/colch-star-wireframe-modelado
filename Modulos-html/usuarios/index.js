const formulario = document.querySelector('#login');
const formularioRecuperar=document.querySelector('#RecupererSumit')
const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')

const submit = document.querySelector('#submitIngresar');
const RecupererSumit= document.querySelector('#RecupererSumit')

registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

window.addEventListener('load', () => {
    if(submit){
        submit.addEventListener("click", ingresar);

    }
    if(RecupererSumit){
        RecupererSumit.addEventListener("click", recuperar)

    }
});


function ingresar(e){
    e.preventDefault();
    validarRol()

   
}
function recetearFormulario(e){
    e.preventDefault();
    formulario.reset();

}

function recuperar(e){
    e.preventDefault();
    variableRecuperer()

}


function variableRecuperer(){
    const Recuperer = document.querySelector('#Recuperer')
   let isValidado=true
    const email_val =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (Recuperer.value == '') {

        Swal.fire({
            icon:'error',
            title:'Error',
            text: 'Ingrese el email'
        })

        isValidado = false;
    }else if (!email_val.test(Recuperer.value) && Recuperer.value != '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El formato de gmail es incorrecto',
             })
        isValidado = false;
    }


    if (isValidado) {

        formulario.reset();        
         Swal.fire(
            'Se envio un correo de recuperar contraseña'
                 );

    }



}


function validarRol() {
    //* Campos a validar

    const email = document.querySelector('#emailUsuario');

    const contrasena = document.querySelector('#contrasenaUsuario');

    //- Expresiones Regulares
    const number = /^\D*$/;
    const text = /^[^a-zA-Z]*$/;
    const email_val =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    /// Lógica de validación

    let isValidado = true;

    //* Validaciones para el nombre


    if (contrasena.value =="colchstar" && email.value=='colchstar@gmail.com'){
        isValidado=true
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Email o contraseña son incorrecta',
             })
         isValidado=false 

    }

   


   if (email.value == '') {

        Swal.fire({
            icon:'error',
            title:'Error',
            text: 'Ingrese el email'
        })

        isValidado = false;
    }else if (!email_val.test(email.value) && email.value != '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El formato de gmail es incorrecto',
             })
        isValidado = false;
    }else if (contrasena.value==''){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese la contraseña',
             })
        isValidado = false;

    }
    
   

    if (isValidado) {
        //* Serrando el modal
        // const modalBootstrap = bootstrap.Modal.getInstance(
        //     document.querySelector('#myModal')
        // );
        // modalBootstrap.hide();

        formulario.reset();

        window.location = "../../navbar.html";


        
         Swal.fire(
            'Bienvenido a colch star '
                 );

    }
}


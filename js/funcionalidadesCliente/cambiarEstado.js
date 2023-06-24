import PeticionesBackend from '../class_and_functions_global/PeticionesBackend.js';
const peticionesBackend = new PeticionesBackend(
    'http://localhost:3000/api/clientes/' 
);

(()=>{

    const buttonEstado = document.querySelectorAll(".estado");

    window.addEventListener("load", () => {
        buttonEstado.forEach((button) => {
            button.addEventListener('click', cambiarEstado);
        });
    });

     function cambiarEstado(e) {

        const elemento = e.target;

        Swal.fire({
            title: 'Estas seguro?',
            text: "Desear cambiar el estado de este cliente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero cambiarlo'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
    
              if (elemento.src.includes('on.svg')) {
    
                elemento.src = '/imagenes/iconos/light_switch off.svg';
            } else {
                elemento.src = '/imagenes/iconos/light_switch on.svg';
            }
            }
          })
    }


})();

export function cambiarEstadoDB(e, registro) {
    const elemento = e.target
    try {

        // console.log(registro)

    Swal.fire({
        title: 'Estas seguro?',
        text: "Desear cambiar el estado de este cliente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero cambiarlo'
      }).then((result) => {
        if (result.isConfirmed) {
          

          cambiarEstadoBackend(registro,elemento);

          
        }
      })
        
    } catch (error) {
        console.log(error);
    }
    
    
}


async function cambiarEstadoBackend(registro,elemento){

    

    try {
        const resultado = await peticionesBackend.cambiarEstado(registro, registro.id_cliente);

        console.log(resultado)

        if(resultado === "Cambio de estado"){
            Swal.fire(
                'Estado cambiado',
                '',
                'success'
              )

              if (elemento.src.includes('on.svg')) {
                // console.log(registro);
                
                elemento.src = '/imagenes/iconos/light_switch off.svg';
        
            } else {
        
                elemento.src = '/imagenes/iconos/light_switch on.svg';
            }
        }else{
            Swal.fire(
                'Ha ocurrido un problema',
                'El estado no fue cambiado',
                'error'
              )
        }

        
        
    } catch (error) {
        console.log(error);
    }
    
}


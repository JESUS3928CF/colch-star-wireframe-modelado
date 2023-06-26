import PeticionesBackend from '../class_and_functions_global/PeticionesBackend.js';
// import { cambiarEstadoDB } from './cambiarEstado.js';
import { llenarFormulario } from './validacionUsuarioEditar.js';
const peticionesBackend = new PeticionesBackend('http://localhost:3000/api/usuario');



export async function listarUsuarios(){
    const usuario = await peticionesBackend.findAll();
    console.log(usuario);
    mostrarRegistros(usuario);
}


//!  Aca se crea la tabla con sus registros
function mostrarRegistros(resultado) {
    const tablaUsuarioDiv = document.querySelector('#tablaUsuario');

    // Limpiar el contenido anterior
    tablaUsuarioDiv.innerHTML = '';

    // Crear la tabla
    const tabla = document.createElement('table');
    tabla.classList.add('table', 'caption-top');

    // Crear el encabezado de la tabla
    const thead = document.createElement('thead');
    const encabezado = document.createElement('tr');

    // Añadir los encabezados de las columnas
    const encabezadosColumnas = [
        'ID',
        'Nombre',
        'Apellido',
        'Teléfono',
        'Email',
        'Rol',
        'Estado',
        'Editar',
    ];
    encabezadosColumnas.forEach((encabezadoColumna) => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.textContent = encabezadoColumna;
        encabezado.appendChild(th);
    });

    thead.appendChild(encabezado);
    tabla.appendChild(thead);

    // Crear el cuerpo de la tabla
    const tbody = document.createElement('tbody');

    resultado.forEach((registro) => {
        const fila = document.createElement('tr');



        // Añadir las celdas con los datos de cada registro
        const datosRegistro = [
            registro.id_usuario,
            registro.nombre,
            registro.apellido,
            registro.telefono,
            registro.email,
            registro.role.nombre,
            registro.estado
                ? '<img class="centrarIcono estado" src="/imagenes/iconos/light_switch on.svg" />'
                : '<img class="centrarIcono estado" src="/imagenes/iconos/light_switch off.svg" />',
            '<button type="button" class="btn btn-info button-editar" data-bs-toggle="modal" data-bs-target="#modalEditar">Editar</button>',
        ];

        datosRegistro.forEach((dato) => {
            const celda = document.createElement('td');
            celda.innerHTML = dato;
            if (
                (dato &&
                    /src="\/imagenes\/iconos\/light_switch on\.svg"/i.test(
                        dato
                    )) ||
                (dato &&
                    /src="\/imagenes\/iconos\/light_switch off\.svg"/i.test(
                        dato
                    ))
            ) {
                const imagenEstado = celda.querySelector('.estado');
                imagenEstado.addEventListener('click', (e)=>{
                    console.log(registro);
                    // cambiarEstadoDB(e,registro);
                } );
            } 
            else if (dato && /<button[^>]*>Editar<\/button>/i.test(dato)) {
                const botonEditar = celda.querySelector('button');
                botonEditar.addEventListener('click',() => {
                    llenarFormulario(registro)
                });
            }

            fila.appendChild(celda);
        });

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    tablaUsuarioDiv.appendChild(tabla);
}
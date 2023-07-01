import PeticionesBackend from '../class_and_functions_global/PeticionesBackend.js';
import { cambiarEstadoDB } from './cambiarEstado.js';
import {
    llenarFormulario,
    llenarFormularioAdmin,
} from './validacionUsuarioEditar.js';
import { cargarBuscador } from '../tableTrasn.js';

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
    tabla.classList.add(
        'table',
        'tabla-M',
        'table-responsive-md',
        'table-bordered',
        'bg-gradient-lime'
    );
    tabla.id = 'table';

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
            obtenerImagenEstado(registro.estado, registro.fk_rol),
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

                if(registro.fk_rol != 1){
                    const imagenEstado = celda.querySelector('.estado');
                    imagenEstado.addEventListener('click', (e) => {
                        console.log(registro);
                        cambiarEstadoDB(e, registro);
                    });
                }
                
                
            } 
            else if (dato && /<button[^>]*>Editar<\/button>/i.test(dato)) {
                const botonEditar = celda.querySelector('button');
                botonEditar.addEventListener('click',() => {

                    if(registro.fk_rol == 1){
                        llenarFormularioAdmin(registro);
                    }else {
                        llenarFormulario(registro);
                    }
                });
            }

            fila.appendChild(celda);
        });

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    tablaUsuarioDiv.appendChild(tabla);

    cargarBuscador()
    
}

function obtenerImagenEstado(estado, fk_rol) {
    if (estado) {
        if (fk_rol === 1) {
            return '<img class="centrarIcono estado" src="/imagenes/iconos/crossing_out.svg" />';
        } else {
            return '<img class="centrarIcono estado" src="/imagenes/iconos/light_switch on.svg" />';
        }
    } else {
        return '<img class="centrarIcono estado" src="/imagenes/iconos/light_switch off.svg" />';
    }
}
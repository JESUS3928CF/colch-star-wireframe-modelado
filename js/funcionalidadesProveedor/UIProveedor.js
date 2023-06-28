import PeticionesBackend from '../class_and_functions_global/PeticionesBackend.js';
import { cambiarEstadoDB } from './cambiarEstado.js';
import { llenarFormulario } from './validacionProveedorEditar.js';
import { cargarBuscador } from '../tableTrasn.js';
const peticionesBackend = new PeticionesBackend('http://localhost:3000/api/proveedores');;



export async function listarProveedor(){
    const proveedores = await peticionesBackend.findAll();
    // console.log(clientes);
    mostrarRegistros(proveedores);
}


//!  Aca se crea la tabla con sus registros
function mostrarRegistros(resultado) {
    const tablaProveedorDiv = document.querySelector('#tablaProveedor');

    // Limpiar el contenido anterior
    tablaProveedorDiv.innerHTML = '';

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
        'Teléfono',
        'Dirección',
        'Contacto',
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
            registro.id_proveedor,
            registro.nombre,
            registro.telefono,
            registro.direccion,
            registro.contacto,
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
                imagenEstado.addEventListener('click', (e) => {
                    cambiarEstadoDB(e, registro);
                });
            } else if (dato && /<button[^>]*>Editar<\/button>/i.test(dato)) {
                const botonEditar = celda.querySelector('button');
                botonEditar.addEventListener('click', () => {
                    llenarFormulario(registro);
                });
            }

            fila.appendChild(celda);
        });

        tbody.appendChild(fila);

    });

    tabla.appendChild(tbody);
    tablaProveedorDiv.appendChild(tabla);

    cargarBuscador();
}



import PeticionesBackend from '../class_and_functions_global/PeticionesBackend.js';
// import { cambiarEstadoDB } from './cambiarEstado.js';
// import { llenarFormulario } from './validacionClienteEditar.js';
const peticionesBackend = new PeticionesBackend('http://localhost:3000/api/clientes');



export async function listarClientes(){
    const clientes = await peticionesBackend.findAll();
    // console.log(clientes);
    mostrarRegistros(clientes);
}


//!  Aca se crea la tabla con sus registros
function mostrarRegistros(resultado) {
    const tablaClientesDiv = document.querySelector('#tablaClientes');

    // Limpiar el contenido anterior
    tablaClientesDiv.innerHTML = '';

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
        'Dirección',
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
            registro.id_cliente,
            registro.nombre,
            registro.apellido,
            registro.telefono,
            registro.email,
            registro.direccion,
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

                    cambiarEstadoDB(e,registro);
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
    tablaClientesDiv.appendChild(tabla);
}



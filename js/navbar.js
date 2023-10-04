import PeticionesBackend from '..//js/class_and_functions_global/PeticionesBackend.js';
const peticionesBackend = new PeticionesBackend(
    'http://localhost:3000/api/usuarios'
);

const nombre = document.querySelector('#nombre-usuario');
const rol = document.querySelector('#nombre-rol');

const permisosUsuarios = document.querySelector('#permisosUsuario');
const permisosRoles = document.querySelector('#permisosRoles');

document.addEventListener('DOMContentLoaded', () => {
    const parametrosURL = new URLSearchParams(window.location.search);
    const id_usuario = parametrosURL.get('id');

    otorgarPermisos(id_usuario);

    

    console.log('Documento Listo');
    console.log(id_usuario);
});

async function otorgarPermisos(id_usuario){
    const usuario = await peticionesBackend.findOne(id_usuario);

    console.log(usuario.fk_rol);

    nombre.textContent = usuario.nombre +" " + usuario.apellido;
    rol.textContent = usuario.role.nombre;

    if(usuario.fk_rol !== 1){
        permisosUsuarios.style.display = 'none';
        permisosRoles.style.display = 'none';
    }
};

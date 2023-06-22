import PeticionesBackend from './PeticionesBackend.js';
const peticionesBackend = new PeticionesBackend('http://localhost:3000/api/proveedor');



export async function listarProveedor(){
    const clientes = await peticionesBackend.findAll();
    console.log(clientes);
}

import PeticionesBackend from './PeticionesBackend.js';
const peticionesBackend = new PeticionesBackend('http://localhost:3000/api/clientes');



export async function listarClientes(){
    const clientes = await peticionesBackend.findAll();
    console.log(clientes);
}




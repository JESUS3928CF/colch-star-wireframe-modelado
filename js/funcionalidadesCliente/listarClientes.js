import { listarClientes } from "./UIClientes.js";


(() => {
    document.addEventListener('DOMContentLoaded', () => {
        listarClientes();
        // imprimirPaginador();
        // buscarRegistros(1); 
        // peticionesBackend.findAll();
    });
})();

import {listarClientes} from '../class_and_functions_global/UIClientes.js';


(() => {
    document.addEventListener('DOMContentLoaded', () => {
        listarClientes();
        // imprimirPaginador();
        // buscarRegistros(1); 
        // peticionesBackend.findAll();
    });
})();

export default class PeticionesBackend {
    constructor(url) {
        this.url = url;
    }
    async findAll() {
        try {
            const respuesta = await fetch(this.url);
            const resultado = await respuesta.json();

            return resultado;
        } catch (error) {
            console.log(error);
        }
    }

    async findTotalRegistros(registrosPorPagina) {
        const calcularPaginas = (total) => {
            return parseInt(Math.ceil(total / registrosPorPagina));
        };

        try {
            const respuesta = await fetch(this.url);
            const resultado = await respuesta.json();

            let totalPaginas = calcularPaginas(resultado.length);

            // console.log(resultado);

            return totalPaginas;
        } catch (error) {
            console.log(error);
        }
    }

    //! agregar un registro
     async registrarDato(registro) {

        try {
            const respuesta = await fetch(this.url, {
                method: 'POST',
                body: JSON.stringify(registro),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const resultado = await respuesta.json();

            return resultado.message;
        } catch (error) {
            console.log(error);
        }
    }


    //! editar un registro 

    async actualizarRegistro(registro,id){
        try {
            const respuesta = await fetch(`${this.url}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registro),
            });

            const resultado = await respuesta.json();

            return resultado.message
        } catch (error) {
            console.log(error);
        }
    }


    //! cambiar estado

    async cambiarEstado(registro,id){
        try {
            // console.log(this.url);
            console.log(registro.estado);
            const respuesta = await fetch(`${this.url}/estado/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registro),
            });

            const resultado = await respuesta.json();

            return resultado.message
        } catch (error) {
            console.log(error);
        }
    }
}

// Este programa simula una llamada asincrónica para obtener un usuario
const obtenerUsuario = (id) => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if (id === 1) {
                const usuario = { id: 1, nombre: 'John Doe' };
                resolve(usuario)
            }
            else {
                reject(('Undefined User'));
            }
        }, 2000);
    });
}

obtenerUsuario(9)
    .then(usuario => console.log(usuario))
    .catch(error => console.log(error))
// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
    let myPromise = new Promise(function(resolve){
        setTimeout(() => {
            if (id === 1) {
                const usuario = { id: 1, nombre: 'John Doe' };
                resolve(usuario)
            }
        }, 2000);
    });
    return myPromise
}

async function mostrarUsuario(id) {
    const usuario = await obtenerUsuario(id);
    return usuario;
}

mostrarUsuario(1)
    .then(usuario => console.log(usuario));
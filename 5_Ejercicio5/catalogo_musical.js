// Creamos el catalogo

function crearCatalogo() {

    let canciones = []

    const agregarCancion = (nombre, genero, duracion) =>{
        let cancion = {
            nombre,
            genero,
            duracion
        };
        canciones.push(cancion)
    }

    const listarCanciones = (cancionesList = canciones) => {
        let string =''
        let listado = () => {
            cancionesList.forEach(({nombre, genero, duracion}) => string += (`${nombre} - ${genero} - Duración ${duracion}\n`))
            }
        listado()
        return (canciones.length === 0 ? 'No hay canciones' : string)
    
        }
    
    const buscarPorGenero = (genero) => {
        resultado = canciones.filter(cancion => cancion.genero === genero)
        let listadoPorGenero = listarCanciones(resultado)
        return listadoPorGenero
    }

    return {
        agregarCancion,
        listarCanciones,
        buscarPorGenero,


    }
}

let mi_catalogo = crearCatalogo();
mi_catalogo.agregarCancion('cancion1', 'elgenero1', '20:00:00')
mi_catalogo.agregarCancion('cancion2', 'elgenero2', '20:00:00')


console.log(mi_catalogo.listarCanciones())
console.log(mi_catalogo.buscarPorGenero('elgenero1'))

    // Calcular promedio (con reduce)

    





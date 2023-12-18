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

    const listarCanciones = () => {
        let string =''
        let listado = () => {
            canciones.forEach(({nombre, genero, duracion}) => string += (`${nombre} - ${genero} - Duración ${duracion}\n`))
            }
        listado()
        return (canciones.length === 0 ? 'No hay canciones' : string)
    }

    return {
        agregarCancion,
        listarCanciones

    }

}

let mi_catalogo = crearCatalogo();
mi_catalogo.agregarCancion('cancion1', 'elgenero', '20:00:00')
mi_catalogo.agregarCancion('cancion2', 'elgenero', '20:00:00')

console.log(mi_catalogo.listarCanciones())

    //Agregar cancion con push

    // Listar canciones (intentar con map))

    // Buscar canciones por genero (filter)

    // Calcular promedio (reduce)

    





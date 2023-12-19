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
        let resultado = canciones.filter(cancion => cancion.genero === genero)
        let listadoPorGenero = listarCanciones(resultado)
        return listadoPorGenero
    }

    const calcularPormedioDuracion = () => {
        let duracionTotal = canciones.reduce((acum, {nombre, genero, duracion}) => {
                const hhmmss = duracion.split(':')
                const horas = parseInt(hhmmss[0],10)
                const min = parseInt(hhmmss[1],10)
                const sec = parseFloat(hhmmss[2],10)

                const segundosTotales = horas*3600 + min*60 + sec

                return acum + segundosTotales

            },0)
            promedio = duracionTotal/canciones.length
            stringPromedio = (Math.floor(promedio/3600)).toString().padStart(2,'0') +':'+
                             (Math.floor((promedio%3600)/60)).toString().padStart(2,'0') +':'+
                             (promedio%60).toString().padStart(2,'0')
        
        
        return stringPromedio
        
    }

    return {
        agregarCancion,
        listarCanciones,
        buscarPorGenero,
        calcularPormedioDuracion,
    }
}

let mi_catalogo = crearCatalogo();
mi_catalogo.agregarCancion('cancion1', 'elgenero1', '01:30:00')
mi_catalogo.agregarCancion('cancion2', 'elgenero2', '00:30:30')


console.log(mi_catalogo.listarCanciones())
console.log(mi_catalogo.buscarPorGenero('elgenero1'))
console.log(mi_catalogo.calcularPormedioDuracion())

    





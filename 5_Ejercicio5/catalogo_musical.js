function crearCatalogo() {

    let canciones = []
    let generos = ["Jazz", 
                "Blues", 
                "Góspel", 
                "Soul",
                "Pop",
                "Rock&Roll",
                "Country",
                "Disco",
                "Techno",
                "Reggae",
                "Salsa",
                "Flamenco",
                "Ranchera",
                "Hip hop/Rap",
                "Reggaetón",
                "Metal",
                "Funk",
                "Música melódica",
                "Música clásica"]


    const agregarCancion = (nombre = "", genero = -1, duracion = "") =>{

        getGenerosList = () => {
            result = ""
            lists = (gens, index) => result += index + " - " + gens + " | "
            generos.forEach(lists)
            return result
        }
        
        while (nombre.length === 0){
            nombre = prompt('Introduce el nombre de la canción:')
        }
        
        while (genero<0 || genero>=generos.length || isNaN(parseInt(genero))){
            genero = prompt('GÉNERO: \n Introduce el número asociado al género \n Ejemplo para Jazz introduce 0 \n' + getGenerosList())
        }
        
        const formato = /^([01]?\d|2[0-3]):([0-5]?\d):([0-5]?\d)$/;
        while (!formato.test(duracion)) {
            duracion = prompt('Introduce la duración. Formato HH:MM:SS\n HH = Horas \n MM = Minutos \n SS = Segundos \n Usa : para la separación')
        }
        
        let cancion = {
            nombre,
            genero,
            duracion
        };
        canciones.push(cancion)
    }


    const listarCanciones = (cancionesList = canciones, string = "Lista de canciones en el catálogo \n" ) => {
        let listado = () => {
            cancionesList.forEach(({nombre, genero, duracion}) => string += (`${nombre} - ${generos[parseInt(genero)]} - Duración ${duracion}\n`))
            }
        listado()
        return (canciones.length === 0 ? 'Catálogo vacío. No hay canciones' : string)
    
        }
    
    const buscarPorGenero = () => {
        let genero = ""
        while (genero<0 || genero>=generos.length || isNaN(parseInt(genero))){
            genero = prompt('FILTRAR POR GÉNERO: \n Introduce el número asociado al género \n Ejemplo para filtrar por género Jazz introduce 0 \n' + getGenerosList())
        }
        let resultado = canciones.filter(cancion => cancion.generos === genero)
        let title = `Lista de canciones - Filtro por género: ${generos[parseInt(genero)]}\n`
        let listadoPorGenero = listarCanciones(resultado, title)
        return (resultado.length === 0 ? title + '\nEn el catálogo no hay canciones de este género' :listadoPorGenero)
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
                             (Math.floor(promedio%60)).toString().padStart(2,'0')
        
        
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
mi_catalogo.agregarCancion()
mi_catalogo.agregarCancion('Cancion2', '13', '1:3:4')
mi_catalogo.agregarCancion('Cancion3', '13', '02:00:20')
mi_catalogo.agregarCancion('Cancion3', '11', '1:00:20')

console.log(mi_catalogo.listarCanciones())

console.log(mi_catalogo.buscarPorGenero())
console.log(mi_catalogo.calcularPormedioDuracion())

    





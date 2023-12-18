## Ejercicio 5: Catálogo Musical

Imagina que estás creando un sistema de gestión para un catálogo musical. Cada canción tiene las siguientes propiedades:

Nombre de la Canción 
Género
Duración (en minutos)

Implementa un programa que permita realizar las siguientes operaciones:

Agregar Canción: Permite al usuario ingresar información sobre una nueva canción y agrégala al catálogo.

Listar Canciones: Muestra en la consola la información detallada de todas las canciones en el catálogo. Si el catálogo está vacío, imprime un mensaje indicando que no hay canciones.

Buscar Canciones por Género: Pide al usuario que ingrese un género y muestra en la consola todas las canciones de ese género.

Calcular Promedio de Duración: Calcula y muestra en la consola el promedio de la duración de todas las canciones en el catálogo. (opcional)

Estructura Sugerida:

```
function crearCatalogo() {
  // ...
  return {
    agregarCancion: agregarCancion,
    listarCanciones: listarCanciones,
    buscarPorGenero: buscarPorGenero,
    calcularPromedioDuracion: calcularPromedioDuracion
}; }

let miCatalogo = crearCatalogo();

// ...

```
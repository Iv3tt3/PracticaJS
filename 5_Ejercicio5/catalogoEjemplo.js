let mi_catalogo = crearCatalogo();

mi_catalogo.agregarCancion()

mi_catalogo.agregarCancion('Bohemian Rhapsody', '5', '00:06:07')
mi_catalogo.agregarCancion('Shape of You', '4', '00:03:53')
mi_catalogo.agregarCancion('Smooth', '4', '00:04:56')
mi_catalogo.agregarCancion('A Thousand Years', '4', '0:04:45')
mi_catalogo.agregarCancion('Hotel California', '5', '0:6:30')
mi_catalogo.agregarCancion('Despacito', '14', '00:03:49')
mi_catalogo.agregarCancion('Billie Jean', '4', '00:4:54')
mi_catalogo.agregarCancion('Stairway to Heaven', '5', '0:08:02')
mi_catalogo.agregarCancion('Uptown Funk', '16', '0:04:30')
mi_catalogo.agregarCancion('Someone Like You', '4', '0:04:45')
mi_catalogo.agregarCancion('Purple Haze', '5', '0:02:50')
mi_catalogo.agregarCancion('Havana', '4', '0:03:37')
mi_catalogo.agregarCancion('Boogie Wonderland', '16', '0:04:47')
mi_catalogo.agregarCancion('Clocks', '5', '0:05:07')
mi_catalogo.agregarCancion('La Bamba', '4', '0:02:07')
mi_catalogo.agregarCancion('Radioactive', '5', '0:03:08')
mi_catalogo.agregarCancion('Let It Go', '4', '0:03:46')
mi_catalogo.agregarCancion("What's Going On", '3', '0:03:53')
mi_catalogo.agregarCancion('Imagine', '5', '00:03:03')
mi_catalogo.agregarCancion("Can't Stop the Feeling!", '16', '00:03:56')

console.log(mi_catalogo.listarCanciones())

console.log(mi_catalogo.buscarPorGenero())

console.log(mi_catalogo.calcularPormedioDuracion())
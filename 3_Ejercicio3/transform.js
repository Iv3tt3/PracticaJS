const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    }, 
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];

const desarrolladoresJavascript = []
const nombresProyectos = []

for (let i = 0; i < datos.length; i++){
    let habilidades = datos[i].habilidades;
    for (let j = 0; j < habilidades.length; j++){
        if (habilidades[j] === 'JavaScript'){
            desarrolladoresJavascript.push(datos[i])
        }
    }
    let proyectos = datos[i].proyectos;
    for (let i = 0; i < proyectos.length; i++){
        let proyecto = proyectos[i].nombre
        nombresProyectos.push(proyecto)
      } 
}

console.log(desarrolladoresJavascript)
console.log(nombresProyectos)
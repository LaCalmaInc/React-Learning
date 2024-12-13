const nombre = 'Fernando';
const apellido = 'Herrera';

const nombreCompleto = `${ nombre } ${ apellido }`

console.log(nombreCompleto);

function getNombre(nombre){
    return `Como estas ${nombre}?`
}

const nuevoNombre = 'xabi'

console.log(`Este es mi texto: ${getNombre(nuevoNombre)}`)
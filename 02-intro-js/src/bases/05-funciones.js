const saludar = function (nombre){
    return `Hola ${nombre}`;
}

const saludar2 =  (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 =  (nombre) => `Hola ${nombre}`;
console.log(saludar('Goku'));
console.log(saludar3('Goku2'));


//tarea
//1. Transformar a funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
function getUserActivo(nombre){
    return{
        uid:'ABC567',
        username:nombre
    }
};
const usuarioActivo = getUserActivo('Goku');
console.log(usuarioActivo);

//Resolucion//
const getUserActivo2 = (nombre) => ({
        uid:'ABC567',
        username:nombre
});

console.log(getUserActivo2('Dios'))

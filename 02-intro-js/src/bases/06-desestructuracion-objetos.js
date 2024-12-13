const persona = {
    nombre: 'Moski',
    edad: 22,
    apellido: 'Skibidi',
    rango: 'General',
    clave: 'Hulk'
};

const {nombre, edad} = persona;

// console.log(nombre);
// console.log(edad);

const useContext = ({clave, nombre, edad, rango='soldado'}) =>{
    //const {nombre, edad} = usuario;
    return {
        nombreClave: clave,
        anios: edad,
        coords: {
            lat: 12.128,
            long: 43.989
        }
    }
}

const {nombreClave, anios, coords:{lat, long}}  = useContext(persona);

console.log(nombreClave, anios, lat, long)
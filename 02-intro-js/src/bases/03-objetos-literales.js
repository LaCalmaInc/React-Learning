const objeto = {
    nombre: 'Capitan',
    apellido: 'America',
    edad: 60,
    direccion: {
        ciudad: 'wisconsin',
        zipcode: 8150000,
        latitud: 12.90217392,
        longitud: 21.9037124,

    }
};

const objeto2 = {...objeto}; //clon del objeto
//console.table({objeto});
objeto2.apellido = 'Arica';
console.log({objeto});
console.log({objeto2});
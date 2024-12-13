const personajes = ['Goku', {nombre: 'Vegeta', raza:'Sayayin', poder:9000000},'Trunks'];
const [p1, p2] = personajes;
const {nombre} = p2;
//console.log(p1, nombre);

const useState = (valor) =>{
    return [valor, ()=>{console.log('Hola mundo')}];
}

const [pj, setNombre ] = useState('Goku');
console.log(pj);
setNombre();

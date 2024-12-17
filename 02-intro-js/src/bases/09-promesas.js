import { getHeroeById, getHeroeByOwner } from "./bases/08-imp-exp";
import { heroes } from "./data/heroes";


// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//        console.log(heroe)
//     }, 2000);
// });

// promesa.then(()=>{
//     console.log('then de la promesa')
// })

const getHeroByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe){
                resolve(heroe);
            }
            else{
                reject('no se puedo encontrar el heroe');
            }
        }, 2000);
    });
    
}

getHeroByIdAsync(22)
.then(console.log)
.catch(console.warn)
// promesa.then(()=>{
//     console.log('then de la promesa')
// })
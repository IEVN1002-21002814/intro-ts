
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    year: number;
}

const reproductor:Reproductor={
    volumen: 50,
    segundo: 10,
    cancion: "valiente",
    detalles:{
        autor: "Paty Cantu",
        year: 2018
    }
}
/*
console.log(`Volmen actual: ${reproductor.volumen}`);
console.log(`Segundos: ${reproductor.segundo}`);
console.log(`Canción: ${reproductor.cancion}`);
console.log(`Cantante: ${reproductor.detalles.autor}`);
console.log(`Año: ${reproductor.detalles.year}`);
*/

const{volumen, segundo, cancion, detalles} = reproductor;
const{autor, year}=detalles;

console.log(`Volmen actual: ${volumen}`);
console.log(`Segundos: ${segundo}`);
console.log(`Canción: ${cancion}`);
console.log(`Cantante: ${autor}`);
console.log(`Año: ${year}`);

console.log("-------------------")

const dbz:string[]=['Goku', 'didero', 'double d']
console.log(dbz[0])

const[a,,b]=dbz;
console.log(`Persona: ${a}`);
console.log(`Persona: ${b}`);



import{calcularIVA2, Producto} from "./05-desestructuracion-funciones";

const carrito:Producto[]=[
    {
        desc:'Telefono',
        precio: 100
    },
    {
        desc:'Telefono2',
        precio: 100
    },
    {
        desc:'Telefono3',
        precio: 500
    }

]


const [total, iva] = calcularIVA2(carrito);
console.log(`Total`)
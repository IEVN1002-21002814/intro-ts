export interface Producto{
    desc: string;
    precio: number;
}

const telefono:Producto={
    desc: 'Sony Erickson',
    precio: 500
}

const table:Producto={
    desc: 'Samsumg',
    precio: 4753
}

function calcularIVA(productos:Producto[]):number{
    let total = 0;
    productos.forEach((producto) => {
        total+=producto.precio;
    });

    return total*0.16;
}

const articulo1 = [telefono, table];
const iva1 = calcularIVA(articulo1);
console.log(`IVA ${iva1}`);


export function calcularIVA2(productos:Producto[]):[number, number]{
    let total = 0;
    productos.forEach((producto) => {
        total+=producto.precio;
    });

    return [total, total*0.16];
}

const articulo2 = [telefono, table];
const [total, iva2] = calcularIVA2(articulo2);

console.log(`Total: ${total}`);
console.log(`Total: ${iva2}`);

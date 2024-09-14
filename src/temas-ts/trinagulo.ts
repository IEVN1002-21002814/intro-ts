
import { Distance } from "./distanciaPuntos.ts";

class Triangulo extends Distance {
    private puntox_3: number;
    private puntoy_3: number;

    constructor(puntox_1: number, puntoy_1: number, puntox_2: number, puntoy_2: number, puntox_3: number, puntoy_3: number) {
        super(puntox_1, puntoy_1, puntox_2, puntoy_2);
        this.puntox_3 = puntox_3;
        this.puntoy_3 = puntoy_3;
    }

    /* 
    private Distanciona(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
        */

    public CalCULO(): void {
        let puntos:number[] = [];
        this.presss
        let sumas:number[] = [];
        let distancias:number[] = [];
        let validado:number[] = [];
        puntos.push(this.puntox_1, this.puntoy_1, this.puntox_2, this.puntoy_2, this.puntox_3, this.puntoy_3);

        let dis1 = this.presss(puntos[0], puntos[1], puntos[2],puntos[3]);
        let dis2 = this.presss(puntos[2], puntos[3], puntos[4],puntos[5]);
        let dis3 = this.presss(puntos[4], puntos[5], puntos[0],puntos[1]);

        distancias.push(dis1);
        distancias.push(dis2);
        distancias.push(dis3);
        sumas.push(dis1 + dis2);
        sumas.push(dis2 + dis3);
        sumas.push(dis3 + dis1);

        for (let i = 0; i < sumas.length; i++) {
            if (sumas[i] > distancias[i]) {
                validado.push(1);
            }
            else{
                validado.push(0);
            }
            
        }

        let verdad:number = 0
        for (let i = 0; i < validado.length; i++) {
            verdad = verdad + validado[1];
            
        }
        
        if(verdad == 3){
            console.log('Es un TRIANGULO');

            console.log('Puntos:' + puntos);
            console.log('Distancias:' + distancias);
        }
        else{
            console.log('NO ES UN TRINAGULO');

            console.log('Puntos:' + puntos);
            console.log('Distancias:' + distancias);
        }

    }
}

// Uso de la clase Triangle
const encajo = new Triangulo(0,0,0,0,0,0);
encajo.CalCULO();

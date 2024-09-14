import{Distance} from "./distanciaPuntos.ts";

class Tercer extends Distance{
    private puntox_3:number;
    private puntoy_3:number;

    constructor(puntox_1:number, puntoy_1:number, puntox_2:number, puntoy_2:number, puntox_3:number, puntoy_3:number){
        super(puntox_1, puntox_2, puntoy_1, puntoy_2)
        this.puntox_3 = puntox_3;
        this.puntoy_3 = puntoy_3;
    }

    calculo(){
        let puntos:number[] = [];

        puntos.push(this.puntox_1, this.puntoy_1, this.puntox_2, this.puntoy_2)
    }

}
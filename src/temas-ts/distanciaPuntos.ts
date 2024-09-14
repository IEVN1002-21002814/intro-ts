
export class Distance{
    puntox_1:number;
    puntox_2:number;
    puntoy_1:number;
    puntoy_2:number;

    constructor(puntox_1:number, puntoy_1:number, puntox_2:number, puntoy_2:number){
        this.puntox_1 = puntox_1;
        this.puntox_2 = puntox_2;
        this.puntoy_1 = puntoy_1;
        this.puntoy_2 = puntoy_2;
    }

    presss(x1: number, y1: number, x2: number, y2: number):number{
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    }
}



//const distance = new Distance(-4, -3, 2, 5);
//distance.presss();
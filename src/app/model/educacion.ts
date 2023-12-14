export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    dateE: string;

    constructor(nombreE: string, descripcionE: string, dateE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.dateE = dateE;
    }
}

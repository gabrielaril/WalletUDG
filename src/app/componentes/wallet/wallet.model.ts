export class Wallet {
    id: string;
    tipo: number;
    cladminId: number;
    cladminClave: String;
    cladminDesc: String;
    usuario: String;
    fecha: Date;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }

}
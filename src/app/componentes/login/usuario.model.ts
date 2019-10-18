export class Usuario {
    codigo: string;
    password: string;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
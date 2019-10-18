export class Message {
    message: string;
    status: Boolean;
    objet: Object;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }

}
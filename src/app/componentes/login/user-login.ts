export class UserLogin {
    user: string;
    pass: string;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface IUser {
    id: string;
    userName: string;
    email: string;
}

export class User implements IUser {
    constructor(
        public id: string,
        public userName: string,
        public email: string
    ) {
    }
}
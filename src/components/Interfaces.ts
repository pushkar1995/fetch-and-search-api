export interface User {
    id: number;
    name: string;
    username: string;
    email: string;

    address: object;
    street: string;
    suite: string;
    city: string;
    zipcode: number

    phone: number;
    company: object
}

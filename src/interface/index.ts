export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string
        suite: string
        city: string
        zipcode: number
    }
    phone: number;
    company: {
        name: string
    }
}

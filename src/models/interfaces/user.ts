export enum blood_type {
    A_POS = 'A+',
    A_NEG = 'A-',
    B_POS = 'B+',
    B_NEG = 'B-',
    AB_POS = 'AB_POS',
    AB_NEG = 'AB-',
    O_POS = 'O+',
    O_NEG = '0-',
    unknown = 'unknown'
}
export interface User {
    id?: string;
    forename?: string;
    surname?: string;
    email?: string;
    birthdate?: Date;
    blood_type?: string;
    medical_record?: string;
    status_id?: number;
    parish_id?: number;
}
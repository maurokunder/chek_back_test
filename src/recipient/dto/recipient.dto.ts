export class RecipientDTO {
    readonly rut: string;
    readonly fullName: string;
    readonly email: string;
    readonly phone: string;
    readonly bankId: string;
    readonly typeAccount: string;
    readonly accountNumber: string;
    readonly amount?: number;
}
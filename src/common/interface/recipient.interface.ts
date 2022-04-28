export interface IRecipient extends Document {
    rut: string;
    fullName: string;
    email: string;
    phone: string;
    bankId: string;
    typeAccount: string;
    accountNumber: string;
    amount?: number;
}
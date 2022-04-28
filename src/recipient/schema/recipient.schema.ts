import * as mongoose from 'mongoose';

export const RecipientSchema = new mongoose.Schema({
    rut: { type:String, required: true },
    fullName: { type:String, required: true },
    email: { type:String, required: true },
    phone: { type:String, required: true },
    bankId: { type:String, required: true },
    typeAccount: { type:String, required: true },
    accountNumber: { type:String, required: true },
    amount: { type:Number, required: true },
},{
    timestamps:true
});

RecipientSchema.index({ rut:1 },{ unique:true });
RecipientSchema.index({ email:1 },{ unique:true });
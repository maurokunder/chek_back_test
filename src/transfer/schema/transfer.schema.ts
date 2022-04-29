import mongoose from "mongoose";

export const TransferSchema = new mongoose.Schema({
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
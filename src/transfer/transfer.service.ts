import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IRecipient } from 'src/common/interface/recipient.interface';
import { TRANSFER } from 'src/common/models/models';
import { Model } from 'mongoose';
import { TransferDTO } from './dto/transfer.dto';
import { ITransfer } from 'src/common/interface/transfer.interface';

@Injectable()
export class TransferService {
    constructor(@InjectModel(TRANSFER.name) private readonly model:Model<ITransfer>){}
    
    async create(transferDTO: TransferDTO): Promise<IRecipient> {
        const newRecipient = new this.model({...transferDTO})
        return newRecipient.save();
    }

    async findAll(): Promise<IRecipient[]> {
        return await this.model.find();
    }

}

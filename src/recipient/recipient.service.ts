import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IRecipient } from 'src/common/interface/recipient.interface';
import { RECIPIENT } from 'src/common/models/models';
import { RecipientDTO } from './dto/recipient.dto';
import { Model } from 'mongoose';

@Injectable()
export class RecipientService {
    constructor(@InjectModel(RECIPIENT.name) private readonly model:Model<IRecipient>){}
    
    async create(recipientDTO: RecipientDTO): Promise<IRecipient> {
        const newRecipient = new this.model({...recipientDTO})
        return newRecipient.save();
    }

    async findAll(): Promise<IRecipient[]> {
        return await this.model.find();
    }

}

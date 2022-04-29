import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TRANSFER } from 'src/common/models/models';
import { TransferSchema } from './schema/transfer.schema';
import { TransferController } from './transfer.controller';
import { TransferService } from './transfer.service';


@Module({
    imports: [
    MongooseModule.forFeatureAsync([{
        name:TRANSFER.name,
        useFactory:() => {
        return TransferSchema;
        }
    }]),
    ],
    controllers: [TransferController],
    providers:  [TransferService]
})
export class TransferModule {}

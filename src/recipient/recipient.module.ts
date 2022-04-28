import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RECIPIENT } from 'src/common/models/models';
import { RecipientController } from './recipient.controller';
import { RecipientService } from './recipient.service';
import { RecipientSchema } from './schema/recipient.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name:RECIPIENT.name,
      useFactory:() => {
        return RecipientSchema;
      }
    }]),
  ],
  controllers: [RecipientController],
  providers: [RecipientService]
})
export class RecipientModule {}

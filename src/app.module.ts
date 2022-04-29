import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipientModule } from './recipient/recipient.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/chek_back_test'),
    RecipientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

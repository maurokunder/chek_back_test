import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { filter } from 'rxjs';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter);
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.enableCors({
    origin: ['http://localhost:4200', 'http://34.201.64.141docker ', 'http://localhost:3000'],
    credentials: true,
  });
  const options = new DocumentBuilder()
    .setTitle('Chek Transfer API')
    .setDescription('Simulate Bank Transfer')
    .setVersion('1.0.0').build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document, { swaggerOptions:{ filter:true }});
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

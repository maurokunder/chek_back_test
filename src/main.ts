import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter);
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.enableCors({
    origin: ['http://localhost:4200'],
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

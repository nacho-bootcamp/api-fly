import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExcepcionGlobal } from './common/excepcion/excepcionGlobal';
import { TimeOutInterceptor } from './common/intercepcion/timeOut.Interceptors';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new ExcepcionGlobal());
  app.useGlobalInterceptors(new TimeOutInterceptor())
  await app.listen(3000);
}
bootstrap();

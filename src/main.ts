import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExcepcionGlobal } from './common/excepcion/excepcionGlobal';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExcepcionGlobal())
  await app.listen(3000);
}
bootstrap();

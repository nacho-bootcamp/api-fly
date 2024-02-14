import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'; // Agrega esta importación

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.developer'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB), // Corrige la configuración de MongooseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

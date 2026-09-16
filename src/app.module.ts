import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsuarioModule } from './usuario/usuario.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module.js';


@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsuarioModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

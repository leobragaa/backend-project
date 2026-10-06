import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsuarioModule } from './models/usuario/usuario.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module.js';
import { PacienteModule } from './models/paciente/paciente.module.js';
import { DadosClinicosModule } from './models/dados-clinicos/dados-clinicos.module.js';
import { PlanoAlimentarModule } from './models/plano-alimentar/plano-alimentar.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';
import { SendEmailByPacienteModule } from './models/send-email-by-paciente/send-email-by-paciente.module.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    UsuarioModule,
    AuthModule,
    PacienteModule,
    DadosClinicosModule,
    PlanoAlimentarModule,
    SendEmailByPacienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

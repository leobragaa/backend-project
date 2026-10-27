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
import { MessageConversationModule } from './models/message-conversation/message-conversation.module.js';
import { AlimentoModule } from './models/alimento/alimento.module.js';
import { ItemrefeicaoModule } from './models/itemrefeicao/itemrefeicao.module.js';
import { RefeicaoModule } from './models/refeicao/refeicao.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DB_URL'),
        ssl: {
          rejectUnauthorized: false,
        },
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    UsuarioModule,
    AuthModule,
    PacienteModule,
    DadosClinicosModule,
    PlanoAlimentarModule,
    MessageConversationModule,
    RefeicaoModule,
    ItemrefeicaoModule,
    AlimentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

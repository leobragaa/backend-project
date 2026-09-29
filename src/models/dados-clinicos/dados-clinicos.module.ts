import { Module } from '@nestjs/common';
import { DadosClinicosService } from './dados-clinicos.service.js';
import { DadosClinicosController } from './dados-clinicos.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DadosClinico } from './entities/dados-clinico.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([DadosClinico])],
  controllers: [DadosClinicosController],
  providers: [DadosClinicosService],
})
export class DadosClinicosModule {}

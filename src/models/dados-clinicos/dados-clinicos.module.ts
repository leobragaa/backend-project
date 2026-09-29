import { Module } from '@nestjs/common';
import { DadosClinicosService } from './dados-clinicos.service';
import { DadosClinicosController } from './dados-clinicos.controller';

@Module({
  controllers: [DadosClinicosController],
  providers: [DadosClinicosService],
})
export class DadosClinicosModule {}

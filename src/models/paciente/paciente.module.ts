import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service.js';
import { PacienteController } from './paciente.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity.js';
import { EmailServiceModule } from '../email-service/email-service.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente]), EmailServiceModule],
  controllers: [PacienteController],
  providers: [PacienteService],
  exports: [PacienteService],
})
export class PacienteModule {}

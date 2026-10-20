import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service.js';
import { PacienteController } from './paciente.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity.js';
import { Usuario } from '../usuario/entities/usuario.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente, Usuario])],
  controllers: [PacienteController],
  providers: [PacienteService],
  exports: [PacienteService],
})
export class PacienteModule {}

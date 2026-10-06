import { Module } from '@nestjs/common';
import { SendEmailByPacienteService } from './send-email-by-paciente.service.js';
import { SendEmailByPacienteController } from './send-email-by-paciente.controller.js';

@Module({
  controllers: [SendEmailByPacienteController],
  providers: [SendEmailByPacienteService],
})
export class SendEmailByPacienteModule {}

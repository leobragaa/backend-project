import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SendEmailByPacienteService } from './send-email-by-paciente.service.js';
import { CreateSendEmailByPacienteDto } from './dto/create-send-email-by-paciente.dto.js';
import { UpdateSendEmailByPacienteDto } from './dto/update-send-email-by-paciente.dto.js';
import { from } from 'rxjs';

@Controller('send-email-by-paciente')
export class SendEmailByPacienteController {
  constructor(
    private readonly sendEmailByPacienteService: SendEmailByPacienteService,
  ) {}

  @Post('send')
  async sendEmail(@Body() dto: sendEmailDTO){
    await this.sendEmailByPacienteService.sendEmail(dto);
    return (message: "Email enviado com sucesso");
  }
}

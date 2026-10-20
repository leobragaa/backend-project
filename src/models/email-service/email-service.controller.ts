import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email-service.service.js';

@Controller('email-service')
export class EmailServiceController {
  constructor(private readonly emailServiceService: EmailService) {}

  @Post('send')
  async sendEmailByPaciente(
    @Body()
    email: string,
    senha: string,
    nome: string,
  ) {
    await this.emailServiceService.sendEmailUsers(email, nome, senha);
    return { message: 'ENVIOU O EMAIL ALELUIA' };
  }
}

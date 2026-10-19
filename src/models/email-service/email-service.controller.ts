import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './entities/email-service.entity.js';
import { sendEmailDto } from './dto/send-email.dto.js';

@Controller('email-service')
export class EmailServiceController {
  constructor(private readonly emailServiceService: EmailService) {}

  @Post('send')
  async sendEmailByPaciente(@Body() dto: sendEmailDto) {
    await this.emailServiceService.sendEmailByPaciente(dto);
    return { message: 'ENVIOU O EMAIL ALELUIA' };
  }
}

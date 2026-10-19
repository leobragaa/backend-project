import { Body, Controller, Post } from '@nestjs/common';
import { sendEmailDto } from './dto/send-email.dto.js';
import { EmailServiceService } from './email-service.service.js';

@Controller('email-service')
export class EmailServiceController {
  constructor(private readonly emailServiceService: EmailServiceService) {}

  @Post('send')
  async sendEmailByPaciente(@Body() dto: sendEmailDto) {
    await this.emailServiceService.sendEmailUsers(dto);
    return { message: 'ENVIOU O EMAIL ALELUIA' };
  }
}

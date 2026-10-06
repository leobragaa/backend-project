import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class SendEmailByPacienteService {
  constructor(private readonly configService: ConfigService) {}

  emailEnvio() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('EMAIL_HOST'),
      port: this.configService.get<string>('EMAIL_PORT'),
      secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_'),
      },
    });
    return transporter;
  }
}

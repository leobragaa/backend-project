import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sendEmailDto } from './dto/send-email.dto.js';
import * as nodemailer from 'nodemailer';
@Injectable()
export class EmailServiceService {
  constructor(private readonly configService: ConfigService) {}

  emailTransport() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('EMAIL_HOST'),
      port: this.configService.get<number>('EMAIL_PORT'),
      service: 'gmail',
      secure: false,
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASSWORD'),
      },
    });

    return transporter;
  }

  async sendEmailUsers(dto: sendEmailDto) {
    const { recipients, subject, html } = dto;
    const transport = this.emailTransport();

    const options: nodemailer.SendMailOptions = {
      to: recipients,
      from: this.configService.get<string>('EMAIL_USER'),
      subject: subject,
      html: html,
    };
    try {
      await transport.sendMail(options);
      console.log('Email Enviando com Service funcionando');
    } catch (error) {
      console.log('Erro aqui no Service do Emial', error);
    }
  }
}

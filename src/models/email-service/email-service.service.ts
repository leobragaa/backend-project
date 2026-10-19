import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailServiceService {
  constructor(private readonly configService: ConfigService) {}

  emailTransport() {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASSWORD'),
      },
    });

    return transporter;
  }

  // async sendEmailUsers(dto: sendEmailDTO) {
  //   const transport = this.emailTransport();

  //   const options: nodemailer.SendEmailOptions = {
  //     to: email,
  //     from: this.configService.get<string>('EMAIL_USER'),
  //     subject: 'Hello World',
  //     text: 'Plain text content',
  //     html: '<b>HTML content</b>',
  //   };
  // }
}

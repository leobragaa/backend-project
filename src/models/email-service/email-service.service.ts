import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
@Injectable()
export class EmailService {
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

  async sendEmailUsers(nome: string, email: string, senha: string) {
    const transport = this.emailTransport();
    const options: nodemailer.SendMailOptions = {
      to: email,
      from: this.configService.get<string>('EMAIL_USER'),
      subject: '',
      html: `<div> 
            <div>
                <h1> Nutriflow </h1>
                <p> Nutrição - Perfomance - Equilíbrio </p>
            </div>
            <div>
                <h2> Seja Bem-Vindo, ${nome}!</h2>

                <p> 
                    Seu cadastro foi realizado com sucesso no <strong> NutriFlow </strong>.
                    Aqui está sua senha temporaria de acesso ao sistema.
                </p>

                <div>
                    <p> 
                        Senha de Acesso:
                        <span> ${senha} </span>
                    </p>
                </div>

                <div>
                    <p>
                        <strong> Importante: </strong>
                        Esta é uma Senha Temporária.
                        Será solicitada a troca senha, assim que realizar o primeiro acesso.
                    </p>
                </div>

                <div>
                    <p>
                        Em caso de dúvidas, entre em contato com o Nutricionista.
                    </p>
                </div>

                <div>
                    <p>
                        © NutriFlow
                    </p>
                </div>
            </div>
        </div>`,
    };
    try {
      await transport.sendMail(options);
      console.log('Email Enviando com Service funcionando');
    } catch (error) {
      console.log('Erro aqui no Service do Emial', error);
    }
  }

  async sendEmailRecuperaSenha() {

    const transport = this.emailTransport();

    const options: nodemailer.SendMailOptions = {
      to: 'recipients',
      from: this.configService.get<string>('EMAIL_USER'),
      subject: 'subject',
      html: ``,
    };
    try {
      await transport.sendMail(options);
      console.log('Email Enviando com Service funcionando');
    } catch (error) {
      console.log('Erro aqui no Service do Emial', error);
    }
  }
}

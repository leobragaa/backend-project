import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  signIn(@Body() credenciais: any) {
    console.log(credenciais);

    if (credenciais) {
      return this.authService.signIn(credenciais.email, credenciais.senha);
    }

    throw new BadRequestException();
  }
}

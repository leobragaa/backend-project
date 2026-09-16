import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service.js';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  signIn(@Body() credenciais: Record<string, any>) {
    console.log(credenciais);

    if (credenciais) {
      return this.authService.signIn(credenciais.email, credenciais.senha);
    }
    
    throw new BadRequestException();
  }
}

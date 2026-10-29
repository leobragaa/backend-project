import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../models/usuario/usuario.service.js';

@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuarioService) {}

  async signIn(
    email: string,
    password: string,
    tipousuario: string,
  ): Promise<any> {
    const usuario = await this.usuarioService.findOneEmail(email);

    if (
      !usuario ||
      usuario?.senha !== password ||
      usuario.tipousuario !== tipousuario
    ) {
      throw new UnauthorizedException('Email ou senha invalidos');
    }

    const { senha, ...result } = usuario;

    return result;
  }
}

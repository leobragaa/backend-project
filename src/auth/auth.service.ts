import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../models/usuario/usuario.service.js';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

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

    const payload = {
      sub: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      tipousuario: usuario.tipousuario,
    };

    const access_token = await this.jwtService.signAsync(payload);

    const { senha, ...dadosUsuario } = usuario;

    return {
      access_token,
      usuario: dadosUsuario,
    };
  }
}

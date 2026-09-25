import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service.js';
import { UsuarioController } from '../usuario/usuario.controller.js';

@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuarioService) {}

  async signIn(email: string, password: string): Promise<any> {
    const usuario = await this.usuarioService.findOneEmail(email);

    if (usuario?.senha !== password) {
      throw new UnauthorizedException();
    }

    const { senha, ...result } = usuario;

    return result;
  }
}

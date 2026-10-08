import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../models/usuario/usuario.service.js';
import { PacienteService } from '../models/paciente/paciente.service.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly pacienteService: PacienteService,
  ) {}

  async signIn(
    email: string,
    password: string,
    tipousuario: string,
  ): Promise<any> {
    if (tipousuario === 'Nutricionista') {
      console.log('Nutricionisa aqui hein');
      const usuario = await this.usuarioService.findOneEmail(email);

      if (usuario?.senha !== password) {
        throw new UnauthorizedException();
      }
      const { senha, ...resultUsuario } = usuario;

      return resultUsuario;
    } else if (tipousuario === 'Paciente') {
      console.log('Paciente aqui hein');

      const paciente = await this.pacienteService.findPacienteEmail(email);

      if (paciente?.senha !== password) {
        throw new UnauthorizedException();
      }

      const { senha, ...resultPaciente } = paciente;

      return resultPaciente;
    } else {
      console.log(' NÃO FOI ENCONTRADO NIGUEM :/');
      throw new UnauthorizedException();
    }
  }
}

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { UsuarioModule } from '../models/usuario/usuario.module.js';
import { PacienteModule } from '../models/paciente/paciente.module.js';

@Module({
  imports: [UsuarioModule, PacienteModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

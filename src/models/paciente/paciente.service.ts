import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto.js';
import { UpdatePacienteDto } from './dto/update-paciente.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity.js';
import { Repository } from 'typeorm';
import { EmailService } from '../email-service/email-service.service.js';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepositorio: Repository<Paciente>,
    private readonly emailService: EmailService,
  ) {}

  async create(createPacienteDto: CreatePacienteDto) {
    const paciente = this.pacienteRepositorio.create(createPacienteDto);
    await this.emailService.sendEmailUsers(
      paciente.nome,
      paciente.email,
      paciente.senha,
    );
    return this.pacienteRepositorio.save(paciente);
  }
  async findByNutricionista(id_nutricionista: number) {
    return this.pacienteRepositorio.find({
      where: {
        usuario_id: {
          id: id_nutricionista,
        },
      },
    });
  }
  findCPF(cpf: string) {
    return this.pacienteRepositorio.findOne({ where: { cpf } });
  }

  findTipoUsuario(tipousuario: string) {
    return this.pacienteRepositorio.findOne({ where: { tipousuario } });
  }

  findAll(): Promise<Array<Paciente>> {
    return this.pacienteRepositorio.find();
  }

  findOne(id: number) {
    return this.pacienteRepositorio.findOne({ where: { id } });
  }

  findPacienteEmail(email: string) {
    return this.pacienteRepositorio.findOne({ where: { email } });
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteRepositorio.update(+id, updatePacienteDto);
  }

  remove(id: number) {
    return this.pacienteRepositorio.remove;
  }
}

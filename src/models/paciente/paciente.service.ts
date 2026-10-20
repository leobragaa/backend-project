import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto.js';
import { UpdatePacienteDto } from './dto/update-paciente.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity.js';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario/entities/usuario.entity.js';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepositorio: Repository<Paciente>,
    @InjectRepository(Usuario)
    private readonly usuarioRepositorio: Repository<Usuario>,
  ) {}

  async create(dto: CreatePacienteDto, idNutricionista: string) {
    const usuario = this.usuarioRepositorio.create({
      nome: dto.nome,
      email: dto.email,
      senha: dto.senha,
      telefone: dto.telefone,
      tipousuario: 'paciente',
    });

    const usuarioSalvo = await this.usuarioRepositorio.save(usuario);

    const paciente = this.pacienteRepositorio.create({
      sexo: dto.sexo,
      datanascimento: dto.datanascimento,
      endereco: dto.endereco,
      cidade: dto.cidade,
      estado: dto.estado,
      cep: dto.cep,
      usuario_id: usuarioSalvo,
      nutricionista_id: { id: idNutricionista },
    });
    return this.pacienteRepositorio.save(paciente);
  }
  async findByNutricionista(id_nutricionista: string) {
    return this.pacienteRepositorio.find({
      where: {
        nutricionista_id: {
          id: id_nutricionista,
        },
      },
      relations: {
        nutricionista_id: true,
      },
    });
  }

  findAll() {
    return this.pacienteRepositorio.find();
  }

  findOne(id: string) {
    return this.pacienteRepositorio.findOne({ where: { id } });
  }

  update(id: string, updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteRepositorio.update(id, updatePacienteDto);
  }

  remove(id: string) {
    return this.pacienteRepositorio.remove;
  }
}

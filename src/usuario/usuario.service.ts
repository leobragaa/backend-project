import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepositorio: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuarioRepositorio.create(createUsuarioDto);

    return await this.usuarioRepositorio.save(usuario);
  }

  findAll(): Promise<Array<Usuario>> {
    return this.usuarioRepositorio.find();
  }

  findOne(id: number) {
    return this.usuarioRepositorio.findOne({ where: { id } });
  }

  findOneEmail(email: string) {
    return this.usuarioRepositorio.findOne({ where: { email } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.findOne(id);

    if (!usuario) {
      throw new NotFoundException();
    }
    Object.assign(usuario, updateUsuarioDto);

    return await this.usuarioRepositorio.save(usuario);
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);

    if (!usuario) {
      throw new NotFoundException();
    }
    return await this.usuarioRepositorio.remove(usuario);
  }
}

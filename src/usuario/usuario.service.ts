import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepositorio: Repository<Usuario>,
  ){}

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll(): Promise<Array<Usuario>> {
    return this.usuarioRepositorio.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  findOneEmail(email: string) {
    return this.usuarioRepositorio.findOne({where:{email}});
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}

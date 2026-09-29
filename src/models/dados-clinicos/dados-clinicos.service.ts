import { Injectable } from '@nestjs/common';
import { CreateDadosClinicoDto } from './dto/create-dados-clinico.dto.js';
import { UpdateDadosClinicoDto } from './dto/update-dados-clinico.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { DadosClinico } from './entities/dados-clinico.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class DadosClinicosService {
  constructor(
    @InjectRepository(DadosClinico)
    private readonly dadosclinicosRepositorio: Repository<DadosClinico>,
  ) {}

  create(dadosClinicoDTO: CreateDadosClinicoDto) {
    const dadosclinicos = this.dadosclinicosRepositorio.create(dadosClinicoDTO);

    return this.dadosclinicosRepositorio.save(dadosclinicos);
  }

  findAll() {
    return this.dadosclinicosRepositorio.find();
  }

  findOne(id: number) {
    return this.dadosclinicosRepositorio.findOne({ where: { id } });
  }

  update(id: number, updateDadosClinicoDto: UpdateDadosClinicoDto) {
    return `This action updates a #${id} dadosClinico`;
  }

  remove(id: number) {
    return `This action removes a #${id} dadosClinico`;
  }
}

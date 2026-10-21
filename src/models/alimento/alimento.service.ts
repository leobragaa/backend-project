import { Injectable } from '@nestjs/common';
import { CreateAlimentoDto } from './dto/create-alimento.dto.js';
import { UpdateAlimentoDto } from './dto/update-alimento.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alimento } from './entities/alimento.entity.js';

@Injectable()
export class AlimentoService {
  constructor(
    @InjectRepository(Alimento)
    private readonly alimento_dto: Repository<Alimento>,
  ) {}

  async create(createAlimentoDto: CreateAlimentoDto) {
    const alimento = this.alimento_dto.create(createAlimentoDto);

    return await this.alimento_dto.save(alimento);
  }

  findAll() {
    return `This action returns all alimento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alimento`;
  }

  update(id: number, updateAlimentoDto: UpdateAlimentoDto) {
    return `This action updates a #${id} alimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} alimento`;
  }
}

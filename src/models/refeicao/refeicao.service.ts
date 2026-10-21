import { Injectable } from '@nestjs/common';
import { CreateRefeicaoDto } from './dto/create-refeicao.dto.js';
import { UpdateRefeicaoDto } from './dto/update-refeicao.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Refeicao } from './entities/refeicao.entity.js';

@Injectable()
export class RefeicaoService {
  constructor(
    @InjectRepository(Refeicao)
    private readonly refeicaoService: Repository<Refeicao>,
  ) {}

  async create(createRefeicaoDto: CreateRefeicaoDto) {
    const refeicao = this.refeicaoService.create(createRefeicaoDto);

    return this.refeicaoService.save(refeicao);
  }

  findAll() {
    return `This action returns all refeicao`;
  }

  findOne(id: number) {
    return this.refeicaoService.findOne({ where: { id } });
  }

  update(id: number, updateRefeicaoDto: UpdateRefeicaoDto) {
    return `This action updates a #${id} refeicao`;
  }

  remove(id: number) {
    return `This action removes a #${id} refeicao`;
  }
}

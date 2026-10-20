import { Injectable } from '@nestjs/common';
import { CreateRefeicaoDto } from './dto/create-refeicao.dto.js';
import { UpdateRefeicaoDto } from './dto/update-refeicao.dto.js';

@Injectable()
export class RefeicaoService {
  constructor() {}
  create(createRefeicaoDto: CreateRefeicaoDto) {
    return 'This action adds a new refeicao';
  }

  findAll() {
    return `This action returns all refeicao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} refeicao`;
  }

  update(id: number, updateRefeicaoDto: UpdateRefeicaoDto) {
    return `This action updates a #${id} refeicao`;
  }

  remove(id: number) {
    return `This action removes a #${id} refeicao`;
  }
}

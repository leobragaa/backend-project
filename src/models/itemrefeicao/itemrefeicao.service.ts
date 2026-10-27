import { Injectable } from '@nestjs/common';
import { CreateItemrefeicaoDto } from './dto/create-itemrefeicao.dto.js';
import { UpdateItemrefeicaoDto } from './dto/update-itemrefeicao.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Itemrefeicao } from './entities/itemrefeicao.entity.js';

@Injectable()
export class ItemrefeicaoService {
  constructor(
    @InjectRepository(Itemrefeicao)
    private readonly itemRefeicao_dto: Repository<Itemrefeicao>,
  ) {}

  async create(createItemrefeicaoDto: CreateItemrefeicaoDto) {
    const itemRefeicao = this.itemRefeicao_dto.create(createItemrefeicaoDto);

    return await this.itemRefeicao_dto.save(itemRefeicao);
  }

  findAll() {
    return this.itemRefeicao_dto.find();
  }

  findOne(id: string) {
    return this.itemRefeicao_dto.findOne({ where: { id } });
  }

  update(id: string, updateItemrefeicaoDto: UpdateItemrefeicaoDto) {
    return `This action updates a #${id} itemrefeicao`;
  }

  remove(id: string) {
    return `This action removes a #${id} itemrefeicao`;
  }
}

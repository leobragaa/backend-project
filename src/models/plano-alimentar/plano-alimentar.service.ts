import { Injectable } from '@nestjs/common';
import { CreatePlanoAlimentarDto } from './dto/create-plano-alimentar.dto';
import { UpdatePlanoAlimentarDto } from './dto/update-plano-alimentar.dto';

@Injectable()
export class PlanoAlimentarService {
  create(createPlanoAlimentarDto: CreatePlanoAlimentarDto) {
    return 'This action adds a new planoAlimentar';
  }

  findAll() {
    return `This action returns all planoAlimentar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planoAlimentar`;
  }

  update(id: number, updatePlanoAlimentarDto: UpdatePlanoAlimentarDto) {
    return `This action updates a #${id} planoAlimentar`;
  }

  remove(id: number) {
    return `This action removes a #${id} planoAlimentar`;
  }
}

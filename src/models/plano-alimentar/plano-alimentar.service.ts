import { Injectable } from '@nestjs/common';
import { CreatePlanoAlimentarDto } from './dto/create-plano-alimentar.dto.js';
import { UpdatePlanoAlimentarDto } from './dto/update-plano-alimentar.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanoAlimentar } from './entities/plano-alimentar.entity.js';

@Injectable()
export class PlanoAlimentarService {
  constructor(
    @InjectRepository(PlanoAlimentar)
    private readonly planoAlimentarDTO: Repository<PlanoAlimentar>,
  ) {}

  async create(createPlanoAlimentarDto: CreatePlanoAlimentarDto) {
    const planoAlimentar = this.planoAlimentarDTO.create(
      createPlanoAlimentarDto,
    );
    return await this.planoAlimentarDTO.save(planoAlimentar);
  }
  async searchAllItensPlanoAlimentar(id: number) {
    const complete_plano = await this.planoAlimentarDTO.findOne({
      where: { id },
      relations: {
        paciente_id: true,
        refeicao: {
          itemrefeicao: {
            alimento_id: true,
          },
        },
      },
    });
    return complete_plano;
  }
  findAll() {
    return this.planoAlimentarDTO.find();
  }

  findOne(id: number) {
    return this.planoAlimentarDTO.findOne({ where: { id } });
  }

  update(id: number, updatePlanoAlimentarDto: UpdatePlanoAlimentarDto) {
    return this.planoAlimentarDTO.update(+id, updatePlanoAlimentarDto);
  }

  remove(id: number) {
    return `This action removes a #${id} planoAlimentar`;
  }
}

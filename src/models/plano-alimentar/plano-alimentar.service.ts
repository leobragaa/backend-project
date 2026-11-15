import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlanoAlimentarDto } from './dto/create-plano-alimentar.dto.js';
import { UpdatePlanoAlimentarDto } from './dto/update-plano-alimentar.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { PlanoAlimentar } from './entities/plano-alimentar.entity.js';
import { Itemrefeicao } from '../itemrefeicao/entities/itemrefeicao.entity.js';
import { Refeicao } from '../refeicao/entities/refeicao.entity.js';

@Injectable()
export class PlanoAlimentarService {
  constructor(
    @InjectRepository(PlanoAlimentar)
    private readonly planoAlimentarDTO: Repository<PlanoAlimentar>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createPlanoAlimentarDto: CreatePlanoAlimentarDto) {
    const planoAlimentar = this.planoAlimentarDTO.create({
      data_plano: new Date().toISOString().split('T')[0],

      paciente_id: {
        id: createPlanoAlimentarDto.paciente_id,
      },

      nutricionista_id: {
        id: createPlanoAlimentarDto.nutricionista_id,
      },
    });

    return await this.planoAlimentarDTO.save(planoAlimentar);
  }
  async searchAllItensPlanoAlimentar(id: string) {
    const complete_plano = await this.planoAlimentarDTO.findOne({
      where: { id },
      relations: {
        paciente_id: {
          usuario_id: true,
        },
        nutricionista_id: true,
        refeicao: {
          itemrefeicao: {
            alimento_id: true,
          },
        },
      },
    });
    if (!complete_plano) {
      throw new NotFoundException('Plano alimentar não encontrado.');
    }
    return complete_plano;
  }
  async findByNutricionista(idNutricionista: string) {
    return await this.planoAlimentarDTO.find({
      where: {
        nutricionista_id: {
          id: idNutricionista,
        },
      },
      relations: {
        nutricionista_id: true,

        paciente_id: {
          usuario_id: true,
        },

        refeicao: {
          itemrefeicao: {
            alimento_id: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.planoAlimentarDTO.find();
  }

  findOne(id: string) {
    return this.planoAlimentarDTO.findOne({ where: { id } });
  }

  async update(id: string, updatePlanoAlimentarDto: UpdatePlanoAlimentarDto) {
    const plano = await this.planoAlimentarDTO.preload({
      id,

      ...(updatePlanoAlimentarDto.paciente_id && {
        paciente_id: {
          id: updatePlanoAlimentarDto.paciente_id,
        },
      }),
    });

    if (!plano) {
      throw new NotFoundException('Plano alimentar não encontrado.');
    }

    return await this.planoAlimentarDTO.save(plano);
  }

  async remove(id: string) {
    const plano = await this.planoAlimentarDTO.findOne({
      where: { id },
    });

    if (!plano) {
      throw new NotFoundException('Plano alimentar não encontrado.');
    }

    return await this.dataSource.transaction(async (manager) => {
      const refeicaoRepository = manager.getRepository(Refeicao);
      const itemRepository = manager.getRepository(Itemrefeicao);
      const planoRepository = manager.getRepository(PlanoAlimentar);

      const refeicoes = await refeicaoRepository.find({
        where: {
          plano_alimentar_id: { id },
        },
        select: {
          id: true,
        },
      });
      const idsRefeicoes = refeicoes.map((refeicao) => refeicao.id);

      if (idsRefeicoes.length > 0) {
        await itemRepository
          .createQueryBuilder()
          .delete()
          .where('"refeicao_id" IN (:...ids)', {
            ids: idsRefeicoes,
          })
          .execute();
        await refeicaoRepository.delete(idsRefeicoes);
      }
      await planoRepository.delete(id);
      return {
        mensagem: 'Plano alimentar excluído com sucesso.',
      };
    });
  }
}

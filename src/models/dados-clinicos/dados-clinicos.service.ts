import { Injectable } from '@nestjs/common';
import { CreateDadosClinicoDto } from './dto/create-dados-clinico.dto';
import { UpdateDadosClinicoDto } from './dto/update-dados-clinico.dto';

@Injectable()
export class DadosClinicosService {
  create(createDadosClinicoDto: CreateDadosClinicoDto) {
    return 'This action adds a new dadosClinico';
  }

  findAll() {
    return `This action returns all dadosClinicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dadosClinico`;
  }

  update(id: number, updateDadosClinicoDto: UpdateDadosClinicoDto) {
    return `This action updates a #${id} dadosClinico`;
  }

  remove(id: number) {
    return `This action removes a #${id} dadosClinico`;
  }
}

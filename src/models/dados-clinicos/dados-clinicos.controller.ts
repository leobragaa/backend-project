import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DadosClinicosService } from './dados-clinicos.service.js';
import { CreateDadosClinicoDto } from './dto/create-dados-clinico.dto.js';
import { UpdateDadosClinicoDto } from './dto/update-dados-clinico.dto.js';

@Controller('dados-clinicos')
export class DadosClinicosController {
  constructor(private readonly dadosClinicosService: DadosClinicosService) {}

  @Post()
  create(@Body() createDadosClinicoDto: CreateDadosClinicoDto) {
    return this.dadosClinicosService.create(createDadosClinicoDto);
  }

  @Get()
  findAll() {
    return this.dadosClinicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dadosClinicosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDadosClinicoDto: UpdateDadosClinicoDto,
  ) {
    return this.dadosClinicosService.update(+id, updateDadosClinicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dadosClinicosService.remove(+id);
  }
}

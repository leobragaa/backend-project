import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PacienteService } from './paciente.service.js';
import { CreatePacienteDto } from './dto/create-paciente.dto.js';
import { UpdatePacienteDto } from './dto/update-paciente.dto.js';

@Controller('PACIENTE')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(
    @Body() createPacienteDto: CreatePacienteDto,
    @Query('id_nutricionista') idNutricionista: string,
  ) {
    return this.pacienteService.create(createPacienteDto, idNutricionista);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacienteService.findOne(id);
  }
  // @Get('nutricionista')
  // findByNutricionista(@Query('id_nutricionista') id_nutricionista: string) {
  // return this.pacienteService.findByNutricionista(id_nutricionista);
  // }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacienteService.update(id, updatePacienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacienteService.remove(id);
  }
}

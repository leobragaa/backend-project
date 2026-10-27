import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PlanoAlimentarService } from './plano-alimentar.service.js';
import { CreatePlanoAlimentarDto } from './dto/create-plano-alimentar.dto.js';
import { UpdatePlanoAlimentarDto } from './dto/update-plano-alimentar.dto.js';

@Controller('PLANO-ALIMENTAR')
export class PlanoAlimentarController {
  constructor(private readonly planoAlimentarService: PlanoAlimentarService) {}

  @Post()
  create(@Body() createPlanoAlimentarDto: CreatePlanoAlimentarDto) {
    return this.planoAlimentarService.create(createPlanoAlimentarDto);
  }

  @Get()
  findAll() {
    return this.planoAlimentarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planoAlimentarService.findOne(id);
  }
  @Get(':id/completo')
  searchAllItensPlanoAlimentar(@Param('id') id: string) {
    return this.planoAlimentarService.searchAllItensPlanoAlimentar(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlanoAlimentarDto: UpdatePlanoAlimentarDto,
  ) {
    return this.planoAlimentarService.update(id, updatePlanoAlimentarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planoAlimentarService.remove(id);
  }
}

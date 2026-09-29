import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlanoAlimentarService } from './plano-alimentar.service.js';
import { CreatePlanoAlimentarDto } from './dto/create-plano-alimentar.dto.js';
import { UpdatePlanoAlimentarDto } from './dto/update-plano-alimentar.dto.js';

@Controller('plano-alimentar')
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
    return this.planoAlimentarService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlanoAlimentarDto: UpdatePlanoAlimentarDto,
  ) {
    return this.planoAlimentarService.update(+id, updatePlanoAlimentarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planoAlimentarService.remove(+id);
  }
}

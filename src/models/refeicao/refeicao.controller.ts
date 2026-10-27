import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RefeicaoService } from './refeicao.service.js';
import { CreateRefeicaoDto } from './dto/create-refeicao.dto.js';
import { UpdateRefeicaoDto } from './dto/update-refeicao.dto.js';

@Controller('refeicao')
export class RefeicaoController {
  constructor(private readonly refeicaoService: RefeicaoService) {}

  @Post()
  create(@Body() createRefeicaoDto: CreateRefeicaoDto) {
    return this.refeicaoService.create(createRefeicaoDto);
  }

  @Get()
  findAll() {
    return this.refeicaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refeicaoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRefeicaoDto: UpdateRefeicaoDto) {
    return this.refeicaoService.update(id, updateRefeicaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refeicaoService.remove(id);
  }
}

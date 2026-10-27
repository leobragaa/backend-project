import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemrefeicaoService } from './itemrefeicao.service.js';
import { CreateItemrefeicaoDto } from './dto/create-itemrefeicao.dto.js';
import { UpdateItemrefeicaoDto } from './dto/update-itemrefeicao.dto.js';

@Controller('itemrefeicao')
export class ItemrefeicaoController {
  constructor(private readonly itemrefeicaoService: ItemrefeicaoService) {}

  @Post()
  create(@Body() createItemrefeicaoDto: CreateItemrefeicaoDto) {
    return this.itemrefeicaoService.create(createItemrefeicaoDto);
  }

  @Get()
  findAll() {
    return this.itemrefeicaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemrefeicaoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemrefeicaoDto: UpdateItemrefeicaoDto) {
    return this.itemrefeicaoService.update(id, updateItemrefeicaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemrefeicaoService.remove(id);
  }
}

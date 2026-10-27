import { Module } from '@nestjs/common';
import { ItemrefeicaoService } from './itemrefeicao.service.js';
import { ItemrefeicaoController } from './itemrefeicao.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itemrefeicao } from './entities/itemrefeicao.entity.js';
import { Refeicao } from '../refeicao/entities/refeicao.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Itemrefeicao, Refeicao])],
  controllers: [ItemrefeicaoController],
  providers: [ItemrefeicaoService],
  exports: [ItemrefeicaoService],
})
export class ItemrefeicaoModule {}

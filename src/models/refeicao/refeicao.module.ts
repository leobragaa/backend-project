import { Module } from '@nestjs/common';
import { RefeicaoService } from './refeicao.service.js';
import { RefeicaoController } from './refeicao.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Refeicao } from './entities/refeicao.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Refeicao])],
  controllers: [RefeicaoController],
  providers: [RefeicaoService],
  exports: [RefeicaoService],
})
export class RefeicaoModule {}

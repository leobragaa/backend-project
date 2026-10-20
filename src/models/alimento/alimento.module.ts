import { Module } from '@nestjs/common';
import { AlimentoService } from './alimento.service.js';
import { AlimentoController } from './alimento.controller.js';
import { Alimento } from './entities/alimento.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Alimento])],
  controllers: [AlimentoController],
  providers: [AlimentoService],
  exports: [AlimentoService],
})
export class AlimentoModule {}

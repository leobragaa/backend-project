import { Module } from '@nestjs/common';
import { PlanoAlimentarService } from './plano-alimentar.service.js';
import { PlanoAlimentarController } from './plano-alimentar.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanoAlimentar } from './entities/plano-alimentar.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([PlanoAlimentar])],
  controllers: [PlanoAlimentarController],
  providers: [PlanoAlimentarService],
  exports: [PlanoAlimentarService],
})
export class PlanoAlimentarModule {}

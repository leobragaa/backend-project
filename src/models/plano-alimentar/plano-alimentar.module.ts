import { Module } from '@nestjs/common';
import { PlanoAlimentarService } from './plano-alimentar.service';
import { PlanoAlimentarController } from './plano-alimentar.controller';

@Module({
  controllers: [PlanoAlimentarController],
  providers: [PlanoAlimentarService],
})
export class PlanoAlimentarModule {}

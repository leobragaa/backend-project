import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Itemrefeicao } from '../../itemrefeicao/entities/itemrefeicao.entity.js';

export class CreateAlimentoDto {
  @IsString()
  @IsNotEmpty()
  alimento: string;

  @IsString()
  @IsNotEmpty()
  descricao_alimento: string;

  @IsNumber()
  @IsNotEmpty()
  calorias_alimeto: number;

  @IsNumber()
  @IsNotEmpty()
  proteina_alimento: number;

  @IsNumber()
  @IsNotEmpty()
  carboidrato_alimento: number;
}

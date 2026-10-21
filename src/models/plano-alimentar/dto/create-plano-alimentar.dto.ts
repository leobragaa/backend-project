import { IsDateString } from 'class-validator';

export class CreatePlanoAlimentarDto {
  @IsDateString()
  data_plano: Date;
}

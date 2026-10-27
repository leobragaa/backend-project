import { IsString } from 'class-validator';

export class CreatePlanoAlimentarDto {
  @IsString()
  data_plano: string;
}

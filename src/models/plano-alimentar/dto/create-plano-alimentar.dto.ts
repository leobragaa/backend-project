import { IsString } from 'class-validator';

export class CreatePlanoAlimentarDto {
  @IsString()
  refeicao: string;

  @IsString()
  alimento: string;

  @IsString()
  substuicoes: string;

  @IsString()
  descalimentacao: string;
}

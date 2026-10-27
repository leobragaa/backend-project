import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateRefeicaoDto {
  @IsString()
  refeicao_nome: string;

  @IsDateString()
  horario_refeicao: string;

  @IsNumber()
  ordem_refeicao: number;
}

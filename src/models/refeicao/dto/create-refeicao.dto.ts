import { IsDate, IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateRefeicaoDto {
  @IsString()
  refeicao_nome: string;

  @IsDateString()
  horario_refeicao: Date;

  @IsNumber()
  ordem_refeicao: number;
}

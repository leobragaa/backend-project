import { IsNumber, IsString } from 'class-validator';

export class CreateItemrefeicaoDto {
  @IsString()
  unidade_item: string;

  @IsNumber()
  quantidade_item: number;
}

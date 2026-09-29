import { IsDate, IsDecimal, IsString } from 'class-validator';

export class CreateDadosClinicoDto {
  @IsDecimal()
  peso: number;

  @IsDecimal()
  altura: number;

  @IsString()
  objetivopessoal: string;

  @IsString()
  alergia: string;

  @IsString()
  atvfisica: string;

  @IsString()
  hidratacao: string;

  @IsDate()
  dataregistro: Date;
}

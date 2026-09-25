import { IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Min(1)
  senha: string;

  @IsString()
  telefone: string;

  @IsString()
  @IsOptional()
  tipousuario?: string;
}

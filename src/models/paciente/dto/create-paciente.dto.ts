import { IsDate, IsNotEmpty, IsOptional, IsString, Max } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsString()
  telefone: string;

  @IsString()
  @IsOptional()
  tipousuario?: string;

  @IsString()
  sexo: string;

  @IsDate()
  datanascimento: string;

  @IsString()
  endereco: string;

  @IsString()
  cidade: string;

  @IsString()
  @Max(2)
  estado: string;

  @IsString()
  cep: string;
}

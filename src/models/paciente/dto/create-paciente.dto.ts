import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsString()
  telefone: string;

  @IsString()
  sexo: string;

  @IsDateString()
  datanascimento: string;

  @IsString()
  cep: string;

  @IsString()
  endereco: string;

  @IsString()
  cidade: string;

  @IsString()
  @Length(2, 2)
  estado: string;
}

import { IsDateString, IsString, IsUUID } from 'class-validator';

export class CreatePlanoAlimentarDto {
  @IsDateString()
  data_plano: Date;

  @IsUUID()
  paciente_id: string;

  @IsUUID()
  nutricionista_id: string;
}

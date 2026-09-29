import { PartialType } from '@nestjs/mapped-types';
import { CreateDadosClinicoDto } from './create-dados-clinico.dto';

export class UpdateDadosClinicoDto extends PartialType(CreateDadosClinicoDto) {}

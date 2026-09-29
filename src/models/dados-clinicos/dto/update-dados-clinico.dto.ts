import { PartialType } from '@nestjs/mapped-types';
import { CreateDadosClinicoDto } from './create-dados-clinico.dto.js';

export class UpdateDadosClinicoDto extends PartialType(CreateDadosClinicoDto) {}

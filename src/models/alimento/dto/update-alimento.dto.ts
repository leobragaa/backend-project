import { PartialType } from '@nestjs/mapped-types';
import { CreateAlimentoDto } from './create-alimento.dto.js';

export class UpdateAlimentoDto extends PartialType(CreateAlimentoDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateRefeicaoDto } from './create-refeicao.dto.js';

export class UpdateRefeicaoDto extends PartialType(CreateRefeicaoDto) {}

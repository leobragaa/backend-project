import { PartialType } from '@nestjs/mapped-types';
import { CreateItemrefeicaoDto } from './create-itemrefeicao.dto.js';

export class UpdateItemrefeicaoDto extends PartialType(CreateItemrefeicaoDto) {}

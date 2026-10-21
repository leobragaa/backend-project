import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Refeicao } from '../../refeicao/entities/refeicao.entity.js';
import { Alimento } from '../../alimento/entities/alimento.entity.js';

@Entity('itemrefeicao')
export class Itemrefeicao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade_item: number;

  @Column()
  unidade_item: string;

  @ManyToOne(() => Refeicao, (refeicao_id) => refeicao_id.itemrefeicao)
  @JoinColumn({ name: 'refeicao_id', referencedColumnName: 'id' })
  refeicao_id: Relation<Refeicao>;

  @ManyToOne(() => Alimento, (alimento_id) => alimento_id.id)
  @JoinColumn({ name: 'alimento_id', referencedColumnName: 'id' })
  alimento_id: Relation<Alimento>;
}

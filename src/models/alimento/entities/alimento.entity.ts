import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Itemrefeicao } from '../../itemrefeicao/entities/itemrefeicao.entity.js';
import type { Relation } from 'typeorm';

@Entity('ALIMENTO')
export class Alimento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  alimento_nome: string;

  @Column()
  descricao_alimento: string;

  @Column()
  calorias_alimentos: number;

  @Column()
  proteina_alimento: number;

  @Column()
  carboidratos_alimento: number;

  @OneToMany(() => Itemrefeicao, (itemrefeicao) => itemrefeicao.alimento_id)
  itemrefeicao: Relation<Itemrefeicao[]>;
}

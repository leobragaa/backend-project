import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { PlanoAlimentar } from '../../plano-alimentar/entities/plano-alimentar.entity.js';
import { Itemrefeicao } from '../../itemrefeicao/entities/itemrefeicao.entity.js';

@Entity('refeicao')
export class Refeicao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  refeicao_nome: string;

  @Column()
  horario_refeicao: string;

  @Column()
  ordem_refeicao: number;

  @ManyToOne(
    () => PlanoAlimentar,
    (plano_alimentar_id) => plano_alimentar_id.refeicao,
  )
  @JoinColumn({ name: 'plano_alimentar_id', referencedColumnName: 'id' })
  plano_alimentar_id: PlanoAlimentar[];

  @OneToMany(() => Itemrefeicao, (itemrefeicao) => itemrefeicao.refeicao_id)
  @JoinColumn({ name: 'refeicao_id', referencedColumnName: 'id' })
  itemrefeicao: Relation<Itemrefeicao[]>;
}

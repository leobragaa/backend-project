import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PlanoAlimentar } from '../../plano-alimentar/entities/plano-alimentar.entity.js';
import { Itemrefeicao } from '../../itemrefeicao/entities/itemrefeicao.entity.js';

Entity('refeicao');
export class Refeicao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  refeicao_nome: string;

  @Column()
  horario_refeicao: Date;

  @Column()
  ordem_refeicao: number;

  @ManyToOne(
    () => PlanoAlimentar,
    (plano_alimentar_id) => plano_alimentar_id.id,
  )
  @JoinColumn({ name: 'plano_alimentar_id', referencedColumnName: 'id' })
  plano_alimentar_id: PlanoAlimentar[];

  @OneToMany(() => Itemrefeicao, (itemRefeicao) => itemRefeicao.refeicao_id)
  itemRefeicao: Itemrefeicao[];
}

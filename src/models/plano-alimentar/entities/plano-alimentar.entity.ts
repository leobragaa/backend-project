import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity.js';
import { Usuario } from '../../usuario/entities/usuario.entity.js';
import { Refeicao } from '../../refeicao/entities/refeicao.entity.js';

@Entity('PLANOALIMENTAR')
export class PlanoAlimentar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  data_plano: string;

  @ManyToOne(() => Paciente, (paciente_id) => paciente_id.planoalimentar)
  @JoinColumn({ name: 'paciente_id', referencedColumnName: 'id' })
  paciente_id: Relation<Paciente>;

  @ManyToOne(() => Usuario, (usuario_id) => usuario_id.planoAlimentar)
  @JoinColumn({ name: 'nutricionista_id', referencedColumnName: 'id' })
  nutricionista_id: Relation<Usuario[]>;

  @OneToMany(() => Refeicao, (refeicao) => refeicao.plano_alimentar_id)
  @JoinColumn({ name: 'plano_alimentar_id', referencedColumnName: 'id' })
  refeicao: Relation<Refeicao[]>;
}

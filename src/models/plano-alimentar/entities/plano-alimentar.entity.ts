import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity.js';
import { Usuario } from '../../usuario/entities/usuario.entity.js';
import { Refeicao } from '../../refeicao/entities/refeicao.entity.js';

@Entity('planoalimentar', { schema: 'public', name: 'planoalimentar' })
export class PlanoAlimentar {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Paciente, (paciente_id) => paciente_id.planoalimentar)
  @JoinColumn({ name: 'paciente_id', referencedColumnName: 'id' })
  paciente_id: Paciente[];

  @ManyToOne(() => Usuario, (usuario_id) => usuario_id.planoAlimentar)
  @JoinColumn({ name: 'usuario_id', referencedColumnName: 'id' })
  usuario_id: Usuario[];

  @OneToMany(() => Refeicao, (refeicao) => refeicao.plano_alimentar_id)
  @JoinColumn({ name: 'plano_alimentar_id', referencedColumnName: 'id' })
  refeicao: Refeicao[];
}

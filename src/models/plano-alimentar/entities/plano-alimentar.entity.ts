import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity.js';
import { Usuario } from '../../usuario/entities/usuario.entity.js';

@Entity('planoalimentar', { schema: 'public', name: 'planoalimentar' })
export class PlanoAlimentar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  refeicao: string;

  @Column()
  alimento: string;

  @Column()
  substuicoes: string;

  @Column()
  descalimentacao: string;

  @ManyToOne(() => Paciente, (paciente_id) => paciente_id.planoalimentar)
  @JoinColumn({ name: 'paciente_id', referencedColumnName: 'id' })
  paciente_id: Paciente[];

  @ManyToOne(() => Usuario, (usuario_id) => usuario_id.planoAlimentar)
  @JoinColumn({ name: 'usuario_id', referencedColumnName: 'id' })
  usuario_id: Usuario[];
}

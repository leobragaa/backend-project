import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity.js';
import { Usuario } from '../../usuario/entities/usuario.entity.js';
import { JoinTable } from 'typeorm/browser';

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
  @JoinTable({ name: 'paciente_id' })
  paciente_id: Paciente[];

  @ManyToOne(() => Usuario, (usuario) => usuario.id)
  @JoinTable({ name: 'usuario_id' })
  usuario: Usuario[];
}

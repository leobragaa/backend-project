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

  @JoinTable()
  @ManyToOne(
    () => Paciente,
    (planoalimentar_paciente_fk) => planoalimentar_paciente_fk.id,
  )
  planoalimentar_paciente_fk: '1';

  @ManyToOne(
    () => Usuario,
    (planoalimentar_usuario_fk) => planoalimentar_usuario_fk.id,
  )
  planoalimentar_usuario_fk: '1';
}

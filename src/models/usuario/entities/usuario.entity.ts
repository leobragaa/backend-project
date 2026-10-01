import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity.js';
import { PlanoAlimentar } from '../../plano-alimentar/entities/plano-alimentar.entity.js';

@Entity('usuario', { schema: 'public', name: 'usuario' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column()
  email: string;

  // @Column()
  // cpf: string;

  @Column()
  telefone: string;

  @Column()
  tipousuario: string;

  @OneToMany(() => Paciente, (paciente) => paciente.id)
  @JoinColumn({ name: 'id', referencedColumnName: 'paciente_id' })
  paciente: Paciente;

  @OneToMany(
    () => PlanoAlimentar,
    (planoAlimentar) => planoAlimentar.usuario_id,
  )
  @JoinColumn({ name: 'id', referencedColumnName: 'usuario_id' })
  planoAlimentar: PlanoAlimentar;
}

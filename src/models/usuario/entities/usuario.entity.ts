import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity.js';
import { PlanoAlimentar } from '../../plano-alimentar/entities/plano-alimentar.entity.js';
import type { Relation } from 'typeorm';

@Entity('USUARIO', { schema: 'public', name: 'USUARIO' })
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @OneToMany(() => Paciente, (paciente) => paciente.usuario_id)
  paciente: Relation<Paciente[]>;

  @OneToMany(() => Paciente, (paciente) => paciente.nutricionista_id)
  pacienteByNutricionista: Relation<Paciente[]>;

  @OneToMany(
    () => PlanoAlimentar,
    (planoAlimentar) => planoAlimentar.nutricionista_id,
  )
  planoAlimentar: Relation<PlanoAlimentar[]>;
}

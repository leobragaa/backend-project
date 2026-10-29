import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PlanoAlimentar } from '../../plano-alimentar/entities/plano-alimentar.entity.js';
import { Usuario } from '../../usuario/entities/usuario.entity.js';
import type { Relation } from 'typeorm';

@Entity('PACIENTE')
export class Paciente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sexo: string;

  @Column()
  datanascimento: Date;

  @Column()
  endereco: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @OneToMany(
    () => PlanoAlimentar,
    (planoalimentar) => planoalimentar.paciente_id,
  )
  planoalimentar: Relation<PlanoAlimentar[]>;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'nutricionista_id', referencedColumnName: 'id' })
  nutricionista_id: Relation<Usuario>;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id', referencedColumnName: 'id' })
  usuario_id: Relation<Usuario>;
}

import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm/browser';
import { PlanoAlimentar } from '../../plano-alimentar/entities/plano-alimentar.entity.js';
import { Usuario } from '../../usuario/entities/usuario.entity.js';

@Entity('paciente')
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  tipousuario: string;

  @Column()
  sexo: string;

  @Column()
  datanascimento: Date;

  @Column()
  cpf: string;

  @Column()
  endereco: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @OneToMany(() => PlanoAlimentar, (planoalimentar) => planoalimentar.id)
  planoalimentar: PlanoAlimentar;

  @ManyToOne(() => Usuario, (usuario) => usuario.id)
  usuario: '1';
}

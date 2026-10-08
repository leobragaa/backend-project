import {
  Column,
  Entity,
  JoinColumn,
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

  @OneToMany(
    () => PlanoAlimentar,
    (planoalimentar) => planoalimentar.paciente_id,
  )
  @JoinColumn({ name: 'paciente_id', referencedColumnName: 'paciente_id' })
  planoalimentar: PlanoAlimentar;

  @ManyToOne(() => Usuario, (usuario_id) => usuario_id.id)
  @JoinColumn({ name: 'usuario_id', referencedColumnName: 'id' })
  usuario_id: Usuario[];
}

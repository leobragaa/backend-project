import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity.js';
@Entity('dadosclinicos')
export class DadosClinico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  peso: number;

  @Column()
  altura: number;

  @Column()
  objetivopessoal: string;

  @Column()
  alergia: string;

  @Column()
  atvfisica: string;

  @Column()
  hidratacao: string;

  @Column()
  dataregistro: Date;

  @ManyToOne(() => Paciente, (paciente_id) => paciente_id.id)
  @JoinColumn({ name: 'paciente_id', referencedColumnName: 'id' })
  paciente_id: Paciente[];
}

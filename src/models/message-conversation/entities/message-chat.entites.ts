import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm/browser';
import { Usuario } from '../../usuario/entities/usuario.entity.js';
import { Paciente } from '../../paciente/entities/paciente.entity.js';

@Entity('chat')
export class ChatConversa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  criada_em: Date;

  @OneToMany(() => Paciente, (remetente_id) => remetente_id.id)
  @JoinColumn({ name: 'remetente_id', referencedColumnName: 'id' })
  paciente: Paciente;

  @OneToMany(() => Usuario, (remetente_id) => remetente_id.id)
  @JoinColumn({ name: 'remetente_id', referencedColumnName: 'id' })
  usuario_id: Usuario;
}

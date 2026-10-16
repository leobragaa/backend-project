import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm/browser';
import { Usuario } from '../../usuario/entities/usuario.entity.js';
import { Paciente } from '../../paciente/entities/paciente.entity.js';
import { ChatConversa } from './message-chat.entites.js';

@Entity('massage')
export class MassageSend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lida: boolean;

  @Column()
  conteudo: string;

  @OneToMany(() => Paciente, (remetente_id) => remetente_id.id)
  @JoinColumn({ name: 'remetente_id', referencedColumnName: 'id' })
  paciente: Paciente;

  @OneToMany(() => Usuario, (remetente_id) => remetente_id.id)
  @JoinColumn({ name: 'remetente_id', referencedColumnName: 'id' })
  usuario_id: Usuario;

  @ManyToOne(() => ChatConversa, (conversa_id) => conversa_id.id)
  @JoinColumn({ name: 'conversa_id', referencedColumnName: 'id' })
  remetente_id: ChatConversa[];
}

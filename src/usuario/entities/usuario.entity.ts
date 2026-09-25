import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  telefone: string;

  @Column()
  tipousuario: string;
}

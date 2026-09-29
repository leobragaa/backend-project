import { Column, PrimaryGeneratedColumn } from 'typeorm/browser';

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
}

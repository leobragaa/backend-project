import { Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alimento')
export class Alimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alimento_nome: string;

  @Column()
  descricao_alimento: string;

  @Column()
  calorias_alimento: number;

  @Column()
  proteina_alimento: number;

  @Column()
  carboidrato_alimento: number;
}

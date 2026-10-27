import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ALIMENTO')
export class Alimento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

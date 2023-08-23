import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class CepEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column()
  cep: string | undefined

  @Column()
  localidade: string | undefined

  @Column()
  cidade: string | undefined

  @Column()
  estado: string | undefined
}
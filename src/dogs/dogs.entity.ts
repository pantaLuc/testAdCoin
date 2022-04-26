import { IsString } from 'class-validator';
import { Column } from 'sequelize-typescript';
import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column
  @IsString()
  name: string;
  @Column
  @IsString()
  image: string;
}

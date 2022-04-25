import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Dog extends Model {
  @Column
  @ApiProperty()
  name: string;
  @Column
  @ApiProperty()
  image: string;
}
